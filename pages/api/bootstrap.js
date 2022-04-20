export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "Use a bootstrap class to center this text.",
            code: `<p class="...">Hello World</p>`,
            answers: ["text-middle", "text-center", "middle", "center"],
            correctAnswer: 1
        }
    ],
    testname: "Bootstrap Test"
})
}