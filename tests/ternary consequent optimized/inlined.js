function(foo,bar,baz){try{const _foo=foo();return Promise.resolve(_foo?bar():baz());}catch(e){return Promise.reject(e);}}