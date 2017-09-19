import Vue from "vue";
import Counter from "./Counter.vue";
import store from "./store";

// Turn on perf profile using `performance.mark`.
Vue.config.performance = true;
new Vue({
    el: "#app",
    store,
    render: h => h(Counter)
});
