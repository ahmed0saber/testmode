export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "Add a 'tooltip' to the paragraph below.",
            code: `<p ...="More Info">Some Info</p>`,
            answers: ["tooltip", "caption", "title", "info"],
            correctAnswer: 2
        },
        {
            question: "Make the element below into a link.",
            code: `<a ...="https://www.google.com">Google</a>`,
            answers: ["href", "link", "src", "to"],
            correctAnswer: 0
        }
    ],
    testname: "HTML Test"
})
}