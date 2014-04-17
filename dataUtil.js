/**
 * Created by Mars on 14-4-16.
 */
function getDate (datastr, note) {
    var date = eval('new Date(' + datastr.replace(/\d+(?=-[^-]+$)/,
        function (a) { return parseInt(a, 10) - 1; }).match(/\d+/g) + ')');
    var daycount,result;
    switch(note){
        case '今天':
            daycount = 0;
            break;
        case '昨天':
            daycount = -1;
            break;
        case '一周前':
            daycount = -7;
            break;
        case '一个月前':
            daycount = -30;
            break;
        default :
            break;
    }
    date.setDate(date.getDate() + daycount);

    result = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return result;
}

console.log(getDate('2014-10-11','一个月前'));