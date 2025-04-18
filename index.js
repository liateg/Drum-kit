for (var i=0;i<document.querySelectorAll('.drum').length;i++){
     

    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        makeSound(this.innerHTML);
        activeKey(this.innerHTML);
    }
);
        
       
    }

document.addEventListener('keydown',e=>{
    makeSound(e.key);
    activeKey(e.key);

}
    
);

function makeSound(key){
    switch (key){
        case 'w':
            var audio=new Audio('./sounds/crash.mp3'); 
        break;
        case 'a':
            var audio=new Audio('./sounds/kick-bass.mp3'); 
        break;
        case 's':
            var audio=new Audio('./sounds/snare.mp3');
        break;
        case 'd':
            var audio=new Audio('./sounds/tom-1.mp3');
        break;
        case 'j':
            var audio=new Audio('./sounds/tom-2.mp3');
        break;
        case 'k':
            var audio=new Audio('./sounds/tom-3.mp3');
        break;
        case 'l':
            var audio=new Audio('./sounds/tom-4.mp3');
        break;


    }
    audio.play(); }

function activeKey(key){
    document.querySelector('.'+key).classList.add('pressed');
    setTimeout(function(){document.querySelector("."+key).classList.remove('pressed')},100)

}
        