function(foo,bar){try{switch(foo()){case 1:return Promise.resolve(bar());default:return Promise.resolve(false);}}catch(e){return Promise.reject(e);}}