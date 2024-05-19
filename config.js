module.exports = {
    app: {
        token: process.env.BOT_TOKEN,
        playing: 'by the Community ❤️',
        global: true,
        guild: 'false',
        extraMessages: false,
        loopMessage: false,
        lang: 'en'
    },
    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
