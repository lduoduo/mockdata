//列表页需要的数据结构
module.exports = {
	//是否是普通列表?
	'data': {
		//顶部几个tab的url
		'tabList': [
			{
				url: "/list/?src=上海&dest=安徽&prop=0",
				propId: 0
			}, {
				url: "/list/?src=上海&dest=安徽&prop=1",
				propId: 1
			}, {
				url: "/list/?src=上海&dest=安徽&prop=3",
				propId: 3
			}, {
				url: "/list/?src=上海&dest=安徽&prop=5",
				propId: 5
			}
		],
		//线路列表
		'lineList': [
			{
				"id": 103063, //线路id
				"title": "成都+九寨沟+黄龙+历史古迹报恩寺+杜鹃山生态区+中国羌城双飞6日跟团游",
				"subTitle": "冬季款id99763 双人立减1200元  打破常规 东线进西线出 环线游览 全程0自费 赠娱乐表演",
				"imgUrl": "//pic3.40017.cn/gny/line/2015/11/05/14/PJ97Os.jpg",
				"isTCZX": true, //是否是同城专线
				"portCity": "广州", //出港城市
				"portCityId": "80", //出港城市id
				"groupCity": null, //参团城市
				"groupCityId": null, //参团城市Id
				"tcPrice": "2869", //价格
				"prop": "1", //线路属性（1 跟团 3自由行 5目的地参团）
				"crown": 0, //冠级, 已经做过处理，直接当level用
				"activityRule": "", //回团立返
				"activity": null, //活动
				"ap": null, //适用人群
				"hotelBrand": null, //酒店品牌,<附近几个字段是PC会用到的>
				"hotelFeature": null, //酒店特色
				"accommodation": null, //住宿条件
				"shoppingFeature": null, //购物特色
				"featureProject": null, //特色项目
				"lineFeature": null, //线路特色
				"travellerNum": 2171, //已购买人数
				"linePV": 4664, //浏览pv
				"commentNum": "487", //点评数
				"proType": "3", //线路类型:0 老产品, 1 "采销分离", 2 "火车票死包",3 "动态机票产品",4 "动态火车票产品", 5 ""
				"selfBrand": null, //会玩中国
				"tuanQiTips": [
					"周一",
					"周二",
					"周三",
					"周五"
				], //团期列表
				"featureTips": [
					"经济游"
				], //特色标签
				"url": "/guoneiyou/line/t1j3p10306380.html", //详情页链接
				"saleRuleList": [{
					"name": "九寨品牌日",
					"value": "满1成人立减600元；满2成人立减1200元；满3成人立减1800元；满4成人立减2400元；满5成人立减3000元；满6成人立减3600元；满7成人立减4200元；满8成人立减4800元；满9成人立减5400元"
				}], //销售规则
				"isSupportRedBag": false, //是否支持红包
				"blhIntegral": 400, //百旅会扣除积分
				"favoriteRate": 99.0, //好评率
				"isNewLine": 1, //是否是新产品
				"isPrivilege": true //是否有优惠
			}, {
				"id": 103063, //线路id
				"title": "成都+九寨沟+黄龙+历史古迹报恩寺+杜鹃山生态区+中国羌城双飞6日跟团游",
				"subTitle": "冬季款id99763 双人立减1200元  打破常规 东线进西线出 环线游览 全程0自费 赠娱乐表演",
				"imgUrl": "//pic3.40017.cn/gny/line/2015/11/05/14/PJ97Os.jpg",
				"isTCZX": true, //是否是同城专线
				"portCity": "广州", //出港城市
				"portCityId": "80", //出港城市id
				"groupCity": null, //参团城市
				"groupCityId": null, //参团城市Id
				"tcPrice": "-1", //价格
				"prop": "1", //线路属性（1 跟团 3自由行 5目的地参团）
				"crown": 0, //冠级, 已经做过处理，直接当level用
				"activityRule": "", //回团立返
				"activity": null, //活动
				"ap": null, //适用人群
				"hotelBrand": null, //酒店品牌,<附近几个字段是PC会用到的>
				"hotelFeature": null, //酒店特色
				"accommodation": null, //住宿条件
				"shoppingFeature": null, //购物特色
				"featureProject": null, //特色项目
				"lineFeature": null, //线路特色
				"travellerNum": 2171, //已购买人数
				"linePV": 4664, //浏览pv
				"commentNum": "487", //点评数
				"proType": "3", //线路类型:0 老产品, 1 "采销分离", 2 "火车票死包",3 "动态机票产品",4 "动态火车票产品", 5 ""
				"selfBrand": null, //会玩中国
				"tuanQiTips": [
					"周一",
					"周二",
					"周三",
					"周五"
				], //团期列表
				"featureTips": [
					"经济游"
				], //特色标签
				"url": "/guoneiyou/line/t1j3p10306380.html", //详情页链接
				"saleRuleList": [{
					"name": "九寨品牌日",
					"value": "满1成人立减600元；满2成人立减1200元；满3成人立减1800元；满4成人立减2400元；满5成人立减3000元；满6成人立减3600元；满7成人立减4200元；满8成人立减4800元；满9成人立减5400元"
				}], //销售规则
				"isSupportRedBag": false, //是否支持红包
				"blhIntegral": 400, //百旅会扣除积分
				"favoriteRate": 99.0, //好评率
				"isNewLine": 1, //是否是新产品
				"isPrivilege": true //是否有优惠
			}
		],
		//线路搜索总条数
		'totalCount': 30,
		//热门目的地列表
		'hotDestList': [{
			'url': '',
			'imgUrl': '', //图片地址
			'destName': ''
		}],
		//筛选项
		'filters': {
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
		'seoInfo': {
			keywords: "安徽旅游,去安徽旅游,安徽旅游价格,安徽旅游报价,安徽旅游多少钱,安徽旅游团购,安徽旅游线路",
			title: "【2016秋季去安徽旅游报价】到安徽旅游线路团购_同程旅游",
			description: "提供2016秋季各地出发去安徽的跟团及自由行旅游线路报价和预订。安徽旅游团购价格低至3折起。更有精选安徽旅游攻略,景点大全供参考。同程旅游,快乐每一程!"
		},
		'other': {
			srcId: 321,
			srcName: "上海",
			destId: 210,
			destName: "安徽",
			prop: 0,
			day: 0,
			srcShortPY: "all",
			isSimpleUrl: false,
			destProvice: "云南"
		}
	},
	'statuscode': 1,
	'statusmsg': '获取成功'
}