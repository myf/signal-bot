const dbus = require('dbus');

const bus = dbus.getBus('session');

let get_interface = (cb) => bus.getInterface(
    'org.asamk.Signal',
    '/org/asamk/Signal',
    'org.asamk.Signal', (err, inter) => {
        cb(inter);
    }
);


get_interface((inter) => {
    inter.on('MessageReceived', (timestamp,
        sender,
        groupid,
        message,
        attachments) => {
            debugger;
            if (groupid) {
                inter.sendGroupMessage(message, attachments, groupid, function(err) {
                    if(err) console.log(err);
                });
            } else {
                inter.sendMessage(message, attachments, [sender], function(err) {
                    if(err) console.log(err);
                });
            }
    });
});
