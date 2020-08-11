import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    // dynamicText: {}
})

export const mutations = {
    // SET_TEXT(state, newText) {
    //     state.dynamicText = newText
    // }
}

export const actions = {
    nuxtServerInit: async (store, {req}) => {
        let apiUrl = process.env.API_URL

        // fetch(`${apiUrl}/text`)
        //     .then(r => r.json())
        //     .then(data => {
        //         console.log(data)
        //         store.commit('SET_TEXT', data)
        //     })
    }
 }

 export const getters = {
    getTextByKey: state => key => {
        return state.dynamicText[key] || 'undefined'
    }
}