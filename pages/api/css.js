export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "Set the color of all paragraphs to red.",
            code: `...{
color: red;
}`,
            answers: ["all", "paragraphs", "paragraph", "p"],
            correctAnswer: 3
        },
        {
            question: "Set the background color of an element with id 'myDiv' to blue.",
            code: `...{
background-color: blue;
}`,
            answers: [".myDiv", "#myDiv", "myDiv", "/myDiv"],
            correctAnswer: 1
        }
    ],
    testname: "CSS Test"
})
}