/**网站内部的异步请求筛选过滤接口 */

module.exports = function* (next) {

    var url = this.url, res = {};
    url = url.toLowerCase().replace('/option/', '');

    var urlArr = url.split('?');
    var type = urlArr.length > 0 ? urlArr[0].replace('?', '') : urlArr;
    var data = null;
    var pageName = this.query.pagename;
    var apiname = this.query.apiname;
    // var {pagename,id} = this.query; //会报错？什么原因
    var para = {
        'appname': this.query.appname.toLowerCase(),
        'pagename': this.query.pagename.toLowerCase(),
        'apiname': this.query.apiname.toLowerCase()
    }
    var status = {};
    !para.appname && delete para.appname;
    !para.pagename && delete para.pagename;
    !para.apiname && delete para.apiname;
    para.isActive = true;
    data = yield this.mongo.db('datas').collection('datas').find(para).toArray();


    res = {
        'data': data || {},
        'statuscode': data ? 1 : -1,
        'statusmsg': data ? "成功" : (status.msg ? status.msg : "数据获取失败")
    }

    this.body = res;
}
