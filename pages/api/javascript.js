export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "declare a variable called username.",
            code: `... username`,
            answers: ["var", "string", "char", "declare"],
            correctAnswer: 0
        }
    ],
    testname: "JavaScript Test"
})
}