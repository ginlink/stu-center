/*
 * @Author: jiangjin
 * @Date: 2021-09-30 16:55:30
 * @LastEditTime: 2021-10-30 15:34:58
 * @LastEditors: jiangjin
 * @Description: 
 * 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		isLoadStartPage: false,
		centerMenu: null,
		appNum: undefined,
		notices: null,
	},
	mutations: {
		updateIsLoadStartPage(store, payload) {
			store.isLoadStartPage = payload
		},
		updateCenterMenu(store, payload) {
			store.centerMenu = payload
		},
		updateAppNum(store, payload) {
			store.appNum = payload
		},
		updateNotices(store, payload) {
			store.notices = payload
		}
	},
	getters: {
		centerMenu: state => {
			return state.centerMenu
		},
		appNum: state => {
			return state.appNum
		},
		notices: state => {
			return state.notices
		}
	}
})