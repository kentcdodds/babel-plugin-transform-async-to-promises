function(left,right){try{return Promise.resolve(left()).then(function(){return Promise.resolve(right());});}catch(e){return Promise.reject(e);}}