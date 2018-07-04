import Vue from "vue";

const info = {
    template: "#slider-info",
    props: {
        work: Object
    }
};

const display = {
    template: "#slider-display",
    props: {
        work: Object
    }
};

const buttons = {
    template: "#slider-buttons",
    props: {
        works: Array
    }
};

new Vue({
    el: "#slider-component",
    components: {
        info, 
        display, 
        buttons
    },
    data: {
        works: [],
        currentWork: []
    },
    created() {
        this.works = require("../../../../data/works.json");
        this.currentWork = this.works[0];
    },
    template: "#slider",
});