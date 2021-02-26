

/*
Removes the extra spaces between two words
*/
function removeExtraSpace(para){
    para = para.replace(/(^\s*)|(\s*$)/gi,"");
	para = para.replace(/[ ]{2,}/gi," ");
    para = para.replace(/\n /,"\n");
    return para;
}

/*
finds if a word is just a special character.
    (if a word has only special chars then 
     it is considered as special word)
*/
function isSpecialChar(word){
    
    var special=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    for(var i=0;i<word.length;i++){
        if(!special.test(word[i])){
            return false;
        }
    }
    return true;
}

/*
calculates the words in the para 
*/
function counter(para){
    para=removeExtraSpace(para);
    para = para.split(" ");
    var result=0;
    for(var i=0;i<para.length;i++){
        if(!isSpecialChar(para[i])){
            result+=1;
            console.log(result);
        }
    }
    return result;
}