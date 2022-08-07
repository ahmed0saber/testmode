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
        },
        {
            question: "Set the padding of all elements to 0.",
            code: `...{
padding: 0;
}`,
            answers: ["*", "all", "+", "/"],
            correctAnswer: 0
        },
        {
            question: "Set the font family of all paragraphs and anchor tags to monospace.",
            code: `...{
font-family: monospace;
}`,
            answers: ["p a", "p + a", "p , a", "p & a"],
            correctAnswer: 2
        },
        {
            question: "Use the correct background property to make the background image NOT scroll with the rest of the page.",
            code: ``,
            answers: ["background-attachment: fixed;", "background-attachment: no-scroll;", "background-position: fixed;", "background-scroll: no-scroll;"],
            correctAnswer: 0
        },
        {
            question: "Use the border shorthand property to set a '6px', 'dashed', 'black' border for the <p> elements.",
            code: `border: ... ;`,
            answers: ["6px dashed #0000", "6px, dashed, black", "6px dashed 000", "6px dashed #000"],
            correctAnswer: 3
        },
        {
            question: "Set margin of 10px to top and bottom, and auto to right and left.",
            code: `margin: ... ;`,
            answers: ["auto 10px", "10px auto", "10px auto auto 10px", "auto 10px 10px auto"],
            correctAnswer: 1
        },
        {
            question: "What is the current width occupied by a div with the following style.",
            code: `width: 300px;
padding: 12px;
margin: 20px;
border: 2px double #121212;`,
            answers: ["314px", "334px", "328px", "368px"],
            correctAnswer: 2
        },
        {
            question: "What is the current width occupied by a div with the following style.",
            code: `width: 200px;
padding: 12px 20px 12px 10px;
margin: 24px;
border: 2px double #f7f7f7;`,
            answers: ["234px", "222px", "212px", "282px"],
            correctAnswer: 0
        },
        {
            question: "What is the current width occupied by a div with the following style.",
            code: `width: 300px;
padding: 12px;
margin: 20px;
border: 2px double #121212;
box-sizing: border-box;`,
            answers: ["314px", "334px", "328px", "300px"],
            correctAnswer: 3
        }
    ],
    testname: "CSS Test"
})
}