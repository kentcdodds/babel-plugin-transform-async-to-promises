function(left,right){try{let _exit=false;return _invoke(function(){if(true){const _left=left();return _left?Promise.resolve(_left&&right()).then(function(result){_exit=true;return result||result;}):function(result){_exit=true;return result||result;}(_left&&right());}},function(_result){return Promise.resolve(_exit?_result:false);});}catch(e){return Promise.reject(e);}}