export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "Add a 'tooltip' to the paragraph below. (HTML)",
            code: `<p ...="More Info">Some Info</p>`,
            answers: ["tooltip", "caption", "title", "info"],
            correctAnswer: 2
        },
        {
            question: "Make the element below into a link. (HTML)",
            code: `<a ...="https://www.google.com">Google</a>`,
            answers: ["href", "link", "src", "to"],
            correctAnswer: 0
        },
        {
            question: "Specify an alternate text for the image. (HTML)",
            code: `<img src="myPic.png" ...="Ahmed Saber">`,
            answers: ["notLoaded", "title", "text", "alt"],
            correctAnswer: 3
        },
        {
            question: "Use the correct HTML tag to add the biggest possible heading with the text 'Home Page'. (HTML)",
            code: ``,
            answers: ["<h6>Home Page</h6>", "<h1>Home Page</h1>", "<h0>Home Page</h0>", "<h>Home Page</h>"],
            correctAnswer: 1
        },
        {
            question: "Use the correct HTML tag to add a paragraph with the text 'My name is Ahmed Saber'. (HTML)",
            code: ``,
            answers: ["<p>My name is Ahmed Saber</p>", "<paragraph>My name is Ahmed Saber</paragraph>", "<para>My name is Ahmed Saber</para>", "<text>My name is Ahmed Saber</text>"],
            correctAnswer: 0
        },
        {
            question: "Which tag is used to add a horizontal rule. (HTML)",
            code: ``,
            answers: ["<hr></hr>", "<br></br>", "<hr>", "<br>"],
            correctAnswer: 2
        },
        {
            question: "Which tag is used to add a line break. (HTML)",
            code: ``,
            answers: ["<lb></lb>", "<br></br>", "<lb>", "<br>"],
            correctAnswer: 3
        },
        {
            question: "Which tag is used to add text with preserved spaces and linebreaks. (HTML)",
            code: ``,
            answers: ["<p></p>", "<pre></pre>", "<pres></pres>", "<preserved></preserved>"],
            correctAnswer: 1
        },
        {
            question: "Use the correct HTML attribute to set the color of the paragraph to 'red'. (HTML)",
            code: `<p ...="color: red;">Some Text</p>`,
            answers: ["inline", "link", "css", "style"],
            correctAnswer: 3
        },
        {
            question: "Use the correct HTML tag to add extra importance to the word 'frontend'. (HTML)",
            code: `<p>I'm a <...>frontend</...> web developer</p>`,
            answers: ["strong", "i", "em", "span"],
            correctAnswer: 0
        },
        {
            question: "Use an HTML element to add quotation marks around the word 'great'. (HTML)",
            code: `<p>Frontend Web Development is <...>great</...>p>`,
            answers: ["mark", "q", "quo", "span"],
            correctAnswer: 1
        },
        {
            question: "Choose the correct syntax for a comment tag. (HTML)",
            code: ``,
            answers: ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
            correctAnswer: 3
        },
        {
            question: "Choose the correct attribute of anchor tag to open its url in new tab. (HTML)",
            code: ``,
            answers: ["tab=\"_blank\"", "tab=\"_new\"", "target=\"_blank\"", "target=\"_new\""],
            correctAnswer: 2
        },
        {
            question: "Choose the correct syntax for adding an image. (HTML)",
            code: ``,
            answers: ["<image>", "<image></image>", "<img>", "<img></img>"],
            correctAnswer: 2
        },
        {
            question: "Set the color of all paragraphs to red. (CSS)",
            code: `...{
color: red;
}`,
            answers: ["all", "paragraphs", "paragraph", "p"],
            correctAnswer: 3
        },
        {
            question: "Set the background color of an element with id 'myDiv' to blue. (CSS)",
            code: `...{
background-color: blue;
}`,
            answers: [".myDiv", "#myDiv", "myDiv", "/myDiv"],
            correctAnswer: 1
        },
        {
            question: "Set the padding of all elements to 0. (CSS)",
            code: `...{
padding: 0;
}`,
            answers: ["*", "all", "+", "/"],
            correctAnswer: 0
        },
        {
            question: "Set the font family of all paragraphs and anchor tags to monospace. (CSS)",
            code: `...{
font-family: monospace;
}`,
            answers: ["p a", "p + a", "p , a", "p & a"],
            correctAnswer: 2
        },
        {
            question: "Use the correct background property to make the background image NOT scroll with the rest of the page. (CSS)",
            code: ``,
            answers: ["background-attachment: fixed;", "background-attachment: no-scroll;", "background-position: fixed;", "background-scroll: no-scroll;"],
            correctAnswer: 0
        },
        {
            question: "Use the border shorthand property to set a '6px', 'dashed', 'black' border for the <p> elements. (CSS)",
            code: `border: ... ;`,
            answers: ["6px dashed #0000", "6px, dashed, black", "6px dashed 000", "6px dashed #000"],
            correctAnswer: 3
        },
        {
            question: "Set margin of 10px to top and bottom, and auto to right and left. (CSS)",
            code: `margin: ... ;`,
            answers: ["auto 10px", "10px auto", "10px auto auto 10px", "auto 10px 10px auto"],
            correctAnswer: 1
        },
        {
            question: "What is the current width occupied by a div with the following style. (CSS)",
            code: `width: 300px;
padding: 12px;
margin: 20px;
border: 2px double #121212;`,
            answers: ["314px", "334px", "328px", "368px"],
            correctAnswer: 2
        },
        {
            question: "What is the current width occupied by a div with the following style. (CSS)",
            code: `width: 200px;
padding: 12px 20px 12px 10px;
margin: 24px;
border: 2px double #f7f7f7;`,
            answers: ["234px", "222px", "212px", "282px"],
            correctAnswer: 0
        },
        {
            question: "What is the current width occupied by a div with the following style. (CSS)",
            code: `width: 300px;
padding: 12px;
margin: 20px;
border: 2px double #121212;
box-sizing: border-box;`,
            answers: ["314px", "334px", "328px", "300px"],
            correctAnswer: 3
        }
    ],
    testname: "UI Developer Test"
})
}