export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "Declare a variable called username.",
            code: `... username`,
            answers: ["var", "string", "char", "declare"],
            correctAnswer: 0
        },
        {
            question: "Assign data of integer data type to the following variable.",
            code: `firstNumber = ...`,
            answers: ["3.14", "'8'", "\"20\"", "80"],
            correctAnswer: 3
        },
        {
            question: "What is the expected output of the following code.",
            code: `let x = 2
console.log(++x)`,
            answers: ["2", "3", "4", "Syntax error"],
            correctAnswer: 1
        },
        {
            question: "What is the expected output of the following code.",
            code: `let x = 2
console.log(x++)`,
            answers: ["2", "3", "4", "Syntax error"],
            correctAnswer: 0
        },
        {
            question: "What is the expected output of the following code.",
            code: `let x = 2
console.log((x++))`,
            answers: ["2", "3", "4", "Syntax error"],
            correctAnswer: 0
        },
        {
            question: "Set an alert to show the sum of 2 variables.",
            code: `let x = 2, y = 5
...(x+y)`,
            answers: ["setAlert", "console.alert", "alert", "No correct answer"],
            correctAnswer: 2
        },
        {
            question: "What is the expected output of the following code.",
            code: `var x = 2
let x = 10
console.log(x)`,
            answers: ["2", "10", "Syntax error", "No correct answer"],
            correctAnswer: 2
        },
        {
            question: "What is the expected output of the following code.",
            code: `var x = 2
var x = 10
console.log(x)`,
            answers: ["2", "10", "Syntax error", "No correct answer"],
            correctAnswer: 1
        },
        {
            question: "Execute a function called calculateSum.",
            code: ``,
            answers: ["calculateSum", "calculateSum[]", "calculateSum{}", "calculateSum()"],
            correctAnswer: 3
        },
        {
            question: "Complete the following code to create a function that returns the sum of 2 parameters.",
            code: `function calculateSum(x, y){
    ...
}`,
            answers: ["return x+y", "console.log(x+y)", "alert(x+y)", "No correct answer"],
            correctAnswer: 0
        }
    ],
    testname: "JavaScript Test"
})
}