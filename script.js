$(document).ready(function(){
    $('.btn').click(function(){
        console.log('hello world');
        $(this).css('background-color', 'blue')
    });

    $('.btn').dblclick(function(){
        console.log('the button has been clicked doubly')
    });

    $('.hidethedivbutton').click(function(){
        $('div').hide();
    });

    var showbuttoninconsole = $('.hidethedivbutton');
    console.log(showbuttoninconsole);

    $('.btn-dark').click(function(){
        $('li').css('color', 'green')
    });

    $('.btn-success').click(function(){
        $('li').hide();
    });

    $('.blissfuldiv').on({
        //the on() method is used in jquery to attach one or more event handlers to the selected elements
        mouseover: function (){
            $(this).css('background-color', 'rgb(236, 236, 18)')
        },
        mouseout: function (){
            $(this).css('background-color', 'green')
        },

        click: function(){
            var text = $('p').text();
            console.log(text);

            console.log($(this).text());
            //taking the value of the element;
            $(this).text('new text');
            // this changes the text of the element in the innerText
        },
        //note this will display the paragrafs text only if the div from above is actualyl clicked hehe

    
    });

    // $('.hidecolbutton').click(function(){

    //     $('.col-md-3').fadeOut();
    //     $('.col-md-3').fadeOut('slow');
    //     $('.col-md-3').fadeOut('10000');


    //     // $('.col-md-3').fadeIn();
    //     // $('.col-md-3').fadeIn('slow');
    //     // $('.col-md-3').fadeIn('3000');
    // });

    // $('.hidecolbutton2').click(function(){

    //     // $('.col-md-3').fadeOut();
    //     // $('.col-md-3').fadeOut('slow');
    //     // $('.col-md-3').fadeOut('3000');


    //     $('.col-md-3').fadeIn();
    //     $('.col-md-3').fadeIn('slow');
    //     $('.col-md-3').fadeIn('3000');
    // });
            
    $('.hidecolbutton3').click(function(){

        $('.col-md-3').fadeToggle();
        $('.col-md-3').fadeToggle('slow');
        $('.col-md-3').fadeToggle('10000');


        // $('.col-md-3').fadeIn();
        // $('.col-md-3').fadeIn('slow');
        // $('.col-md-3').fadeIn('3000');
    });
});
