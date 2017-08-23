const dbus = require('dbus');

const bus = dbus.getBus('session');

bus.getInterface(
    'org.asamk.Signal',
    '/org/asamk/Signal',
    'org.asamk.Signal', (err, inter) => {
     
        if (err) console.log(err);
        inter.on('MessageReceived', (timestamp,
            sender,
            groupid,
            message,
            attachments) => {
                inter.sendMessage(message, attachments, [sender], function(err) {
                    if(err) console.log(err);
                });
        });
});
