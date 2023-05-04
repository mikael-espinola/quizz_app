function renderQuestion(question, onSelectQuestion, score) {
    const title = question.question;
    const incorrect_answers = question.incorrect_answers.map(function (answer) {
        return buildOptionObj(answer, false)
    })
    // question.incorrect_answers.map((answer) => buildOptionObj(answer, false) ) arrow function way
    const correct_answer = buildOptionObj(question.correct_answer, true)

    document.getElementById("question-title").innerHTML = title;

    const options = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

    
    updateScore(score)
    questionManipulator(options, onSelectQuestion)
}

// function noRepeat(questions) {
//     const showedQuestions = {};

//     questions.forEach((question) => {
//         if(!showedQuestions[question.id]) {
//             const title = question.question;
//             document.getElementById("question-title").innerHTML = title;

//             showedQuestions[question.id] = true;
//         }
//     })
// }

function questionManipulator (options, onSelectQuestion) {
    const optionRed = document.getElementById("option--red")
    const optionBlue = document.getElementById("option--blue")
    const optionOrange = document.getElementById("option--orange")
    const optionGreen = document.getElementById("option--green")
    const optionElements = [optionRed, optionBlue, optionOrange, optionGreen];
    
    
    // distribuindo cada opção a um botão e observando o click que chama a função para pontuar.
    for(i = 0; i < optionElements.length; i++) {
        const option = options[i];
        const optionElement = optionElements[i];
        
        optionElement.innerHTML = option.option;
        optionElement.onclick = () => { onSelectQuestion(option)};
    }
}

  function updateScore (score) {
    const currentScore = score >= 0 ? score : 0; //operador ternário
    document.getElementById("current-score").innerHTML = currentScore;
  }

let score = 0;

function onSelectQuestion(option) {    
    if (option.isCorrect === true) {
        score += 5;
        renderQuestion(questions[Math.floor(Math.random() * questions.length)], onSelectQuestion, score);
    } else {
        renderQuestion(questions[Math.floor(Math.random() * questions.length)], onSelectQuestion, score)
    }
}

function buildOptionObj(option, isCorrect) {
    return { option, isCorrect }
}

