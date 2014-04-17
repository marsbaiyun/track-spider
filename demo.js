/**
 * Created by Mars on 14-4-14.
 */
var postData={
    ScriptManager1: 'ScriptManager1|btnQuery',
    __EVENTTARGET: '',
    __EVENTARGUMENT: '',
    __VIEWSTATE: '/wEPDwUKMTY2MDI5MzU5MQ9kFgICAw9kFggCAg8PFgQeCkZ1bmNfVGl0bGVlHhBGdW5jX0Rlc2NyaXB0aW9uZWQWCgIBDw8WAh4EVGV4dGVkZAIDDw8WAh8CZGRkAgYPDxYCHwJlFggeC29ubW91c2Vtb3ZlBVl2YXIgZHZIaW50PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdkhpbnQnKTsgZHZIaW50LmlubmVySFRNTD0nJztTaG93SGludChldmVudCxkdkhpbnQpOx4Kb25tb3VzZW91dAWJAXZhciBkdkhpbnQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R2SGludCcpOyBkdkhpbnQuc3R5bGUuZGlzcGxheT0nbm9uZSc7IHRoaXMuY2xhc3NOYW1lPXRoaXMuY2xhc3NOYW1lLnJlcGxhY2UoLyBpbmZvdGl0bGVob3Zlci9nLCAnJyk7HgdvbmNsaWNrBWNqYXZhc2NyaXB0OlRpdGxlT25DbGljaygnJywnL1BYMDQwMjIvUmN2T25DYWxsRGF0YS5hc3B4P29uY2FsbF9mdW5jX3RpdGxlPSZub21lbnU9WSZub3RpdGxlbWVudT1ZJykeC29ubW91c2VvdmVyBSR0aGlzLmNsYXNzTmFtZSArPSAnIGluZm90aXRsZWhvdmVyJztkAgoPDxYCHwIFBy9DQ05ldC9kZAIMD2QWAmYPZBYEAgMPDxYCHwIFEDE1QXByIDAyOjM0OjI5eiBkZAIFDw8WAh4HVmlzaWJsZWhkZAIGDw9kFgIeB09uQ2xpY2sFO2phdmFzY3JpcHQ6IHJldHVybiBDaGVja0FXQigndHh0QVdCUHJlZml4JywndHh0QVdCTnVtYmVyJyk7ZAIHD2QWAmYPZBYKAgcPPCsADQEBEBYCAggCCRYCPCsABQEAFgIfB2c8KwAFAQAWAh8HZxYCZmZkAgsPPCsADQBkAg8PPCsADQEBEBYCAgYCBxYCPCsABQEAFgIfB2c8KwAFAQAWAh8HZxYCZmZkAhMPPCsADQEBEBYBAgkWATwrAAUBABYCHwdnFgFmZAIXDzwrAA0AZAIID2QWAmYPZBYCAgMPPCsADQBkGAcFCWd2RkFUQVdCQQ9nZAUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgEFCGJ0blF1ZXJ5BQxndkZBVkdIQUFfQU0PZ2QFD2d2RkFURU5WTERldGFpbA9nZAUFZ3ZBTVMPZ2QFCWd2RkFURlNVQQ9nZAUMZ3ZGQVRFTlZMTWF4D2dkngWKmvQSD9ztUEc3/x9UNOGHue0=',
    hdn_menu_head_index: '',
    p: 'SEARCH',
    o: '4',
    v: 'root',
    r: '2',
    currentCalForm: 'dep',
    currentdate: '2014-04-15',
    onload: '',
    CCNetInfo1$txtCurrentDate: '',
    txtAWBPrefix: '297',
    txtAWBNumber: '86097782',
    __ASYNCPOST: 'true',
    'btnQuery.x': '-1045',
    'btnQuery.y': '-195'
};
console.log(require('querystring').stringify(postData));

var request = require('request');
request = request.defaults({
    strictSSL: false, // allow us to use our self-signed cert for testing
    rejectUnauthorized: false
});

require('request').post({
    uri:"https://cargo.china-airlines.com/CCNet/pgFreightStatus/cgoTrack.aspx?AWBPrefix=297&AWBNumber=86097782",
    headers:{
        'content-type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)'
    },
    body:require('querystring').stringify(postData),
    secureOptions: require('constants').SSL_OP_NO_TLSv2
},function(err,res,body){
    console.log(err);
    console.log(body);
    console.log(res.statusCode);
});


