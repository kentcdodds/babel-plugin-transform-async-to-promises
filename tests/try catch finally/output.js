_async(function(foo,bar,baz){var result;return _finallyRethrows(function(){return _catch(foo,function(){return _call(bar);});},function(_wasThrown,_result){baz();return _rethrow(_wasThrown,_result);});})