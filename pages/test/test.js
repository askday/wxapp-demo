// pages/test/test.js
const util = require('../../utils/util.js')

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		id: util.testPageLoadCount,
		name: 'wx',
		array: [1, 2, 3, 4, 5],
		x: 0,
		y: 0,
		iconSize: [20, 30, 40, 50, 60, 70],
		iconColor: [
			'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
		],
		iconType: [
			'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
		]
	},
	play() {
		this.videoCtx.play()
	},
	pause() {
		this.videoCtx.pause()
	},
	tap: function (e) {
		this.setData({
			x: 30,
			y: 30
		});
	},
	onClick: function (obj) {
		let id = obj.currentTarget.id
		if (id == 'runBtn') {
			this.setData({
				name: 'wwww'
			})
		}
		else if (id == 'naviBtn') {
			wx.navigateTo({
				url: '../test/test'
			})
		}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		util.testPageLoadCount = 1 + util.testPageLoadCount
		this.setData({
			id: util.testPageLoadCount
		})
		console.log('=====onLoad=====' + this.data.id)
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		console.log('=====onLoad=====' + this.data.id)
		this.videoCtx = wx.createVideoContext('myVideo')
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		console.log('=====onShow=====' + this.data.id)
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {
		console.log('=====onHide=====' + this.data.id)
	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
		console.log('=====onUnload=====' + this.data.id)
	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
		console.log('=====onPullDownRefresh=====' + this.data.id)
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		console.log('=====onReachBottom=====' + this.data.id)
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		console.log('=====onShareAppMessage=====' + this.data.id)
	}
})