class{sequence(until){return new _AsyncGenerator(function(_generator){let i=0;const _temp=_for(function(){return i<until;},function(){return i++;},function(){return _generator._yield(i).then(function(){});});return _temp&&_temp.then?_temp.then(function(){}):void 0;});}}