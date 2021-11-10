window.onload = num_generate;

let num_one = getRandomInt(999);
let num_two = getRandomInt(999);



function num_generate(){
    if(getRandomInt(8) === 1){
        num_one = getRandomInt(999);
        num_two = num_one;
    }
    else{
        num_one = getRandomInt(999);
        num_two = getRandomInt(999);
    }

    let string = num_one + " ? " + num_two;

    document.getElementById('nums').innerHTML=string;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function check(index){
    //меньше.
    if(index === 0){
        if(num_one < num_two){
            document.getElementById('status').innerHTML="Правильно";
            text_color(1);
        }
        else{
            document.getElementById('status').innerHTML="Не правильно";
            text_color(0);
        }
    }

    //равно
    if(index === 1){
        if(num_one === num_two){
            document.getElementById('status').innerHTML="Правильно";
            text_color(1);
        }
        else{
            document.getElementById('status').innerHTML="Не правильно";
            text_color(0);
        }
    }

    if(index === 2){
        if(num_one > num_two){
            document.getElementById('status').innerHTML="Правильно";
            text_color(1);
        }
        else{
            document.getElementById('status').innerHTML="Не правильно";
            text_color(0);
        }
    }

    num_generate();
}

function text_color(value){
    if(value === 0){
        document.getElementById('status').style.color = "#b91919";
    }
    else{
        document.getElementById('status').style.color = "#88ff41";
    }
}

