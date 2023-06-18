const mineflayer = require('mineflayer')
const options = {
    host: 'mc.paradise-city.fun',
    username: 'HelperBot'
}
const bot = mineflayer.createBot(options)

//--------------------------------------------------------------------------------------------

bot.on('message', function(username, message) {
    username = username.getText()
    var arr = username.split("» "); 
    console.log(arr)

    if (arr[1] =='!sf enhanced crafting table') {bot.chat("It's a simple machine to craft most of recipes")}
    if (arr[1] =='!sf magic workbench') {bot.chat("It's a machine to craft magic Items!")}
    if (arr[1] =='!sf') {bot.chat("Do !sf <Slimefun item name>")}
    if (arr[1] =='!sf ancient rune soulbound') {bot.chat("You can drop the item on a gear. it won't drop on the floor when you die.")}
    if (arr[1] =='!sf blank rune') {bot.chat("It used to craft Magical Runes.")}
    if (arr[1] =='!sf magical lump') {bot.chat("It used to craft Nagical Items.")}
    if (arr[1] =='!sf ender lump') {bot.chat("It used to craft Nagical Items.")}
    if (arr[1] =='!sf essence of afterlife') {bot.chat("Its a part of ancient rune soulbound.")}
    if (arr[1] =='!sf sword of beheading') {bot.chat("higher chance to drop rare thins for mobs! specially for wither skeleton.")}
    if (arr[1] =='!sf blade of vampiers') {bot.chat("Everytime you attack something you have 45% chance to recover 2 Hearts of your Health.")}
    if (arr[1] =='!sf seismic axe') {bot.chat("Right click to do a Earthquake!")}
    if (arr[1] =='!sf soulbound sword') {bot.chat("If you have it on your inventory.when you die. the item will not drop.")}
    if (arr[1] =='!sf soulbound trident') {bot.chat("If you have it on your inventory.when you die. the item will not drop.")}
    if (arr[1] =='!sf soulbound bow') {bot.chat("If you have it on your inventory.when you die. the item will not drop.")}
    if (arr[1] =='!sf explosive bow') {bot.chat("Any arrows fired using this bow will launch hit enemys into the Air.")}
    if (arr[1] =='!sf icy bow') {bot.chat("Any arrows fired using this bow will prevent hit enemys from moving for 2 seconds.")}
    if (arr[1] =='!sf portable crafting table') {bot.chat("Right click to open crafting table!")}
    if (arr[1] =='!sf portable dust bin') {bot.chat("You can put items in it and you will not see them again.")}
    if (arr[1] =='!sf rag') {bot.chat("Right click to restore 2 hearts.")}
    if (arr[1] =='!sf bandage') {bot.chat("Right click to restore 4 hearts.")}
    if (arr[1] =='!sf backpack') {bot.chat("Portable chest")}
    if (arr[1] =='!sf cooler') {bot.chat("allows you restore juices and automaticly consume them when you're hungry and you have this on your inventory.")}
    if (arr[1] =='!sf output chest') {bot.chat("A basic machine will try to put items in this chest if it's placed near the dispenser!")}
    if (arr[1] =='!sf grind stone') {bot.chat("Grinds items down into other items.")}
    if (arr[1] =='!sf armor forge') {bot.chat("Gives you the ability to create powerful armor!")}
    if (arr[1] =='!sf ore crusher') {bot.chat("Crushes ores to double them.")}
    if (arr[1] =='!sf compressor') {bot.chat("Compresses Items.")}
    if (arr[1] =='!sf makeshift smetry') {bot.chat("It's machine like smetry but it just smelts items.")}
    if (arr[1] =='!sf smeltry') {bot.chat("A hight-temperature furnace that allows you to smell dusts into ingots and create alloys.")}
    if (arr[1] =='!sf pressure chamber') {bot.chat("Compresses Items even more.")}
    if (arr[1] =='!sf ore washer') {bot.chat("washes sifted ore to filter ores and gives you small stone chunks.")}
    if (arr[1] =='!sf table saw') {bot.chat("Allows you to get 8 Planks from 1 log")}
    if (arr[1] =='!sf composter') {bot.chat("Can convert various items over time.")}
    if (arr[1] =='!sf automated panning machine') {bot.chat("A mutiblock version of the gold pan and nether gold pan combined in one machine.")}
    if (arr[1] =='!sf industrial miner') {bot.chat("This multiblock will mine any ores in a 7x7 (or 11x11 for advanced one) area underneath it. Place a fuel in the chest and right click on blast furnace.")}
    if (arr[1] =='!sf crucible') {bot.chat("Used to smell items into Liquids.")}
    if (arr[1] =='!sf Juicer') {bot.chat("Allows you to create delicious Juice.")}
    if (arr[1] =='!sf enhanced furnace') {bot.chat("It smells items faster.")}
    if (arr[1] =='!sf gold pan') {bot.chat("Right click to collect resources from Gravel.")}
    if (arr[1] =='!sf nether gold pan') {bot.chat("Right click to collect resources from Soul Sand.")}
    if (arr[1] =='!sf grapling hook') {bot.chat("Right click to swing")}
    if (arr[1] =="!sf smelter's pickaxe") { bot.chat("Auto-Smelting")}
    if (arr[1] =='!sf lumber axe') {bot.chat("cuts down the hole tree.")}
    if (arr[1] =='!sf pickaxe of containment') {bot.chat("Can pickup spawners.")}
    if (arr[1] =='!sf explosive pickaxe') {bot.chat("Allows you to mine a good bit of Blocks at once.")}
    if (arr[1] =='!sf explosive shovel') {bot.chat("Allows you to mine a good bit of Diggable Blocks at once.")}
    if (arr[1] =='!sf pickaxe of seeker ') {bot.chat("Will always point you to the nearest ore but might get damaged when doing it.")}
    if (arr[1] =='!sf cobalt pickaxe') {bot.chat("Good Efficiency")}
    if (arr[1] =='!sf pickaxe of vein mining') {bot.chat("This pickaxe will dig out whole Veins of Ores!")} 
  });
