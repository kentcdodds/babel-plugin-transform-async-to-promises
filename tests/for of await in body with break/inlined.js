function(iter){try{let _interrupt=false;var result=0;return Promise.resolve(_continue(_forOf(iter,function(value){return Promise.resolve(value).then(function(_value){result+=_value;if(result>10){_interrupt=true;}});},function(){return _interrupt;}),function(){return result;}));}catch(e){return Promise.reject(e);}}