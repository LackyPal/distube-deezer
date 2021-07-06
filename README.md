# distube-deezer
 A DisTube custom plugin for supporting Deezer URL.
 Required DisTube version >= 3.0.0

# Feature
 This plugin grabs the songs on Deezer then searches on YouTube and play with DisTube.

# Installation
```sh
npm install distube-deezer
```

# Usage
```js
const Discord = require('discord.js')
const DisTube = require('distube')
const DeezerPlugin = require("distube-deezer")
const client = new Discord.Client()
const distube = new DisTube(client, {
    searchSongs: 10,
    emitNewSongOnly: true,
    plugins: [new DeezerPlugin({ parallel: true })]
})

// Now distube.play can play deezer url.

client.on('message', message => {
	if (message.author.bot) return
	if (!message.content.startsWith(config.prefix)) return
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
	const command = args.shift()
	if (command === 'play') distube.play(message, args.join(' '))
})
```

## Documentation

### DeezerPlugin([options])
- `options.parallel`: Default is `true`. Whether or not searching the playlist in parallel.
- `options.emitPlaySongAfterFetching`: Default is `false`. Emit `playSong` event before or after fetching all the songs.
  > If `false`, DisTube plays the first song -> emits `playSong` events -> fetches all the rest\
  > If `true`, DisTube plays the first song -> fetches all the rest -> emits `playSong` events
