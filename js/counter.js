


const required_para = document.querySelector('#required-para');
const calculate_button = document.querySelector('#calculate-button');
const clear_button = document.querySelector('#clear-button');
const total_words = document.querySelector('#total-words');
const total_chars = document.querySelector('#total-chars');

//event on clicking of calculate button 
calculate_button.addEventListener('click',()=>{
    let paragraph=required_para.value;
    let result=counter(paragraph);
    let words=result.words;
    let chars=result.chars;
    total_words.innerHTML="Total Words : "+words;
    total_chars.innerHTML="Total Characters : "+chars;
});

//event on clicking of clear button
clear_button.addEventListener('click',()=>{
    required_para.value=null;
    total_words.innerHTML="Total Words : 0";
    total_chars.innerHTML="Total Characters : 0";
});
