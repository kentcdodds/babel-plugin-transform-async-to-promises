_async(function(list){let _interrupt=false;var i=0;return _continueIgnored(_for(function(){return!_interrupt&&i<list.length;},function(){return i++;},function(){return _await(list[i](),function(_list$i){if(_list$i){_interrupt=true;}});}));})