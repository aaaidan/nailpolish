


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

    place: [
        "catwalk",
        "penthouse",
        "spa",
        "hotel",
        "poolside",
        "downtown",
        "uptown",
        "soho",
        
        "mardi gras",
        "paris",
        "new york",
        "milan",
        "berlin",
        "tokyo",
    ],

    feeling: [
        "lonely",
        "blushing",
        "pensive",
        "thoughtful",
        "happy",
        "ecstatic",
        "sassy",
        "charming",
        "disarming",
        "persuasive",
        "perplexed",
        "confused",
        "adventurous",
        "wild",
        "livid",
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
    ],
    feelingNoun: [
        // "sadness",
        "joy",
        "thoughts",
        "happiness",
        "ecstasy",
        "sass",
        "rage",
        "love",
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
        "date",
        "future",
        "trick",
        // "third date", // rare
    ],

    finishAdj: [
        "sparkle",
        "mattle",
    ],

    colour: [
        "pearl",
        "lavender",
        "blush",
        "magenta",
        "mauve",
        "crimson",
        "cerulean",
        "petal",
        "sky",
        "gunmetal",
        "d'argent",
        "rouge",
        "violet",
        "amaranth",
        "sienna",
        "coral",
        "purple",
        "cerise",
        "vermillion",
        "jet",
        "arctic",
        "rainbow",

        ...repeat(5, "{flower}"),
        ...repeat(5, "{jewel}"),
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
    ],
    jewel: [
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

        "{animal}",
    ],
    
    animal: [
        "cheetah",
        "jaguar",
        "dove",
        "parakeet",
        "unicorn", // rare
        "fawn",
    ],

    title: [
        // "feelings",
        "{feeling} {colour}",
        "{adj} {feeling} {colour}",
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
        "{adj} {colour} for {character}",
        "{character}'s {occasion}",
        "{animal}'s {occasion}",
        "{animal} {colour}",
        "{animal} {feelingNoun}",
        
        "{adj} {feelingNoun}",

        // "food",
        // "risque",
        // "nature",
        // "weather",
        // "fame",
        // "slogan (imperative?)",
    ]

}


// lists.title = [ "the {colour} {character}" ]; // override


// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------


function pick(list) {
    return list[Math.floor(list.length * Math.random())];
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