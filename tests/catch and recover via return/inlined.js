function(foo){try{return Promise.resolve(_catch(function(){return Promise.resolve(foo());},function(){return"fallback";}));}catch(e){return Promise.reject(e);}}