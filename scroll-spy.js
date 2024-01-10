// window.addEventListener('scroll',()=>{
    
// });

function sleep(ms) {
    return new Promise((resolve)=> setTimeout(resolve,ms));
}

var button=0,prev=0;
var arrow = document.querySelector('.up-arrow');
const scroll_effect = async()=>{
    while(true){
        var scrolled = window.scrollY;
        var home = document.getElementById('header').offsetHeight;
        var about = document.getElementById('about').offsetHeight
        if (scrolled<home){
            button=document.querySelector('.nav-bar ul li:nth-child(1) a');
            // console.log(button.innerHTML);
        }
        else if(scrolled<home+about-10){
            button=document.querySelector('.nav-bar ul li:nth-child(2) a');
            // console.log(button.innerHTML);
        }
        else{
            button=document.querySelector('.nav-bar ul li:nth-child(3) a');
            // console.log(button.innerHTML);
        }
        if(prev!=button){
        if(prev!=0){
            prev.classList.toggle('clicked');
        }
        button.classList.toggle('clicked');
        prev=button;
        }
        if(scrolled!=0){
            $('.arrow').fadeIn(100);
        }
        else{
            $('.arrow').fadeOut(200);
        }
        await sleep(100);
    }
}

scroll_effect();

// document.querySelector('ul li:nth-child(1) a').style.color = 'blue';