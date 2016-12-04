/**网站内部的异步请求修改数据库接口 */

module.exports = function* (next) {

    var url = this.url, res = {}, status = {};
    url = url.toLowerCase().replace('/option/', '');

    var urlArr = url.split('?');
    var type = urlArr.length > 0 ? urlArr[0].replace('?', '') : urlArr;
    var data = null;
    var tmp = this.request.body;
    tmp.dataString = JSON.parse(tmp.dataString || null);
    tmp.dataJson = eval('(' + tmp.dataString + ')');
    var pageName = tmp.pagename;
    var apiname = tmp.apiname;
    // var {pagename,id} = tmp; //会报错？什么原因
    var para = {
        'pagename': tmp.pagename.toLowerCase(),
        'apiname': tmp.apiname.toLowerCase(),
    }
    if (!para.pagename || !para.apiname) {
        data = "";
        status.code = -1;
        status.msg = "参数不对!";
        this.body = {
            'statuscode': -1,
            'statusmsg': '参数不对'
        };
        return;
    }
    data = yield this.mongo.db('datas').collection('datas').find(Object.assign(para,{isActive:true})).toArray();
    if (data.length > 0 && tmp.flag == 'create') {
        data = "";
        status.code = -1;
        status.msg = "不能新建重复的接口名";
        this.body = {
            'statuscode': -1,
            'statusmsg': '不能新建重复的接口名'
        };
        return;
    } else {
        if (tmp.flag == 'create') {
            para.data = tmp.dataJson;
            para.description = tmp.description;
            para.dataNote = JSON.parse(tmp.dataNote || {});
            para.dataString = tmp.dataString;
            para.isActive = true;
            yield this.mongo.db('datas').collection('datas').insert(para);
        } else if (tmp.flag == 'update') {
            para.pagename = tmp.oldData ? tmp.oldData.pagename : para.pagename;
            para.apiname = tmp.oldData ? tmp.oldData.apiname : para.apiname;
            yield this.mongo.db('datas').collection('datas').updateOne(para, {
                $set: {
                    "pagename": tmp.pagename.toLowerCase(),
                    "apiname": tmp.apiname.toLowerCase(),
                    "description": tmp.description,
                    "data": tmp.dataJson,
                    "dataNote": JSON.parse(tmp.dataNote || {}),
                    "dataString": tmp.dataString
                }
            });
        } else {
            delete para.data;
            yield this.mongo.db('datas').collection('datas').updateOne(para, { $set: { "isActive": false } });
        }
    }

    res = {
        'data': data || {},
        'statuscode': data ? 1 : -1,
        'statusmsg': data ? "成功" : (status.msg ? status.msg : "数据获取失败")
    }

    this.body = res;
}
