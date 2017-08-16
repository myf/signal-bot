const dbus = require('dbus-native');
const session_bus = dbus.sessionBus();


session_bus
    .getService('org.freedesktop.DBus')
    .getInterface('/org/freedesktop/Dbus', 'org.freedesktop.DBus', function(err, ret) {
        debugger;
        // dbus signals are EventEmitter events

        //ret.on('MessageReceived', function() {
         //   console.log('messageReceived', arguments);
        //});
    });




