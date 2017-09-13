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

module.exports = echo;
