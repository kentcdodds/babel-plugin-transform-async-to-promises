_async(function(iter){let _interrupt;let result=0;return _continue(_forAwaitOf(iter,function(value){result+=value;if(result>10){_interrupt=1;return;}},function(){return _interrupt;}),function(){return result;});})