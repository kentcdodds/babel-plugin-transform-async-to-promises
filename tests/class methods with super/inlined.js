function(){class Base{}return class extends Base{foo(baz){try{const _super$foo=super.foo,_this=this;return Promise.resolve(baz()).then(function(_baz){return _super$foo.call(_this,_baz);});}catch(e){return Promise.reject(e);}}static bar(baz){try{const _super$bar=super.bar,_this2=this;return Promise.resolve(baz()).then(function(_baz2){return _super$bar.call(_this2,_baz2);});}catch(e){return Promise.reject(e);}}};}