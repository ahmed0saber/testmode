export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "What does JSON stand for ?",
            code: ``,
            answers: ["JavaScript Object Notation", "JavaScript Object Navigation", "JavaScript order Notation", "JavaScript order Navigation"],
            correctAnswer: 0
        },
        {
            question: "What is JSON used for ?",
            code: ``,
            answers: ["Storing data", "Transporting data", "Both of them", "None of them"],
            correctAnswer: 2
        },
        {
            question: "Choose the wrong way to access the color property of car object.",
            code: ``,
            answers: ["car.color", "car[color]", "car[\"color\"]", "All are wrong"],
            correctAnswer: 1
        },
        {
            question: "Choose a JavaScript built in function for converting JSON strings into JavaScript objects.",
            code: ``,
            answers: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "All are wrong"],
            correctAnswer: 0
        },
        {
            question: "Choose a JavaScript built in function for converting an object into a JSON string.",
            code: ``,
            answers: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "All are wrong"],
            correctAnswer: 1
        },
        {
            question: "JSON values cannot be a/an ... .",
            code: ``,
            answers: ["object", "array", "string", "function"],
            correctAnswer: 3
        },
        {
            question: "Complete the following code to prepare data for storage.",
            code: `const myObj = {name: "Ahmed", age: 21, city: "Desouk"}
const myJSON = ...
localStorage.setItem("testJSON", myJSON)`,
            answers: ["JSON.parse(myObj)", "JSON.convert(myObj)", "JSON.stringify(myObj)", "JSON.string(myObj)"],
            correctAnswer: 2
        },
        {
            question: "Complete the following code to prepare data for usage.",
            code: `let text = localStorage.getItem("testJSON")
let obj = ...`,
            answers: ["JSON.convert(text)", "JSON.string(text)", "JSON.stringify(text)", "JSON.parse(text)"],
            correctAnswer: 3
        }
    ],
    testname: "JSON Test"
})
}