function(list){try{let _exit=false;var i=0;return Promise.resolve(_continue(_for(function(){return!_exit&&i<list.length;},function(){return i++;},function(){return Promise.resolve(list[i]()).then(function(_list$i){if(_list$i){return;}_exit=true;return false;});}),function(_result){return _exit?_result:true;}));}catch(e){return Promise.reject(e);}}