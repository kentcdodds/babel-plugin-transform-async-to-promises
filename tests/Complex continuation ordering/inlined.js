return Promise.resolve(_continue(_for(function(){return!!promise;},void 0,function(){messages.push("wait "+num);return Promise.resolve(promise);}),function(){promise=new Promise(r=>{promiseResolve=r;});return Promise.resolve(wait()).then(function(){promise=null;promiseResolve();messages.push("stop "+num);});}));}catch(e){return Promise.reject(e);}};let index=0;let promise=null;let messages=[];function wait(){return Promise.resolve();}return Promise.all([test(),test(),test()]).then(()=>messages);}