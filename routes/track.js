/**
 * Created by Mars on 14-4-11.
 */
var cheerio = require("cheerio");
var MyUtil = require('./../MyUtil');
var TrackUtil = require('./../TrackUtil');
var webaccess = require('./../company_config.json');

exports.getTrack = function(req, res){
    var awbcode = req.body.awbcode,
        trackinfo;

    var companyInfo = getCompanyWebinfo(awbcode);
    if (companyInfo.method === 'post') {
        MyUtil.post(companyInfo.url, companyInfo.formdata, companyInfo.header, function(content, status){

            trackinfo = TrackUtil.getTrackInfo(awbcode, content);

            if (trackinfo) {
                res.render('track', {title: '轨迹详情', trackinfo: trackinfo});
            }
        });
    } else if (companyInfo.method === 'get') {
        MyUtil.get(companyInfo.url + '?' + companyInfo.formdata, companyInfo.header, function(content, status){

            trackinfo = TrackUtil.getTrackInfo(awbcode, content);

            if (trackinfo) {
                res.render('track', {title: '轨迹详情', trackinfo: trackinfo});
            }
        });
    }

};

exports.gettrack = function(req, res){
    res.render('track', {title: '轨迹详情'});
};

/**
 * 获取航空公司网站配置信息
 * @param awbcode 运单号
 * @returns {url:'',formdata:{},header:{}}
 */
function getCompanyWebinfo(awbcode){
    var wparcode,prefix,companyInfo = {};
    if (awbcode) {
        prefix = awbcode.substr(0, 3);
    }
    switch (prefix) {
        case '020':
            wparcode = 'LH';
            break;
        case '297':
            wparcode = 'CI';
            break;
        case '999':
            wparcode = 'CA';
            break;

        default:
            break;
    }
//    console.log(webaccess[wparcode]);
    companyInfo.url = webaccess[wparcode].url;
    companyInfo.method = webaccess[wparcode].method;
    companyInfo.formdata = webaccess[wparcode].formdata.replace("$hawbcode$", awbcode.substr(awbcode.indexOf('-') + 1,8));
    companyInfo.header = webaccess[wparcode].requestHeader;
    return companyInfo;
}