/*
var https = require('https');

var url = "https://cargo.china-airlines.com/CCNet/pgFreightStatus/cgoTrack.aspx?AWBPrefix=297&AWBNumber=86097782";

var post_option = require('url').parse(url);
post_option.method = 'POST';
post_option.port = 443;
post_option.secureOptions = require('constants').SSL_OP_NO_TLSv2;
var post_data = require('querystring').stringify({
    ScriptManager1: 'ScriptManager1|btnQuery',
    __EVENTTARGET: '',
    __EVENTARGUMENT: '',
    __VIEWSTATE: '/wEPDwUKMTY2MDI5MzU5MQ9kFgICAw9kFggCAg8PFgQeCkZ1bmNfVGl0bGVlHhBGdW5jX0Rlc2NyaXB0aW9uZWQWCgIBDw8WAh4EVGV4dGVkZAIDDw8WAh8CZGRkAgYPDxYCHwJlFggeC29ubW91c2Vtb3ZlBVl2YXIgZHZIaW50PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdkhpbnQnKTsgZHZIaW50LmlubmVySFRNTD0nJztTaG93SGludChldmVudCxkdkhpbnQpOx4Kb25tb3VzZW91dAWJAXZhciBkdkhpbnQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R2SGludCcpOyBkdkhpbnQuc3R5bGUuZGlzcGxheT0nbm9uZSc7IHRoaXMuY2xhc3NOYW1lPXRoaXMuY2xhc3NOYW1lLnJlcGxhY2UoLyBpbmZvdGl0bGVob3Zlci9nLCAnJyk7HgdvbmNsaWNrBWNqYXZhc2NyaXB0OlRpdGxlT25DbGljaygnJywnL1BYMDQwMjIvUmN2T25DYWxsRGF0YS5hc3B4P29uY2FsbF9mdW5jX3RpdGxlPSZub21lbnU9WSZub3RpdGxlbWVudT1ZJykeC29ubW91c2VvdmVyBSR0aGlzLmNsYXNzTmFtZSArPSAnIGluZm90aXRsZWhvdmVyJztkAgoPDxYCHwIFBy9DQ05ldC9kZAIMD2QWAmYPZBYEAgMPDxYCHwIFEDE1QXByIDAyOjM0OjI5eiBkZAIFDw8WAh4HVmlzaWJsZWhkZAIGDw9kFgIeB09uQ2xpY2sFO2phdmFzY3JpcHQ6IHJldHVybiBDaGVja0FXQigndHh0QVdCUHJlZml4JywndHh0QVdCTnVtYmVyJyk7ZAIHD2QWAmYPZBYKAgcPPCsADQEBEBYCAggCCRYCPCsABQEAFgIfB2c8KwAFAQAWAh8HZxYCZmZkAgsPPCsADQBkAg8PPCsADQEBEBYCAgYCBxYCPCsABQEAFgIfB2c8KwAFAQAWAh8HZxYCZmZkAhMPPCsADQEBEBYBAgkWATwrAAUBABYCHwdnFgFmZAIXDzwrAA0AZAIID2QWAmYPZBYCAgMPPCsADQBkGAcFCWd2RkFUQVdCQQ9nZAUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgEFCGJ0blF1ZXJ5BQxndkZBVkdIQUFfQU0PZ2QFD2d2RkFURU5WTERldGFpbA9nZAUFZ3ZBTVMPZ2QFCWd2RkFURlNVQQ9nZAUMZ3ZGQVRFTlZMTWF4D2dkngWKmvQSD9ztUEc3/x9UNOGHue0=',
    hdn_menu_head_index: '',
    p: 'SEARCH',
    o: '4',
    v: 'root',
    r: '2',
    currentCalForm: 'dep',
    currentdate: '114-04-15',
    onload: '',
    CCNetInfo1$txtCurrentDate: '',
    txtAWBPrefix: '297',
    txtAWBNumber: '86097782',
    __ASYNCPOST: 'true',
    'btnQuery.x': '-1045',
    'btnQuery.y': '-195'
});
post_option.headers = {
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Content-Length' : post_data.length
    };
var post_req = https.request(post_option, function(res){

    res.on('data', function(buffer){
        console.log(buffer.toString());
    });

});

post_req.on('error', function(err){
    console.log(err);
    console.log(err.stack);
});

post_req.write(post_data);
post_req.end();*/
