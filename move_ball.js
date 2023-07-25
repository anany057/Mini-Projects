
var ballCord=document.getElementById('ball');
var playAreaCord=document.getElementById('play-area');

// var initialCord=ballCord.getBoundingClientRect();
var inPosX=ballCord.offsetLeft;
var inPosY=ballCord.offsetTop;

var PosX=ballCord.offsetLeft;
var PosY=ballCord.offsetTop;

var first=0;
var firstx=0;

console.log(PosY);




function move(event){

    if(event.key=='w'||event.key=='a'||event.key=='s'||event.key=='d'){
var key=event.key;
var Bc = ballCord.getBoundingClientRect();
var Pc = playAreaCord.getBoundingClientRect();

        if(key==='w'){
           
            
            if(PosY>4){

                if(first===0){
                    PosY-=275;
                    first=1;
                }
                if(firstx===0){
                    PosX-=590;
                    firstx=1;
                }
                PosY-=10;
ballCord.style.marginTop=  PosY+'px';

            }
 

        }

        if(key==='a'){
            if(Bc.left-Pc.left>8)
            {
                if(first===0){
                    PosY-=275;
                    first=1;
                    
                }
            
                if(firstx===0){
                    PosX-=590;
                    firstx=1;
                }
                PosX-=10;
                ballCord.style.marginLeft=PosX+'px';
               
            }

        }

        if(key==='s'){

            if(Pc.bottom-Bc.bottom>10){
                if(first===0){
                    PosY-=275;
                    first=1;
                    
                }
            
                if(firstx===0){
                    PosX-=590;
                    firstx=1;
                }
               PosY+=10;
               ballCord.style.marginTop=PosY+'px';
            }

        }

        if(key==='d'){

            if(Pc.right-Bc.right>10){
    if(first===0){
        PosY-=275;
        first=1;
        
    }

    if(firstx===0){
        PosX-=590;
        firstx=1;
    }
 PosX+=10;

 ballCord.style.marginLeft=PosX+'px';
            }
    


        }


    }

else{
    return;
}

}


window.addEventListener('keyup',move);