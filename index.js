const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		WAMessageProto,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./bintang/color')
const speed = require('performance-now')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./bintang/fetcher')
const fetch = require('node-fetch');
const request = require('request')
const { recognize } = require('./bintang/ocr')
const fs = require('fs')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")  
const ffmpeg = require('fluent-ffmpeg') 
const { nyz } = require('./private')
const imgbb = require('imgbb-uploader')  
const clc = require('chalk')
const imageToBase64 = require('image-to-base64');
const setting = JSON.parse(fs.readFileSync('./bintang/settings.json'))
const nayz = JSON.parse(fs.readFileSync('./bintang/tes.json'))

const { 
	bayarLimit, 
	limitAdd
} = require('./bintang/limitatm.js') 
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./bintang/level.js')
/*
img = setting.img
baper = 'SUB YT BP BOT'
apiku = 'api-alphabot.herokuapp.com'
botname2 = setting.botname2
thumbnail = setting.thumb
yt = setting.yt
grub= setting.grub
apikey = gw.apikey
auth0r = gw.auth0r
prefix = sett.pre
limitawal = 99
blocked = []
botname = setting.botname
apixteam = setting.apixteam
cr = setting.cr
ownerrf = setting.ownerrf
ownerrz = setting.ownerrz 
numberbot = setting.numberbot
apivhtear = setting.apivhtear //ubah pke apilu sendiri biar limit nya gk cepat Abis
author = setting.author
bintang = setting.bintang
namebot = setting.namebot
ownerNumber = setting.ownerNumber
ownername = setting.ownername
l0lhuman = 'e966d3aac613b61dabd35cc6' //ubah pke apilu sendiri biar limit nya gk cepat abis
Alphakey = 'Alphabot' //apikey alphabot gk usah di ganti su
petik = '```'
titik = '...'
n = '\n'

const _Elite = JSON.parse(fs.readFileSync('./nayla/Elite.json')) 

const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))

const videonye = JSON.parse(fs.readFileSync('./bintang/video.json'))
const audionye = JSON.parse(fs.readFileSync('./bintang/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./bintang/image.json')) 
const antilink = JSON.parse(fs.readFileSync('./bintang/antilink.json'))
const event = JSON.parse(fs.readFileSync('./bintang/event.json'))
const antiwibu = JSON.parse(fs.readFileSync('./bintang/antiwibu.json'))
const antijawa = JSON.parse(fs.readFileSync('./bintang/antijawa.json'))
const prem = JSON.parse(fs.readFileSync('./bintang/prem.json'))
const welkom = JSON.parse(fs.readFileSync('./bintang/welkom.json'))
const antigay = JSON.parse(fs.readFileSync('./bintang/antigay.json'))
const antibocil = JSON.parse(fs.readFileSync('./bintang/antibocil.json'))
const _limit = JSON.parse(fs.readFileSync('./bintang/limit.json'))
const botx = JSON.parse(fs.readFileSync('./bintang/botx.json'))
const ban = JSON.parse(fs.readFileSync('./bintang/banned.json')) 
const nayXi = JSON.parse(fs.readFileSync('./bintang/nayXi.json')) 
const _leveling = JSON.parse(fs.readFileSync('./bintang/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./bintang/level.json'))
const nayXix = JSON.parse(fs.readFileSync('./bintang/nayXix.json')) 
*/

            async function starts() {
        	const nayla = new WAConnection()
            nayla.version = [2, 2119, 6] 
	        nayla.logger.level = 'warn'
	       console.log(banner.string)
	nayla.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color('SUBSCRIBE\nYOUTUBE\nBPBOT...'))
	        })
	        fs.existsSync('./bintang.json') && nayla.loadAuthInfo('./bintang.json')
	        nayla.on('connecting', () => {
		    start('2', 'Subscribe YouTube BP BOT...')		   
        	})
