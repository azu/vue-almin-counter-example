import Vue from "vue";
import { Context, Dispatcher, StoreGroup } from "almin";
import Counter from "./Counter.vue";
import { CounterStore } from "./CounterStore"

const context = new Context({
    dispatcher: new Dispatcher(),
    store: new StoreGroup({
        counter: new CounterStore()
    }),
    options: {
        strict: true,
        performanceProfile: true
    }
});
// Inject context to Vue instance
Vue.mixin({
    created: function() {
        this.alminContext = context;
    }
});
// Turn on perf profile using `performance.mark`.
Vue.config.performance = true;
new Vue({
    el: "#app",
    render: h => h(Counter)
});
