function sleep(ms) {
    return new Promise((resolve)=> setTimeout(resolve,ms));
}

words = ["Full Stack Developer","Data Analyst","Python Developer"];

let word_index=0;

const writer_effect=async()=>{    
    while(true){
    // alert(word[word_index]);
    let word = words[word_index]

    for(let i=0;i<word.length;i++){
        document.getElementById('work').innerHTML = word.slice(0,i+1);
        await sleep(100);
    }
    await sleep(1000);
    for(let i=word.length;i>=0;i--){
        document.getElementById('work').innerHTML = word.slice(0,i);
        await sleep(100);
    }
    await sleep(100);
    if(word_index>=words.length-1){
        word_index=0;
    }
    else{
        word_index++;
    }
    }
};

writer_effect();


document.getElementById('Leave-Pred').addEventListener('click',()=>{
    window.open('https://colab.research.google.com/drive/12jNYTGaNeJ4tLRnITweQDOlL5KdTyU9W#scrollTo=e3ccd219');
});

document.getElementById('drum').addEventListener('click',()=>{
    window.open('https://sahith-03.github.io/Drum-Kit/','_blank')
});

document.getElementById('dict').addEventListener('click',()=>{
    window.open('https://sahith-03.github.io/Dictionary/','_blank')
})

document.getElementById('eSign').addEventListener('click',()=>{
    window.open('https://sahith-03.github.io/e-Signature/','_blank')
})

document.getElementById('Login').addEventListener('click',()=>{
    window.open('https://authentication-sahith-03s-projects.vercel.app/','_blank')
})