const dbus = require('dbus');

const bus = dbus.getBus('session');

bus.getInterface('org.asamk.Signal','/org/asamk/Signal','org.asamk.Signal',(err, inter) => {
    if (err) console.err(err);
    inter.on('MessageReceived', function(err, res) {
        
    });
});
