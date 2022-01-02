function shout(string){
    return string.toUpperCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function whisper(string){
    return string.toLowerCase(); 
}
function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    
    switch(string){
        case string.toLowerCase():
            console.log('cant hear you')
            return "I can't hear you!";
        case string.toUpperCase():
            console.log('YES');
            return "YES INDEED!";
        case "Let's have dinner together!":
            console.log('would love to')
            return "I would love to!";
        }
}
//test
sayHiToHeadphonedRoommate("Let's have dinner together!");


