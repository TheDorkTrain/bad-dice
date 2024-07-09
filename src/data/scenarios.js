//NOTE: Add more schenarios
export const scenarios = [
    {
        id: 1,
        text:'Oh darn! Another Nat 1? We are having some bad luck today!',
        responses: [
            {text:'Its okay it happens', emotion:'happy', nextScenario: 2},
            {text:'This is your fault!', emotion:'angry', nextScenario: 3},
            {text:'Your the only "1" I need', emotion:'blush', nextScenario: 4},
        ],
    },
    // The Happy Path 
    {
        id: 2,
        text:'I knew you would understand! Let\'s get back to playing!',
        responses: [
            {text:'Response 1', emotion:'happy'},
            {text:'Response 2', emotion:'angry'},
            {text:'Response 3', emotion:'blush'},
        ],
    },
    //The Jail Path
    {
        id: 3,
        text:'WHAT! THATS JUST HOW PROBABILITY WORKS!',
        responses: [
            {text:'Response 1', emotion:'happy'},
            {text:'Response 2', emotion:'angry'},
            {text:'Response 3', emotion:'blush'},
        ],
    },
    //The Lovers Path
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
    {
        id: 9,
        ending: true,
        text:'You moan and release the dice onto the table even though the dungeon master did not ask. You turn and look at the table. Everyone is staring at you. There is silence. The player to your left yells “NAT 20 HELL YEAH” Everyone Cheers. You have no idea what you were suppose to be rolling for but it feels great. You look down at your die, happy you gave it another chance.',
        responses: [
        ],
    },
];