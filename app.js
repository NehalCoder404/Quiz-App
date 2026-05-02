const quizQuestions =
    [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"],
            correctAnswer: "Hyper Text Markup Language"

        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["a", "link", "href", "hyper"],
            correctAnswer: "a"
        },
        {
            question: "Which CSS property controls text size?",
            options: ["font-style", "text-size", "font-size", "text-style"],
            correctAnswer: "font-size"
        },
        {
            question: "How do you select an element with id 'main' in CSS?",
            options: ["#main", ".main", "main", "*main"],
            correctAnswer: "#main"
        },
        {
            question: "Which JavaScript keyword is used to declare a variable?",
            options: ["var", "let", "const", "All of the above"],
            correctAnswer: "All of the above"
        },
        {
            question: "What does CSS stand for?",
            options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets",
                "Colorful Style Sheets"],
            correctAnswer: "Cascading Style Sheets"
        },
        {
            question: "Which method is used to print something in the browser console?",
            options: ["console.print()", "log.console()", "console.log()",
                "print.console()"],
            correctAnswer: "console.log()"
        },
        {
            question: "Which HTML element is used for the largest heading?",
            options: ["heading", "h6", "h1", "head"],
            correctAnswer: "h1"
        },
        {
            question: "How do you write a comment in JavaScript?",
            options: [`!-- comment --`, "// comment", "/* comment */", "Both // and /* */"],
            correctAnswer: "Both // and /* */"
        },
        {
            question: "Which CSS property is used to change the background color?",
            options: ["color", "bgcolor", "background-color", "background-style"],
            correctAnswer: "background-color"
        }
    ];

let questionEle = document.getElementById('questionEle')
let optionEle = document.getElementById('optionEle')
var nextQusBtn = document.getElementById('nextQusBtn')

var allLi = optionEle.getElementsByTagName('li')
var counter = 0;

function startApp() {
    // console.log('ruing',quizQuestions[0].options);
    var question = quizQuestions[counter].question
    var option = quizQuestions[counter].options

    questionEle.innerHTML = question
    optionEle.innerHTML = ""

    for (var i = 0; i < option.length; i++) {
        var li = `<li onclick='checkAns(this)'>${option[i]}</li>`;
        optionEle.innerHTML += li

    }


}


function nextQuestion() {
    counter++
    console.log('nextQuestion', counter);
    startApp()

    nextQusBtn.setAttribute('disabled',true)
}


function checkAns(li) {

    var correctAns = quizQuestions[counter].correctAnswer

    userAns = li.innerHTML

    // console.log(li);
    // console.log(userAns);
    // console.log(correctAns);

    if (userAns === correctAns) {
        console.log('ture jawab')
        li.style.background = 'green';
    }
    else {
        console.log('galat jawab');
        li.style.background = 'red';


        // console.log(optionEle);


        // for (var i = 0; i < allLi.length; i++) {
        //     // console.log(allLi[i].innerHTML);

        //     if (allLi[i].innerHTML === correctAns) {
        //         allLi[i].style.background = "green";
        //         break
        //     }

        // }

        for (var value of allLi) {
            // console.log(value.innerHTML);

            if (value.innerHTML === correctAns) {
                value.style.background = "green";

            }

        }

    }

    for (var value of allLi) {
        value.style.pointerEvents = 'none'
    }

    nextQusBtn.removeAttribute('disabled')


}