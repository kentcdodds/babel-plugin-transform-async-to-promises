_async(function(foo,baz){var result;function _temp2(_baz){result=_baz;}function _temp(_bar){result=_bar;}return _invoke(function(){if(foo()){function bar(){return 1;}return _call(bar,_temp);}else{return _call(baz,_temp2);}},function(){return result;});})