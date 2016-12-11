/**日志列表页逻辑 */

module.exports = function* (next) {

  var data = yield this.mongo.db('datas').collection('logs').find({isActive:true}).toArray();
  
  yield this.render('log/logs', {
    title: '日志监控中心',
    pagename: 'logs',
    list: data
  });

  // yield next;
}

