let speak = (inter, message, attachments, receiver, isGroup) => {
    if (isGroup) {
        inter.sendGroupMessage(message,
            attachments,
            receiver, (err)=> {
                if (err) console.log(err);
            });
    } else {
        inter.sendMessage(message,
            attachments,
            receiver, (err)=> {
                if (err) console.log(err);
            });
    }
};

module.exports = speak;