const questions = [{
    "question": "When was the first Call of Duty title released?",
    "correct_answer": "October 29, 2003",
    "incorrect_answers": ["December 1, 2003", "November 14, 2002", "July 18, 2004"]
}, {
    "question": "Which president erased the national debt of the United States?",
    "correct_answer": "Andrew Jackson",
    "incorrect_answers": ["Ronald Reagan", "John F. Kennedy", "Franklin Roosevelt"]
}, {
    "question": "Which of these countries was NOT a part of the Soviet Union?",
    "correct_answer": "Afghanistan",
    "incorrect_answers": ["Turkmenistan", "Kazakhstan", "Uzbekistan"]
}, {
    "question": "Which one of these Manga titles was not created by Urasawa Naoki?",
    "correct_answer": "My Father's Journal",
    "incorrect_answers": ["Billy Bat", "20th Century Boys", "Monster"]
}, {
    "question": "In Touhou: Embodiment of Scarlet Devil, what song plays during Flandre Scarlet's boss fight?",
    "correct_answer": "U.N. Owen Was Her",
    "incorrect_answers": ["Septette for the Dead Princess", "Flowering Night", "Pierrot of the Star-Spangled Banner"]
}, {
    "question": "Which of these in the Star Trek series is NOT Klingon food?",
    "correct_answer": "Hors d'oeuvre",
    "incorrect_answers": ["Racht", "Gagh", "Bloodwine"]
}, {
    "question": "What was the first ever entry written for the SCP Foundation collaborative writing project?",
    "correct_answer": "SCP-173",
    "incorrect_answers": ["SCP-001", "SCP-999", "SCP-1459"]
}, {
    "question": "What is the frontman's name of the metal band Megadeth?",
    "correct_answer": "Dave Mustaine",
    "incorrect_answers": ["Rob Halford", "Vince Neil", "James Hetfield"]
}, {
    "question": "Pamina and Papageno are characters in what Mozart opera?",
    "correct_answer": "The Magic Flute",
    "incorrect_answers": ["The Marriage of Figaro", "The Impresario", "The Goose of Cairo"]
}, {
    "question": "What is the capital of Greenland?",
    "correct_answer": "Nuuk",
    "incorrect_answers": ["Sisimiut", "Narsaq", "Maniitsoq"]
}, {
    "question": "What is the fastest land animal?",
   "correct_answer": "Cheetah",
    "incorrect_answers": ["Lion", "Leopard", "Tiger"]
},
{
    "question": "What is the largest mammal on Earth?",
   "correct_answer": "Blue whale",
    "incorrect_answers": ["African elephant", "Hippopotamus", "Giraffe"]
},
{
    "question": "What is the only continent where wild tigers live?",
   "correct_answer": "Asia",
    "incorrect_answers": ["Africa", "North America", "South America"]
},
{
    "question": "What is the largest bird in the world?",
   "correct_answer": "Ostrich",
    "incorrect_answers": ["Emu", "Albatross", "Penguin"]
},
{
    "question": "What is the smallest mammal in the world?",
   "correct_answer": "Bumblebee bat",
    "incorrect_answers": ["Mouse", "Shrew", "Mole"]
},
{
    "question": "What is the only venomous primate in the world?",
   "correct_answer": "Slow loris",
    "incorrect_answers": ["Baboon", "Gorilla", "Chimpanzee"]
},
{
    "question": "What is the name of the largest species of kangaroo?",
   "correct_answer": "Red kangaroo",
    "incorrect_answers": ["Gray kangaroo", "Tree kangaroo", "Wallaroo"]
},
{
    "question": "What is the scientific name for the African wild dog?",
   "correct_answer": "Lycaon pictus",
    "incorrect_answers": ["Canis lupus", "Felis catus", "Panthera tigris"]
},
{
    "question": "What is the name of the slowest mammal in the world?",
   "correct_answer": "Sloth",
    "incorrect_answers": ["Koala", "Gibbon", "Lemur"]
},
{
    "question": "What is the only marsupial found in the United States?",
   "correct_answer": "Opossum",
    "incorrect_answers": ["Kangaroo", "Koala", "Wallaby"]
}, {
    "question": "What is the smallest unit of matter?",
   "correct_answer": "Atom",
    "incorrect_answers": ["Molecule", "Electron", "Neutron"]
},
{
    "question": "What does the acronym DNA stand for?",
   "correct_answer": "Deoxyribonucleic acid",
    "incorrect_answers": ["Deoxyribonucleotide acid", "Deoxyribose nucelic acid", "Deoxyribose nucelic atom"]
},
{
    "question": "What planet in our solar system is known for its rings?",
   "correct_answer": "Saturn",
    "incorrect_answers": ["Jupiter", "Neptune", "Uranus"]
},
{
    "question": "What is the unit of measurement for energy?",
   "correct_answer": "Joule",
    "incorrect_answers": ["Watt", "Volt", "Ampere"]
},
{
    "question": "What type of electromagnetic radiation has the shortest wavelength?",
   "correct_answer": "Gamma rays",
    "incorrect_answers": ["Radio waves", "Microwaves", "X-rays"]
},
{
    "question": "What is the process by which plants convert sunlight into energy?",
   "correct_answer": "Photosynthesis",
    "incorrect_answers": ["Respiration", "Fermentation", "Digestion"]
},
{
    "question": "What is the formula for water?",
   "correct_answer": "H2O",
    "incorrect_answers": ["CO2", "NaCl", "CaO"]
},
{
    "question": "What is the name of the largest bone in the human body?",
   "correct_answer": "Femur",
    "incorrect_answers": ["Humerus", "Tibia", "Fibula"]
},
{
    "question": "What is the name of the process by which a solid changes directly into a gas?",
   "correct_answer": "Sublimation",
    "incorrect_answers": ["Evaporation", "Condensation", "Melting"]
},
{
    "question": "What is the name of the closest star to our solar system?",
   "correct_answer": "Proxima Centauri",
    "incorrect_answers": ["Alpha Centauri A", "Alpha Centauri B", "Sirius"]
}, {
    "question": "What is the best-selling video game of all time?",
   "correct_answer": "Minecraft",
    "incorrect_answers": ["Tetris", "Grand Theft Auto V", "Wii Sports"]
},
{
    "question": "Who is the protagonist of the Legend of Zelda game series?",
   "correct_answer": "Link",
    "incorrect_answers": ["Zelda", "Ganondorf", "Sheik"]
},
{
    "question": "What was the first video game to feature Mario?",
   "correct_answer": "Donkey Kong",
    "incorrect_answers": ["Super Mario Bros.", "Mario Bros.", "Mario Kart"]
},
{
    "question": "Who created the video game series Metal Gear Solid?",
   "correct_answer": "Hideo Kojima",
    "incorrect_answers": ["Shigeru Miyamoto", "Satoru Iwata", "Ken Kutaragi"]
},
{
    "question": "What is the highest-grossing entertainment product of all time?",
   "correct_answer": "Grand Theft Auto V",
    "incorrect_answers": ["Avengers: Endgame", "Star Wars: The Force Awakens", "Avatar"]
},
{
    "question": "What company developed the video game Fortnite?",
   "correct_answer": "Epic Games",
    "incorrect_answers": ["Activision", "Electronic Arts", "Ubisoft"]
},
{
    "question": "What game series features characters like Master Chief and Cortana?",
   "correct_answer": "Halo",
    "incorrect_answers": ["Call of Duty", "Destiny", "Gears of War"]
},
{
    "question": "What game developer created the Half-Life and Portal series?",
   "correct_answer": "Valve Corporation",
    "incorrect_answers": ["Blizzard Entertainment", "Bethesda Game Studios", "Rockstar Games"]
},
{
    "question": "What is the best-selling fighting game of all time?",
   "correct_answer": "Super Smash Bros. Ultimate",
    "incorrect_answers": ["Street Fighter II", "Mortal Kombat X", "Dragon Ball FighterZ"]
},
{
    "question": "What game was released exclusively for the Nintendo Switch in 2017?",
   "correct_answer": "The Legend of Zelda: Breath of the Wild",
    "incorrect_answers": ["Super Mario Odyssey", "Splatoon 2", "Mario Kart 8 Deluxe"]
}, {
    "question": "What movie won the Best Picture award at the 2021 Oscars?",
   "correct_answer": "Nomadland",
    "incorrect_answers": ["The Trial of the Chicago 7", "Minari", "Mank"]
},
{
    "question": "Who directed the movie Pulp Fiction?",
   "correct_answer": "Quentin Tarantino",
    "incorrect_answers": ["Steven Spielberg", "Martin Scorsese", "Christopher Nolan"]
},
{
    "question": "What actor played the Joker in The Dark Knight?",
   "correct_answer": "Heath Ledger",
    "incorrect_answers": ["Joaquin Phoenix", "Jack Nicholson", "Cesar Romero"]
},
{
    "question": "What movie won the Best Picture award at the 2008 Oscars?",
   "correct_answer": "Slumdog Millionaire",
    "incorrect_answers": ["The Curious Case of Benjamin Button", "Milk", "Frost/Nixon"]
},
{
    "question": "Who played the character of Harry Potter in the movie series?",
   "correct_answer": "Daniel Radcliffe",
    "incorrect_answers": ["Rupert Grint", "Tom Felton", "Matthew Lewis"]
},
{
    "question": "What actress played the role of Katniss Everdeen in the Hunger Games movies?",
   "correct_answer": "Jennifer Lawrence",
    "incorrect_answers": ["Emma Watson", "Daisy Ridley", "Brie Larson"]
},
{
    "question": "What movie won the Best Picture award at the 1998 Oscars?",
   "correct_answer": "Shakespeare in Love",
    "incorrect_answers": ["Saving Private Ryan", "The Thin Red Line", "Elizabeth"]
},
{
    "question": "Who directed the movie The Godfather?",
   "correct_answer": "Francis Ford Coppola",
    "incorrect_answers": ["Stanley Kubrick", "Alfred Hitchcock", "Steven Spielberg"]
},
{
    "question": "What actor played the character of Iron Man/Tony Stark in the Marvel Cinematic Universe?",
   "correct_answer": "Robert Downey Jr.",
    "incorrect_answers": ["Chris Evans", "Mark Ruffalo", "Chris Hemsworth"]
},
{
    "question": "What movie won the Best Picture award at the 1977 Oscars?",
   "correct_answer": "Annie Hall",
    "incorrect_answers": ["Star Wars", "The Turning Point", "Close Encounters of the Third Kind"]
}, {
    "question": "What is the capital of Italy?",
   "correct_answer": "Rome",
    "incorrect_answers": ["Milan", "Venice", "Naples"]
},
{
    "question": "What is the largest organ in the human body?",
   "correct_answer": "Skin",
    "incorrect_answers": ["Liver", "Heart", "Lungs"]
},
{
    "question": "Who painted the Mona Lisa?",
   "correct_answer": "Leonardo da Vinci",
    "incorrect_answers": ["Pablo Picasso", "Vincent van Gogh", "Claude Monet"]
},
{
    "question": "What is the highest waterfall in the world?",
   "correct_answer": "Angel Falls",
    "incorrect_answers": ["Niagara Falls", "Victoria Falls", "Iguazu Falls"]
},
{
    "question": "What is the smallest planet in the Solar System?",
   "correct_answer": "Mercury",
    "incorrect_answers": ["Mars", "Venus", "Earth"]
},
{
    "question": "What is the largest desert in the world?",
   "correct_answer": "Sahara Desert",
    "incorrect_answers": ["Arabian Desert", "Gobi Desert", "Atacama Desert"]
},
{
    "question": "Who wrote the Harry Potter series?",
   "correct_answer": "J.K. Rowling",
    "incorrect_answers": ["George R.R. Martin", "Stephen King", "Dan Brown"]
},
{
    "question": "What is the largest bird in the world?",
   "correct_answer": "Ostrich",
    "incorrect_answers": ["Emu", "Albatross", "Penguin"]
},
{
    "question": "Who was the first person to reach the South Pole?",
   "correct_answer": "Roald Amundsen",
    "incorrect_answers": ["Robert Falcon Scott", "Ernest Shackleton", "Edmund Hillary"]
},
{
    "question": "What is the most widely spoken language in the world?",
   "correct_answer": "Mandarin Chinese",
    "incorrect_answers": ["English", "Spanish", "Hindi"]
}, {
    "question": "What is the capital of Canada?",
   "correct_answer": "Ottawa",
    "incorrect_answers": ["Toronto", "Vancouver", "Montreal"]
},
{
    "question": "What is the tallest mountain in the world?",
   "correct_answer": "Mount Everest",
    "incorrect_answers": ["K2", "Kangchenjunga", "Lhotse"]
},
{
    "question": "Who was the first person to walk on the moon?",
   "correct_answer": "Neil Armstrong",
    "incorrect_answers": ["Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"]
},
{
    "question": "What is the largest country in the world?",
   "correct_answer": "Russia",
    "incorrect_answers": ["China", "United States", "India"]
},
{
    "question": "What is the smallest country in the world?",
   "correct_answer": "Vatican City",
    "incorrect_answers": ["Monaco", "Nauru", "Tuvalu"]
},
{
    "question": "What is the capital of Spain?",
   "correct_answer": "Madrid",
    "incorrect_answers": ["Barcelona", "Valencia", "Seville"]
},
{
    "question": "Who is the current president of the United States?",
   "correct_answer": "Joe Biden",
    "incorrect_answers": ["Donald Trump", "Barack Obama", "George W. Bush"]
},
{
    "question": "What is the largest ocean in the world?",
   "correct_answer": "Pacific Ocean",
    "incorrect_answers": ["Atlantic Ocean", "Indian Ocean", "Southern Ocean"]
},
{
    "question": "What is the largest animal in the world?",
   "correct_answer": "Blue Whale",
    "incorrect_answers": ["African Elephant", "Giraffe", "Hippopotamus"]
},
{
    "question": "Who is the lead singer of the band Queen?",
   "correct_answer": "Freddie Mercury",
    "incorrect_answers": ["Roger Taylor", "Brian May", "John Deacon"]
}];


let questionTotal = (questions.length)

renderQuestion(questions[Math.floor(Math.random() * questions.length)], onSelectQuestion)