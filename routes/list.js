/**列表页逻辑 */

module.exports = function* (next) {

  var data = yield this.mongo.db('datas').collection('datas').find({isActive:true}).toArray();
  
  yield this.render('list/list', {
    title: '模拟数据平台中心',
    pagename: 'list',
    list: data
  });

  // yield next;
}

