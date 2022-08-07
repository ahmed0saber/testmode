export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "Enter the correct ReactDOM method to render the React element to the DOM.",
            code: `ReactDOM. ... (myElement, document.getElementById('root'));`,
            answers: ["create", "append", "render", "add"],
            correctAnswer: 2
        }
    ],
    testname: "React Test"
})
}