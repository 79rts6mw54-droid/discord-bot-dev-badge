# Discord Active Developer Badge Bot

A minimal Discord bot to help you earn the Active Developer Badge.

## Setup Instructions

### 1. Create Discord Bot
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and name it
3. Go to "Bot" tab → Reset Token (save this token!)
4. Go to OAuth2 → URL Generator
   - Scopes: `bot`, `applications.commands`
   - Permissions: `Send Messages`
5. Use generated URL to invite bot to your server

### 2. Deploy to Railway via GitHub

1. Push these files to your GitHub repository
2. Go to [Railway](https://railway.app)
3. Click "New Project" → "Deploy from GitHub repo"
4. Choose this repository
5. Add environment variable: `DISCORD_TOKEN` = your bot token
6. Railway will automatically deploy!

### 3. Earn the Badge

1. Wait for bot to come online (check Railway logs)
2. In your Discord server, use `/ping`
3. Wait 24 hours
4. Go to [Active Developer Page](https://discord.com/developers/active-developer)
5. Claim your badge!
