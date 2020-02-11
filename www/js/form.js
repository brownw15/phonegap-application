$(function(){
    $("#wizard").steps({
    headerTag: "h4",
    bodyTag: "section",
    transitionEffect: "fade",
    enableAllSteps: true,
    transitionEffectSpeed: 500,
    onStepChanging: function (event, currentIndex, newIndex) {
    if ( newIndex === 1 ) {
    $('.steps ul').addClass('step-2');
    } else {
    $('.steps ul').removeClass('step-2');
    }
    if ( newIndex === 2 ) {
    $('.steps ul').addClass('step-3');
    } else {
    $('.steps ul').removeClass('step-3');
    }
      if ( newIndex === 3 ) {
    $('.steps ul').addClass('step-4');
    } else {
    $('.steps ul').removeClass('step-5');
    $('.actions ul').removeClass('step-last');
    }
    return true;
    },
    labels: {
    finish: "Done",
    next: "Next",
    previous: "Previous"
    }
    });
    // Custom Steps Jquery Steps
    $('.wizard > .steps li a').click(function(){
    $(this).parent().addClass('checked');
    $(this).parent().prevAll().addClass('checked');
    $(this).parent().nextAll().removeClass('checked');
    });
      
    
    $('.forward').click(function(){
    $("#wizard").steps('next');
    })
    $('.backward').click(function(){
    $("#wizard").steps('previous');
    })
    })
    
    $(document).ready(function() {
        var max_fields      = 10; 
        var wrapper   		= $(".input_fields_wrap"); 
        var add_button      = $(".add_field_button"); 
        
        var x = 1; 
        $(add_button).click(function(e){ 
            e.preventDefault();
            if(x < max_fields){ 
                x++; 
    $(wrapper).append('<div> <input type="text" class="form-control col-8" placeholder=""><Button href="#" class="btn text-white btn-danger remove_field">-</Button></div>'); //add input box
            }
        });
        
        $(wrapper).on("click",".remove_field", function(e){ 
            e.preventDefault(); $(this).parent('div').remove(); x--;
        })
    });