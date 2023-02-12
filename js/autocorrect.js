//target all inputs
const allInputEL = document.querySelectorAll("input")

//correct answers
let correctObj = {
    '1-1-5-A': 'a',
    '1-1-6-King': 'king',
    '1-2-1-this': 'this',
    '1-2-1.1-end': 'end',
    '1-2-2-witness': 'witness',
    '1-2-3-truth': 'truth',
    '1-3-2-Herod-s': 'herod',
    '1-3-3-miracle': 'miracle',
    '1-3-3-miracle-2': 'miracle',
    '1-3-4-sent': 'sent',
    '1-3-5-Pilate': 'pilate',
    '1-4-1-word': 'word',
    '1-4-2-truth': 'truth',
    '1-5-1-fear': 'fear',
    '1-5-2-Peace': 'peace',
    '1-5-3-you': 'you',
    '1-5-4-terrified': 'terrified',
    '1-5-5-affrighted': 'affrighted',
    '1-5-6-spirit': 'spirit',
    '1-6-1-handle': 'handle',
    '1-6-3-Word': 'word',
    '1-5-4-of': 'of',
    '1-6-5-Life': 'life',
    '1-6-1-see': 'see',
    '1-7-1-revealer': 'revealer',
    '1-7-2-revealeth': 'revealeth',
    '1-7-3-revealeth': 'revealeth',
    '1-7-4-manifest': 'manifest',
    '1-7-5-God': 'god',
    '1-7-6-sure': 'sure',
    '1-7-7-light': 'light',
    '1-7-8-dawn': 'dawn',
    '1-7-9-arise': 'arise',
    'Christ': 'christ',
    'tribute': 'tribute',
    'forbidding': 'forbidding',
    'perverting': 'perverting',
    '2-1-2-beginning': 'beginning',
    '2-1-3-convinced': 'convinced',
    '2-1-4-God': 'God',
    '2-2-3-in': 'in',
    '2-1-6-you': 'you',
    '2-1-7-sure': 'sure',
    '2-1-8-light': 'light',
    '2-2': 'dark',
    '2-1-11-third': 'third',
    '2-1-12-Judah': 'Judah',
    '2-1-13-Babylon': 'Babylon',
    '2-1-14-Daniel': 'Daniel',
    '2-1-15-purposed': 'purposed',
    '2-1-16-heart': 'heart',
    '2-1-17-meat': 'meat',
    '2-1-18-wine': 'wine',
    '2-1-19-wisdom': 'wisdom',
    '2-2-20-ten': 'ten',
    '2-1-10-hearts-2': 'hearts',
    '2-2-1-magicians': 'magicians',
    '2-2-2-astrologers': 'astrologers',
    '2-2-3-sorcerers': 'sorcerers',
    '2-2-4-tell': 'tell',
    '2-2-5-man': 'man',
    '2-2-6-none': 'none',
    '2-2-7-not': 'not',
    '2-2-8-desire': 'desire',
    '2-2-9-mercies': 'mercies',
    '2-2-10-thank': 'thank',
    '2-2-11-praise': 'praise',
    '2-2-13-God': 'God',
    '2-2-13-heaven': 'heaven',
    '2-2-14-image': 'image',
    '2-2-15-gold': 'gold',
    '2-2-16-silver': 'silver',
    '2-2-17-brass': 'brass',
    '2-2-18-iron': 'iron',
    '2-2-19-clay': 'clay',
    '2-2-20-stone': 'stone',
    '2-2-21-mountain': 'mountain',
    '2-3-1-Thou': 'Thou',
    '2-3-2-art': 'art',
    '2-3-3-kingdom': 'kingdom',
    '2-2-4-Medes': 'Medes',
    '2-2-5-Persians': 'Persians',
    '2-3-6-Grecia': 'Grecia',
    '2-3-7-strong': 'strong',
    '2-3-9-world': 'world',
    '2-3-8-Ceasar': 'Ceasar',
    '2-3-10-taxed': 'taxed',
    '2-3-11-divided': 'divided',
    '2-3-12-mingle': 'mingle',
    '2-3-13-not': 'not',
    '2-3-14-God': 'God',
    '2-3-15-heaven': 'heaven',
    '2-3-16-kingdom': 'kingdom',
    '2-3-17-consume': 'consume',
    '2-3-18-for': 'for',
    '2-3-19-ever': 'ever',
    '2-3-20-become': 'become',
    '2-3-21-Lord': 'Lord',
    '2-3-22-reign': 'reign',
    '2-3-22-reign-3': 'reign',
    '2-3-23-ever': 'ever',
    '2-3-24-God': 'God',
    '2-3-25-gods': 'gods',
    '2-3-26-Lord': 'Lord',
    '2-3-27-kings': 'kings',
    '2-4-1-will': 'will',
    '2-4-2-done': 'done',
    '2-4-3-seek': 'seek',
    '2-4-4-kingdom': 'kingdom',
    '2-4-5-righteousness': 'righteousness',
    '2-4-6-you': 'you',
    '2-4-7-Christ': 'Christ',
    '2-4-8-heaven': 'heaven',
    '2-4-9-saints': 'saints',
    '2-4-10-household': 'household',
    '2-1-1-end': 'end',
    '3-1-2-bruise': 'bruise',
    '3-1-3-skull': 'skull',
    '3-1-3-skull-2': 'skull',
    '3-3-1-Sanctuary': 'Sanctuary',
    '3-5-4-bread': 'bread',
    '3-5-1-himself': 'himself',
    '3-5-2-sprinkled': 'sprinkled',
    '3-5-3-washed': 'washed',
    '3-5-5-prayer': 'prayer',
    '3-5-6-light': 'light',
    '3-5-6.1-light': 'light',
    '3-5-7-men': 'men',
    '3-5-8-purifieth': 'purifieth',
    '3-5-9-blood': 'blood',
    '4-1-1-reward': 'reward',
    '4-1-2-works': 'works',
    '4-1-3-reward': 'reward',
    '4-1-4-judge': 'judge',
    '4-1-5-heaven': 'heaven',
    '4-1-6-judgment': 'judgment',
    '4-1-7-books': 'books',
    '4-1-8-judgment': 'judgment',
    '4-3-2-two': 'two',
    '4-3-3-three': 'three',
    '4-4-1-pattern': 'pattern',
    '4-4-2-cleanse': 'cleanse',
    '4-4-3-his': 'his',
    '4-4-4-blood': 'blood',
    '4-4-5-blood': 'blood',
    '4-4-6-purified': 'purified',
    '4-4-7-better': 'better',
    '4-4-8-appear': 'appear',
    '4-4-9-minister': 'minister',
    '4-6-1-day': 'day',
    '4-6-2-year': 'year',
    '4-6-3-day': 'day',
    '4-6-4-year': 'year',
    '4-7-1-thy': 'thy',
    '4-7-2-thy': 'thy',
    '4-8-1-command': 'command',
    '4-8-2-restore': 'restore',
    '4-8-3-build': 'build',
    '4-9-1-seven': 'seven',
    '4-9-2-threescore': 'threescore',
    '4-9-3-two': 'two',
    '4-10-1-fifteenth': 'fifteenth',
    '4-10-2-Jesus': 'Jesus',
    '4-11-1-confirm': 'confirm',
    '4-11-2-testament': 'testament',
    '4-11-3-time': 'time',
    '4-11-4-due': 'due',
    '4-11-5-cease': 'cease',
    '4-12-1-always': 'always',
    '4-12-2-standing': 'standing',
    '4-12-3-judge': 'judge',
    '4-13-1-is': 'is',
    '4-13-2-come': 'come',
    '4-13-3-advocate': 'advocate',
    '4-13-4-propitiation': 'propitiation',
    '4-13-5-world': 'world',
    '4-13-6-liveth': 'liveth',
    '4-13-7-intercession': 'intercession',
    '4-13-8-save': 'save',
    '5-1-1-enmity': 'enmity',
    '5-1-2-head': 'head',
    '5-1-3-heel': 'heel',
    '5-1-4-skull': 'skull',
    '5-1-5-Golgotha': 'Golgotha',
    '5-1-6-Calvary': 'Calvary',
    '5-3-1-nation': 'nation',
    '5-3-2-families': 'families',
    '5-3-3-blessed': 'blessed',
    '5-3-5-Abraham': 'Abraham',
    '5-3-4-gospel': 'gospel',
    '5-5-1-cross': 'cross',
    '5-5-2-cross': 'cross',
    '5-5-3-power': 'power',
    '5-6-1-seed': 'seed',
    '5-7-1-Christ': 'Christ',
    '5-9-1-forgiven': 'forgiven',
    '5-9-2-covered': 'covered',
    '5-9-3-iniquity': 'iniquity',
    '5-9-4-guile': 'guile',
    '5-10-1-power': 'power',
    '5-10-2-God': 'God',
    '5-11-1-son': 'son',
    '5-11-2-firstborn': 'firstborn',
    '5-11-3-son': 'son',
    '5-11-4-afflicted': 'afflicted',
    '5-11-5-saved': 'saved',
    '5-11-6-redeemed': 'redeemed',
    '5-11-7-carried': 'carried',
    '5-11-8-carry': 'carry',
    '5-11-9-bear': 'bear',
    '5-11-10-deliver': 'deliver',
    '5-12-1-thee': 'thee',
    '5-12-2-power': 'power',
    '5-12-3-declared': 'declared',
    '5-12-4-know': 'know',
    '5-12-5-Lord': 'Lord',
    '5-12-6-bless': 'bless',
    '5-13-1-Baalim': 'Baalim',
    '5-13-2-images': 'images',
    '5-13-3-arms': 'arms',
    '5-13-4-healed': 'healed',
    '4-13-5-love': 'love',
    '5-13-6-backsliding': 'backsliding',
    '5-13-8-exalt': 'exalt',
    '5-13-7-none': 'none',
    '5-14-1-help': 'help',
    '5-14-2-king': 'king',
    '5-14-4-Bethel': 'Bethel',
    '4-14-4-king-s': 'kings',
    '5-17-1-firstborn': 'firstborn',
    '4-17-2-son': 'son',
    '4-17-3-pleased': 'pleased',
    '5-18-1-twelve': 'twelve',
    '5-18-2-tribes': 'tribes',
    '5-18-3-unbelief': 'unbelief',
    '5-18-4-faith': 'faith',
    '5-18-5-inwardly': 'inwardly',
    '5-18-6-one': 'one',
    '5-18-8-heirs': 'heirs',
    '5-18-9-commandments': 'commandments',
    '5-18-10-inwardly': 'inwardly',
    '5-18-11-heart': 'heart',
    '5-19-7-seed': 'seed',
    '5-19-1-love': 'love',
    '5-19-2-heart': 'heart',
    '5-19-3-soul': 'soul',
    '5-20-1-not': 'not',
    '5-20-2-world': 'world',
    '5-20-3-not': 'not',
    '5-20-3-not-2': 'not',
    '5-21-1-thy': 'thy',
    '6-1-1-husband': 'husband',
    '6-1-2-away': 'away',
    '6-1-3-espoused': 'espoused',
    '6-1-4-virgin': 'virgin',
    '6-1-5-Christ': 'Christ',
    '6-1-6-married': 'married',
    '6-2-1-dwell': 'dwell',
    '6-3-1-observation': 'observation',
    '6-3-2-you': 'you',
    '6-3-4-not': 'not',
    '6-3-5-world': 'world',
    '6-4-1-knock': 'knock',
    '6-4-2-open': 'open',
    '6-4-3-body': 'body',
    '6-4-4-in': 'in',
    '6-4-5-you': 'you',
    '6-4-6-bought': 'bought',
    '6-4-7-price': 'price',
    '6-4-8-body': 'body',
    '6-5-1-prepared': 'prepared',
    '6-5-2-waiteth': 'waiteth',
    '6-5-3-mansions': 'mansions',
    '6-5-4-prepare': 'prepare',
    '6-5-5-place': 'place',
    '6-5-6-receive': 'receive',
    '6-6-1-deceive': 'deceive',
    '6-6-2-Christ': 'Christ',
    '6-6-3-deceive': 'deceive',
    '6-6-4-Christs': 'Christs',
    '6-6-5-prophets': 'prophets',
    '6-6-7-deceive': 'deceive',
    '6-6-8-transformed': 'transformed',
    '6-6-9-light': 'light',
    '6-7-1-lightning': 'lightning',
    '6-7-2-eye': 'eye',
    '6-7-2-see': 'see',
    '6-7-4-heaven': 'heaven',
    '6-7-5-manner': 'manner',
    '6-7-5-all': 'all',
    '6-7-7-angels': 'angels',
    '6-7-8-angels': 'angels',
    '6-7-9-shout': 'shout',
    '6-7-10-trump': 'trump',
    '6-7-11-up': 'up',
    '6-7-12-changed': 'changed',
    '6-7-14-incorruption': 'incorruption',
    '6-7-15-incorruption': 'incorruption',
    '6-7-16-change': 'change',
    '6-7-17-body': 'body',
    '6-7-18-his': 'his',
    '6-9-1-thief': 'thief',
    '6-9-2-watch': 'watch',
    '6-9-3-thief': 'thief',
    '6-9-4-hour': 'hour',
    '6-9-5-watcheth': 'watcheth',
    '6-9-6-garments': 'garments',
    '6-10-1-down': 'down',
    '6-10-2-low': 'low',
    '6-10-3-fear': 'fear',
    '6-10-4-glory': 'glory',
    '6-10-5-idols': 'idols',
    '6-5-6-worship': 'worship',
    '6-10-7-always': 'always',
    '6-10-8-ready': 'ready',
    '6-10-9-righteousness': 'righteousness',
    '7-1-1-God': 'God',
    '7-1-2-not': 'not',
    '7-1-3-love': 'love',
    '7-1-4-boldness': 'boldness',
    '7-1-5-hearts': 'hearts',
    '7-1-6-minds': 'minds',
    '7-1-7-true': 'TRUE',
    '7-1-8-faith': 'faith',
    '7-1-9-love': 'love',
    '7-1-10-fufilling': 'fufilling',
    '7-1-11-law': 'law',
    '7-2-1-whirlwind': 'whirlwind',
    '7-2-2-soweth': 'soweth',
    '7-2-3-law': 'law',
    '7-3-1-earth': 'earth',
    '7-4-1-truth': 'truth',
    '7-4-2-knowledge': 'knowledge',
    '7-4-3-knowledge': 'knowledge',
    '7-4-4-forgotten': 'forgotten',
    '7-4-5-break': 'break',
    '7-4-6-blinded': 'blinded',
    '7-5-1-duty': 'duty',
    '7-6-1-he': 'he',
    '7-6-2-stone': 'stone',
    '7-6-3-God': 'God',
    '7-6-4-ark': 'ark',
    '7-6-5-ten': 'ten',
    '7-6-6-writing': 'writing',
    '7-6-7-book': 'book',
    '7-6-8side': 'side',
    '7-6-9-against': 'against',
    '7-7-1-handwriting': 'handwriting',
    '7-7-2-ordinances': 'ordinances',
    '7-7-3-meat': 'meat',
    '7-7-4-drink': 'drink',
    '7-7-5-holyday': 'holyday',
    '7-7-6-days': 'days',
    '7-7-7-ordinances': 'ordinances',
    '7-7-8-law': 'law',
    '7-7-9-forbid': 'forbid',
    '7-7-10-ungodliness': 'ungodliness',
    '7-7-11-lusts': 'lusts',
    '7-7-12-godly': 'godly',
    '7-7-13-establish': 'establish',
    '7-8-1-lawless': 'lawless',
    '7-8-2-disobedient': 'disobedient',
    '7-8-3-sinners': 'sinners',
    '7-8-4-gospel': 'gospel',
    '7-9-1-commandments': 'commandments',
    '8-1-1-God': 'God',
    '8-1-1-God-2': 'God',
    '8-1-2-knoweth': 'knoweth',
    '8-1-4-first': 'first',
    '8-1-5-great': 'great',
    '8-1-6-thyself': 'thyself',
    '8-1-7-all': 'all',
    '8-1-8-law': 'law',
    '8-2-1-death': 'death',
    '8-2-2-sound': 'sound',
    '8-2-3-fables': 'fables',
    '8-3-1-all': 'all',
    '8-3-3-transgressor': 'transgressor',
    '8-3-3-transgressor-2': 'transgressor',
    '8-3-4-judged': 'judged',
    '8-3-5-law': 'law',
    '8-4-1-created': 'created',
    '8-4-2-pleasure': 'pleasure',
    '8-5-1-LORD': 'LORD',
    '8-5-2-made': 'made',
    '8-5-2-made-2': 'made',
    '8-6-1-seventh': 'seventh',
    '8-6-2-blessed': 'blessed',
    '8-6-3-seventh': 'seventh',
    '8-6-4-sanctified': 'sanctified',
    '8-6-5-rested': 'rested',
    '8-6-6-Sabbath': 'Sabbath',
    '8-6-7-hallowed': 'hallowed',
    '8-7-1-reverse': 'reverse',
    '8-8-1-man': 'man',
    '8-9-1-me': 'me',
    '8-9-2-them': 'them',
    '8-9-3-LORD': 'LORD',
    '8-9-4-sanctify': 'sanctify',
    '8-10-1-seventh': 'seventh',
    '8-10-2-Seventh': 'Seventh',
    '8-10-3-seventh': 'seventh',
    '8-12-1-Lord': 'Lord',
    '8-12-3-sabbath': 'sabbath',
    '8-12-3-sabbath-3': 'sabbath',
    '8-12-4-Lord': 'Lord',
    '8-12-5-My': 'My',
    '8-13-1-even': 'even',
    '8-13-2-Even': 'Even',
    '8-14-1-custom': 'custom',
    '8-14-1-custom-2': 'custom',
    '8-15-1-sabbath': 'sabbath',
    '8-15-2-rest': 'rest',
    '8-15-3-seventh': 'seventh',
    '8-15-4-preparation': 'preparation',
    '8-15-5-sabbath': 'sabbath',
    '8-15-6-commandment': 'commandment',
    '8-15-7-first': 'first',
    '8-16-1-sabbath': 'sabbath',
    '8-16-2-sabbath': 'sabbath',
    '8-16-3-sabbath': 'sabbath',
    '8-16-4-sabbath': 'sabbath',
    '8-16-5-spake': 'spake',
    '8-17-1-work': 'work',
    '8-17-2-good': 'good',
    '8-17-3-save': 'save',
    '8-18-1-sabbath': 'sabbath',
    '8-18-2-worship': 'worship',
    '8-19-1-hallow': 'hallow',
    '9-1-1-heaven': 'heaven',
    '9-1-2-Lucifer': 'Lucifer',
    '9-1-3-bright': 'bright',
    '9-1-4-morning': 'morning',
    '9-1-5-I': 'I',
    '9-1-6-I': 'I',
    '9-1-7-I': 'I',
    '9-1-8-I': 'I',
    '9-1-9-I': 'I',
    '9-1-10-iniquity': 'iniquity',
    '9-1-11-lifted': 'lifted',
    '9-1-12-corrupted': 'corrupted',
    '9-1-13-wisdom': 'wisdom',
    '9-2-1-not': 'not',
    '9-2-2-cast': 'cast',
    '9-2-3-earth': 'earth',
    '9-3-1-tail': 'tail',
    '9-3-2-third': 'third',
    '9-3-3-stars': 'stars',
    '9-3-4-lies': 'lies',
    '9-3-4-lies-2': 'lies',
    '9-4-1-woman': 'woman',
    '9-4-2-war': 'war',
    '9-4-1-woman-3': 'woman',
    '9-4-1-commandments': 'commandments',
    '9-5-1-truth': 'truth',
    '9-5-2-mercy': 'mercy',
    '9-5-3-knowledge': 'knowledge',
    '9-5-4-rejected': 'rejected',
    '9-5-5-forgotten': 'forgotten',
    '9-5-6-law': 'law',
    '9-5-7-break': 'break',
    '9-5-8-blinded': 'blinded',
    '9-5-9-not': 'not',
    '9-5-10-steal': 'steal',
    '9-5-11-kill': 'kill',
    '9-5-12-destroy': 'destroy',
    '9-6-1-enemy': 'enemy',
    '9-6-2-tares': 'tares',
    '9-6-3-wicked': 'wicked',
    '9-6-4-devil': 'devil',
    '9-8-1-good': 'good',
    '9-8-2-not': 'not',
    '9-8-3-die': 'die',
    '9-8-4-love': 'love',
    '9-9-1-bruise': 'bruise',
    '9-9-2-cross': 'cross',
    '9-9-3-place': 'place',
    '9-9-4-skull': 'skull',
    '9-9-5-Calvary': 'Calvary',
    '9-9-6-crucified': 'crucified',
    '9-10-1-blood': 'blood',
    '9-10-2-Lamb': 'Lamb',
    '9-10-3-testimony': 'testimony',
    '9-10-3-testimony-2': 'testimony',
    '9-10-5-boldly': 'boldly',
    '9-10-6-mercy': 'mercy',
    '9-10-7-grace': 'grace',
    '9-10-8-I': 'I',
    '9-10-9-I': 'I',
    '9-10-10-I': 'I',
    '9-10-11-I': 'I',
    '9-10-12-bruise': 'bruise',
    '9-10-13-twice': 'twice',
    '9-10-13-twice-2': 'twice',
    '10-1-1-lion': 'lion',
    '10-1-2-bear': 'bear',
    '10-1-3-leopard': 'leopard',
    '10-1-4-beast': 'beast',
    '10-1-5-terrible': 'terrible',
    '10-1-6-diverse': 'diverse',
    '10-1-7-ten': 'ten',
    '10-2-1-horn': 'horn',
    '10-2-2-eyes': 'eyes',
    '10-2-3-mouth': 'mouth',
    '10-3-1-among': 'among',
    '10-3-2-after': 'after',
    '10-3-3-little': 'little',
    '10-3-4-three': 'three',
    '10-3-5-man': 'man',
    '10-3-6-diverse': 'diverse',
    '10-3-7-great': 'great',
    '10-3-8-words': 'words',
    '10-3-9-war': 'war',
    '10-3-10-saints': 'saints',
    '10-3-11-wear': 'wear',
    '10-3-12-time': 'time',
    '10-3-13-times': 'times',
    '10-3-14-dividing': 'dividing',
    '10-3-15-times': 'times',
    '10-3-16-laws': 'laws',
    '10-3-17-world': 'world',
    '10-3-18-all': 'all',
    '11-1-1-rebuke': 'rebuke',
    '11-1-2-chasten': 'chasten',
    '11-1-3-correcteth': 'correcteth',
    '11-1-4-love': 'love',
    '11-1-4-love-2': 'love',
    '11-1-6-faith': 'faith',
    '11-1-7-gift': 'gift',
    '11-1-8-ungodliness': 'ungodliness',
    '11-1-9-lusts': 'lusts',
    '11-1-10-righteously': 'righteously',
    '11-2-5-godly': 'godly',
    '11-3-1-health': 'health',
    '11-4-1-wicked': 'wicked',
    '11-4-2-foolish': 'foolish',
    '11-4-3-before': 'before',
    '11-4-4-defileth': 'defileth',
    '11-4-5-written': 'written',
    '11-5-1-body': 'body',
    '11-5-2-spirit': 'spirit',
    '11-5-3-eat': 'eat',
    '11-5-4-drink': 'drink',
    '11-5-5-do': 'do',
    '11-5-6-glory': 'glory',
    '11-5-8-sacrifice': 'sacrifice',
    '11-5-8-conformed': 'conformed',
    '11-5-9-transformed': 'transformed',
    '11-7-1-grace': 'grace',
    '11-7-2-given': 'given',
    '11-7-3-opened': 'opened',
    '11-7-4-opened': 'opened',
    '11-7-5-strength': 'strength',
    '11-7-6-power': 'power',
    '11-7-7-power': 'power',
    '11-7-8-strength': 'strength',
    '11-7-9-sufficient': 'sufficient',
    '11-7-10-weakness': 'weakness',
    '11-8-1-mocker': 'mocker',
    '11-8-2-wise': 'wise',
    '11-8-3-good': 'good',
    '11-9-1-diseases': 'diseases',
    '11-9-2-healeth': 'healeth',
    '11-9-3-feeble': 'feeble',
    '11-9-4-health': 'health',
    '11-9-5-nations': 'nations',
    '11-10-1-herb': 'herb',
    '11-10-2-tree': 'tree',
    '11-10-3-patience': 'patience',
    '11-10-4-godliness': 'godliness',
    '11-11-1-refuse': 'refuse',
    '11-11-2-evil': 'evil',
    '11-11-3-good': 'good',
    '11-11-4-good': 'good',
    '11-11-5-sufficient': 'sufficient',
    '11-11-6-much': 'much',
    '11-12-1-chew': 'chew',
    '11-12-2-divide': 'divide',
    '11-122-3-fins': 'fins',
    '11-12-4-scales': 'scales',
    '11-12-5-chew': 'chew',
    '11-12-6-divide': 'divide',
    '11-12-7-unclean': 'unclean',
    '11-12-8-unclean': 'unclean',
    '11-12-9-eagle': 'eagle',
    '11-12-10-fat': 'fat',
    '11-12-11-blood': 'blood',
    '11-13-1-swine-s': 'swine',
    '11-13-2-consumed': 'consumed',
    '11-13-3-destruction': 'destruction',
    '11-13-4-belly': 'belly',
    '11-14-1-all': 'all',
    '11-14-2-purposed': 'purposed',
    '11-14-3-heart': 'heart',
    '11-14-4-help': 'help',
    '11-14-5-hope': 'hope',
    '12-1-1-die': 'die',
    '12-1-2-not': 'not',
    '12-1-3-ground': 'ground',
    '12-1-4-dust': 'dust',
    '12-1-5-return': 'return',
    '12-2-1-dust': 'dust',
    '12-2-2-ground': 'ground',
    '12-2-3-breath': 'breath',
    '12-2-4-soul': 'soul',
    '12-3-1-souls': 'souls',
    '12-3-3-souls': 'souls',
    '12-3-3-soul': 'soul',
    '12-3-4-die': 'die',
    '12-4-1-immortal': 'immortal',
    '12-4-2-immortality': 'immortality',
    '12-4-3-earth': 'earth',
    '12-5-1-breath': 'breath',
    '12-5-2-spirit': 'spirit',
    '12-5-3-breath': 'breath',
    '12-5-4-perish': 'perish',
    '12-5-5-dead': 'dead',
    '12-6-1-not': 'not',
    '12-6-1-dead': 'dead',
    '12-6-3-not': 'not',
    '12-6-4-silence': 'silence',
    '12-6-6-wait': 'wait',
    '12-6-6-call': 'call',
    '12-7-1-deceiveth': 'deceiveth',
    '12-7-2-not': 'not',
    '12-7-3-grave': 'grave',
    '12-7-4-no': 'no',
    '12-7-5-house': 'house',
    '12-7-6-tomb': 'tomb',
    '12-7-7-not': 'not',
    '12-7-7-not-2': 'not',
    '12-7-9-devils': 'devils',
    '12-7-10-miracles': 'miracles',
    '12-7-11-signs': 'signs',
    '12-7-12-wonders': 'wonders',
    '12-7-13-deceive': 'deceive',
    '12-7-14-spirits': 'spirits',
    '12-7-15-devils': 'devils',
    '12-7-16-coming': 'coming',
    '12-7-17-hear': 'hear',
    '12-7-18-forth': 'forth',
    '12-9-1-today': 'today',
    '12-9-2-not': 'not',
    '12-9-3-ascended': 'ascended',
    '12-10-1-destroy': 'destroy',
    '12-10-2-devil': 'devil',
    '12-10-3-them': 'them',
    '12-11-1-saints': 'saints',
    '12-11-2-hope': 'hope',
    '12-11-2-hope-2': 'hope',
    '12-11-4-come': 'come',
    '13-1-1-changed': 'changed',
    '13-1-2-incorruption': 'incorruption',
    '13-1-3-immortality': 'immortality',
    '13-1-4-swallowed': 'swallowed',
    '13-1-5-live': 'live',
    '13-1-6-arise': 'arise',
    '13-1-7-sing': 'sing',
    '13-1-8-rise': 'rise',
    '13-1-9-up': 'up',
    '13-2-1-consume': 'consume',
    '13-2-2-destroy': 'destroy',
    '13-2-3-not': 'not',
    '13-2-4-one': 'one',
    '13-2-5-other': 'other',
    '13-2-6-ground': 'ground',
    '13-3-1-void': 'void',
    '13-3-2-light': 'light',
    '13-3-3-trembled': 'trembled',
    '13-3-4-man': 'man',
    '13-3-5-wilderness': 'wilderness',
    '13-3-6-empty': 'empty',
    '13-3-7-turneth': 'turneth',
    '13-3-8-spoiled': 'spoiled',
    '13-3-9-devoured': 'devoured',
    '13-3-10-burned': 'burned',
    '13-3-12-not': 'not',
    '13-4-1-hold': 'hold',
    '13-4-2-dragon': 'dragon',
    '13-4-3-bound': 'bound',
    '13-5-1-all': 'all',
    '13-5-1-life': 'life',
    '13-5-3-damnation': 'damnation',
    '13-6-1-judgment': 'judgment',
    '13-6-2-reigned': 'reigned',
    '13-6-3-judge': 'judge',
    '13-6-4-time': 'time',
    '13-6-5-saints': 'saints',
    '13-6-6-judge': 'judge',
    '13-6-7-world': 'world',
    '13-6-8-judge': 'judge',
    '13-6-9-judge': 'judge',
    '13-7-1-loosed': 'loosed',
    '13-7-2-deceive': 'deceive',
    '13-7-3-compassed': 'compassed',
    '13-7-4-fire': 'fire',
    '13-7-5-cast': 'cast',
    '13-7-6-burneth': 'burneth',
    '13-7-7-fire': 'fire',
    '13-8-1-cometh': 'cometh',
    '13-8-2-burn': 'burn',
    '13-8-3-ashes': 'ashes',
    '13-8-4-day': 'day',
    '13-8-5-reserved': 'reserved',
    '13-9-1-eternal': 'eternal',
    '13-9-2-ashes': 'ashes',
    '13-9-3-ensample': 'ensample',
    '13-11-1-ever': 'ever',
    '13-11-2-ever': 'ever',
    '13-11-3-dieth': 'dieth',
    '13-11-4-quenched': 'quenched',
    '13-11-5-coal': 'coal',
    '13-11-6-fire': 'fire',
    '13-12-1-heart': 'heart',
    '13-12-2-speaketh': 'speaketh',
    '13-12-3-account': 'account',
    '13-13-1-return': 'return',
    '13-13-2-live': 'live',
    '13-13-3-pleasure': 'pleasure',
    '13-13-4-all': 'all',
    '13-13-5-new': 'new',
    '14-1-1-not': 'not',
    '14-1-2-prisoners': 'prisoners',
    '14-1-3-stronger': 'stronger',
    '14-1-4-freely': 'freely',
    '14-2-1-blood': 'blood',
    '14-3-1-water': 'water',
    '14-3-2-baptism': 'baptism',
    '14-3-3-sea': 'sea',
    '14-3-4-baptized': 'baptized',
    '14-4-1-fufil': 'fufil',
    '14-4-2-righteousness': 'righteousness',
    '14-4-3-up': 'up',
    '14-4-4-water': 'water',
    '15-5-1-Buried': 'Buried',
    '14-5-2-risen': 'risen',
    '14-5-3-dead': 'dead',
    '14-5-3-dead-2': 'dead',
    '14-6-1-water': 'water',
    '14-6-2-Spirit': 'Spirit',
    '14-6-3-enter': 'enter',
    '14-7-1-death': 'death',
    '14-7-2-baptism': 'baptism',
    '14-7-3-newness': 'newness',
    '14-7-4-life': 'life',
    '14-7-5-crucified': 'crucified',
    '14-7-6-serve': 'serve',
    '14-7-7-dead': 'dead',
    '14-7-8-new': 'new',
    '14-7-9-passed': 'passed',
    '14-7-10-new': 'new',
    '14-8-1-teach': 'teach',
    '14-8-2-Teaching': 'Teaching',
    '14-8-5-Christ': 'Christ',
    '14-8-6-provision': 'provision',
    '14-8-5-believeth': 'believeth',
    '14-8-4-Believeth': 'Believeth',
    '14-9-1-baptized': 'baptized',
    '14-9-2-sins': 'sins',
    '14-10-1-cannot': 'cannot',
    '14-10-2-kingdom': 'kingdom',
    '14-10-3-water': 'water',
    '14-10-4-Spirit': 'Spirit',
    '14-10-4-Spirit-2': 'Spirit',
    '15-1-1-multiply': 'multiply',
    '15-1-2-washed': 'washed',
    '15-1-3-anointed': 'anointed',
    '15-1-4-comeliness': 'comeliness',
    '15-2-1-Looking': 'Looking',
    '15-2-2-hasting': 'hasting',
    '15-2-3-iniquity': 'iniquity',
    '15-2-4-sin': 'sin',
    '15-2-5-evil': 'evil',
    '15-2-6-good': 'good',
    '15-2-7-glory': 'glory',
    '15-2-8-beauty': 'beauty',
    '15-2-9-pride': 'pride',
    '15-3-1-commandments': 'commandments',
    '15-3-2-world': 'world',
    '15-3-3-things': 'things',
    '15-4-1-remember': 'remember',
    '15-4-2-power': 'power',
    '15-4-3-stewards': 'stewards',
    '15-4-faithful': 'faithful',
    '15-5-1-life': 'life',
    '15-5-2-breath': 'breath',
    '15-5-3-crucified': 'crucified',
    '15-5-4-Christ': 'Christ',
    '15-5-5-me': 'me',
    '15-5-6-faith': 'faith',
    '15-5-7-love': 'love',
    '15-5-8-constraineth': 'constraineth',
    '15-5-9-him': 'him',
    '15-6-1-drunkenness': 'drunkenness',
    '15-6-2-cares': 'cares',
    '15-6-3-Redeeming': 'Redeeming',
    '15-6-4-ended': 'ended',
    '15-6-4-ended-2': 'ended',
    '15-6-6-blessed': 'blessed',
    '15-6-7-sabbaths': 'sabbaths',
    '15-6-8-hallow': 'hallow',
    '15-7-1-render': 'render',
    '15-7-2-tithes': 'tithes',
    '15-7-3-live': 'live',
    '15-7-4-offerings': 'offerings',
    '15-7-5-tithes': 'tithes',
    '15-7-6-tithes': 'tithes',
    '15-7-7-offerings': 'offerings',
    '15-8-1-image': 'image',
    '15-8-2-God': 'God',
    '15-8-3-glory': 'glory',
    '15-8-4-chosen': 'chosen',
    '15-8-5-royal': 'royal',
    '15-8-6-holy': 'holy',
    '15-8-7-peculiar': 'peculiar',
    '15-9-1-hear': 'hear',
    '15-9-2-ears': 'ears',
    '15-9-3-blood': 'blood',
    '15-9-4-eyes': 'eyes',
    '15-9-4-eyes-2': 'eyes',
    '15-10-1-danced': 'danced',
    '15-10-2-ephod': 'ephod',
    '15-11-1-wicked': 'wicked',
    '15-11-2-turn': 'turn',
    '15-11-2-turn-2': 'turn',
    '15-11-4-world': 'world',
    '15-11-4-world-2': 'world',
    '15-12-1-true': 'TRUE',
    '15-12-2-honest': 'honest',
    '15-12-3-just': 'just',
    '15-12-4-pure': 'pure',
    '15-12-5-lovely': 'lovely',
    '15-12-6-good': 'good',
    '15-12-7-vain': 'vain',
    '15-12-8-law': 'law',
    '15-13-1-silver': 'silver',
    '15-13-2-gold': 'gold',
    '15-13-3-snared': 'snared',
    '15-13-4-abomination': 'abomination',
    '15-13-5-modest': 'modest',
    '15-13-6-gold': 'gold',
    '15-13-7-pearls': 'pearls',
    '15-13-8-hidden': 'hidden',
    '15-13-9-ornament': 'ornament',
    '15-13-10-meek': 'meek',
    '15-13-10-meek-2': 'meek',
    '15-13-12-body': 'body',
    '15-14-1-body': 'body',
    '15-14-2-spirit': 'spirit',
    '15-14-3-destroy': 'destroy',
    '15-14-4-holy': 'holy',
    '15-14-5-ye': 'ye',
    '15-14-6-bodies': 'bodies',
    '15-14-7-transformed': 'transformed',
    '15-15-1-commandments': 'commandments',
    '15-15-2-do': 'do',
    '16-1-1-you': 'you',
    '16-1-2-husband': 'husband',
    '16-1-3-married': 'married',
    '16-1-4-wife': 'wife',
    '16-2-1-church': 'church',
    '16-2-2-pillar': 'pillar',
    '16-2-3-ground': 'ground',
    '16-2-4-truth': 'truth',
    '16-3-1-out': 'out',
    '16-3-2-country': 'country',
    '16-3-3-church': 'church',
    '16-3-4-wilderness': 'wilderness',
    '16-4-1-fewest': 'fewest',
    '16-4-2-commandments': 'commandments',
    '16-4': 'remnant',
    '16-5-1-commandmenets': 'commandmenets',
    '16-5-2-testimony': 'testimony',
    '16-6-1-gospel': 'gospel',
    '16-6-2-pervert': 'pervert',
    '16-6-3-accursed': 'accursed',
    '16-6-4-persuade': 'persuade',
    '16-6-5-pleased': 'pleased',
    '16-6-6-tradition': 'tradition',
    '16-6-7-tradition': 'tradition',
    '16-6-8-mouth': 'mouth',
    '16-6-9-heart': 'heart',
    '16-6-10-gospel': 'gospel',
    '16-6-11-power': 'power',
    '16-6-12-endure': 'endure',
    '16-6-13-this': 'this',
    '16-6-14-witness': 'witness',
    '16-7-1-everlasting': 'everlasting',
    '16-7-2-patience': 'patience',
    '16-7-3-commandments': 'commandments',
    '16-7-4-faith': 'faith',
    '16-8-1-preach': 'preach',
    '16-8-2-commandments': 'commandments',
    '16-8-3-worship': 'worship',
    '16-8-4-glory': 'glory',
    '16-8-3.1-judgement': 'judgement',
    '16-8-5-worship': 'worship',
    '16-8-6-beast': 'beast',
    '16-8-7-image': 'image',
    '16-8-8-forehead': 'forehead',
    '16-8-9-hand': 'hand',
    '16-8-10-testomony': 'testomony',
    '16-9-11-dead': 'dead',
    '16-9-12-rest': 'rest',
    '16-9-13-cloud': 'cloud',
    '16-9-14-one': 'one',
    '16-8-16-preach': 'preach',
    '16-8-17-every': 'every',
    '16-8-15-fallen': 'fallen',
    '16-9-1-sheep': 'sheep',
    '16-9-2-follow': 'follow',
    '16-9-3-know': 'know',
    '16-9-4-bring': 'bring',
    '16-9-5-one': 'one',
    '17-1-1-worship': 'worship',
    '17-2-1-slew': 'slew',
    '17-1-3-mark': 'mark',
    '17-2-3-mark': 'mark',
    '17-2-4-mark': 'mark',
    '17-3-1-foreheads': 'foreheads',
    '17-3-2-heart': 'heart',
    '17-3-3-soul': 'soul',
    '17-3-4-mind': 'mind',
    '17-3-5-commandments': 'commandments',
    '17-4-1-law': 'law',
    '17-4-2-laws': 'laws',
    '17-4-3-mind': 'mind',
    '17-4-4-hearts': 'hearts',
    '17-4-5-write': 'write',
    '17-4-6-thinketh': 'thinketh',
    '17-4-7-heart': 'heart',
    '17-4-8-name': 'name',
    '17-4-9-foreheads': 'foreheads',
    '17-5-1-Remember': 'Remember',
    '17-5-2-sabbath': 'sabbath',
    '17-5-3-God': 'God',
    '17-5-4-hallowed': 'hallowed',
    '17-6-1-sabbaths': 'sabbaths',
    '17-6-2-sing': 'sing',
    '17-6-3-sabbaths': 'sabbaths',
    '17-6-4-sign': 'sign',
    '17-6-4.1-sign': 'sign',
    '17-7-1-times': 'times',
    '17-7-1-times-2': 'times',
    '17-7-3-man': 'man',
    '17-11-1-mark': 'mark',
    '17-11-2-name': 'name',
    '17-12-1-Remember': 'Remember',
    '17-12-2-worship': 'worship',
    '17-12-3-beast': 'beast',
    '17-12-4-image': 'image',
    '17-12-5-wrath': 'wrath',
    '18-1-1-deceive': 'deceive',
    '18-1-2-elect': 'elect',
    '18-1-3-false': 'FALSE',
    '18-2-1-testimony': 'testimony',
    '18-2-2-prophecy': 'prophecy',
    '18-3-1-prophets': 'prophets',
    '18-3-2-evangelists': 'evangelists',
    '18-3-3-teachers': 'teachers',
    '18-3-4-perfecting': 'perfecting',
    '18-3-5-faith': 'faith',
    '18-3-6-knowledge': 'knowledge',
    '18-3-7-fulness': 'fulness',
    '18-3-8-Christ': 'Christ',
    '18-3-9-coming': 'coming',
    '18-4-1-prosper': 'prosper',
    '18-5-1-mocked': 'mocked',
    '18-5-2-despised': 'despised',
    '18-5-3-misused': 'misused',
    '18-5-4-perish': 'perish',
    '18-5-5-prophesyings': 'prophesyings',
    '18-5-6-Prove': 'Prove',
    '18-6-1-pass': 'pass',
    '18-6-2-hearken': 'hearken',
    '18-6-3-me': 'me',
    '18-6-4-confesseth': 'confesseth',
    '18-6-5-Jesus': 'Jesus',
    '18-6-6-law': 'law',
    '18-6-7-testimony': 'testimony',
    '18-6-8-fruits': 'fruits',
    '19-3-1-sea': 'sea',
    '19-3-2-heads': 'heads',
    '19-3-3-horns': 'horns',
    '19-3-4-blasphemy': 'blasphemy',
    '19-3-5-leopard': 'leopard',
    '19-3-6-bear': 'bear',
    '19-3-7-lion': 'lion',
    '19-4-1-dragon': 'dragon',
    '19-5-1-earth': 'earth',
    '19-5-2-horns': 'horns',
    '19-5-3-lamb': 'lamb',
    '19-5-4-dragon': 'dragon',
    '19-5-5-power': 'power',
    '19-5-6-worship': 'worship',
    '19-8-1-power': 'power',
    '19-8-2-cause': 'cause',
    '19-8-3-killed': 'killed',
    '19-8-4-mark': 'mark',
    '19-1-1-loved': 'loved',
    '19-1-2-washed': 'washed',
    '19-1-3-blood': 'blood',
    '20-2-1-stars': 'stars',
    '20-2-2-angels': 'angels',
    '20-2-3-candlesticks': 'candlesticks',
    '20-2-4-churches': 'churches',
    '20-2-5-messenger': 'messenger',
    '20-4-1-cold': 'cold',
    '20-4-2-hot': 'hot',
    '20-4-3-wretched': 'wretched',
    '20-4-4-miserable': 'miserable',
    '20-4-5-poor': 'poor',
    '20-4-6-blind': 'blind',
    '20-4-7-naked': 'naked',
    '20-5-1-spue': 'spue',
    '20-6-1-door': 'door',
    '20-6-2-knock': 'knock',
    '20-7-1-buy': 'buy',
    '20-7-2-anoint': 'anoint',
    '20-8-1-hearken': 'hearken',
    '20-8-2-incline': 'incline',
    '20-8-3-hear': 'hear',
    '20-8-4-sup': 'sup',
    '20-8-5-sit': 'sit',
    '20-8-6-throne': 'throne',
    '21-1-1-strangers': 'strangers',
    '21-1-2-pilgrims': 'pilgrims',
    '21-1-3-country': 'country',
    '21-1-4-heavenly': 'heavenly',
    '21-1-5-heaven': 'heaven',
    '21-1-7-change': 'change',
    '21-1-7-fashioned': 'fashioned',
    '21-1-8-prepared': 'prepared',
    '21-1-9-waiteth': 'waiteth',
    '21-1-10-righteousness': 'righteousness',
    '21-1-11-mansions': 'mansions',
    '21-1-12-receive': 'receive',
    '21-1-12-receive-2': 'receive',
    '21-2-1-God': 'God',
    '21-2-2-heaven': 'heaven',
    '21-3-1-twelve': 'twelve',
    '21-3-2-foursquare': 'foursquare',
    '21-3-3-equal': 'equal',
    '21-3-4-pearls': 'pearls',
    '21-3-5-gold': 'gold',
    '21-3-6-river': 'river',
    '21-3-7-life': 'life',
    '21-3-8-tree': 'tree',
    '21-4-1-ready': 'ready',
    '21-4-2-kingdom': 'kingdom',
    '21-4-3-nations': 'nations',
    '21-4-4-end': 'end',
    '21-5-1-everlasting': 'everlasting',
    '21-5-2-patience': 'patience',
    '21-5-3-keep': 'keep',
    '21-6-1-changed': 'changed',
    '21-6-2-incorruptible': 'incorruptible',
    '21-6-3-immortality': 'immortality',
    '21-6-4-change': 'change',
    '21-6-5-body': 'body',
    '21-7-1-death': 'death',
    '21-7-2-sorrow': 'sorrow',
    '21-7-3-crying': 'crying',
    '21-7-4-crying': 'crying',
    '21-7-5-violence': 'violence',
    '21-7-6-not': 'not',
    '21-7-7build': 'build',
    '21-7-8-inhabit': 'inhabit',
    '21-7-9-plant': 'plant',
    '21-7-10-eat': 'eat',
    '21-7-11-enjoy': 'enjoy',
    '21-7-11-enjoy-2': 'enjoy',
    '21-8-1-walked': 'walked',
    '21-8-2-took': 'took',
    '21-8-3-prophesied': 'prophesied',
    '21-8-4-cometh': 'cometh',
    '21-8-5-judgment': 'judgment',
    '21-8-6-agreed': 'agreed',
    '21-8-7-pleased': 'pleased',
    '21-8-8-faith': 'faith',
    '21-8-9-refused': 'refused',
    '21-8-10-Choosing': 'Choosing',
    '21-8-11-endured': 'endured',
    '21-8-12-prayed': 'prayed',
    '21-8-13-again': 'again',
    '21-8-14-intercession': 'intercession',
    '21-10-1-Lamb': 'Lamb',
    '21-10-2-light': 'light',
    '21-10-3-Lamb': 'Lamb',
    '21-11-1-speak': 'speak',
    '21-11-2-glory': 'glory',
    '21-11-3-serve': 'serve',
    '21-11-4-sing': 'sing',
    '21-11-5-sing': 'sing',
    '21-11-6-voice': 'voice',
    '21-11-7-melody': 'melody',
    '21-11-8-worship': 'worship',

}

//find all ids
for (let id = 0; id < allInputEL.length; id++) {
    // console.log(allInputEL[id].id)
    allInputEL[id].addEventListener("focusout", isCorrect, {
    })

}
// on click find ID, Match to a list, check anwser against

function isCorrect(e) {
    //take information from the target
    console.log(e.target.id, 'Yes I am here')
    if (e.target.id in correctObj) {
        console.log(e.target.value, "value")
        if (e.target.value === '') {
            let myId = document.getElementById(e.target.id).removeAttribute("style")
            return myId
        }
        // compare values target with key
        if (e.target.value.toLowerCase() === correctObj[e.target.id]) {
            let value = correctObj[e.target.id]
            // get the id  to append to
            let myId = document.getElementById(e.target.id).setAttribute("style", "background-color:#66FF99;")
            console.log("Yes I work", value, myId)

        } else if (e.target.value.toLowerCase() !== correctObj[e.target.id]) {
            let myId = document.getElementById(e.target.id).setAttribute("style", "background-color:#FF0000;")
            console.log("wrong")
        } else {
            let myId = document.getElementById(e.target.id).removeAttribute("style")
        }
        //Todo make guard so that does fire until the word length is equal or more than the correct answer
    }

}