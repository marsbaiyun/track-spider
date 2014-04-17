/**
 * Created by Mars on 14-4-11.
 */
var cheerio = require("cheerio");

var trackUtil = function(){};
module.exports = new trackUtil();

trackUtil.prototype.getTrackInfo = function(awbcode, html){
    var wparcode,prefix,companyInfo = {};
    if (awbcode) {
        prefix = awbcode.substr(0, 3);
    }
    var trackinfo = {};
    switch (prefix) {
        case '020':
            trackinfo = getLHTrackinfo(awbcode, html);
            break;
        case '297':
            trackinfo = getCITrackinfo(awbcode, html);
            break;
        case '999':
            trackinfo = getCATrackinfo(awbcode, html);
            break;
        default:
            break;
    }
    return trackinfo;
};

/**
 * 国航轨迹解析
 * @param awbcode 运单号
 * @param html 轨迹页面
 * @returns {{awbcode: *, arr: string, des: string, piece: string, weight: string, tracklist: Array}}
 */
function getCATrackinfo(awbcode, html){
    var arr,des,piece,weight,tracklist=[];

    var $ = cheerio.load(html);

    var trackinfo = {
        awbcode: awbcode,
        org: '',
        des: '',
        piece: '',
        weight: '',
        tracklist: []
    }

    $('li.search_infor_airname_rightunit').each(function(i,e){
        switch (i){
            case 1:
                trackinfo.org = $(e).text();
                break;
            case 2:
                trackinfo.des = $(e).text();
                break;
            case 3:
                trackinfo.piece = $(e).text();
                break;
            case 4:
                trackinfo.weight = $(e).text();
                break;
            default:
                break;
        }
    });

    $('li.search_infor_unit_line_contents').each(function(i,e){
        trackinfo.tracklist[i] = $(e).text();
    });
    return trackinfo;
}

/**
 * 中华航空轨迹解析
 * @param awbcode 运单号
 * @param html 轨迹页面
 * @returns {{awbcode: *, org: string, des: string, piece: string, weight: string, route: Array, tracktable: Array}}
 */
function getCITrackinfo(awbcode, html){
    var arr,des,piece,weight,tracklist=[];
    var trackinfo = {
        awbcode: awbcode,
        org: '',
        des: '',
        piece: '',
        weight: '',
        route: [],
        tracktable: []
    }


    var $ = cheerio.load(html);

    //获取始发港、目的港、件数和重量
    $('#gvFATAWBA').find('tr').each(function(i,e){
        if (i === 1) {
            $(e).find('td').each(function(j,o){
                console.log($(o).text());
                switch(j){
                    case 1:
                        trackinfo.org = $(o).text();
                        break;
                    case 2:
                        trackinfo.des = $(o).text();
                        break;
                    case 3:
                        trackinfo.piece = $(o).text();
                        break;
                    case 4:
                        trackinfo.weight = $(o).text();
                        break;
                    default :
                        break;
                }
            });
        }
    });

    var route = [];
    //获取路由信息
    $('#gvFAVGHAA_AM').find('tr').each(function(i,e){
        if (i > 0) {
            var flightnum,dep,arr,deptime,arrtime,p,w;
            $(e).find('td').each(function(j,o){
                switch(j){
                    case 1:
                        flightnum = $(o).text();
                        break;
                    case 2:
                        dep = $(o).text();
                        break;
                    case 3:
                        arr = $(o).text();
                        break;
                    case 4:
                        deptime = $(o).text();
                        break;
                    case 5:
                        arrtime = $(o).text();
                        break;
                    case 6:
                        p = $(o).text();
                        break;
                    case 7:
                        w = $(o).text();
                        break;
                    default :
                        break;
                }
            });
            route[i-1] = {
                flightnum: flightnum,
                dep: dep,
                arr: arr,
                deptime: deptime,
                arrtime: arrtime,
                piece: p,
                weight: w
            };

        }
    });
    trackinfo.route = route;

    //轨迹
    var tracktable = [];
    $('#gvFATFSUA').find('tr').each(function(i,e){
        if (i > 0) {
            var status,flightnum,tracetime,location, p, w,uld;
            $(e).find('td').each(function(j,o){
                switch(j){
                    case 0:
                        status = $(o).text();
                        break;
                    case 1:
                        flightnum = $(o).text();
                        break;
                    case 2:
                        tracetime = $(o).text();
                        break;
                    case 3:
                        location = $(o).text();
                        break;
                    case 4:
                        p = $(o).text();
                        break;
                    case 5:
                        w = $(o).text();
                        break;
                    case 6:
                        uld = $(o).text();
                        break;
                    default :
                        break;
                }
            });
            tracktable[i-1] = {
                status: status,
                flightnum: flightnum,
                tracetime: tracetime,
                location: location,
                piece: p,
                weight: w,
                uld: uld
            };
        }
    });
    trackinfo.tracktable = tracktable;

    console.log(trackinfo);
    return trackinfo;
}

function getLHTrackinfo(awbcode, html){
    console.log(html);
    var arr,des,piece,weight,tracklist=[];
    var trackinfo = {
        awbcode: awbcode,
        org: '',
        des: '',
        piece: '',
        weight: '',
        route: [],
        tracktable: []
    }

    var $ = cheerio.load(html);


}