/**详情页逻辑 */

module.exports = function* (next) {
	var data = { 'title': "" }, err = "";
	if (this.query && this.query.page && this.query.api) {
		var para = {
			'pagename': this.query.page,
			'apiname': this.query.api
		}
		data = yield this.mongo.db('datas').collection('datas').find(Object.assign(para,{isActive:true})).toArray();
		data = data[0];
		data.title = '接口访问地址';
		data.href = '/nodeapi/'+this.query.page + '/' + this.query.api;
	} else if (/\?create/.test(this.url)) {
		data.title = "新建模拟数据接口";
	} else {
		data.title = "啊哦，你要的页面找不到了";
		err = '错误的链接参数，请求拒绝!';
	}

	yield this.render('detail/detail', {
		title: data.title,
		href: data.href,
		pagename: 'detail',
		data: data,
		err: err
	}, { 'debug': true });
}
