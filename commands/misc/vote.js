const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class VoteCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "vote",
      group: "misc",
      memberName: "vote",
      description: "Vote pour un prof",
      examples: ["vote Dauce"],
      args: [
        {
          key: "text",
          prompt: "Prof voté",
          type: "string",
        },
      ],
      guildOnly: true,
    });
  }

  async run(message, { text }) {
    message.delete();
    message.channel.send(`Vous avez voté pour le professeur : **${text}** !`);

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: help`);
  }
};
