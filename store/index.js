import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		isLoadStartPage: false,
		centerMenu: null,
		appNum: undefined,
		notices: null,
		version: undefined,
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
		},
		updateVersion(store, payload) {
			store.version = payload
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
		,
		version: state => {
			return state.version
		}

	}
})