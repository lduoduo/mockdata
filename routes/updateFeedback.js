/**网站内部的异步请求修改数据库接口 */

module.exports = function* (next) {


    var tmp = this.request.body;

    // var {pagename,id} = tmp; //会报错？什么原因
    var para = {};

    if (tmp.flag == 'create') {
        var len = yield this.mongo.db('datas').collection('feedback').count();
        para.data = tmp.msg;
        para.id = len + 1 + '';
        para.createTime = para.lastUpdateTime = new Date();
        para.createUser = para.lastUpdateUser = null;
        para.isDone = false;
        para.isActive = true;
        yield this.mongo.db('datas').collection('feedback').insert(para);
    } else if (tmp.flag == 'update') {
        yield this.mongo.db('datas').collection('feedback').updateOne({ id: tmp.id }, {
            $set: {
                "isDone": !!tmp.isDone,
                "lastUpdateTime": new Date()
            }
        });
    } else {
        if (tmp.id) {
            yield this.mongo.db('datas').collection('feedback').updateOne({ "id": tmp.id }, {
                $set: {
                    "isActive": false
                }
            });
        }
    }

    res = {
        'statuscode': 1,
        'statusmsg': "成功"
    }

    this.body = res;
}
