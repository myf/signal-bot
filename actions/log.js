let log = (inter) => {
    inter.on('MessageReceived', (timestamp, sender, groupid,
                                 message, attachments) => {
        let obj = {
            'timestamp': timestamp,
            'sender'   : sender,
            'groupid'  : groupid,
            'message'  : message,
            'attachments' : attachments
        };
        console.log(obj);
    });
};

module.exports = log;
