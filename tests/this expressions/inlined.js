function(){try{const _this=this;const test=()=>_this;return Promise.resolve(_this.foo()).then(function(_this$foo){return Promise.resolve(_this.bar()).then(function(_this$bar){return _this$foo+_this$bar;});});}catch(e){return Promise.reject(e);}}