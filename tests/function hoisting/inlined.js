const fun=function(){try{return Promise.resolve(wait()).then(function(){return true;});}catch(e){return Promise.reject(e);}};return fun();function wait(){return Promise.resolve();}var dummy