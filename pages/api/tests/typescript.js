export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "Complete the following code to have no errors.",
            code: `let totalPrice: ... = 1200`,
            answers: ["integer", "number", "float", "all of them"],
            correctAnswer: 1
        },
        {
            question: "Complete the following code to declare a variable that can accept values of all possible data types.",
            code: `let myVar: ... = "Ahmed"`,
            answers: ["any", "string", "all", "none of them"],
            correctAnswer: 0
        },
        {
            question: "Complete the following code to avoid unexpected bugs, as y must be a number.",
            code: `let x: ... = "hello"
let y: number = 5 + x`,
            answers: ["both of them", "none of them", "any", "unknown"],
            correctAnswer: 3
        },
        {
            question: "Complete the following code to declare an array that holds string values.",
            code: `const names: ... = []`,
            answers: ["string", "[string]", "string[]", "none of them"],
            correctAnswer: 2
        },
        {
            question: "Complete the following code to prevent an array from being modified.",
            code: `const prices: ... number[] = [10, 20, 50, 200]
prices.push(100)`,
            answers: ["readonly", "nochange", "static", "constant"],
            correctAnswer: 0
        },
        {
            question: "Complete the following code to define a tuple that accepts the first element as string and the second one as number.",
            code: `let myTuple: ...`,
            answers: ["string, number", "string[], number[]", "[string, number]", "none of them"],
            correctAnswer: 2
        }
    ],
    testname: "TypeScript Test"
})
}