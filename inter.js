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

module.exports = get_interface;