//--------------------------------------------------------------------------------------------


bot.on('playerJoined', (player) => {
  if (player.username !== bot.username) {
  bot.chat(`Welcome to Paradise City! ${player.username}`)
}})

function typeHiInChat() {
    
    bot.chat("/login helperbotiscool")
    console.log('I spawned.')
    bot.on('message', function(username) {
        username = username.getText()
        var arr = username.split("» ");
    })}

function openWin() {
    setTimeout(function() {typeHiInChat()}, 3000);
    
  }
openWin()

const lastChat = new Map()

bot.on('message', (username, message) => {
  username = username.getText()
  var message = username.split("» ");
  username = message[0]
  message = message[1]
  const now = Date.now()
  const { lastMessage, lastTime, counter } = lastChat.get(username) || { lastMessage: '', lastTime: 0, counter: 0 }
  if (message === lastMessage && now - lastTime < 5000) {
  const newCounter = counter + 1
  if (newCounter === 3) {
  // bot.chat(`${username} stop spamming!`)
  bot.chat(`/tempmute ${username.split(" ")[1]} 6h Spamming`)
  }
  lastChat.set(username, { lastMessage: message, lastTime: now, counter: newCounter })
  } else {
  lastChat.set(username, { lastMessage: message, lastTime: now, counter: 0 })
  }
})
// ------------------------------------------------------------------------

var bannedWords = ["jende", "kos", "kir", "fuck", "bitch", "dick", "cock", "shit", "ass", "cunt", "nigga", "nanat", "swear"];
var regex = new RegExp(bannedWords.join("|"), "i");
bot.on('message', (username, message) => {
  username = username.getText()
  var message = username.split("» ");
  username = message[0]
  message = message[1]

if (regex.test(message)) {
  bot.chat(`${username.split(" ")[1]} Please don't swear in chat.`)
  // bot.chat(`/tempmute ${username.split(" ")[1]} 6h`)
}
});
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout }) 
rl.on('line', (input) => { bot.chat(input) })

bot.on('kicked', console.log)
bot.on('error', console.log)
