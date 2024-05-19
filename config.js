const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sllahiyamd:sllahiya@cluster0.gjsmx3b.mongodb.net"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_41_05_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzLFxuICAgICAgICA3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDMwLFxuICAgICAgICA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMixcbiAgICAgICAgMTQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDkyLFxuICAgICAgICAzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI2LFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk2LFxuICAgICAgICA1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyLFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDUyLFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDY2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInZPYmdaUklhSkthQXE4S2FDL3lEV2VqK0NLT2JnMzIweTFFVmRKeEFnU3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDI1NDc1OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMzRkI3NjYwNUFCODhGN0YxRTJDMzg3MTRGMUI0RDA3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjExMTY3MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQyNTQ3NTk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRTM0RUM0QTNFNkMzMEJEMDMzMjA5NjFBNTVBMTFDNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYxMTE2NzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiREdXeUZIc1lUNDJMZmpRU2VZZnAxUVwiLFxuICBcInBob25lSWRcIjogXCJmNWQ1NzQ3NS05OTk1LTRhZWQtODg2NC0xZDlmNzIyODc0MWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMjI5LFxuICAgICAgMjQsXG4gICAgICA3OSxcbiAgICAgIDE3NCxcbiAgICAgIDExNCxcbiAgICAgIDExNCxcbiAgICAgIDE0NSxcbiAgICAgIDEyNyxcbiAgICAgIDE4MSxcbiAgICAgIDEwMyxcbiAgICAgIDIzOSxcbiAgICAgIDEzOCxcbiAgICAgIDYsXG4gICAgICA1MixcbiAgICAgIDE3NixcbiAgICAgIDExNixcbiAgICAgIDE1MixcbiAgICAgIDIxOCxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NixcbiAgICAgIDEzLFxuICAgICAgOTQsXG4gICAgICAxMjAsXG4gICAgICAyMixcbiAgICAgIDE0MyxcbiAgICAgIDE3MixcbiAgICAgIDM5LFxuICAgICAgOTYsXG4gICAgICAxMjUsXG4gICAgICAxODQsXG4gICAgICA2MixcbiAgICAgIDY1LFxuICAgICAgOSxcbiAgICAgIDI1NSxcbiAgICAgIDE0MixcbiAgICAgIDM3LFxuICAgICAgMTIsXG4gICAgICAxMjQsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKUEsyWkVFRUxHU3A3SUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJadjZTZHZGTlphZlkxNFlpSXdFSmdpczJpazJlTmQyRTZDd1VST2JVbDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwialhocFoxWTFac3JtQ2RzeGxLeTBuZmxKTHhqTWRPODNwZlV5cmJweXVqWHYxdTUrMHJUZ1dlR3ozWjNOTlVwUkFDT0FSOEYyZHdVdHpXZEFDYXZSQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaThWdUREeXJiQXhWdGlObVFnR0tnYUE2R05vaTIvd3R6ekRZUFJQVUROWm9jVDV6NVNlUjlDRU11UFlyMGN6bVJTMzV2TGZSQ1czT2xOYnEyYUlIQ2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MjU0NzU5Njo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzQ4NzgzNzY3MzQ5MDQ6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJOTyBOQU1FIPCfmJlcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQyNTQ3NTk2OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MTExNjY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2k1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLaTEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzSWVhbStEcTBRVnNOc1lBZFRiREtQNjFSbWgvdnUxM0MxVTl3MldMWUtJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTA4NjEwNzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtpMi5qc29uIjogIntcImtleURhdGFcIjpcIjVBUVRObTNFY0puWlA0Z2lpTENRN1FqbkhCNUFLWUt5bEFid3NiaWpLekE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExMDg2MTA3NSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjExMTYwMzY5OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtpMy5qc29uIjogIntcImtleURhdGFcIjpcIkx4N3VCaEdlU2EzS1ZsQ05PN21vZjd5OFhpYkppOGo2c2dYSTVxV2x6N1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExMDg2MTA3NSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDVdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjExMTY0OTM5N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtpNC5qc29uIjogIntcImtleURhdGFcIjpcIkI5SXJ4K0RGdU1tZGxpYzRyU0JUbTlJak9hNXdjQU01YU9EbFYrQ1Z1clk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExMDg2MTA3NSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYxMTE2NTcyODBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLaTUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVK01Bby82Sm56VmttTlFBMlcwQkI4cURCdDQ5ZE52UURwWGI3UHVKOVQ0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTA4NjEwNzUsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNl19LFwidGltZXN0YW1wXCI6XCIxNzE2MTExNjc1MTYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Lahiya-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mr lahiya md",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
