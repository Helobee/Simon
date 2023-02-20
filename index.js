var stat = false;
var level=0;
var list = [];
var l2 = [];
var col = ["green","red", "yellow","blue"]
var i=0;
var lev=0;
document.addEventListener("keypress", function(eve)
{   
    if (!stat){
        document.querySelector("h1").innerHTML="level  0"
        list = [];
        l2 =[];
        stat = true;
        i=0;
        seq();
    }
});

for (var n=0;n<4;n++){
    document.querySelectorAll(".btn")[n].addEventListener("click", function (ev) {
        var k = this.id;
        l2.push(this.id);
        playSound(k);
        document.querySelector("."+k).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("."+k).classList.remove("pressed");
        },200);
        check();
    });
}

function check (){
    // alert("chceck");
    if (lev<0)
        return;
    if (list[lev] === l2[lev]){
        // alert("if 1 "+list.length +" "+ lev);
        if(list.length === lev+1){
            // alert("if 2",list.length, lev);
            setTimeout(function () {
                seq();
            }, 1000);
        }

        lev++;
    }
    else{
        playSound("wrong");
        document.querySelector("body").classList.add("game-over");
        setTimeout(function (){
            document.querySelector("body").classList.remove("game-over");
        },200);
        document.querySelector("h1").innerHTML= "Game over<br>press any button to restart";
        stat = false;
        level = 0;
    }
    
}

function seq(){
    level++;
    l2 = [];
    lev=0;
    i=0;
    document.querySelector("#level-title").innerHTML="level "+ level;
    var c = col[Math.floor(Math.random()*4)];
    list.push(c);
    // document.querySelector("#"+c).classList.add("pressed");
    // setTimeout(function (){
    //     document.querySelector("#"+c).classList.remove("pressed");
    // },200);
    // playSound(c);
    list.forEach( function (co){
        setTimeout(()=>{
            playSound(co);
            document.querySelector("#"+co).classList.add("pressed");
        },i+200);
        setTimeout(function (){
            document.querySelector("#"+co).classList.remove("pressed");
        },i+400);
        i+=600;
    }
    
    // document.querySelector(".btn").
    );
}

function playSound(name) {
    var audio = new Audio("Manikanta12n/Simon/sounds/" + name + ".mp3");
    audio.play();
}

// function game(){
//     var c = col[Math.floor((Math.random()*4))];
//     list.push(c);
//     i++;
//     document.querySelector("h1").innerHTML= "level "+ i;
//     for(var j=0;j<i;j++){
//         document.querySelector("#"+col[j]).classList.add(".pressed");
//         setTimeout(function(){
//             document.querySelector("#"+col[j]).classList.remove(".pressed")
//         },100);
//     }
//     if(i<3){
//         game();
//     }
    // for(var k=0;k<i;k++){
    //     var val = list.shift();
    //     if(val=== func()){
    //         continue;
    //     }
    //     else{
    //         flag=false;
    //         break;
    //     }
    // }
    
// }
// game();
// alert("Hello");
// document.querySelector("h1").innerHTML="Press A key to Start";



 
