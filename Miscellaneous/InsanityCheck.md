# [Miscellaneous] Insanity Check

## Background

The description given for this challenge was:
```
We hid a flag in one of the private channels on the CTF.SG CTF discord. Can you find it?
```

<br/>

## Discord Private Channels

Upon some Googling online it seems that apparently some information of the private channels in Discord can be accessed via their official API... what?

First we need to get our Discord token. Here's a short video on how to retrieve it: https://www.youtube.com/watch?v=YEgFvgg7ZPI.

Next we launch this command to find out the guildID of the channel we want to extract information from:
```
curl -sH "Authorization: <DISCORD_TOKEN_HERE>" https://discordapp.com/api/v6/users/@me/guilds
```

<br>

After retrieving the guildID, we can run this command to find any private channels and grep out the flag.
```
curl -sH "Authorization: <DISCORD_TOKEN_HERE>" https://discordapp.com/api/v6/guilds/<GUILDID_HERE>/channels | grep CTFSG
```

<br>

And as simple as that, we got our flag!
```
CTFSG{4LL_uR_cH4nn3lS_R_13eLonG_t0_uS!}
```
