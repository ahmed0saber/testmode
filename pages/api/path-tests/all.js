export default function handler(req, res) {
    res.status(200).json(
        [
            {
                urlKey: "ui-developer",
                title: "UI Developer",
                numberOfQ: 24,
                description: "This test covers HTML and CSS.",
            }
        ]
    )
}