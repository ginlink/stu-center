/*
 * @Author: jiangjin
 * @Date: 2021-09-30 16:55:30
 * @LastEditTime: 2021-10-13 21:39:16
 * @LastEditors: jiangjin
 * @Description: 
 * 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		isLoadStartPage: false
	},
	mutations: {
		updateIsLoadStartPage(store, payload) {
			store.isLoadStartPage = payload
		}
	}
})