_async(function(list){let _exit;function _temp(_list$i){if(_list$i){return;}_exit=1;return false;}var i=0;return _continue(_for(function(){return!_exit&&i<list.length;},function(){return i++;},function(){return _await(list[i](),_temp);}),function(_result){return _exit?_result:true;});})