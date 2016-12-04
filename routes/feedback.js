/**反馈页逻辑 */

module.exports = function* (next) {

    var data = yield this.mongo.db('datas').collection('feedback').find({isActive:true}).sort( { id: 1 } ).toArray();

    yield this.render('feedback/feedback', {
        debug: true,
        title: '意见和建议',
        pagename: 'feedback',
        list: data
    });

    // yield next;
}

