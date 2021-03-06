


// var test = 
// `

// [intensifier]
// craazy
// excessively

// [adj]
// :intensifier: deep
// iridescent

// [colors]
// :adj: blue
// :adj: red
// :intensifier: :adj: yellow

// `;


// test.split("\n").filter(x => x.trim().length).reduce((x,i,a) => {
//     if (x.match(/[./))
// }, { current: "default" })

function repeat(count, element) {
    return Array(count).fill(element);
}

var lists = {

    intensifier: [
        "really",
        "truly",
        "just",
        "madly",
        "gently",
        "beautifully",
        "perfectly",
        "radically",
        "unbelievably",
    ],

    superlative: [
        "hottest",
        "softest",
        "deepest",
        "brightest",
        "favorite",
        "smoothest",
        "best",
        "top",
        "latest",
        "gentlest",
        "!most {adj}",
    ],

    adv: [
        "luciously",
        "deeply",
        "madly",
        "fabulously",
        "gorgeously",
        "glamorously",
        "!!verily",
        "!preposterously",
        "freely",
        "thoughtfully",
        "pensively",
        "happily",
        "ecstatically",
        "wildly",
        "sassily",
        "charmingly",
        "disarmingly",
        "persuasively",
        "perplexingly",
        "confusingly",
        "adventurously",
        "lovingly",
        "naughtily",
        "demurely",
        "honestly",
        "joyfully",
        "seductively",
        "salaciously",
        "carelessly",
        "recklessly",
        "foolishly",
        "tamely",
        "savagely",
        "fiercely",
        "sleekly",
        "passionately",
        "extravagantly",
        "outrageously",
        "fantastically",
        "perfectly",
        "wildly",
        "secretly",
        "so",
        "dangerously",

    ],

    adj: [
        "iridescent",
        "deep",
        "dank",
        "burnt",
        "bright",
        "murky",
        "grand",
        "dusty",
        "milky",
        "smooth",
        "soft",
        "double",
        "twin",
        "bridal",
        "luscious",
        "gorgeous",
        "glamorous",
        "dusky",
        "sun-kissed",
        "sunny",
        "moonlit",
        "midnight",
        "arctic",
        "sequinned",
        "adorned",
        "unadorned",
        "glittering",
        "candlelit",
        "hazy",
        "forgotten",
        "treasured",
        "secret",
        "new",
        "favourite",
        "non-binary",
        "intersectional",
        "undefined",
        "transmutable",
        "universal",
        "enveloped",
        "caressed",
        "moon-kissed",
        "star-struck",
        "irregular",
        "beautiful",
        "stunning",
        "dewy",
        "frosty",
        "bestowed",
        "impressive",
        "breathtaking",
        "minty-fresh",
        "minty",
        "unquestionable",
        "unmistakable",
        "occasional",
        "rare",
        "precious",
        "solemn",
        "daring",
        "dashing",
        "stubborn",
        "rosy",
        "cheerful",
        "single",
        
        "!toxic",




        "!equine",
        "lupine",
        "!canine",
        "feline",
        "serpentine",
        "vulpine",
        "!!bovine",
        "!!porcine",
        "!!supine",
        
        ...repeat(5, "{placeAdj}"),

        ...repeat(5, "{place}"),

        ...repeat(5, "{feeling}"),
        ...repeat(5, "{superlative}"),
        
        ...repeat(5, "{intensifier} {adj}"),
    ],

    placeAdj: [
        "parisian",
        "japanese",
    ],

    item: [
        "dancecard",
        "{flower}",
        "spell",
        "bomb",
        "bombshell",
        "eyebrow",
        "whisper",
        "spaceship",
        "twin",
        "dream",
        "ember",
        "spark",
        "gift",
        "soul",
        "tiara",
        "crush",
        "proposal",
        "suggestion",
        "eyelash",
        "cheek",
        "ticket",
        "escape",
        "situation",
        "sleep",
        "morning",
        "evening",
        "dress",
        "tuxedo",
        "sun",
        "moon",
        "stars",
        "universe",
        "convertible",
        "impossibility",
        "promise",
        "spotlight",
        "accusation",
        "novella",

        "heart-break",
        "affair",
        "kiss",
        "bouquet",
        "message",
        "manifesto",
        "dare",
        "hope",
        "daydream",
        "memory",
        "reverie",
        "sonata",
        "moonlight",
        "morning light",
        "expectation",
        "breath",
        "sigh",
        "whisper",
        "cobweb",
        "moonbeam",
        "sunbeam",
        "destiny",
        "diamond",
        "pearl",
        "singularity",
        "candlelight",
        "betrayal",
        "loveletter",
        "galaxy",
        "vice",
        "parcel",
        "insignia",

        "photon",
        "electron",
        "neutron",
        "gamma ray",
    ],
    
    place: [
        "catwalk",
        "penthouse",
        "spa",
        "hotel",
        "poolside",
        "dancefloor",
        "outer space",
        "fireside",
        "ballroom",
        "uptown",
        "soho",
        "hinterland",
        "tundra",
        "desert",
        "dreamscape",
        "backstage",
        "boudoir",
        "centre stage",
        "downtown",
        "rainforest",
        "jungle",



        
        "mardi gras",
        "paris",
        "new york",
        "milan",
        "berlin",
        "tokyo",
    ],

    feeling: [
        "ardent",
        "lonely",
        "free",
        "thoughtful",
        "blushing",
        "pensive",
        "happy",
        "ecstatic",
        "loopy",
        "wild",
        "sassy",
        "livid",
        "charming",
        "disarming",
        "persuasive",
        "perplexed",
        "confused",
        "adventurous",
        "loving",
        "sexy",
        "rompy",
        "stompy",
        "belligerent",
        "naughty",
        "silly",
        "demure",
        "honest",
        "international",
        "cosmopolitan",
        "joyful",
        "stormy",
        "seductive",
        "salacious",
        "lacivious",
        "wanton",
        "careless",
        "reckless",
        "foolish",
        "untamed",
        "wild",
        "savage",
        "fierce",
        "inclement",
        "windswept",
        "blustery",
        "sleek",
        "incendiary",
        "incensed",
        "passionate",
        "smitten",
        "infatuated",
        "extravagant",
        "outrageous",
        "fanciful",
        "fantastic",
        "tamed",
        "tame",
        "fervent",
        "earnest",
        "celebrated",
        "delighted",
        "unrequited",
        "blameless",
        "honorary",
        "spicy",
        "sweet",
        "big",
        "tiny",
        "miniature",
        "pequeño",
        "adorable",
        "dazzling",
        "bewitching",
        "enraged",
        "rageful",
    ],
    feelingNoun: [
        // "sadness",
        "joy",
        "fantasy",
        "outrage",
        "reflections",
        "happiness",
        "ecstasy",
        "sass",
        "rage",
        "love",
        "seduction",
        "persuasion",
        "romp",
        "stomp",
        "belligerence",
        "demureness",
        "honesty",
        "pride",
        "!!toxicity",
    ],

    occasion: [
        "wedding day",
        "birthday",
        "moving day",
        "new year's eve",
        "holiday",
        "vacation",
        "roadtrip",
        "{adj} night out",
        "{character}'s night out",
        "girl's night",
        "boy's night",
        "anniversary",
        "special occasion",
        "surprise",
        "surprise party",
        "birthday party",
        "party",
        "adventure",
        "festival",
        "parade",
        "celebration",
        "spa day",
        "first date",
        "blind date",
        "future",
        "trick",
        "disco",
        "debut",
        "day off",
        "safari",

        "!mardi gras",
        "!discothèque",
        "!photoshoot",
        "!promo",

        "!!third date",
        "!!pubcrawl",
    ],

    finishAdj: [
        "sparkle",
        "matte",
        "holo",
        "mirrored",
        "chrome",
        "holographic",
        "crackled",
        "!crazed",
        "buff",
        "pearlescent",
        "evanescent",
        "smoky",
        "hazy",
        "rusty",
        "rusted",
        "watercolour",
        "faded",
        "glowing",
        "verdant",
        "mossy",
        "marbled",
        "antique",
        "powder",
        "shimmering",
        "silken",
        "silky",
        "sugary",
        "burnished",
        "muted",
        "amplified",
        "powdery",
        "buttery",
        "multifaceted",
        "sparkly",














    ],

    colour: [
        "pearl",
        "scarlet",
        "lavender",
        "blush",
        "magenta",
        "mauve",
        "crimson",
        "!cerulean",
        "petal",
        "sky",
        "gunmetal",
        "argenté",
        "rouge",
        "violet",
        "!amaranth",
        "sienna",
        "coral",
        "purple",
        "cerise",
        "!vermillion",
        "jet",
        "rainbow",
        "blonde",
        "midnight",
        "buff",
        "taupe",
        "grey",
        "green",
        "mint",
        "pink",
        "orange",
        "yellow",
        "!alabaster",
        "marble",
        "brunette",
        "auburn",

        ...repeat(10, "{food}"),
        ...repeat(10, "{flower}"),
        ...repeat(10, "{precious}"),
    ],

    food: [
        "chocolate",
        "lime",
        "champagne",
        "cherry",
        "cinnamon",
        "raspberry",
        "strawberry",
        "blueberry",
        "birthday cake",
        "soda",
        "oyster",
        "escargot",
        "jello",
        "jelly",
        "lemonade",
        "candy",
        "lollipop",
        "cotton candy",
        "gummi-bear",
        "butter",
        "milk",
        "buttermilk",
        "lemondrop",
        "coffee",
        "latté" ,
        "espresso",
        "rosé",
        "merlot",
        "caramel",
        "taffy",
        "watermelon",
        "peach",
        "blackberry",
        "milkshake",
        "sorbét",
        "frappé",
        "cappuccino",
        "honey",
        "honeycomb",
        "cucumber",
        "milk",
        "cream",
        "tea",
        "vanilla",
        "spice",





    ],
    precious: [
        "amber",
        "amethyst",
        "ruby",
        "gold",
        "silver",
        "diamond",
        "tourmaline",
        "sapphire",
        "copper",
        "emerald",
        "jade",
        "jewel",
        "platinum",
        "gold",
        "titanium",
        "alloy",
        "bronze",
    ],

    flower: [
        "fuchsia",
        'lily',
        'rose',
        'iris',
        'peony',
        'poppy',
        'orchid',
        'cherryblossom',
        'lupin',
        "sunflower",
        "tea rose",
        "snowdrop",
        "roses",
        "violet",
        // "carnations",
        "carnation",
        "buttercup",
        "blossom",
        "rosebud",
    ],

    character: [
        "sugardaddy",
        "suga-mama",
        "president",
        "ma'am",
        "madam",
        "babe",
        "lady",
        "pilot",
        "CEO",
        // "accountant",
        "librarian",
        "flaneur",
        "debutante",
        "sweet-talker",
        "beau",
        "bae",
        "bébé",
        "wedding planner",
        "bride",
        "groom",
        "barista",
        "barrister",
        "individual",
        "provocateur",
        "agent",
        "princess",
        "queen",
        "prince",
        "king",
        "messenger",
        "celebrity",
        "lover",
        "best friend",
        "bestie",
        "bridesmaid",
        "best man",
        "VIP",
        "mystery guest",
        "cutie",
        "ballerina",
        "cadet",
        "superstar",
        "star",
        "love",
        "darling",
        "sweetheart",
        "sweet pea",
        "trickster",
        "harbinger",
        "protagonist",
        "hero",
        "heroine",
        "angel",
        "venus",
        "neptune",
        "interloper",
        "soothsayer",
        
        ...repeat(20, "{animal}"),
        "!{monster}",
    ],
    
    monster: [
        "phantom",
        "witch",
        "familiar",
        "monster",
        "dragon",
        "fairy",
        "!!taniwha",
    ],

    animal: [
        "cheetah",
        "jaguar",
        "dove",
        "!parakeet",
        "!!lorikeet",
        "!!unicorn", // rare
        "fawn",
        "pony",
        "bunny",
        "butterfly",
        "viper",
        "lizard",
        "tiger",
        "fox",
        "bearcub",
        "kitten",
        "puppy",
        "!dragon",
    ],

    pair: [
        "{character} vs. {character}",
        "{character} & {character}",
        "{character} + {character}",
        "{character} and {character}",
        "{character} meets {character}"
    ],

    title: [
        ...repeat(5, "{feeling} {colour}"),
        ...repeat(5, "{feeling} {adj} {colour}"),
        ...repeat(5, "{finishAdj} {colour}"),
        ...repeat(5, "{feeling} {finishAdj} {colour}"),
        "{colour} {feelingNoun}",

        // "descriptors",
        "{character} {colour}",
        "{colour} {character}",
        // "the {colour} {character}" // rare
        "{character}'s {feelingNoun}",
        "{feeling} {character}",
        "{occasion} {colour}",
        "{occasion} {flower}",
        "{occasion} {food}",
        "{adj} {occasion}",
        // "{adj} {occasion} for {character}", // boring
        "{adj} {colour} (for my {character})",
        "to my {character}",
        "his {adj} {item}",
        "their {adj} {item}",
        "her {adj} {item}",
        "{character}'s {occasion}",
        "{animal}'s {occasion}",
        "{colour} {animal}",
        "{animal} {colour}",
        "{animal} {feelingNoun}",
        
        "{feelingNoun} without {feelingNoun}",
        "{feeling} but {feeling}",
        "{feeling} yet {feeling}",
        "{feeling} and {feeling}",
        "all {feelingNoun}, no {feelingNoun}",
        "all {feelingNoun} and no {feelingNoun}",
        
        "{adj} {feelingNoun}",
        
        "{place} {feelingNoun}",

        ...repeat(10, "{adj} {item}"),

        "{pair}"

        // "food",
        // "risque",
        // "nature",
        // "weather",
        // "fame",
        // "slogan (imperative?)",
    ]

}

