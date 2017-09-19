import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    count: 0,
    historyCount: []
};

const mutations = {
    increment(state) {
        state.historyCount.push(state.count);
        state.count++;
    },
    decrement(state) {
        state.historyCount.push(state.count);
        state.count--;
    }
};

const actions = {
    increment: ({ commit }) => commit("increment"),
    decrement: ({ commit }) => commit("decrement")
};

export default new Vuex.Store({
    state,
    actions,
    mutations
});
