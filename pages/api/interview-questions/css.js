export default function handler(req, res) {
    res.status(200).json({
        questions: [
            {
                question: "Name some CSS frameworks.",
                questionCode: "",
                answer: "CSS frameworks are libraries that make web page styling easier. Some of them are Foundation, Bootstrap, Gumby, Ukit, Semantic UI, etc.",
                answerCode: "",
                owner: "Simplilearn",
                ownerUrl: "https://www.simplilearn.com/tutorials/css-tutorial/css-interview-questions"
            },
            {
                question: "What do you understand by the universal sector?",
                questionCode: "",
                answer: "A universal selector is a selector that matches any element type's name instead of selecting elements of a particular type.",
                answerCode: "",
                owner: "Simplilearn",
                ownerUrl: "https://www.simplilearn.com/tutorials/css-tutorial/css-interview-questions"
            },
            {
                question: "What are the elements of the CSS Box Model?",
                questionCode: "",
                answer: "The CSS box model defines the layout and design of CSS elements. The elements are content (like text and images, padding (the area around content), border (the area around padding), and margin (the area around the border).",
                answerCode: "",
                owner: "Simplilearn",
                ownerUrl: "https://www.simplilearn.com/tutorials/css-tutorial/css-interview-questions"
            },
            {
                question: "Differentiate between CSS3 and CSS2.",
                questionCode: "",
                answer: "The main difference between CSS3 and CSS2 is that CSS divides different sections into modules and supports many browsers. It also contains new General Sibling Combinators responsible for matching similar elements.",
                answerCode: "",
                owner: "Simplilearn",
                ownerUrl: "https://www.simplilearn.com/tutorials/css-tutorial/css-interview-questions"
            },
            {
                question: "How can CSS be integrated into an HTML page?",
                questionCode: "",
                answer: "There are three ways of integrating CSS into HTML: using style tags in the head section, using inline-styling, writing CSS in a separate file, and linking into the HTML page by the link tag.",
                answerCode: "",
                owner: "Simplilearn",
                ownerUrl: "https://www.simplilearn.com/tutorials/css-tutorial/css-interview-questions"
            },
            {
                question: "Explain a few advantages of CSS.",
                questionCode: "",
                answer: "With CSS, different documents can be controlled using a single site, styles can be grouped in complex situations using selectors and grouping methods, and multiple HTML elements can have classes.",
                answerCode: "",
                owner: "Simplilearn",
                ownerUrl: "https://www.simplilearn.com/tutorials/css-tutorial/css-interview-questions"
            },
            {
                question: "What is meant by RGB stream?",
                questionCode: "",
                answer: "RGB represents colors in CSS. The three streams are namely Red, Green, and Blue. The intensity of colors is represented using numbers 0 to 256. This allows CSS to have a spectrum of visible colors.",
                answerCode: "",
                owner: "Simplilearn",
                ownerUrl: "https://www.simplilearn.com/tutorials/css-tutorial/css-interview-questions"
            },
            {
                question: "What is the difference between a class and an ID?",
                questionCode: "",
                answer: "Class is a way of using HTML elements for styling. They are not unique and have multiple elements. Whereas ID is unique and it can be assigned to a single element.",
                answerCode: "",
                owner: "Simplilearn",
                ownerUrl: "https://www.simplilearn.com/tutorials/css-tutorial/css-interview-questions"
            }
        ],
        topic: "CSS"
    })
}