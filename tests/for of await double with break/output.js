_async(function(matrix){let _outerInterrupt=false;var result=0;return _continue(_forOf(matrix,function(row){return _continueIgnored(_forOf(row,function(value){return _await(value,function(_value){result+=_value;if(result>10){_outerInterrupt=true;}});},function(){return _outerInterrupt;}));}),function(){return result;});})