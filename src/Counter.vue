<style>
    .output {
        word-wrap: break-word;
    }
</style>
<template>
    <div id="app">
        Clicked: {{ counter.count }} times.
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="start">Start Auto ++</button>
        <button @click="stop">Stop</button>
        <div class="output">
            <span v-for="item in counter.historyCount">
                <b>{{ item }}</b>
            </span>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex'
    import { IncrementUseCase } from "./usecase/IncrementUseCase";
    import { DecrementUseCase } from "./usecase/DecrementUseCase";

    export default {
        data: function() {
            return {
                counter: {}
            }
        },
        created: function() {
            this.counter = this.alminContext.getState().counter;
            this.alminContext.onChange(() => {
                this.counter = this.alminContext.getState().counter;
            });
        },
        mounted: function() {
            this.start();
        },
        methods: {
            increment() {
                this.alminContext.useCase(new IncrementUseCase()).execute();
            },
            decrement() {
                this.alminContext.useCase(new DecrementUseCase()).execute();
            },
            start() {
                this.timerId = window.setInterval(() => {
                    this.increment();
                }, 16);
            },
            stop() {
                window.clearInterval(this.timerId);
            }
        }
    }
</script>
