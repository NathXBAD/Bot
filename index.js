const Discord = require('discord.js');
const bot = new Discord.Client();
const webhookGeto = new Discord.WebhookClient('689054638116307086','uensk3nRGJjzJ8ft4PTRBdgN8ePUIuKs45VEF0lsLjxQN4TSx9AiXxoyVFgCDVMWslpM')

bot.on('ready', function () {
    bot.user.setStatus('online')

    bot.user.setActivity("Tailler des crayons", { type: 'PLAYING'})
    console.log("Le Bot est en ligne sans problèmes au démarrage");
    

});


bot.login(process.env.TOKEN) 



bot.on('message', function (message) {
	if (message.content === '!BDO'){
		message.channel.send('Black Desert Online !')
	} 
	//autre commande 
	
	else if(message.content === '!bot'){

		var version ="v1.1" ; // c'est une variable
		
		message.channel.send("Salut! Je suis un bot crée par NathXBAD et je suis actuellement en "+version+"!") // je passe la variable grace au +

	}

	//autre commande 

	else if(message.content === '!Grout'){
		message.channel.send("Je s'appelle Grout")
	}


		else if(message.content === '!Propriétaire')
			
	    message.channel.send("```Le Propriétaire est snikaise```")
		
	else if(message.content === 'n!help'){
		message.channel.send("```Un modérateur ou un développeur arrive veulliez attendre dans le salon Helps```")
	}
	
	else if(message.content === '!server') {
		let server_name = message.guild.name
		let server_size = message.guild.members.server_size
		message.channel.send("Server :" + server_name + "\nPersonnes : " + server-size)
		webhookGeto.send("```Je suis le bot général du server```")
	}

    else if(message.content === '!invite') {
		message.channel.send("```https://discord.gg/UdAfWPw```")
	}


})//fin de la function des message 