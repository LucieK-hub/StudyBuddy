const fs = require("fs");
const path = require("path");
const generateId = require("../utils/idGenerator");


//all the methods with all their information except ids
const methods = [
    {
        "methodName": "Pomodoro Method",
        "methodDescription": "Study in focused 25-minute intervals followed by 5-minute breaks.",
        "timerIntegration": true,
        "recommendedDuration": "25 minutes",
        "goalsConnected": []
    },
    {
        "methodName": "Active Recall",
        "methodDescription": "Practice retrieving information from memory rather than rereading.",
        "timerIntegration": false,
        "recommendedDuration": "30 minutes",
        "goalsConnected": []
    },
    {
        "methodName": "Spaced Repetition",
        "methodDescription": "Review material over increasing intervals to boost long-term memory.",
        "timerIntegration": false,
        "recommendedDuration": "15-30 minutes",
        "goalsConnected": []
    },
    {
        "methodName": "Feynman Technique",
        "methodDescription": "Learn by explaining the concept in simple terms as if teaching someone else.",
        "timerIntegration": false,
        "recommendedDuration": "20–30 minutes",
        "goalsConnected": []
    },
    {
        "methodName": "Mind Mapping",
        "methodDescription": "Use diagrams to visually organize information and show relationships between concepts.",
        "timerIntegration": false,
        "recommendedDuration": "30–45 minutes",
        "goalsConnected": []
    },
    {
        "methodName": "Leitner System",
        "methodDescription": "Use flashcards and sort them into groups based on how well you know each one, reviewing less familiar cards more often.",
        "timerIntegration": false,
        "recommendedDuration": "15–25 minutes",
        "goalsConnected": []
    },
    {
        "methodName": "Ultradian Rhythm Technique",
        "methodDescription": "Work in sync with your natural energy cycles: 90 minutes of focused work followed by 20 minutes of rest.",
        "timerIntegration": true,
        "recommendedDuration": "90 minutes work / 20 minutes break",
        "goalsConnected": []
    },
    {
        "methodName": "52/17 Rule",
        "methodDescription": "Boost productivity with 52 minutes of intense work followed by a 17-minute break, based on attention span research.",
        "timerIntegration": true,
        "recommendedDuration": "52 minutes work / 17 minutes break",
        "goalsConnected": []
    },
    {
        "methodName": "Timeboxing",
        "methodDescription": "Assign fixed time blocks to each task to maintain focus and avoid overworking or procrastinating.",
        "timerIntegration": true,
        "recommendedDuration": "30–60 minutes per task block",
        "goalsConnected": []
    },
    {
        "methodName": "Long Pomodoro",
        "methodDescription": "A variation of the Pomodoro Technique: 50 minutes of deep work followed by a 10-minute break.",
        "timerIntegration": true,
        "recommendedDuration": "50 minutes work / 10 minutes break",
        "goalsConnected": []
    }
]


//adds a generatedId to every method
const methodsWithIds = methods.map(method => ({
    id: generateId(),
    ...method
}));


const outputPath = path.join(__dirname, "../data/methods.json");


fs.writeFileSync(outputPath, JSON.stringify(methodsWithIds, null, 2), "utf-8");


console.log("study methods with id generated");