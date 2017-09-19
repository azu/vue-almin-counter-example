<style>
    .output {
        word-wrap: break-word;
    }
</style>
<template>
    <div id="app">
        Clicked: {{ count }} times, count is {{ evenOrOdd }}.
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="start">Start Auto ++</button>
        <button @click="stop">Stop</button>
        <div class="output">
            <span v-for="item in historyCount">
                <b>{{ item }}</b>
            </span>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex'

    export default {
        mounted: function() {
            this.start();
        },
        computed: mapState([
            "count",
            "historyCount"
        ]),
        methods: {
            increment() {
                this.$store.dispatch("increment");
            },
            decrement() {
                this.$store.dispatch("decrement");
            },
            start() {
                this.timerId = window.setInterval(() => {
                    this.$store.dispatch("increment");
                }, 16);
            },
            stop() {
                window.clearInterval(this.timerId);
            }
        }
    }
</script>
