const dbus = require('dbus');

const bus = dbus.getBus('session');

let get_interface = (cb) => bus.getInterface(
    'org.asamk.Signal',
    '/org/asamk/Signal',
    'org.asamk.Signal', (err, inter) => {
        if (err) console.log(err);
        cb(inter);
    }
);


let echo = (inter) => {
    inter.on('MessageReceived', (timestamp, sender, groupid,
                                 message, attachments) => {
            if (groupid.length !== 0) {
                inter.sendGroupMessage(message, 
                                       attachments, 
                                       groupid, function(err) {
                    if(err) console.log(err);
                });
            } else {
                inter.sendMessage(message, 
                                  attachments, 
                                  [sender], function(err) {
                    if(err) console.log(err);
                });
            }
    });
};

get_interface(echo);
