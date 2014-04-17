    var request = require('request');

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

    postData = require('querystring').stringify(postData);

    console.log(postData);
    var options = {
        uri: 'https://cargo.china-airlines.com/CCNet/pgFreightStatus/cgoTrack.aspx',
        body: postData,
        headers: {
            'Accept': '*/*',
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
//            'Cookie': 'ASP.NET_SessionId=zikhfrrprfylac454hgu342u',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36',
            'Content-Length': postData.length,
            'X-MicrosoftAjax': 'Delta=true'
        },
        secureProtocol: 'SSLv3_method'
    }


    request.post(options, function (error, response, body) {
        console.log(error);
        console.log(response);
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    })
