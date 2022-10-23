const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class SpamEveryoneCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "spame",
      group: "raid",
      memberName: "spameveryone",
      description: "Spam pings everyone in the server",
      guildOnly: true,
      clientPermissions: ["MENTION_EVERYONE"],
    });
  }

  async run(message, args) {
    message.delete();

    const failEmbed = new Discord.MessageEmbed()
      .setAuthor("Spam Everyone Command")
      .setColor("#ff0000")
      .setFooter("Server Nuker v2", "https://i.imgur.com/BCDIf5E.jpg")
      .setDescription("Invalid arguments provided!\n`.spameveryone <count>`");

    if (!args) {
      message.channel.send(failEmbed);
      return;
    }
    var count = args;
    if (isNaN(parseFloat(count))) {
      message.channel.send(failEmbed);
      return;
    }
    count = Math.round(count);

    if (count > 999) {
      count = 1000;
    }

    for (let i = 1; i <= count; i++) {
      setTimeout(() => {
        message.channel.send(
          "||@everyone||\nVenez dans un meilleur serveur de Cassin ! https://discord.gg/xy2WWQVW"
        );
      }, 500);
    }

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: spameveryone`);
  }
};
