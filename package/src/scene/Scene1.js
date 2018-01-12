/* global W */
'use strict';
W.Mod.define({
    Util: 'wm:/common/Util',
}, function(W, d) {
    console.log('define Scene1');
    return W.Scene.extend({
        name: 'Scene1',
        init: function() {
            this._super('init');
            d.Util.print('Scene1 : init');
        },
        onCreate: function(ctx) {
            d.Util.print('Scene1 : onCreate');
            var scene = this;
            var erepo = new W.EventRepository();

            this.ctx = ctx;
            erepo.addAll();
            var view  = W.create({
                type: 'Component',
                eventRepository: erepo,
                focusable: true,
                onKeyPressed: function(evt) {
                    d.Util.print('Scene1 Component onKeyPressed');
                    return false;
                },
                onFocusLost: function() {
                    d.Util.print('Scene1 Component onFocusLost')
                },
                objs: {
                    text : {
                        type: 'VText',
                        textColor: 0xFF00FF00,
                        color: 0xFF000000,
                        width: 500,
                        height: 200,
                        y: -200,
                        font: {
                            size:50,
                            italic:false,
                            weigth:'regular'
                        },
                        text: 'Scene1'
                    },
                    img : {
                        type: 'VImage',
                        width: 200,
                        height: 200,
                        y: 200,
                        src: "image.png",
                    }
                },
                children: [ 'text', 'img' ]
            })
            this.setView(view);
        },
        onDestroy: function() {
            this.getView().dispose();
        },
        onStart: function(te) {
            d.Util.print('Scene1 : onStart');

            var comp = this.getView();
            comp.acceptFocus();
            te.getProgramSpec().makeGroup(1000)
                    .animate(comp, {
                        extraAlpha : [0, 1]
                    });
        },
        onStop: function(te, transferred) {
            d.Util.print('Scene1 : onStop');

            var comp = this.getView();
            te.getProgramSpec().makeGroup(1000)
                    .animate(comp, {
                        extraAlpha : 0
                    });
        },
        onKeyPressed: function(evt) {
            d.Util.print('Scene1 onKeyPressed');

            if (evt.key === W.keyCodeOf('ENTER')) {
                this.ctx.start({
                    sceneName : 'wm:Scene2',
                    data: 'data'
                }, {
                    pushHistory: true
                })
            }
            return true;
        }
    });
});