bintang.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			nayla.sendMessage(call, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!\nhttps//wa.me/628964741737', MessageType.text)
			.then(() => bintang.blockUser(call, "add"))
			}, 100);
		})
            if (chat.action == 'add') {
            	ini_user = nayla.contacts[mem]
                group_info = await nayla.groupMetadata(chat.jid)
                let buff = await getBuffer(pp_user)
                ini_img = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=e966d3aac613b61dabd35cc6&img1=${pp_user}&img2=${pp_group}&background=${img}&username=${ini_user.notify}&member=${group_info.participants.length}&groupname= ${group_info.subject}`)
                welkam = `*Hi @${mem.split('@')[0]}*${n}`
				welkam += `*◪ Welcome in group:*${n}`
				welkam += `*├─ ${group_info.subject}*${n}`
				welkam += `*├─ Intro Dulu Kak*${n}`
				welkam += `*├─ ❏ Nama :*${n}`			
				welkam += `*├─ ❏ Umur :* ${n}`
				welkam += `*├─ ❏ Hobi :*${n}`
				welkam += `*├─ ❏ Jenis Kelamin :*${n}`
				welkam += `*└─ ❏ Nomor :* ${mem.replace('@s.whatsapp.net', '')}${n}`
				welkam += `*We hope you enjoy~~*${n}${n}${group_info.desc}`
				ucapan_welkam = `*Hi @${mem.split('@')[0]}*${n}*◪ Welcome in group:*${n}*├─ ${group_info.subject}*${n}*├─ Intro Dulu Kak*${n}*├─ ❏ Nama :*${n}*├─ ❏ Umur :* ${n}*├─ ❏ Hobi :*${n}*├─ ❏ Jenis Kelamin :*${n}*└─ ❏ Nomor :* ${mem.replace('@s.whatsapp.net', '')}${n}*Semoga betah~~*${n}${n}${group_info.desc}`
                await nayla.sendMessage(chat.jid, buff, MessageType.image, { quoted: falfa, caption: ucapan_welkam , contextInfo: {"mentionedJid": [mem],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
            }
            if (chat.action == 'remove') {
            	mem = chat.participants[0]
            	ini_user = nayla.contacts[mem]
                let buff = await getBuffer(pp_user)
                group_info = await nayla.groupMetadata(chat.jid)
                ini_img = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=e966d3aac613b61dabd35cc6&img1=${pp_user}&img2=${pp_group}&background=${img}&username=${ini_user.notify}&member=${group_info.participants.length}&groupname= ${group_info.subject}`)
                ini_out = `Bye bye🥳 @${mem.split('@')[0]} dadahh👋`
                ucapan_leave = `Bye bye🥳 @${mem.split('@')[0]} dadahh👋`
                await nayla.sendMessage(chat.jid, buff, MessageType.image, { quoted: falfa, caption: ucapan_leave, contextInfo: {"mentionedJid": [mem],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
            }
        } catch (e) {
            console.log('Error :', e)
        }
    })
                        //Bintang bot subs yt BPBOT yy
                        const isGroupAdmins = groupAdmins.includes(sender) || false
                        const isAntiLink = isGroup ? antilink.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAntigay = isGroup ? antigay.includes(from) : false
			const isAntibocil = isGroup ? antibocil.includes(from) : false
			const isAntiwibu = isGroup ? antiwibu.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false			 
			const isAntijawa = isGroup ? antijawa.includes(from) : false

/*
Jagan numpang nama doang bruh !!
*/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:Bintangp02\n` //nama lu bruh
            + `ORG: Pengembang Bot;\n` //desk tentang lu
            + `TEL;type=CELL;type=VOICE;waid=6289647417373:6289647417373\n` //no WhatsApp
            + 'END:VCARD' /*
Jagan ubah ya selain itu nanti bisa jadi error*/
/*
Ini antilink*/           
            if (messagesC.includes("https://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Link Group Detected maaf ${sender.split("@")[0]} anda akan di kick dari group 5  seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 s")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
//Demote dan Promote
		    	case 'demote':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('LU ADMIN??')
					if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*jabatan kamu di copot*🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					} else {
					mentions(`yahhh @${mentioned[0].split('@')[0]} lu bukan admin lagi bro :(`, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					}					 
					break
		case 'promote':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('ONLY ADMIN')
					if (!isBotGroupAdmins) return reply('BOT NOT ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂?? (+_+) :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
			 	    } else {
					mentions(`??𝗲𝗹𝗮𝗺𝗮𝘁🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
					}					 
					break	                     
//brainly
			    	case 'brainly':
			    	if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/brainly?soal=${body.slice(9)}&APIKEY=${apixteam}`)
			    	anu1 = `➻ *JAWABAN* : ${anu.jawaban}`
			    	reply(anu1)
			    	break
//Auto kick

                    if (budy.includes("syg")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Guy Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 second")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
                    default:            
                
                    if (budy.includes("syg")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Guy Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 second")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				     
				    if (budy.includes("ayan")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Guy Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("love")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Guy Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("ayuk")){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Children Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("chan")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Wibu Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => { 
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("yamete")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Wibu Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("ambe")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("tempek")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("matamu")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("jancok")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("aing")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("cekprefix")){
				    reply(`BOT PREFIX ${prefix}`)
				    }
//Nambah Fitur² bot?? Lanjut besok:)

              }   
		} catch (e) {
			console.log('GppKok : %s', color(e, 'aqua'))
		}
	})
}
starts()
