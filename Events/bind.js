
function firstSubmitBtnHandler(event){
    console.log('I am the first submit btn handler');
    //secondSubmitBtnHandler();
}

function secondSubmitBtnHandler(){
    console.log('I am the second submit btn handler')
}

$('#submitBtn').click(function(){
    console.log('this is the short cut click') ;
});

$('#submitBtn').bind('click',firstSubmitBtnHandler); //event registration, binding
$('#submitBtn').bind('click',secondSubmitBtnHandler);
//register as many functions as you want

//first in first out
//queue -->

$('#submitBtn').unbind('click',secondSubmitBtnHandler);

$('#submitBtn').unbind('click');//unbind all