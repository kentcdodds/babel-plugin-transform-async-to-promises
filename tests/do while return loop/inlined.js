function(foo){try{let _exit=false;let shouldContinue;return Promise.resolve(_do(function(){return Promise.resolve(foo()).then(function(_foo){if(!_foo){_exit=true;return true;}});},function(){return!_exit;}));}catch(e){return Promise.reject(e);}}