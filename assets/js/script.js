$(document).ready(function() {
    
    const firstName = $('#firstName');
    const lastName = $('#lastName');


    firstName.focusout(function() {
        
        if(firstName.val() == '') {
            firstName.addClass('is-invalid');
            $('#firstName+div').text('First Name is required').addClass('invalid-feedback');
        }else if(firstName.val().length < 3){
            firstName.addClass('is-invalid');
            $('#firstName+div').text('First Name must be at least 3 characters').addClass('invalid-feedback');
        }else{
            firstName.removeClass('is-invalid');
            $('#firstName+div').text('').removeClass('invalid-feedback');
        }
    });

    lastName.on('focusout', () =>{
    
        if(lastName.val() == '') {
            lastName.addClass('is-invalid');
            $('#lastName+div').text('Last Name is required').addClass('invalid-feedback');
        }else if(lastName.val().length < 3){
            lastName.addClass('is-invalid');
            $('#lastName+div').text('Last Name must be at least 3 characters').addClass('invalid-feedback');
        }else{
            lastName.removeClass('is-invalid');
            $('#lastName+div').text('').removeClass('invalid-feedback');
        }
    })

})