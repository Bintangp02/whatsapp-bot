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

img = setting.img
baper = 'SUB YT BP BOT'
apiku = 'api-alphabot.herokuapp.com'
botname2 = setting.botname2
thumbnail = setting.thumb
yt = setting.yt
grub= setting.grub
apikey = gw.apikey
auth0r = gw.auth0r
prefix = setting.prefix
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
l0lhuman = setting.l0lhuman //ubah pke apilu sendiri biar limit nya gk cepat abis
Alphakey = 'Alphabot' //apikey alphabot gk usah di ganti su
petik = '```'
titik = '...'
n = '\n'
