export default function handler(req, res) {
    res.status(200).json({ tests: [
        {
            urlKey: "cpp",
            title: "C++ Test",
            numberOfQ: 33,
            description: "This test covers Data Types, Variables, Console Output, User Input, Comments, Operators, Conditional Statements, Loops, Arrays and Functions.",
            comingSoon: false,
        },
        {
            urlKey: "html",
            title: "HTML Test",
            numberOfQ: 14,
            description: "This test covers Attributes, Headings, Paragraphs, Styles, Formatting, Quotations, Links and Images.",
            comingSoon: false,
        },
        {
            urlKey: "css",
            title: "CSS Test",
            numberOfQ: 10,
            description: "This test covers Selectors, Color, Background, Padding, Font, Border, Margin and Box Model.",
            comingSoon: false,
        },
        {
            urlKey: "javascript",
            title: "JavaScript Test",
            numberOfQ: 10,
            description: "This test covers Variables, Data Types, Operators, Console Output and Functions.",
            comingSoon: false,
        },
        {
            urlKey: "json",
            title: "JSON Test",
            numberOfQ: 8,
            description: "This test covers Usage, Syntax, Properties, Object-String Convertion and Data Types.",
            comingSoon: false,
        },
        {
            urlKey: "jquery",
            title: "jQuery Test",
            numberOfQ: 7,
            description: "This test covers Syntax, Selectors, Events, Effects.",
            comingSoon: false,
        },
        {
            urlKey: "bootstrap",
            title: "Bootstrap Test",
            numberOfQ: 1,
            description: "This test covers Text Classes.",
            comingSoon: true,
        },
        {
            urlKey: "react",
            title: "React Test",
            numberOfQ: 1,
            description: "This test covers ReactDOM.",
            comingSoon: true,
        },
        {
            urlKey: "git",
            title: "Git Test",
            numberOfQ: 0,
            description: "This test covers Nothing.",
            comingSoon: true,
        },
        {
            urlKey: "php",
            title: "PHP Test",
            numberOfQ: 0,
            description: "This test covers Nothing.",
            comingSoon: true,
        },
        {
            urlKey: "sql",
            title: "SQL Test",
            numberOfQ: 0,
            description: "This test covers Nothing.",
            comingSoon: true,
        },
        {
            urlKey: "python",
            title: "Python Test",
            numberOfQ: 0,
            description: "This test covers Nothing.",
            comingSoon: true,
        }
    ]
})
}