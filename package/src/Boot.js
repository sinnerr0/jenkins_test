'use strict'
W.Mod.define(function(W) {
    var UserApp = WCloud.App.extend({
        init: function() {
            this._super('init');
        },
        onStart: function(W, appConn) {
            console.log("Cloud Application is started!");
            var root = new W.CRoot();
            var stage = new W.Stage(root, 'wm:/scene/Scene1');
        },
        onStop: function() {
            console.log("Cloud Application is stopped!");
        },
    });
    return UserApp;
});