// override
// lists.occasion = [
//     "{adj} night out",
//     "{character}'s night out",
// ];
// lists.title = lists.title.filter(x => x.includes('{occasion}')); // [ "the {colour} {character}" ]; 

// lists.title = ["{finishAdj} {animal} {colour}"];
// 
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------


const rareChance = 0.05;
const pickCount = [0,0,0];

/**
 * 
 * @param {String[]} picklist 
 */
function pick(picklist) {

    let rareness = Math.random() < rareChance ? ( Math.random() < rareChance ? 2 : 1 ) : 0;
    let list;
    
    rareness++;
    do {
        rareness--;
        list = picklist.filter(x => x.match(RegExp(`^\!{${rareness}}[^!]`)));
    } while(list.length == 0);

    const r = Math.random();
    const index = Math.floor(list.length * r);
    if (!list[index]) {
        debugger;
    }
    const pickedWord = list[index].replace(/^(!*)/, "");
    if (rareness > 0) {
        console.log(`Picking rare (${rareness}) word: ${pickedWord}.`);
    }
    pickCount[rareness] = (++pickCount[rareness]) || 1;

    return pickedWord;
}

function parse(str) {
    return str.replace(/\{(.+?)\}/g, (substring, listName) => {
        if (!lists[listName]) { return `##${listName}##` }
        return parse(pick(lists[listName]));
    });
}

