


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
    ],

    adv: [
        "luciously",
        "deeply",
        "madly",
        "fabulously",
        "gorgeously",
        "glamorously",
        "verily",
        "preposterously",
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
        "joyfully!!",
        "seductively!",
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

    ],

    adj: [
        "iridescent",
        "deep",
        "burnt",
        "bright",
        "murky",
        "toxic",
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
        "gloomy",
        "sun-kissed",
        "sunny",
        "moonlit",
        "midnight",
        "arctic",
        "sequinned",
        "adorned",
        "glittering",
        "candle-lit",
        "hazy",
        "forgotten",
        "treasured",
        "secret",
        "your new",
        "favourite",




        "equine",
        "bovine",
        "lupine",
        "supine",
        "canine",
        "feline",
        "porcine",
        "serpentine",
        "vulpine",

        "{placeAdj}",

        "{place}",

        "{feeling}",
        "{superlative}",
        
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




    ],
    
    place: [
        "catwalk",
        "penthouse",
        "spa",
        "hotel",
        "poolside",
        "dancefloor",
        "outer space",
        "wildfire",

        "downtown",
        "uptown",
        "soho",
        "hinterland",
        "tundra",
        "desert",
        "dreamscape",

        
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
    ],
    feelingNoun: [
        // "sadness",
        "joy",
        "fantasy",
        "outrage",
        "thoughts",
        "happiness",
        "ecstasy",
        "sass",
        "rage",
        "opinions",
        "love",
        "seduction",
        "persuasion",
        // "sex",
        "romp",
        "stomp",
        "belligerence",
        // "silliness",
        "demureness",
        "honesty",
        "toxicity",
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
        "occasion",
        "surprise",
        "surprise party",
        "birthday party",
        "party",
        "photoshoot",
        "promo",
        "adventure",
        "festival",
        "parade",
        "mardi gras",
        "celebration",
        "spa day",
        "first date",
        "blind date",
        "future",
        "trick",
        "disco",
        "debut",
        // "discothèque", // rare
        // "third date", // rare
    ],

    finishAdj: [
        "sparkle",
        "matte",
        "holo",
        "mirrored",
        "chrome",
        "holographic",
        "crackled",
        "crazed",
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






    ],

    colour: [
        "pearl",
        "scarlet",
        "lavender",
        "blush",
        "magenta",
        "mauve",
        "crimson",
        "cerulean",
        "petal",
        "sky",
        "gunmetal",
        "argenté",
        "rouge",
        "violet",
        "amaranth",
        "sienna",
        "coral",
        "purple",
        "cerise",
        "vermillion",
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
        "solicitor",
        "provocateur",
        "agent",
        "princess",
        "queen",
        "prince",
        "king",
        "catlady",
        "celebrity",
        "lover",
        "best friend",
        "bestie",
        "bridesmaid",
        "best man",
        "VIP",
        "mystery guest",
        "lover",


        "{monster}",
        "{animal}",
    ],
    
    monster: [
        "phantom",
        "witch",
        "monster",
        "dragon",
        "fairy",
    ],

    animal: [
        "cheetah",
        "jaguar",
        "dove",
        "parakeet",
        "unicorn", // rare
        "fawn",
        "pony",
    ],

    title: [
        // "feelings",
        "{feeling} {colour}",
        "{feeling} {adj} {colour}",
        "{finishAdj} {colour}",
        "{feeling} {finishAdj} {colour}",
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
        // "his {adj} {item}", // this is not about him
        "her {adj} {item}",
        "{character}'s {occasion}",
        "{animal}'s {occasion}",
        "{colour} {animal}",
        "{animal} {colour}",
        "{animal} {feelingNoun}",
        
        "{adj} {feelingNoun}",

        "{adj} {item}"

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
// lists.title = ["{feeling} {finishAdj} {colour}"];

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------


function pick(list) {
    const r = Math.random();
    const index = Math.floor(list.length * r);
    if (!list[index]) {
        debugger;
    }
    return list[index];
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

        this.node.querySelector(".title").textContent = title;
        this.node.querySelector(".template").textContent = template;
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



document.querySelector(".button-to-top").addEventListener('click', () => {
    document.scrollingElement.scrollTo(0,0);
});