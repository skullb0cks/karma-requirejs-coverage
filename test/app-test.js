define(['app', 'jquery', 'underscore', 'a/a', 'b'], function(App, $, _, a, b) {

    describe('just checking', function() {

        it('call a', function() {
            a();
        });

        it('works for app', function() {
            var el = $('<div></div>');

            var app = new App(el);
            app.render();

            expect(el.text()).toEqual('require.js up and running');
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });

    });

});
