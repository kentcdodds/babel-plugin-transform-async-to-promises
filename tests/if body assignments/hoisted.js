_async(function(foo,bar,baz){function _temp2(_baz){result=_baz;}function _temp(_bar){result=_bar;}var result;return _invoke(function(){if(foo()){return _call(bar,_temp);}else{return _call(baz,_temp2);}},function(){return result;});})