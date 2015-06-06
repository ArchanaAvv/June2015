$(function(){

 function addTask(){
     //1) get the user entered text value

     var taskEnteredText =  $('#taskInput').val();//
     $('#taskInput').val('');//
     //html

     //val function to get the input values
     //li tag dynamically
     //$('li')//html element selector
     $('<li>').text(taskEnteredText).appendTo('#taskContainer');

 }

    $('#taskBtn').click(function(){
         addTask();
       });

    $('#taskInput').keydown(function(event){

        if(event.keyCode === 13){//13 -- Enter Key
            addTask();
        }

    });


    //$('li').click(function(){
    //     //
    //    if($(this).hasClass('taskDone')){
    //        $(this).remove();//remove
    //    }else{
    //        $(this).addClass('taskDone');
    //    }
    //
    //   // var $li =$(this);//lick li element
    //   // alert($(this).html());
    //});

    $('#taskContainer').on('click','li',function(){
        if($(this).hasClass('taskDone')){
                    $(this).remove();//remove
       }else{
            $(this).addClass('taskDone');
        }
    }); //event bubbling
    //event.currentTarget

});

