export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "Complete the following code to hide all paragraphs.",
            code: `$("...").hide();`,
            answers: ["p", ".p", "#p", "/p"],
            correctAnswer: 0
        }
    ],
    testname: "jQuery Test"
})
}