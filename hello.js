const dbus = require('dbus');

const bus = dbus.getBus('session');

bus.getInterface(
    'org.asamk.Signal',
    '/org/asamk/Signal',
    'org.asamk.Signal', (err, inter) => {
     
        if (err) console.log(err);
        inter.sendMessage('method over load is the problem', [], ['+16464708286'], function(res) {
        });


        /* 0 1 2 3 4 
         * 0: timestamp
         * 1: sender
         * 2: no idea
         * 3: message
         * 4: attachment file location
         */

});
