/**对外接口 */

module.exports = function* (next) {

    var url = this.url, res = {};
    url = url.toLowerCase().replace('/nodeapi/', '');
    var urlArr = url.match(/\S*(\?+)/);
    url = urlArr && urlArr.length > 0 ? urlArr[0].replace('?','') : url;
    //页面名称
    urlArr = url.split('/');
    //接口名称
    var id = "", pageName = "";
    pageName = urlArr && urlArr.length > 0 ? urlArr[0].replace('/', '') : urlArr;
    id = urlArr.length > 1 ? urlArr[1].replace('/', '') : urlArr[0];

    var data = yield this.mongo.db('datas').collection('datas').findOne({ pagename: pageName, apiname: id });


    res = {
        'data': data && data.data ? data.data : {},
        'statuscode': data && data.data ? 1 : -1,
        'statusmsg': data && data.data ? "成功" : "数据获取失败"
    }

    if(this.query.callback){
        res = JSON.stringify(res,null);
        res = this.query.callback + "("+res+")";
    }
    this.body = res;
}
