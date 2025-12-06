const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require('discord.js');

const client = new Client({ 
  intents: [GatewayIntentBits.Guilds] 
});

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!')
    .toJSON()
];

client.once('ready', async () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
  
  const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
  
  try {
    console.log('🔄 Registering slash commands...');
    
    await rest.put(
      Routes.applicationCommands(client.user.id),
      { body: commands }
    );
    
    console.log('✅ Slash commands registered successfully!');
    console.log('🎉 Bot is ready! Use /ping in your server to activate the command.');
  } catch (error) {
    console.error('❌ Error registering commands:', error);
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  
  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong! 🏓');
    console.log(`✅ Command used by ${interaction.user.tag} in ${interaction.guild.name}`);
  }
});

client.login(process.env.DISCORD_TOKEN);
