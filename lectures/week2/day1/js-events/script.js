console.log('Page Loaded!')

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function consultOracle(element) {
    element.innerText = (lifesAnswers[Math.floor(Math.random() * lifesAnswers.length)])
}

function turnOff(element) {
    element.innerText = "Off";
}

function example(element) {
    console.log("element clicked", element);
}


function spamRemove(element) {
    element.src = 'https://placekitten.com/200/300';
    // element.remove();

}

// element = this

function over(element) {
    element.style.backgroundColor = "lime";
}

function out(element) {
    element.style.backgroundColor = "silver";
}



