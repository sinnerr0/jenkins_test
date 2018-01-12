/* global W */
W.Mod.define({
    Util: 'wm:/common/Util'
}, function(W, d) {
    'use strict';
    console.log('define Scene2');
    return W.Scene.extend({
        name: 'Scene2',
        init: function() {
            this._super('init');
            d.Util.print('Scene2 : init');
        },
        onCreate: function(ctx) {
            d.Util.print('Scene2 : onCreate');
            console.log('Scene2 intent = ', ctx.getIntent());

            var scene = this;
            var erepo = new W.EventRepository();

            this.ctx = ctx;
            erepo.addAll();
            var view = W.create({
                type: 'Component',
                eventRepository: erepo,
                focusable: true,
                onKeyPressed: function(evt) {
                    d.Util.print('Scene2 Component onKeyPressed');
                    return false;
                },
                objs: {
                    text: {
                        type: 'VText',
                        textColor: 0xFF00FFFF,
                        color: 0xFFFF0000,
                        width: 500,
                        height: 200,
                        font: {
                            size:50,
                            italic:false,
                            weigth:'regular'
                        },
                        text: 'Scene2'
                    }
                },
                children: [ 'text' ],
            });
            this.setView(view);

        },
        onDestroy: function() {
            this.getView().dispose();
        },
        onStart: function(te) {
            d.Util.print('Scene2 : onStart');

            var comp = this.getView();
            comp.acceptFocus();
            te.getProgramSpec().makeGroup(1000)
                    .animate(comp, {
                        extraAlpha : [0, 1]
                    });
        },
        onStop: function(te) {
            d.Util.print('Scene2 : onStop');

            var comp = this.getView();
            te.getProgramSpec().makeGroup(1000)
                    .animate(comp, {
                        extraAlpha : 0
                    });
        },
        onKeyPressed: function(evt) {
            d.Util.print('Scene2 onKeyPressed');
            throw new Error('Test!!!!!!!!');
            this.ctx.finish();
            return true;
        }
    });
});
