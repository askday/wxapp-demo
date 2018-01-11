//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		func: [
			[{
					title: '股票成本计算',
					func: 'onClick',
					gotoPage: '../test/test'
				},
				{
					title: '公积金查询',
					func: 'onClick',
					gotoPage: '../test/test'
				},
				{
					title: '个税计算',
					func: 'onClick',
					gotoPage: '../test/test',
				},
				{
					title: '理财收益计算',
					func: 'onClick',
					gotoPage: '../test/test',
				}
			],
			[{
					title: '股票成本计算',
					func: 'onClick',
					gotoPage: '../test/test',
				},
				{
					title: '公积金查询',
					func: 'onClick',
					gotoPage: '../test/test',
				},
				{
					title: '个税计算',
					func: 'onClick',
					gotoPage: '../test/test',
				},
				{
					title: '理财收益计算',
					func: 'onClick',
					gotoPage: '../test/test',
				}
			]
		]
	},

	onClick: function (event) {
		console.log(event)
		let row = event.currentTarget.dataset.row
		let column = event.currentTarget.dataset.column
		console.log(row + '|' + column);
		let nextPage = this.data.func[row][column].gotoPage
		console.log(nextPage);
		wx.navigateTo({
			url: nextPage
		})
	},

	onLoad: function () {
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
	},
	getUserInfo: function (e) {
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	}
})