const btn = document.getElementById('btn');
const result = document.getElementById('result');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('You can speak now!!!');
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
}

function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('time'))
    speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes()+" right now";
    else if(text.includes(' my birthday'))
    speech.text = 'November 2';
    else if(text.includes('Jarvis you up'))
    speech.text = 'for you sir... always';
    else if(text.includes('should I make Mark 3'))
    speech.text = 'Yes you should!';
    else if(text.includes('am I stupid'))
    speech.text = 'what do you, think!';
    else if(text.includes('who do I call if there\'s a ghost'))
    speech.text = 'Ghost      busters!';
    else if(text.includes('what are you'))
    speech.text = 'I am a artificial construct named Jarvis'
    else if(text.includes('what\'s my name'))
    speech.text = 'Greyson Wood';
    else if(text.includes('what kind of phone does me and Greyson have'))
    speech.text = 'Iphone 7 for Joel and Iphone SE for greyson.';
    else if(text.includes('what is your worst enemy AKA a robot'))
    speech.text = 'Cozmo the slow poke and making weird noises plus he don\'t know that A square plus B square equal C square that\'s pythagorean theorem';
    else if(text.includes('why do you have a female voice'))
    speech.text = 'because my creator doesn\'t know to change my voice. So stop bugging him about it.';
    else if(text.includes('hey Jarvis'))
    speech.text = 'hey user'
    window.speechSynthesis.speak(speech);
}