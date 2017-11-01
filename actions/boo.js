let boo = (inter) => {
    inter.on('MessageReceived', (timestamp, sender, groupid,
                                 message, attachments) => {
        if (groupid.length !== 0) {
            var re = /^boo\s(\w+)/;
            var parse = message.match(re);
            if (parse) {
                var phrase = `\u{1F383} ${parse[1]} \u{1F383}`;
                inter.sendGroupMessage(phrase, 
                                       attachments, 
                                       groupid, function(err) {
                    if(err) console.log(err);
                });
            }
        };
    });
};

module.exports = boo;
