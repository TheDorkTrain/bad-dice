//NOTE: Add more schenarios
//according to google docs with all the words and punctiation we have a total of 746 words on this page of code (word count)
export const scenarios = [
    {//Introduction Scenario - 26 words
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
            {text:'Hell yeah! Let\s roll!!!', emotion:'happy', nextScenario: 16},
            {text:'Fine, but NO more nat 1s!', emotion:'angry', nextScenario: 10},
            {text:'Of course, anything for you!', emotion:'blush', nextScenario: 4},
        ],
    },
    {
        id: 16,
        text:'Im sorry I caused you to trip and fall, but look we found treasure!',
        responses: [
            {text:'Ouch, that really hurt...but HELL YEAH TREASURE!', emotion:'happy', nextScenario: 17},
            {text:'You always know how to surprise me, I think we need some alone time', emotion:'blush', nextScenario: 4},
            {text:'I FELL ON MY FACE! THIS BETTER BE WORTH IT!', emotion:'angry', nextScenario: 3},
        ],
    },
    {
        id: 17,
        text:'*Player Sneezes* Bless you! Hey look at that, we revealed a secret door!',
        responses: [
            {text:'WHO CARES ABOUT THE DOOR! All the ENEMIES know im HERE now!', emotion:'angry', nextScenario: 12},
            {text:'I dont mind these nat 1s, but please stop, youre embarassing me.', emotion:'sad', nextScenario: 18},
            {text:'*wipes nose* Look at that!', emotion:'happy', nextScenario: 18},
        ],
    },
    {
        id: 18,
        text:'*Player Mixes Potions and an explosion of glitter happens* WOW! That was so pretty, we should do it again!',
        responses: [
            {text:'I do look fabulous now!', emotion:'happy', nextScenario: 15},
            {text:'I should spread this glitter from my body to yours!', emotion:'blush', nextScenario: 9},
            {text:'What did you just do to me?! GLITTER WILL NEVER GO AWAY! YOU RUINED MY ARMOR!', emotion:'angry', nextScenario: 14},
        ],
    },
    //The Jail Path 207 words total for this path
    //If there are different paths you would like some of these answers to go to, feel free to change it, i just felt like it made sense for this to mainly lead to dice jail
    {
        id: 3,
        text:'WHAT! THATS JUST HOW PROBABILITY WORKS!',
        responses: [
            {text:'Haha, I guess youre just extra special.', emotion:'happy', nextScenario: 2},
            {text:'REALLY?! CANT YOU ROLL ANYTHING HIGHER THAN A 1?', emotion:'sad', nextScenario: 10},
            {text:'Youre still my favorite dice!', emotion:'blush', nextScenario: 4},
        ],
    },
    {
        id: 10,
        text:'Im sorry, but you have to admit, that fireball was really cool!',
        responses: [
            {text:'...yeah it was pretty cool, but you still rolled a nat 1!', emotion:'happy', nextScenario: 11},
            {text:'MY EYEBROWS WILL TAKE FOREVER TO GROW BACK!', emotion:'angry', nextScenario: 11},
            {text:'I WISH THAT FIREBALL WOULD HAVE MELTED YOU!', emotion:'sad', nextScenario: 11},
        ],
    },
    {
        id: 11,
        text:'Okay well, remember that time we snuck past the guards at Cragmaw Castle?',
        responses: [
            {text:'You had me sing my own theme song...it was a catchy tune', emotion:'happy', nextScenario: 17},
            {text:'I farted so loud all of the guards were alerted!!!!', emotion:'angry', nextScenario: 12 },
            {text:'I ended up tripping over my own feet!', emotion:'sad', nextScenario: 12},
        ],
    },
    {
        id: 12,
        text:'Please dont throw me in dice jail, remember the time we saw that sexy noble at the royal feast?!',
        responses: [
            {text:'They were very sexy, but your nat 1 didnt help...', emotion:'happy', nextScenario: 13},
            {text:'BECAUSE OF YOU THEY PUT A RESTRAINING ORDER ON ME! YOURE THE WORST WINGMAN EVER!!!!', emotion:'angry', nextScenario: 13},
            {text:'You dice have it so easy, all you do is stop drop and roll and you still mess that up', emotion:'angry', nextScenario: 19},
            {text:'Things were going great and I thought it was going to go somewhere until...I burped in their face', emotion:'blush', nextScenario: 13},
        ],
    },
    {
        id: 13,
        text:'Look, Im sorry for all the nat 1s. I promise it wont happen again!!!',
        responses: [
            {text:'Fine, one last chance and thats it!', emotion:'happy', nextScenario: 15}, 
            {text:'YOU ARE BY FAR THE WORST DICE EVER! IM DONE WITH YOU!!!', emotion:'sad', nextScenario: 14},
        ],
    },
    //The Lovers Path 147 words total for this path 
    {
        id: 4,
        text:'Oh... I had no idea that\'s how you felt...',
        responses: [
            {text:'Rolling dice with you has its advantages', emotion:'happy', nextScenario: 2},
            {text:'I like the feel of your polyhedral plastic against my skin', emotion:'blush', nextScenario: 5},
            {text:'Your the only 1 I need- TO THROW AWAY', emotion:'angry', nextScenario: 12},
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
        text:'Ooooohhhh.. Oh Yeahhhh….. Say Im a Bad Dice',
        responses: [
            {text:'You are a Bad Dice…..', emotion:'blush', nextScenario: 7},
            {text:'This is weird… I\'m going to put you away now..', emotion:'sad', nextScenario: 14},
        ],
    },
    {
        id: 7,
        text:'I bet you like it when I roll nat 1s don\'t you ',
        responses: [
            {text:'Ooooohhhh Yeah….. Kill my Character…', emotion:'blush', nextScenario: 8},
            {text:'You like it when I roll you off the table and step on you?', emotion:'blush', nextScenario: 8},
            {text:'Actually you roll too many nat 1s for my liking', emotion:'sad', nextScenario: 13},
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
    {
        id: 19,
        text:'... ',
        responses: [
            {text:'Us players do all the real work, we can come up with a master plan but it always relies on you to mess it up', emotion:'angry', nextScenario: 20},
            {text:'I\'m switching to digital dice you piece of junk', emotion:'angry', nextScenario: 20},
            {text:'Maybe I went to far, we have had some good memories', emotion: 'sad', nextScenario: 13},
        ],
    },
    {
        id: 20,
        text:'You think players have it so bad? You exist outside the game. All dice get is dragged out of our crowded bags once a week to get yelled at.',
        responses: [
            {text:'Whats happening to me...?', emotion:'angry', nextScenario: 21},
        ],
    },
    {
        id: 21,
        text:'You have crossed a line too many times, you shall now feel the pain every polyhedral feels',
        responses: [
            {text:'Try to scream', emotion:'angry', nextScenario: 22},
        ],
    },
        {
            id: 22,
            ending: true,
            name: 'punishment',
            text:'Your eyes roll back into your head and as they roll back forward dice appear in your pupils. As you open your mouth to scream, your throat bulges and every dice that was ever lost since 1974 comes pouring out of your mouth. The other players at the table scream in shock as they recoil. The last thing you feel is the single largest die forcing its way out of your mouth. You can\'t see what it rolled but you know. A Natural 1',
            responses: [
            ],
        },
    {//72 words
        id: 9,
        ending: true,
        name: 'naughty',
        text:'You moan and release the dice onto the table even though the dungeon master did not ask. You turn and look at the table. Everyone is staring at you. There is silence. The player to your left yells “NAT 20 HELL YEAH” Everyone Cheers. You have no idea what you were suppose to be rolling for but it feels great. You look down at your die, happy you gave it another chance.',
        responses: [
        ],
    },
    {//65 words
        id: 14,
        ending: true,
        name: 'jail',
        text:'You\'re seething with frustration and glare at your dice as it lands yet another dreaded nat 1. Your face reddens, hands trembling with anger as you snatch your traitorous dice from the table. With a dramatic flourish, you toss the dice into a small, ornate box labeled "Dice Jail", slamming the lid shut with finality. The other players echange amused glances, empathizing with your frustration.',
        responses: [
        ],
    },
    {//60 words
        id: 15,
        ending: true,
        name: 'good',
        text:'You roll the dice, and it lands on a perfect natural 20! You jump up, cheering wildly. The other players shout in excitement, high-fiving and clapping. The Dungeon Master smiles, nodding in approval. The room buzzes with joy and energy, and for a moment, everything feels perfect. The dice has redeemed itself, and you all celebrate the incredible roll together.',
        responses: [
        ],
    },
];