function(foo,bar){try{var result;return Promise.resolve(foo()).then(function(_foo){return _continue(_switch(_foo,[[function(){return Promise.resolve(bar());},function(){result=true;}],[void 0,function(){result=false;}]]),function(){return result;});});}catch(e){return Promise.reject(e);}}