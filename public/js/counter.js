


const required_para = document.querySelector('#required-para');
const calculate_button = document.querySelector('#calculate-button');
const clear_button = document.querySelector('#clear-button');
const total_words = document.querySelector('#total-words');


//event on clicking of calculate button 
calculate_button.addEventListener('click',()=>{
    let paragraph=required_para.value;
    let words=counter(paragraph);
    total_words.innerHTML="Total Words : "+words;
});

//event on clicking of clear button
clear_button.addEventListener('click',()=>{
    required_para.value=null;
});