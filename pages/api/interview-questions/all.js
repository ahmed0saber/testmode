export default function handler(req, res) {
    res.status(200).json(
        [
            {
                topic: "HTML",
                urlKey: "html",
                numberOfQuestions: 7,
                img: "/images/html.png"
            },
            {
                topic: "CSS",
                urlKey: "css",
                numberOfQuestions: 8,
                img: "/images/css.png"
            },
            {
                topic: "JavaScript",
                urlKey: "javascript",
                numberOfQuestions: 8,
                img: "/images/js.jpg"
            }
        ]
    )
}