_async(function(list){let _exit=false;var i=0;return _continue(_for(function(){return!_exit&&i<list.length;},function(){return i++;},function(){return _await(list[i](),function(_list$i){if(_list$i){return;}_exit=true;return false;});}),function(_result){return _exit?_result:true;});})