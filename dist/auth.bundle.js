webpackJsonp([4],{10:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar authBtn = document.querySelector(".auth-btn");\nvar toMainBtn = document.querySelector(".btn-main");\nvar flipper = document.querySelector(".flipper");\nvar wrapper = document.querySelector(".wrapper");\n\nauthBtn.addEventListener("click", function (event) {\n  flipper.style.transform = "rotateY(180deg)";\n  authBtn.style.display = "none";\n});\n\ntoMainBtn.addEventListener("click", function (event) {\n  flipper.style.transform = "rotateY(0deg)";\n  authBtn.style.display = "";\n});\n\nwrapper.addEventListener("click", function (event) {\n  var target = event.target;\n  if (target == wrapper) {\n    flipper.style.transform = "rotateY(0deg)";\n    authBtn.style.display = "";\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwcGVyLmpzPzgwMWMiXSwibmFtZXMiOlsiYXV0aEJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvTWFpbkJ0biIsImZsaXBwZXIiLCJ3cmFwcGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJkaXNwbGF5IiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOztBQUNBLElBQU1BLFVBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7QUFDQSxJQUFNQyxZQUFZRixTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQWxCO0FBQ0EsSUFBTUUsVUFBVUgsU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBLElBQU1HLFVBQVVKLFNBQVNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7O0FBRUFGLFFBQVFNLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDaERILFVBQVFJLEtBQVIsQ0FBY0MsU0FBZCxHQUEwQixpQkFBMUI7QUFDQVQsVUFBUVEsS0FBUixDQUFjRSxPQUFkLEdBQXdCLE1BQXhCO0FBQ0QsQ0FIRDs7QUFLQVAsVUFBVUcsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBU0MsS0FBVCxFQUFnQjtBQUNsREgsVUFBUUksS0FBUixDQUFjQyxTQUFkLEdBQTBCLGVBQTFCO0FBQ0FULFVBQVFRLEtBQVIsQ0FBY0UsT0FBZCxHQUF3QixFQUF4QjtBQUNELENBSEQ7O0FBS0FMLFFBQVFDLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDaEQsTUFBSUksU0FBU0osTUFBTUksTUFBbkI7QUFDQSxNQUFJQSxVQUFVTixPQUFkLEVBQXVCO0FBQ3JCRCxZQUFRSSxLQUFSLENBQWNDLFNBQWQsR0FBMEIsZUFBMUI7QUFDQVQsWUFBUVEsS0FBUixDQUFjRSxPQUFkLEdBQXdCLEVBQXhCO0FBQ0Q7QUFDRixDQU5EIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpO1xyXG5jb25zdCB0b01haW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1tYWluXCIpO1xyXG5jb25zdCBmbGlwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mbGlwcGVyXCIpO1xyXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xyXG5cclxuYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICBmbGlwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgxODBkZWcpXCI7XHJcbiAgYXV0aEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn0pO1xyXG5cclxudG9NYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gIGZsaXBwZXIuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XHJcbiAgYXV0aEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxufSk7XHJcblxyXG53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgaWYgKHRhcmdldCA9PSB3cmFwcGVyKSB7XHJcbiAgICBmbGlwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgwZGVnKVwiO1xyXG4gICAgYXV0aEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZmxpcHBlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n')},9:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(10);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz84MWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9mbGlwcGVyXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9hdXRoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n")}},[9]);