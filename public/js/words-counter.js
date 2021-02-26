

function removeExtraSpace(para){
    para = para.replace(/(^\s*)|(\s*$)/gi,"");
	para = para.replace(/[ ]{2,}/gi," ");
    para = para.replace(/\n /,"\n");
    return para;
}

function counter(para){
    para=removeExtraSpace(para);
    return para.split(" ").length;
}