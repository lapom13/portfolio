webpackJsonp([1],{10:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(11);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanM/OTg4YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL3NsaWRlclwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n")},11:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _vue = __webpack_require__(0);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar info = {\n    template: "#slider-info",\n    props: {\n        work: Object\n    }\n};\n\nvar display = {\n    template: "#slider-display",\n    props: {\n        work: Object\n    }\n};\n\nvar buttons = {\n    template: "#slider-buttons",\n    methods: {\n        slide: function slide(direction) {\n            this.$emit("slide", direction);\n        },\n        getReqImage: function getReqImage(direction) {\n            var worksArray = [].concat(_toConsumableArray(this.works));\n\n            switch (direction) {\n                case \'prev\':\n                    var lastItem = worksArray[worksArray.length - 1];\n                    worksArray.unshift(lastItem);\n                    worksArray.pop();\n                    break;\n                case \'next\':\n                    worksArray.push(worksArray[0]);\n                    worksArray.shift();\n                    break;\n            }\n            return worksArray[this.currentIndex];\n        }\n    },\n    props: {\n        works: Array,\n        currentIndex: Number\n    }\n};\n\nnew _vue2.default({\n    el: "#slider-component",\n    components: {\n        info: info,\n        display: display,\n        buttons: buttons\n    },\n    data: {\n        works: [],\n        currentWork: [],\n        currentIndex: 0\n    },\n    created: function created() {\n        this.works = __webpack_require__(12);\n        this.currentWork = this.works[0];\n    },\n\n    watch: {\n        currentIndex: function currentIndex(value) {\n            var workAmount = this.works.length - 1;\n            if (value > workAmount) this.currentIndex = 0;\n            if (value < 0) this.currentIndex = workAmount;\n\n            this.currentWork = this.works[value];\n            console.log(value);\n        }\n    },\n    methods: {\n        handleSlide: function handleSlide(direction) {\n            console.log(direction);\n            switch (direction) {\n                case \'prev\':\n                    this.currentIndex = this.currentIndex - 1;\n                    break;\n\n                case \'next\':\n                    this.currentIndex = this.currentIndex + 1;\n                    break;\n            }\n        }\n    },\n    template: "#slider"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zbGlkZXIuanM/MTE4YyJdLCJuYW1lcyI6WyJpbmZvIiwidGVtcGxhdGUiLCJwcm9wcyIsIndvcmsiLCJPYmplY3QiLCJkaXNwbGF5IiwiYnV0dG9ucyIsIm1ldGhvZHMiLCJzbGlkZSIsImRpcmVjdGlvbiIsIiRlbWl0IiwiZ2V0UmVxSW1hZ2UiLCJ3b3Jrc0FycmF5Iiwid29ya3MiLCJsYXN0SXRlbSIsImxlbmd0aCIsInVuc2hpZnQiLCJwb3AiLCJwdXNoIiwic2hpZnQiLCJjdXJyZW50SW5kZXgiLCJBcnJheSIsIk51bWJlciIsIlZ1ZSIsImVsIiwiY29tcG9uZW50cyIsImRhdGEiLCJjdXJyZW50V29yayIsImNyZWF0ZWQiLCJyZXF1aXJlIiwid2F0Y2giLCJ2YWx1ZSIsIndvcmtBbW91bnQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2xpZGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTztBQUNUQyxjQUFVLGNBREQ7QUFFVEMsV0FBTztBQUNIQyxjQUFNQztBQURIO0FBRkUsQ0FBYjs7QUFPQSxJQUFNQyxVQUFVO0FBQ1pKLGNBQVUsaUJBREU7QUFFWkMsV0FBTztBQUNIQyxjQUFNQztBQURIO0FBRkssQ0FBaEI7O0FBT0EsSUFBTUUsVUFBVTtBQUNaTCxjQUFVLGlCQURFO0FBRVpNLGFBQVM7QUFDTEMsYUFESyxpQkFDQ0MsU0FERCxFQUNZO0FBQ2IsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRCxTQUFwQjtBQUNILFNBSEk7QUFJTEUsbUJBSkssdUJBSU9GLFNBSlAsRUFJa0I7QUFDbkIsZ0JBQU1HLDBDQUFpQixLQUFLQyxLQUF0QixFQUFOOztBQUVBLG9CQUFPSixTQUFQO0FBQ0kscUJBQUssTUFBTDtBQUNJLHdCQUFNSyxXQUFXRixXQUFXQSxXQUFXRyxNQUFYLEdBQW9CLENBQS9CLENBQWpCO0FBQ0FILCtCQUFXSSxPQUFYLENBQW1CRixRQUFuQjtBQUNBRiwrQkFBV0ssR0FBWDtBQUNBO0FBQ0oscUJBQUssTUFBTDtBQUNJTCwrQkFBV00sSUFBWCxDQUFnQk4sV0FBVyxDQUFYLENBQWhCO0FBQ0FBLCtCQUFXTyxLQUFYO0FBQ0E7QUFUUjtBQVdBLG1CQUFPUCxXQUFXLEtBQUtRLFlBQWhCLENBQVA7QUFDSDtBQW5CSSxLQUZHO0FBdUJabEIsV0FBTztBQUNIVyxlQUFPUSxLQURKO0FBRUhELHNCQUFjRTtBQUZYO0FBdkJLLENBQWhCOztBQTZCQSxJQUFJQyxhQUFKLENBQVE7QUFDSkMsUUFBSSxtQkFEQTtBQUVKQyxnQkFBWTtBQUNSekIsa0JBRFE7QUFFUkssd0JBRlE7QUFHUkM7QUFIUSxLQUZSO0FBT0pvQixVQUFNO0FBQ0ZiLGVBQU8sRUFETDtBQUVGYyxxQkFBYSxFQUZYO0FBR0ZQLHNCQUFjO0FBSFosS0FQRjtBQVlKUSxXQVpJLHFCQVlNO0FBQ04sYUFBS2YsS0FBTCxHQUFhLG1CQUFBZ0IsQ0FBUSxFQUFSLENBQWI7QUFDQSxhQUFLRixXQUFMLEdBQW1CLEtBQUtkLEtBQUwsQ0FBVyxDQUFYLENBQW5CO0FBQ0gsS0FmRzs7QUFnQkppQixXQUFPO0FBQ0hWLG9CQURHLHdCQUNVVyxLQURWLEVBQ2lCO0FBQ2hCLGdCQUFNQyxhQUFhLEtBQUtuQixLQUFMLENBQVdFLE1BQVgsR0FBb0IsQ0FBdkM7QUFDQSxnQkFBR2dCLFFBQVFDLFVBQVgsRUFBdUIsS0FBS1osWUFBTCxHQUFvQixDQUFwQjtBQUN2QixnQkFBR1csUUFBUSxDQUFYLEVBQWMsS0FBS1gsWUFBTCxHQUFvQlksVUFBcEI7O0FBRWQsaUJBQUtMLFdBQUwsR0FBbUIsS0FBS2QsS0FBTCxDQUFXa0IsS0FBWCxDQUFuQjtBQUNBRSxvQkFBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0g7QUFSRSxLQWhCSDtBQTBCSnhCLGFBQVM7QUFDTDRCLG1CQURLLHVCQUNPMUIsU0FEUCxFQUNrQjtBQUNuQndCLG9CQUFRQyxHQUFSLENBQVl6QixTQUFaO0FBQ0Esb0JBQU9BLFNBQVA7QUFDSSxxQkFBSyxNQUFMO0FBQ0kseUJBQUtXLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxHQUFvQixDQUF4QztBQUNBOztBQUVKLHFCQUFLLE1BQUw7QUFDSSx5QkFBS0EsWUFBTCxHQUFvQixLQUFLQSxZQUFMLEdBQW9CLENBQXhDO0FBQ0E7QUFQUjtBQVNIO0FBWkksS0ExQkw7QUF3Q0puQixjQUFVO0FBeENOLENBQVIiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcclxuXHJcbmNvbnN0IGluZm8gPSB7XHJcbiAgICB0ZW1wbGF0ZTogXCIjc2xpZGVyLWluZm9cIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgd29yazogT2JqZWN0XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5ID0ge1xyXG4gICAgdGVtcGxhdGU6IFwiI3NsaWRlci1kaXNwbGF5XCIsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHdvcms6IE9iamVjdFxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgYnV0dG9ucyA9IHtcclxuICAgIHRlbXBsYXRlOiBcIiNzbGlkZXItYnV0dG9uc1wiLFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNsaWRlKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwic2xpZGVcIiwgZGlyZWN0aW9uKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVxSW1hZ2UoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmtzQXJyYXkgPSBbLi4udGhpcy53b3Jrc107XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwcmV2JyA6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEl0ZW0gPSB3b3Jrc0FycmF5W3dvcmtzQXJyYXkubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya3NBcnJheS51bnNoaWZ0KGxhc3RJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3Jrc0FycmF5LnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbmV4dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya3NBcnJheS5wdXNoKHdvcmtzQXJyYXlbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtzQXJyYXkuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gd29ya3NBcnJheVt0aGlzLmN1cnJlbnRJbmRleF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICB3b3JrczogQXJyYXksXHJcbiAgICAgICAgY3VycmVudEluZGV4OiBOdW1iZXJcclxuICAgIH1cclxufTtcclxuXHJcbm5ldyBWdWUoe1xyXG4gICAgZWw6IFwiI3NsaWRlci1jb21wb25lbnRcIixcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBpbmZvLCBcclxuICAgICAgICBkaXNwbGF5LCBcclxuICAgICAgICBidXR0b25zXHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHdvcmtzOiBbXSxcclxuICAgICAgICBjdXJyZW50V29yazogW10sXHJcbiAgICAgICAgY3VycmVudEluZGV4OiAwXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLndvcmtzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2RhdGEvd29ya3MuanNvblwiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXb3JrID0gdGhpcy53b3Jrc1swXTtcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIGN1cnJlbnRJbmRleCh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB3b3JrQW1vdW50ID0gdGhpcy53b3Jrcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBpZih2YWx1ZSA+IHdvcmtBbW91bnQpIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICAgICAgaWYodmFsdWUgPCAwKSB0aGlzLmN1cnJlbnRJbmRleCA9IHdvcmtBbW91bnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXb3JrID0gdGhpcy53b3Jrc1t2YWx1ZV07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGhhbmRsZVNsaWRlKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwcmV2JyA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgJ25leHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBcIiNzbGlkZXJcIixcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvc2xpZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n')},12:function(module,exports){eval('module.exports = [{"id":1,"title":"1 Сайт школы онлайн образования","skills":"1 Html, Css, JavaScript","photo":"/assets/images/content/slider/work-1.jpg","link":"//google.com"},{"id":2,"title":"2 Сайт школы онлайн образования","skills":"2 Html, Css, JavaScript","photo":"/assets/images/content/slider/work-2.jpg","link":"//yandex.ru"},{"id":3,"title":"3 Сайт школы онлайн образования","skills":"3 Html, Css, JavaScript","photo":"/assets/images/content/slider/work-3.jpg","link":"//rambler.ru"},{"id":4,"title":"4 Сайт школы онлайн образования","skills":"4 Html, Css, JavaScript","photo":"/assets/images/content/slider/work-4.jpg","link":"//vk.com"}]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL3dvcmtzLmpzb24/MDNjNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUIsNkpBQTZKLEVBQUUsNEpBQTRKLEVBQUUsNkpBQTZKLEVBQUUseUpBQXlKIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBbe1wiaWRcIjoxLFwidGl0bGVcIjpcIjEg0KHQsNC50YIg0YjQutC+0LvRiyDQvtC90LvQsNC50L0g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wiLFwic2tpbGxzXCI6XCIxIEh0bWwsIENzcywgSmF2YVNjcmlwdFwiLFwicGhvdG9cIjpcIi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvc2xpZGVyL3dvcmstMS5qcGdcIixcImxpbmtcIjpcIi8vZ29vZ2xlLmNvbVwifSx7XCJpZFwiOjIsXCJ0aXRsZVwiOlwiMiDQodCw0LnRgiDRiNC60L7Qu9GLINC+0L3Qu9Cw0LnQvSDQvtCx0YDQsNC30L7QstCw0L3QuNGPXCIsXCJza2lsbHNcIjpcIjIgSHRtbCwgQ3NzLCBKYXZhU2NyaXB0XCIsXCJwaG90b1wiOlwiL2Fzc2V0cy9pbWFnZXMvY29udGVudC9zbGlkZXIvd29yay0yLmpwZ1wiLFwibGlua1wiOlwiLy95YW5kZXgucnVcIn0se1wiaWRcIjozLFwidGl0bGVcIjpcIjMg0KHQsNC50YIg0YjQutC+0LvRiyDQvtC90LvQsNC50L0g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wiLFwic2tpbGxzXCI6XCIzIEh0bWwsIENzcywgSmF2YVNjcmlwdFwiLFwicGhvdG9cIjpcIi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvc2xpZGVyL3dvcmstMy5qcGdcIixcImxpbmtcIjpcIi8vcmFtYmxlci5ydVwifSx7XCJpZFwiOjQsXCJ0aXRsZVwiOlwiNCDQodCw0LnRgiDRiNC60L7Qu9GLINC+0L3Qu9Cw0LnQvSDQvtCx0YDQsNC30L7QstCw0L3QuNGPXCIsXCJza2lsbHNcIjpcIjQgSHRtbCwgQ3NzLCBKYXZhU2NyaXB0XCIsXCJwaG90b1wiOlwiL2Fzc2V0cy9pbWFnZXMvY29udGVudC9zbGlkZXIvd29yay00LmpwZ1wiLFwibGlua1wiOlwiLy92ay5jb21cIn1dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kYXRhL3dvcmtzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n')}},[10]);