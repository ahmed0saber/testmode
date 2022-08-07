export default function handler(req, res) {
    res.status(200).json({
        questions: [
            {
                question: "What is JavaScript?",
                questionCode: "",
                answer: "JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers. JavaScript is also an Object-based Programming language.",
                answerCode: "",
                owner: "Guru99",
                ownerUrl: "https://www.guru99.com/javascript-interview-questions-answers.html"
            },
            {
                question: "Enumerate the differences between Java and JavaScript?",
                questionCode: "",
                answer: "Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for different intent. Java is an object-oriented programming (OOPS) or structured programming languages like C++ or C, whereas JavaScript is a client-side scripting language.",
                answerCode: "",
                owner: "Guru99",
                ownerUrl: "https://www.guru99.com/javascript-interview-questions-answers.html"
            },
            {
                question: "What are JavaScript Data Types?",
                questionCode: "",
                answer: "Following are the JavaScript Data types: number, string, boolean, object, undefined.",
                answerCode: "",
                owner: "Guru99",
                ownerUrl: "https://www.guru99.com/javascript-interview-questions-answers.html"
            },
            {
                question: "What is the use of isNaN function?",
                questionCode: "",
                answer: "isNan function returns true if the argument is not a number; otherwise, it is false.",
                answerCode: "",
                owner: "Guru99",
                ownerUrl: "https://www.guru99.com/javascript-interview-questions-answers.html"
            },
            {
                question: "Which is faster between JavaScript and an ASP script?",
                questionCode: "",
                answer: "JavaScript is faster. JavaScript is a client-side language,, and thus it does not need the assistance of the webserver to execute. On the other hand, ASP is a server-side language and hence is always slower than JavaScript. Javascript now is also a server-side language (nodejs).",
                answerCode: "",
                owner: "Guru99",
                ownerUrl: "https://www.guru99.com/javascript-interview-questions-answers.html"
            },
            {
                question: "What is negative Infinity?",
                questionCode: "",
                answer: "Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.",
                answerCode: "",
                owner: "Guru99",
                ownerUrl: "https://www.guru99.com/javascript-interview-questions-answers.html"
            },
            {
                question: "What are undeclared and undefined variables?",
                questionCode: "",
                answer: "Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered. Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.",
                answerCode: "",
                owner: "Guru99",
                ownerUrl: "https://www.guru99.com/javascript-interview-questions-answers.html"
            },
            {
                question: "Write the code for adding new elements dynamically?",
                questionCode: "",
                answer: "",
                answerCode: `<html>
<head>
<title>t1</title>
<script type="text/javascript">
    function addNode(){
        var newP = document. createElement("p");
        var textNode = document.createTextNode("New text node");
        newP.appendChild(textNode);
        document.getElementById("firstP").appendChild(newP);
    }
</script> </head>
<body> <p id="firstP">firstP<p> </body>
</html>`,
                owner: "Guru99",
                ownerUrl: "https://www.guru99.com/javascript-interview-questions-answers.html"
            }
        ],
        topic: "JavaScript"
    })
}