function(foo){try{let _exit=false,_outerInterrupt=false;return _invoke(function(){return _invoke(function(){return Promise.resolve(foo()).then(function(_foo){if(_foo){_outerInterrupt=true;}});},function(){if(_outerInterrupt)return;_exit=true;return false;});},function(_result){return Promise.resolve(_exit?_result:true);});}catch(e){return Promise.reject(e);}}