export default function handler(req, res) {
    res.status(200).json({ tests: [
        {
            urlKey: "cpp",
            title: "C++ Test",
            numberOfQ: 33,
            description: "This test covers Data Types, Variables, Console Output, User Input, Comments, Operators, Conditional Statements, Loops, Arrays and Functions.",
        },
        {
            urlKey: "html",
            title: "HTML Test",
            numberOfQ: 14,
            description: "This test covers Attributes, Headings, Paragraphs, Styles, Formatting, Quotations, Links and Images.",
        },
        {
            urlKey: "css",
            title: "CSS Test",
            numberOfQ: 2,
            description: "This test covers Selectors.",
        },
        {
            urlKey: "javascript",
            title: "JavaScript Test",
            numberOfQ: 1,
            description: "This test covers Variables.",
        },
        {
            urlKey: "json",
            title: "JSON Test",
            numberOfQ: 1,
            description: "This test covers Properties.",
        },
        {
            urlKey: "jquery",
            title: "jQuery Test",
            numberOfQ: 1,
            description: "This test covers $ selector.",
        },
        {
            urlKey: "bootstrap",
            title: "Bootstrap Test",
            numberOfQ: 1,
            description: "This test covers Text Classes.",
        },
        {
            urlKey: "react",
            title: "React Test",
            numberOfQ: 1,
            description: "This test covers ReactDOM.",
        }
    ]
})
}