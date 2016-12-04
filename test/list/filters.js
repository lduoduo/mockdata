//筛选项
module.exports = {
	'data': {
		//行程时间天数,要做过滤
		'travelDays': {
			'label': 'lbl3',
			'list': [
				{
					'id': '27',
					'flag': 1,
					'url': '/g210/all-sh-1/',
					'name': '1天'
				}, {
					'id': '27',
					'flag': 2,
					'url': '/g210/all-sh-2/',
					'name': '2天'
				},{
					'id': '14',
					'flag': 1,
					'url': '/g210/all-sh-3/',
					'name': '3天'
				}, {
					'id': '4',
					'flag': 2,
					'url': '/g210/all-sh-4/',
					'name': '4天'
				},{
					'id': '12',
					'flag': 1,
					'url': '/g210/all-sh-5/',
					'name': '5天'
				}, {
					'id': '9831',
					'flag': 2,
					'url': '/g210/all-sh-6/',
					'name': '6天'
				}
			]
		},
		//行程出发月份
		'travelDates': {
			'label': 'pm',
			'list': [
				{
					'id': '201610',
					'flag': 1
				}, {
					'id': '201611',
					'flag': 1
				},{
					'id': '201612',
					'flag': 1
				}, {
					'id': '201701',
					'flag': 1
				},{
					'id': '201702',
					'flag': 1
				}, {
					'id': '201703',
					'flag': 1
				}
			]
		},
		//一键筛选标签
		'playLineList': [
			{
				'name': '同城专线',
				'id': 6231,
				'label': 'lbl6232',
				'flag': 0,
				'type': 'tczx'
			}, {
				'name': '优惠立减',
				'id': '',
				'label': '',
				'flag': 0,
				'type': 'youhui'
			}, {
				'name': '五日游',
				'id': 12,
				'label': '',
				'flag': 0,
				'type': 'playdays'
			}, {
				'name': '无购物',
				'id': 482,
				'label': 'lbl481',
				'flag': 0,
				'type': 'shopping'
			}, {
				'name': '无自费',
				'id': 483,
				'label': 'lbl481',
				'flag': 0,
				'type': 'selfpay'
			}, {
				'name': '机票可选',
				'id': 9753,
				'label': 'lbl5',
				'flag': 0,
				'type': 'flight'
			}, {
				'name': '火车可选',
				'id': 10080,
				'label': 'lbl5',
				'flag': 0,
				'type': 'train'
			}
		],
		//出发城市筛选列表
		'lpCityList': {
			'label': 'lpCity',
			'list': [
				{
					'id': '229',
					'name': '无锡',
					'flag': '1',
					'type': ''
				}, {
					'id': '321',
					'name': '上海',
					'flag': '1',
					'type': ''
				}, {
					'id': '221',
					'name': '常州',
					'flag': '1',
					'type': ''
				}, {
					'id': '',
					'name': '多地出发',
					'flag': '1',
					'type': 'more'
				}
			]
		},
		//价格筛选列表
		'pricelist': {
			'label': 'lbl9',
			'list': [
				{
					'min': 1,
					'max': 1000,
					'flag': 1,
					'name': '1000元以下'
				}, {
					'min': 1001,
					'max': 2000,
					'flag': 1,
					'name': '1001元-2000元'
				}, {
					'min': 2001,
					'max': 3500,
					'flag': 1,
					'name': '2001元-3500元'
				}, {
					'min': 5000,
					'max': 10000,
					'flag': 1,
					'name': '5000以上'
				}
			]
		},
		//交通工具列表
		'toollist': {
			'label': 'lbl5',
			'list': [
				{
					'id': '9754',
					'name': '飞机往返',
					'flag': 1
				}, {
					'id': '9753',
					'name': '机票可选',
					'flag': 1
				}, {
					'id': '9768',
					'name': '火车往返',
					'flag': 1
				}, {
					'id': '10080',
					'name': '火车可选',
					'flag': 1
				}, {
					'id': '9829',
					'name': '汽车往返',
					'flag': 1
				}, {
					'id': '9951',
					'name': '飞机+火车',
					'flag': 1
				}
			]
		},
		//线路玩法列表
		'playTypeList': {
			'label': 'lbl28',
			'list': [
				{
					'id': '346',
					'name': '张家界 + 大峡谷',
					'flag': 1
				}, {
					'id': '351',
					'name': '韶山+长沙',
					'flag': 1
				}, {
					'id': '343',
					'name': '张家界天门山',
					'flag': 1
				}, {
					'id': '345',
					'name': '长沙+韶山+凤凰',
					'flag': 1
				}
			]
		},
		//购物特色列表
		'shopSpecialList': {
			'label': 'lbl481',
			'list': [
				{
					'id': '482',
					'name': '无购物',
					'flag': 1
				}, {
					'id': '483',
					'name': '无自费',
					'flag': 1
				}
			]
		},
		//目的地筛选列表
		'destList': [
				{
					'provinceId': '212333',
					'provinceName': '热门目的地',
					'citys': [
						{
							'cityId': '',
							'shortName': '',
							'url': '/list/?src=上海&prot=',
							'cityName': '不限'
						}, {
							'cityId': '',
							'shortName': '',
							'url': '/list/?src=上海&dest=九寨沟&prop=0&prot=',
							'cityName': '九寨沟'
						}, {
							'cityId': '373',
							'shortName': 'km',
							'url': '/list/?src=上海&dest=昆明&prop=0&prot=',
							'cityName': '昆明'
						}
					]
				}, {
					'provinceId': '2',
					'provinceName': '云南',
					'citys': [
						{
							'cityId': '',
							'shortName': '',
							'url': '/list/?dest=云南&prot=',
							'cityName': '全部'
						}, {
							'cityId': '3585',
							'shortName': 'dl',
							'url': '/list/?src=上海&dest=大理&prop=0&prot=',
							'cityName': '大理'
						}, {
							'cityId': '373',
							'shortName': 'km',
							'url': '/list/?src=上海&dest=昆明&prop=0&prot=',
							'cityName': '昆明'
						}, {
							'cityId': '2626',
							'shortName': 'xgll',
							'url': '/list/?src=上海&dest=香格里拉&prop=0&prot=',
							'cityName': '香格里拉'
						}, {
							'cityId': '0',
							'shortName': 'ylxs',
							'url': '/list/?src=上海&dest=玉龙雪山&prop=0&prot=',
							'cityName': '玉龙雪山'
						}, {
							'cityId': '380',
							'shortName': 'xsbn',
							'url': '/list/?src=上海&dest=西双版纳&prop=0&prot=',
							'cityName': '西双版纳'
						}, {
							'cityId': '374',
							'shortName': 'lj',
							'url': '/list/?src=上海&dest=丽江&prop=0&prot=',
							'cityName': '丽江'
						}
					]
				}
			]
	},

	'statuscode': 1,
	'statusmsg': '获取成功'
}