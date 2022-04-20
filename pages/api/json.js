export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "Choose the wrong way to access the color property of car object.",
            code: ``,
            answers: ["car.color", "car[\"color\"]", "car[color]", "All are wrong"],
            correctAnswer: 2
        }
    ],
    testname: "JSON Test"
})
}