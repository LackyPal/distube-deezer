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


### Tested with the following links

- https://www.deezer.com/en/track/739870792
- https://deezer.com/playlist/3155776842
- https://deezer.com/track/739870792
- https://www.deezer.com/track/739870792
- https://deezer.com/en/playlist/3155776842
- https://deezer.com/en/track/739870792
- https://www.deezer.com/album/58671252
- http://deezer.com/album/58671252
- http://deezer.com/playlist/3155776842
- www.deezer.com/playlist/3155776842
- deezer.com/album/58671252
- deezer.com/en/playlist/3155776842

<hr>

#### Credit: ❤️ A big thanks to [J0R6IT0#0001](https://github.com/J0R6IT0) to help me make urlRegex
