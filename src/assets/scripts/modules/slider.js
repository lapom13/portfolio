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
    methods: {
        slide(direction) {
            this.$emit("slide", direction)
        },
        getReqImage(direction) {
            const worksArray = [...this.works];

            switch(direction) {
                case 'prev' :
                    const lastItem = worksArray[worksArray.length - 1];
                    worksArray.unshift(lastItem);
                    worksArray.pop();
                    break;
                case 'next':
                    worksArray.push(worksArray[0]);
                    worksArray.shift();
                    break;
            }
            return worksArray[this.currentIndex]
        }
    },
    props: {
        works: Array,
        currentIndex: Number
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
        currentWork: [],
        currentIndex: 0
    },
    created() {
        this.works = require("../../../../data/works.json");
        this.currentWork = this.works[0];
    },
    watch: {
        currentIndex(value) {
            const workAmount = this.works.length - 1;
            if(value > workAmount) this.currentIndex = 0;
            if(value < 0) this.currentIndex = workAmount;
            
            this.currentWork = this.works[value];
            console.log(value);
        }
    },
    methods: {
        handleSlide(direction) {
            console.log(direction);
            switch(direction) {
                case 'prev' :
                    this.currentIndex = this.currentIndex - 1;
                    break;
                
                case 'next':
                    this.currentIndex = this.currentIndex + 1;
                    break;
            }
        }
    },
    template: "#slider",
});