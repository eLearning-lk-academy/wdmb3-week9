$(document).ready(function() {
    
    const firstName = $('#firstName');
    const lastName = $('#lastName');
    const username = $('#username');
    let usernameChanged = false;


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
            generateUsername();
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
            generateUsername();
        }
    })

    username.on('focusout', () =>{

        let regEx = /^[A-z0-9]+_[A-z0-9]$/;

        if(username.val() == '') {
            username.addClass('is-invalid');
            $('#username+div').text('Username can\'t be empty').addClass('invalid-feedback');
        }else if(!regEx.test(username.val())){
            username.addClass('is-invalid');
            $('#username+div').text('Username pattern wrong').addClass('invalid-feedback');
        }else{
            username.removeClass('is-invalid').addClass('is-valid');
            $('#username+div').text('').removeClass('invalid-feedback');

            usernameChanged = true
        }
    })

    function generateUsername (){
        if(firstName.val().length > 3 && lastName.val().length > 3){ 
            let usernameVal = firstName.val() + '_' + lastName.val().charAt(0)
            usernameVal = usernameVal.toLowerCase();
            console.log(usernameVal);
            if(username.val() == "" || !usernameChanged){
                username.val(usernameVal);
            }
            username.removeClass('is-invalid').addClass('is-valid');
            $('#username+div').text('').removeClass('invalid-feedback');
        }
    }

})
