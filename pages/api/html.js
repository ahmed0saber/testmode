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
        },
        {
            question: "Specify an alternate text for the image.",
            code: `<img src="myPic.png" ...="Ahmed Saber">`,
            answers: ["notLoaded", "title", "text", "alt"],
            correctAnswer: 3
        },
        {
            question: "Use the correct HTML tag to add the biggest possible heading with the text 'Home Page'.",
            code: ``,
            answers: ["<h6>Home Page</h6>", "<h1>Home Page</h1>", "<h0>Home Page</h0>", "<h>Home Page</h>"],
            correctAnswer: 1
        },
        {
            question: "Use the correct HTML tag to add a paragraph with the text 'My name is Ahmed Saber'.",
            code: ``,
            answers: ["<p>My name is Ahmed Saber</p>", "<paragraph>My name is Ahmed Saber</paragraph>", "<para>My name is Ahmed Saber</para>", "<text>My name is Ahmed Saber</text>"],
            correctAnswer: 0
        },
        {
            question: "Which tag is used to add a horizontal rule.",
            code: ``,
            answers: ["<hr></hr>", "<br></br>", "<hr>", "<br>"],
            correctAnswer: 2
        },
        {
            question: "Which tag is used to add a line break.",
            code: ``,
            answers: ["<lb></lb>", "<br></br>", "<lb>", "<br>"],
            correctAnswer: 3
        },
        {
            question: "Which tag is used to add text with preserved spaces and linebreaks.",
            code: ``,
            answers: ["<p></p>", "<pre></pre>", "<pres></pres>", "<preserved></preserved>"],
            correctAnswer: 1
        },
        {
            question: "Use the correct HTML attribute to set the color of the paragraph to 'red'.",
            code: `<p ...="color: red;">Some Text</p>`,
            answers: ["inline", "link", "css", "style"],
            correctAnswer: 3
        },
        {
            question: "Use the correct HTML tag to add extra importance to the word 'frontend'.",
            code: `<p>I'm a <...>frontend</...> web developer</p>`,
            answers: ["strong", "i", "em", "span"],
            correctAnswer: 0
        },
        {
            question: "Use an HTML element to add quotation marks around the word 'great'.",
            code: `<p>Frontend Web Development is <...>great</...>p>`,
            answers: ["mark", "q", "quo", "span"],
            correctAnswer: 1
        },
        {
            question: "Choose the correct syntax for a comment tag.",
            code: ``,
            answers: ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
            correctAnswer: 3
        },
        {
            question: "Choose the correct attribute of anchor tag to open its url in new tab.",
            code: ``,
            answers: ["tab=\"_blank\"", "tab=\"_new\"", "target=\"_blank\"", "target=\"_new\""],
            correctAnswer: 2
        },
        {
            question: "Choose the correct syntax for adding an image.",
            code: ``,
            answers: ["<image>", "<image></image>", "<img>", "<img></img>"],
            correctAnswer: 2
        }
    ],
    testname: "HTML Test"
})
}