//NOTE: Add more schenarios
export const scenarios = [
    {//26 words
        id: 1,
        text:'Oh darn! Another Nat 1? We are having some bad luck today!',
        responses: [
            {text:'Its okay it happens', emotion:'happy', nextScenario: 2},
            {text:'This is your fault!', emotion:'angry', nextScenario: 3},
            {text:'Your the only "1" I need', emotion:'blush', nextScenario: 4},
        ],
    },
    // The Happy Path  25 so far
    {
        id: 2,
        text:'I knew you would understand! Let\'s get back to playing!',
        responses: [
            {text:'Hell yeah! Let\s roll!!!', emotion:'happy'},
            {text:'Fine, but NO more nat 1s!', emotion:'angry'},
            {text:'Of course, anything for you!', emotion:'blush'},
        ],
    },
    //The Jail Path 207 words total for this path
    {
        id: 3,
        text:'WHAT! THATS JUST HOW PROBABILITY WORKS!',
        responses: [
            {text:'Haha, I guess youre just extra special.', emotion:'happy'},
            {text:'REALLY?! CANT YOU ROLL ANYTHING HIGHER THAN A 1?', emotion:'sad'},
            {text:'Youre still my favorite dice!', emotion:'blush'},
        ],
    },
    {
        id: 10,
        text:'Im sorry, but you have to admit, that fireball was really cool!',
        responses: [
            {text:'...yeah it was pretty cool, but you still rolled a nat 1!', emotion:'happy'},
            {text:'MY EYEBROWS WILL TAKE FOREVER TO GROW BACK!', emotion:'sad'},
            {text:'I WISH THAT FIREBALL WOULD HAVE MELTED YOU!', emotion:'angry'},
        ],
    },
    {
        id: 11,
        text:'Okay well, remember that time we snuck past the guards at Cragmaw Castle?',
        responses: [
            {text:'You had me sing my own theme song...it was a catchy tune', emotion:'happy'},
            {text:'I sneezed so loud all of the guards were alerted!!!!', emotion:'angry'},
            {text:'I ended up tripping over my own feet!', emotion:'blush'},
        ],
    },
    {
        id: 12,
        text:'Please dont throw me in dice jail, remember the time we saw that sexy noble at the royal feast?!',
        responses: [
            {text:'They were very sexy, but your nat 1 didnt help...', emotion:'happy'},
            {text:'BECAUSE OF YOU THEY PUT A RESTRAINING ORDER ON ME! YOURE THE WORST WINGMAN EVER!!!!', emotion:'angry'},
            {text:'Things were going great and I thought it was going to go somewhere until...I burped in their face', emotion:'blush'},
        ],
    },
    {
        id: 13,
        text:'Look, Im sorry for all the nat 1s. I promise it wont happen again!!!',
        responses: [
            {text:'Fine, one last chance and thats it!', emotion:'happy'},
            {text:'YOU ARE BY FAR THE WORST DICE EVER! IM DONE WITH YOU!!!', emotion:'sad'},
        ],
    },
    //The Lovers Path 147 words total for this path 
    {
        id: 4,
        text:'Oh... I had no idea that\'s how you felt...',
        responses: [
            {text:'Rolling dice with you has its advantages', emotion:'happy', nextScenario: 2},
            {text:'I like the feel of your polyhedral plastic against my skin', emotion:'blush', nextScenario: 5},
            {text:'Your the only 1 I need- TO THROW AWAY', emotion:'angry', nextScenario: 0},
        ],
    },
    {
        id: 5,
        text:'What a dirty player… people can see you.. ',
        responses: [
            {text:'You are right, let\'s get back to the game.', emotion:'happy', nextScenario: 2},
            {text:'Let me fiddle you with my fingers', emotion:'blush', nextScenario: 6},
        ],
    },
    {
        id: 6,
        text:'Ooooohhhh.. Oh Yeahhhh….. Say Im a Bad Dice ',
        responses: [
            {text:'You are a Bad Dice…..', emotion:'blush', nextScenario: 7},
            {text:'This is weird… I\'m going to put you away now..', emotion:'sad', nextScenario: 0},
        ],
    },
    {
        id: 7,
        text:'I bet you like it when I roll nat 1s don\'t you ',
        responses: [
            {text:'Ooooohhhh Yeah….. Kill my Character…', emotion:'blush', nextScenario: 8},
            {text:'You like it when I roll you off the table and step on you?', emotion:'blush', nextScenario: 8},
            {text:'Actually you roll too many nat 1s for my liking', emotion:'sad', nextScenario: 0},
        ],
    },
    {
        id: 8,
        text:'YESS YESS OH IM SO CLOSE SHAKE ME IN YOUR HAND AND RELEASE ME ONTO THE TABLE ',
        responses: [
            {text:'HERE WE GOO', emotion:'blush', nextScenario: 9},
            {text:'moans and releases', emotion:'blush', nextScenario: 9},
        ],
    },
    {//72 words
        id: 9,
        ending: true,
        text:'You moan and release the dice onto the table even though the dungeon master did not ask. You turn and look at the table. Everyone is staring at you. There is silence. The player to your left yells “NAT 20 HELL YEAH” Everyone Cheers. You have no idea what you were suppose to be rolling for but it feels great. You look down at your die, happy you gave it another chance.',
        responses: [
        ],
    },
    {//65 words
        id: 14,
        ending: true,
        text:'Youre seething with frustration and glare at your dice as it lands yet another dreaded nat 1. Your face reddens, hands trembling with anger as you snatch your traitorous dice from the table. With a dramatic flourish, you toss the dice into a small, ornate box labeled "Dice Jail", slamming the lid shut with finality. The other players echange amused glances, empathizing with your frustration.',
        responses: [
        ],
    },
];