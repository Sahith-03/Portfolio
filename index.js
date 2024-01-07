function sleep(ms) {
    return new Promise((resolve)=> setTimeout(resolve,ms));
}

words = ["Frontend Developer","Data Analyst","Python Developer"];

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

var dictionary = document.querySelector('.project:nth-child(1)');

dictionary.addEventListener('click',()=>{
    window.open('https://sahith-03.github.io/Dictionary/','_blank')
});

var drum_kit = document.querySelector('.project:nth-child(2)');

drum_kit.addEventListener('click',()=>{
    window.open('https://sahith-03.github.io/Drum-Kit/','_blank')
});

var leave_prediction = document.querySelector('.project:nth-child(3)');

leave_prediction.addEventListener('click',()=>{
    window.open('https://colab.research.google.com/drive/12jNYTGaNeJ4tLRnITweQDOlL5KdTyU9W#scrollTo=e3ccd219');
});

