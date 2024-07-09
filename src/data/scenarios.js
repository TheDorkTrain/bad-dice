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
    {
        id: 2,
        text:'I knew you would understand! Let\'s get back to playing!',
        responses: [
            {text:'Response 1', emotion:'happy'},
            {text:'Response 2', emotion:'angry'},
            {text:'Response 3', emotion:'blush'},
        ],
    },
    {
        id: 3,
        text:'WHAT! THATS JUST HOW PROBABILITY WORKS!',
        responses: [
            {text:'Response 1', emotion:'happy'},
            {text:'Response 2', emotion:'angry'},
            {text:'Response 3', emotion:'blush'},
        ],
    },
    {
        id: 4,
        text:'Oh... I had no idea that\'s how you felt...',
        responses: [
            {text:'Response 1', emotion:'happy'},
            {text:'Response 2', emotion:'angry'},
            {text:'Response 3', emotion:'blush'},
        ],
    },
];