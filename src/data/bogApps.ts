

const BOG_APPS = [
    {
        id: 'bogsynth',
        title: 'Bogsynth',
        url: 'https://www.bogsynth.com',
        description: 'Probably the best online synthesizer on the market.',
        image: './apps/bogsynth.png'
    },
    {
        id: 'ricochet',
        title: 'Ricochet Bogbots',
        url: 'https://www.bogsynth.com/old/ricochet/',
        description: 'Online multiplayer version of the bord game Ricochet Robots.',
        image: './apps/ricochet_bogbots.png'
    },
    {
        id: 'donkenkong',
        title: 'Don Ken Kong',
        url: 'https://www.bogsynth.com/old/DonKenKong/',
        description: '30th birthday gift to a friend named Ken Kong.',
        image: './apps/donkenkong.png'
    },
    {
        id: 'split',
        title: 'Split',
        url: 'https://www.bogsynth.com/split/landing',
        description: 'PWA for tracking expenses with friends',
        image: './apps/split.png'
    },
    {
        id: 'blogal',
        title: 'Blogal',
        url: 'https://www.bogsynth.com/blogal',
        description: 'Web app for storing notes',
        image: './apps/blogal.png'
    },
    {
        id: 'bogcinema',
        title: 'Bogcinema',
        url: 'https://www.bogsynth.com/bogcinema/#/',
        description: 'Web app for viewing youtube videos in sync with friends',
        image: './apps/bogcinema.png'
    },
    {
        id: 'bogworld',
        title: 'Bogworld',
        url: 'https://www.bogsynth.com/bogworld/',
        description: 'Web app for randomly generating world maps',
        image: './apps/bogworld.png'
    },
    {
        id: 'diary',
        title: 'Diary',
        url: 'https://www.bogsynth.com/diary/',
        description: 'Web app for keeping tabs on how you feel',
        image: './apps/diary.png'
    },
    {
        id: 'echo',
        title: 'Echo',
        url: 'https://www.bogsynth.com/echo/',
        description: 'Game that tests your memory',
        image: './apps/echo.png'
    },
    {
        id: 'fightnight',
        title: 'Fight Night',
        url: 'https://www.bogsynth.com/fightnight/',
        description: 'PWA for keeping tracks of fightning game stats',
        image: './apps/fightnight.png'
    },
    {
        id: 'gameover',
        title: 'Game Øver',
        url: 'https://www.bogsynth.com/game-over/',
        description: 'PWA for keeping tracks of instrumental practice sessions',
        image: './apps/game-over.png'
    },
    {
        id: 'gargongus',
        title: 'Gargongus',
        url: 'https://www.bogsynth.com/gargongus/',
        description: 'Among Us clone for friends',
        image: './apps/gargongus.png'
    },
    {
        id: 'gargstone',
        title: 'Gargstone',
        url: 'https://www.bogsynth.com/gargstone/',
        description: 'Harthstone clone for friends - in development',
        image: './apps/Gargstone.png'
    },
    {
        id: 'ine',
        title: 'ine',
        url: 'https://www.bogsynth.com/ine/',
        description: 'Gift for my niece',
        image: './apps/ine.png'
    },
    {
        id: 'levenshtesin',
        title: 'Levenshtein',
        url: 'https://www.bogsynth.com/levenshtein/',
        description: 'Levenshtein algorithm implementation with extra spice',
        image: './apps/levenshtein.png'
    },
    {
        id: 'mabaretaden',
        title: 'Må bare ta den',
        url: 'https://www.bogsynth.com/mabaretaden/',
        description: 'App for faking phone calls to get out of sticky situations',
        image: './apps/mabaretaden.png'
    },
    {
        id: 'piano',
        title: 'Piano - Alicia Keys',
        url: 'https://www.bogsynth.com/piano/',
        description: 'App to help niece learn piano song',
        image: './apps/piano.png'
    },
    {
        id: 'wowmicro',
        title: 'Wow micro',
        url: 'https://www.bogsynth.com/slay3/',
        description: 'MMORPG',
        image: './apps/slay.png'
    },
    {
        id: 'smashnation',
        title: 'Smash Nation',
        url: 'https://www.bogsynth.com/smash-nation/',
        description: 'War game to play against friends',
        image: './apps/smash-nation.png'
    },
    {
        id: 'tomport',
        title: 'Tomport',
        url: 'https://www.bogsynth.com/tomport/',
        description: 'Page to get help from remote people',
        image: './apps/tomport.png'
    },
    {
        id: 'tomportadmin',
        title: 'Tomport Admin',
        url: 'https://www.bogsynth.com/tomportadmin/',
        description: 'Page for remotely helping other people',
        image: './apps/tomportadmin.png'
    },
    {
        id: 'troubadour',
        title: 'Troubadour',
        url: 'https://www.bogsynth.com/troubadour/',
        description: 'Spotify clone',
        image: './apps/troubadour.png'
    },
    {
        id: 'runguy2',
        title: 'Run Guy 2',
        url: 'https://www.bogsynth.com/old/Run Guy 2',
        description: 'Game for testing swipe motion input',
        image: './apps/runguy2.png'
    },
    {
        id: 'acaan',
        title: 'Acaan',
        url: 'https://www.bogsynth.com/old/acaan/',
        description: 'Any card at any number',
        image: './apps/acaan.png'
    },
    {
        id: 'acaan',
        title: 'Acaan',
        url: 'https://www.bogsynth.com/old/arpg/',
        description: 'Action rpg loot testing. Press F to generate loot and I to open inventory',
        image: './apps/arpg.png'
    },
    {
        id: 'bogsynth2',
        title: 'Bogsynth2',
        url: 'https://www.bogsynth.com/old/bogsynth2/',
        description: 'Another one of the best synthesizers of the web.',
        image: './apps/bogsynth2.png'
    },
    {
        id: 'cardtest',
        title: 'Card game test',
        url: 'https://www.bogsynth.com/old/games/card1',
        description: 'Card game testing with p5 js',
        image: './apps/card1.png'
    },
    {
        id: 'hyperfest',
        title: 'Hyperfest',
        url: 'https://www.bogsynth.com/old/hyperfest/',
        description: 'Game created for testing shadow casting in p5js',
        image: './apps/hyperfest.png'
    },
    {
        id: 'd3loot',
        title: 'Diablo 3 Loot',
        url: 'https://www.bogsynth.com/old/loot/',
        description: 'Legendary counter for Diablo 3',
        image: './apps/d3loot.png'
    },
    {
        id: 'mmo1',
        title: 'MMO Test',
        url: 'https://www.bogsynth.com/old/mmo/',
        description: 'Testing how to create non-lag multiplayer in p5js with socket.io',
        image: './apps/mmotest.png'
    },
    {
        id: 'rocketman',
        title: 'Rocketman',
        url: 'https://www.bogsynth.com/old/rocketman/',
        description: 'Rocketman game',
        image: './apps/rocketman.png'
    },
    {
        id: 'sane',
        title: 'Sane',
        url: 'https://www.bogsynth.com/old/sane/',
        description: 'A game testing out streaming of large maps',
        image: './apps/sane.png'
    },
    {
        id: 'sakte',
        title: 'skate',
        url: 'https://www.bogsynth.com/old/skate/',
        description: 'An app to keep track of skateboardtricks performed',
        image: './apps/skate.png'
    },
    {
        id: 'spacevec',
        title: 'Space Vector',
        url: 'https://www.bogsynth.com/old/spacevec/',
        description: 'Learning vector flow field with p5',
        image: './apps/spacevec.png'
    },
    {
        id: 'spektrum',
        title: 'Spektrum',
        url: 'https://www.bogsynth.com/old/spektrum/',
        description: 'Learning how to visualize music with p5',
        image: './apps/spektrum.png'
    },
    {
        id: 'synth2',
        title: 'Synthorama',
        url: 'https://www.bogsynth.com/old/synth2/',
        description: 'A place to sing with friends and relax',
        image: './apps/synthorama.png'
    },
    {
        id: 'todo1',
        title: 'Todo',
        url: 'https://www.bogsynth.com/old/todo/',
        description: 'A simple todo app',
        image: './apps/todo1.png'
    },
    {
        id: 'todo2',
        title: 'Todo Kanban',
        url: 'https://www.bogsynth.com/old/todo2/',
        description: 'A simple kanban board',
        image: './apps/todo2.png'
    },
    {
        id: 'tvbenk',
        title: 'TV Benk',
        url: 'https://www.bogsynth.com/old/tvbenk/',
        description: 'A simple app for comparing TV benches',
        image: './apps/tvbenk.png'
    },
];

export default BOG_APPS;