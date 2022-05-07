export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "Complete the following code to hide all paragraphs.",
            code: `$("...").hide()`,
            answers: ["p", ".p", "#p", "/p"],
            correctAnswer: 0
        },
        {
            question: "Complete the following code to show all elements with class text.",
            code: `$("...").show()`,
            answers: ["text", ".text", "#text", "/text"],
            correctAnswer: 1
        },
        {
            question: "Complete the following code to toggle an element with id text.",
            code: `$("...").toggle()`,
            answers: ["text", ".text", "#text", "/text"],
            correctAnswer: 2
        },
        {
            question: "Complete the following code to run when the document is loaded.",
            code: `$(document). ... (function(){
    // Your code goes here
})`,
            answers: ["onloaded", "loaded", "onready", "ready"],
            correctAnswer: 3
        },
        {
            question: "Complete the following code to run when the button is clicked.",
            code: `$(".btn"). ... (function(){
    // Your code goes here
})`,
            answers: ["press", "click", "touch", "All of them"],
            correctAnswer: 1
        },
        {
            question: "Complete the following code to toggle paragraphs when the button is clicked with 0.3 second animation.",
            code: `$("button").click(function(){
    $("p").toggle( ... )
})`,
            answers: ["300", "0.3", "300ms", "0.3s"],
            correctAnswer: 0
        },
        {
            question: "Complete the following code to slide toggle a div when the button is clicked with 0.3 second animation.",
            code: `$("button").click(function(){
    $("#myDiv"). ... (300)
})`,
            answers: ["slide", "slideDown", "slideUp", "slideToggle"],
            correctAnswer: 3
        }
    ],
    testname: "jQuery Test"
})
}