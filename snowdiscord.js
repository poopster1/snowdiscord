const Discord = require('discord.js');
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const client = new Discord.Client();

const KEY;

var data, usd, eth;

client.once('ready', () => {
    console.log('Client ready');
  });

client.login(KEY);
var myVar = setInterval(myTimer, 60000);

async function myTimer(){
    await func();
    eth = data.data.market_data.current_price.eth;
    usd = data.data.market_data.current_price.usd;
    await client.user.setActivity('$'+usd+' - Ξ'+eth);
}
var func = async() => {
    data = await CoinGeckoClient.coins.fetch('snowswap');
};
