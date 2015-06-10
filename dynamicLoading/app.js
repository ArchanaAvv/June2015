$(function (){
    console.log($('#mainContent').length)
    $('body').on('click','#toggleTextBtn',function(){
        $('#someText').toggle();
    });//dynamic elements

    $('#mainContent').on('click','#toggleTextBtn',function(){
        $('#someText').toggle();
    });

    $('#mainContent').off('click','#toggleTextBtn',function(){
        $('#someText').toggle();
    });

    $('#mainContent').off('click');

    //live and die before jquery 1.7
    //deprecated
    //$('#toggleTextBtn').live('click',function(){//bind
    //    $('#someText').toggle();
    //});
    //delegate

    $('#toggleTextBtn').click(function(){//bind
        $('#someText').toggle();
    });
    console.log($('#toggleTextBtn').length);

//
    function onHeaderLoaded(){
        console.log('header loaded');
    }
    $('#header').load('templates/header.html',onHeaderLoaded);
    //
    $('#footer').load('templates/footer.html #footerContent',function(){
        console.log('footer is loaded');
    });

    $('#mainContent').load('templates/content.html #contentText',function(){

        console.log($('#toggleTextBtn').length);

    });


    //Read Jquery's remove, empty and what is the difference between them
    //read jquery delegate
    //asynchronous ajax


});