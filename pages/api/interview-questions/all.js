export default function handler(req, res) {
    res.status(200).json(
        [
            {
                topic: "HTML",
                urlKey: "html"
            },
            {
                topic: "CSS",
                urlKey: "css"
            },
            {
                topic: "JavaScript",
                urlKey: "javascript"
            }
        ]
    )
}