var dbus = require('dbus-native');
var conn = dbus.createConnection();
conn.message({
    path:'/org/asamk/Signal',
    'interface': 'org.asamk.Signal',
    member: 'MessageReceived',
    //type: dbus.messageType.methodCall
});
conn.on('message', function(msg) { console.log(msg); });
