var test = require('tape');
var fmap = require('../../lib/fmap');

test('fmap module', function(module){

    module.plan(3);

    module.test('exports a function', function(test){
        test.assert(typeof fmap === 'function'); 
        test.end();
    });

    module.test('fmap has arity of 2', function(test){
        test.assert(fmap.length === 2); 
        test.end();
    });

    module.test('fmap calls the fmap method of the second argument, passing it the first argument', function(test){

        var functor = {
            fmap: function() {
                this.fmapCalled++      
                this.fmapArgs.push(arguments);
            },
            fmapCalled: 0,
            fmapArgs: []
        };

        function mapfn(){}

        fmap(mapfn, functor);
        
        test.assert(functor.fmapCalled === 1);
        test.assert(functor.fmapArgs[0][0] === mapfn);
        test.assert(functor.fmapArgs[0].length === 1);
        test.end();
    });

});
