_async(function(iter){let _interrupt=false;var result=0;return _continue(_forOf(iter,function(value){return _await(value,function(_value){result+=_value;if(result>10){_interrupt=true;}});},function(){return _interrupt;}),function(){return result;});})