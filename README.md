# Streakwiz Discord Bot

A powerful Discord bot for tracking and celebrating streaks with advanced features like gambling, raids, achievements, and more.

## 📋 Features

### Core Features
- **Streak Tracking**: Track streaks for customizable trigger words
- **Streak Streak**: Track how many consecutive days users maintain their streaks
- **Milestones**: Celebrate when users reach specific streak levels
- **Achievements**: Award special achievements for various accomplishments

### Enhanced Features
- **Raid System**: Users can raid each other's streaks to steal or lose streaks
- **Gambling System**: Users can gamble their streaks for a chance to win more

### Administrative Features
- **Interactive Configuration Panel**: Easy-to-use setup interface for all features
- **Per-server Configuration**: Customize the bot differently for each server
- **Advanced Customization**: Set parameters like success rates, limits, cooldowns, etc.

## 🚀 Getting Started

### Prerequisites
- Node.js 16.9.0 or higher
- PostgreSQL database
- Discord bot token

### Environment Setup
Create a `.env` file in the root directory with:
```
DISCORD_TOKEN=your_discord_bot_token
DATABASE_URL=postgresql://username:password@localhost:5432/streakwiz
```

### Installation
1. Clone this repository
2. Install dependencies: `npm install`
3. Start the bot: `node src/index.js`

### Bot Permissions
When adding the bot to your server, ensure it has these permissions:
- Read & Send Messages
- Embed Links
- Add Reactions
- Use Slash Commands

## 🔧 Configuration Commands

### `/setup-embed` - Interactive Configuration Panel
The main configuration command that provides an interactive panel with all options.
- Accessible only to server administrators
- Contains configurations for:
  - Core Features (trigger words, streak limits, etc.)
  - Raid System (toggle, percentages, cooldowns)
  - Gambling System (toggle, percentages, minimum requirements)

### Other Configuration Commands
- `/togglegambling` - Quick toggle for the gambling system
- `/toggle_streakstreak` - Toggle the streak streak feature
- `/configraid` - Configure raid system parameters
- `/setstreak_limit` - Set how often users can update their streaks

## 📈 User Commands

### Streak Management
- `/profile [user]` - View your or another user's streak profile
- `/leaderboard [word]` - See the server's streak leaderboard
- `/stats [user]` - View detailed statistics about streaks
- `/reset [word]` - Reset your streak for a specific trigger word

### Gambling System
- `/gamble [word] [amount]` - Gamble your streaks for a chance to win more
  - Parameters:
    - `word` - The trigger word to gamble with
    - `amount` - How many streaks to gamble

### Raid System
- `/raid [user] [word] [amount]` - Raid another user's streak
  - Parameters:
    - `user` - The user to raid
    - `word` - The trigger word to raid
    - `amount` - How much to try to steal (%)

## ⚙️ Configurable Parameters

### Core Parameters
- **Trigger Words**: Words that trigger streak updates
- **Streak Limit**: Time cooldown between streak updates
- **Streak Streak**: Enable/disable tracking consecutive days

### Raid System Parameters
- **Enabled/Disabled**: Toggle the entire raid system
- **Max Steal Percentage**: Maximum amount that can be stolen (%)
- **Risk Percentage**: How much you risk losing on a failed raid (%)
- **Success Chance**: Probability of successful raids (%)
- **Cooldown Hours**: Hours between raid attempts

### Gambling System Parameters
- **Enabled/Disabled**: Toggle the entire gambling system
- **Success Chance**: Probability of winning gambles (%)
- **Max Gamble Percentage**: Maximum amount that can be gambled (%)
- **Min Streak Requirement**: Minimum streaks needed to gamble

## 🪄 Examples

### Example 1: Setting up the bot
1. Run `/setup-embed` to open the configuration panel
2. Select "Core Features" and configure trigger words
3. Toggle "Raid System" and "Gambling System" as desired
4. Adjust parameters to suit your server's needs

### Example 2: User commands
- A user can check their streaks: `/profile`
- They can gamble some streaks: `/gamble daily 5`
- They can raid another user: `/raid @SomeUser daily 20`

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🧩 Acknowledgements
- Discord.js for the powerful Discord API wrapper
- PostgreSQL for reliable database storage
- All contributors who have helped improve the bot
