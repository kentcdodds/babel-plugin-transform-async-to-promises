function(foo){try{return Promise.resolve(foo["bar"]()).then(function(result){return result||result;});}catch(e){return Promise.reject(e);}}