/** @type {HTMLDivElement} */
const main = document.querySelector('.l-main');

class NailFlavor {
    constructor({ title, template }) {
        /** @type {Node} */
        this.node = NailFlavor.nailTemplate.content.cloneNode(true);

        this.flavor = this.node.querySelector(".flavor");

        const hue = 360*Math.random();
        const sat = 100 * (1 - Math.pow(0.5, Math.random() * 4));
        const lightness = 50;

        //this.flavor.querySelector(".swatch").style.setProperty("--color", `hsl(${hue}deg, ${sat}%, ${lightness}%)`);
        //this.flavor.querySelector(".swatch").style.setProperty("--shadow-color", `hsla(${hue}deg, ${(sat + 100) / 2}%, ${15}%, 0.5)`);

        this.flavor.querySelector(".title").textContent = title;
        this.flavor.querySelector(".template").textContent = template;

    }   
}
/** @type {HTMLTemplateElement} */
NailFlavor.nailTemplate = document.querySelector("template#nail-flavor");




const flavor = () => {
    let template = pick(lists.title);
    return { 
        title: parse(template),
        template
    }
}

for (let i=0; i<300; i++) {
    let { title, template } = flavor();
    main.appendChild(new NailFlavor({ title, template }).node);
}

const totalPicks = pickCount.reduce((a,b) => a+b);
const rarePicks = (pickCount[1] || 0);
const legendaryPicks = (pickCount[2] || 0);
console.log("Total Picks: ", totalPicks);
console.log("Rare:", rarePicks,`(${(rarePicks / totalPicks * 100).toFixed(2)}%)`);
console.log("Legendary:", legendaryPicks, `(${(legendaryPicks / totalPicks * 100).toFixed(2)}%)`);



document.querySelector(".button-to-top").addEventListener('click', () => {
    document.scrollingElement.scrollTo(0,0);
});
