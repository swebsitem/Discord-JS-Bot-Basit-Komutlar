const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
  console.log('Bot Hazır ve Online!')

  command(client, ['açık' , 'hazır' , 'hadi'], (message) => {
      message.channel.send('Botunuz Hazır ve Emirlerinize Avade Patron')
  })
  
})
client.login(config.token)
