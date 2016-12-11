/**监控日志对外数据库接口 */

module.exports = function* (next) {

    var tmp = this.request.body;

    // var {pagename,id} = tmp; //会报错？什么原因
    var para = {};
    Object.assign(para, tmp);
    var len = yield this.mongo.db('datas').collection('logs').count();
    para.id = len + 1 + '';
    para.createTime = para.lastUpdateTime = new Date();
    para.createUser = para.lastUpdateUser = null;
    para.isActive = true;

    yield this.mongo.db('datas').collection('logs').insert(para);

    res = {
        'statuscode': 1,
        'statusmsg': "成功"
    }

    this.body = res;
}
