const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("sahip")
    .setDescription("**https://discord.gg/noface , nasty**")
    .setThumbnail("https://tenor.com/view/burak-masterbate-gif-20298277")
    .setColor("#007fff")
    .setTimestamp()
    return message.reply({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "sahip"
};
