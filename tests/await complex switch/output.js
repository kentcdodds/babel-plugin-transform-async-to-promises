_async(function(foo,bar,baz){let _exit=false,_interrupt=false;return _continue(_switch(foo,[[function(){return 1;}],[function(){return 2;},function(){_exit=true;return 0;}],[function(){return _call(bar);},function(){if(foo){_interrupt=true;return;}if(foo===0){_exit=true;return 1;}},function(){return _interrupt||_exit;}],[function(){return 5;},function(){baz();},_empty],[void 0,function(){_exit=true;return 2;}]]),function(_result){return _exit?_result:3;});})