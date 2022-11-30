$(function(){
    $('.error').fadeOut(0);
	
    // reset form and hide all errors
    $("a#clear").click(function(){
        $('.error').fadeOut(0);
        $('form#contact-form').clearForm();
    });
	
    $("input#email").blur(function(){
        if(validateInput('email')){
            if(!validateEmail()){
                $("label#email_error").fadeOut(0);
                $("label#email_error2").fadeIn(250);
            }
        }else{
            $("label#email_error2").fadeOut(0);
        }
    });
    $("input#tel").blur(function(){
        if(validateInput('tel')){
            if(!validatePhone()){
                $("label#tel_error").fadeOut(0);
                $("label#tel_error2").fadeIn(250);
            }
        }else{
            $("label#tel_error2").fadeOut(0);
        }
    });
    
    $("input#fax").blur(function(){
        if(validateInput('fax')){
            if(!validatePhone()){
                $("label#fax_error2").fadeIn(250);
            }
        }else{
            $("label#fax_error2").fadeOut(0);
        }
    });
    
    $("input#surname").blur(function(){
        if(!validateInput('surname')){
            $("label#surname_error").fadeIn(250);
        }
    });
    
    $("input#first_name").blur(function(){
        if(validateInput('first_name')){
            $("label#first_name_error").fadeOut(0);
        }
        else {
            $("label#first_name_error").fadeIn(250);
        }
    });
    
    $("input#first_destination").blur(function(){
        if(!validateInput('first_destination')){
            $("label#first_destination_error").fadeIn(250);
        }
    });
    
    $("input#first_arrival_date").blur(function(){
        if(!validateInput('first_arrival_date')){
            $("label#first_arrival_error").fadeIn(250);
        }
    });
    
    $("input#first_departure_date").blur(function(){
        if(!validateInput('first_departure_date')){
            $("label#first_departure_error").fadeIn(250);
        }
    });
    
    $("input#first_bedrooms").blur(function(){
        if(!validateInput('first_bedrooms')){
            $("label#first_bedrooms_error").fadeIn(250);
        }
    });
    
    $("input#second_destination").blur(function(){
        if(!validateInput('second_destination')){
            $("label#second_destination_error").fadeIn(250);
        }
    });
    
    $("input#second_arrival_date").blur(function(){
        if(!validateInput('second_arrival_date')){
            $("label#second_arrival_error").fadeIn(250);
        }
    });
    
    $("input#second_departure_date").blur(function(){
        if(!validateInput('second_departure_date')){
            $("label#second_departure_error").fadeIn(250);
        }
    });
    
    $("input#second_bedrooms").blur(function(){
        if(!validateInput('second_bedrooms')){
            $("label#second_bedrooms_error").fadeIn(250);
        }
    });
    
    $("input#total_people").blur(function(){
        if(!validateInput('total_people')){
            $("label#total_people_error").fadeIn(250);
        }
    });
    
    $("input#adults").blur(function(){
        if(!validateInput('adults')){
            $("label#adults_error").fadeIn(250);
        }
    });
    
    $("input#children").blur(function(){
        if(!validateInput('children')){
            $("label#children_error").fadeIn(250);
        }
    });
    
    $("input#infants").blur(function(){
        if(!validateInput('infants')){
            $("label#infants_error").fadeIn(250);
        }
    });
        
    
    $("input#email").keydown(function(){
        if(validateInput('email')){
            $("label#email_error").fadeOut(0);
        }
        if(validateEmail()){
            $("label#email_error2").fadeOut(0);
        }
    });
	
   
        
    $("input#tel").keydown(function(){
        if(validateInput('tel')){
            $("label#tel_error").fadeOut(0);
        }
        if(validatePhone()){
            $("label#tel_error2").fadeOut(0);
        }
    });
        
   
        
   
        
    $("input#first_name").keydown(function(){
        if(validateInput('first_name')){
            $("label#first_name_error").fadeOut(0);
        }
    });
        
    
        
    $("input#surname").keydown(function(){
        if(validateInput('surname')){
            $("label#surname_error").fadeOut(0);
        }
    });
        
    
        
    $("input#first_destination").keydown(function(){
        if(validateInput('first_destination')){
            $("label#first_destination_error").fadeOut(0);
        }
    });
        
    
        
    $("input#first_arrival_date").keydown(function(){
        if(validateInput('first_arrival_date')){
            $("label#first_arrival_error").fadeOut(0);
        }
    });
        
    
        
    $("input#first_departure_date").keydown(function(){
        if(validateInput('first_departure_date')){
            $("label#first_departure_error").fadeOut(0);
        }
    });
        
   
        
    $("input#first_bedrooms").keydown(function(){
        if(validateInput('first_bedrooms')){
            $("label#first_bedrooms_error").fadeOut(0);
        }
    });
        

        
    $("input#second_destination").keydown(function(){
        if(validateInput('second_destination')){
            $("label#second_destination_error").fadeOut(0);
        }
    });
        

        
    $("input#second_arrival_date").keydown(function(){
        if(validateInput('second_arrival_date')){
            $("label#second_arrival_error").fadeOut(0);
        }
    });
        

        
    $("input#second_departure_date").keydown(function(){
        if(validateInput('second_departure_date')){
            $("label#second_departure_error").fadeOut(0);
        }
    });
        

        
    $("input#second_bedrooms").keydown(function(){
        if(validateInput('second_bedrooms')){
            $("label#second_bedrooms_error").fadeOut(0);
        }
    });
        

    $("input#total_people").keydown(function(){
        if(validateInput('total_people')){
            $("label#total_people_error").fadeOut(0);
        }
    });
        

        
    $("input#adults").keydown(function(){
        if(validateInput('adults')){
            $("label#adults_error").fadeOut(0);
        }
    });
        

        
    $("input#children").keydown(function(){
        if(validateInput('children')){
            $("label#children_error").fadeOut(0);
        }
    });
        

        
    $("input#infants").keydown(function(){
        if(validateInput('infants')){
            $("label#infants_error").fadeOut(0);
        }
    });
	
	
    var owner_email = $("input#owner_email").val();
    if(!isValidEmailAddress(owner_email)){
        $('#contact_form').html("<label class='error'>*Owner email is not valid</label>")
    }
		
    $("a#submit").click(function(){
        // validate and process form
        var quit = false;
        if(validateInput('first_name')){
            first_name = $("input#first_name").val();
            $("label#first_name_error").fadeOut(0);
			
        } else {
            $("label#first_name_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('surname')){
            surname = $("input#surname").val();
            $("label#surname_error").fadeOut(0);
			
        } else {
            $("label#surname_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('first_destination')){
            first_destination = $("input#first_destination").val();
            $("label#first_destination_error").fadeOut(0);
			
        } else {
            $("label#first_destination_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('first_arrival_date')){
            first_arrival_date = $("input#first_arrival_date").val();
            $("label#first_arrival_date_error").fadeOut(0);
			
        } else {
            $("label#first_arrival_date_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('first_departure_date')){
            first_departure_date = $("input#first_departure_date").val();
            $("label#first_departure_date_error").fadeOut(0);
			
        } else {
            $("label#first_departure_date_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('first_bedrooms')){
            first_bedrooms = $("input#first_bedrooms").val();
            $("label#first_bedrooms_error").fadeOut(0);
			
        } else {
            $("label#first_bedrooms_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('second_destination')){
            second_destination = $("input#second_destination").val();
            $("label#second_destination_error").fadeOut(0);
			
        } else {
            $("label#second_destination_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('second_arrival_date')){
            second_arrival_date = $("input#second_arrival_date").val();
            $("label#second_arrival_date_error").fadeOut(0);
			
        } else {
            $("label#second_arrival_date_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('second_departure_date')){
            second_departure_date = $("input#second_departure_date").val();
            $("label#second_departure_date_error").fadeOut(0);
			
        } else {
            $("label#second_departure_date_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('second_bedrooms')){
            second_bedrooms = $("input#second_bedrooms").val();
            $("label#second_bedrooms_error").fadeOut(0);
			
        } else {
            $("label#second_bedrooms_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('total_people')){
            total_people = $("input#total_people").val();
            $("label#total_people_error").fadeOut(0);
			
        } else {
            $("label#total_people_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('adults')){
            adults = $("input#adults").val();
            $("label#adults_error").fadeOut(0);
			
        } else {
            $("label#adults_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('children')){
            children = $("input#children").val();
            $("label#children_error").fadeOut(0);
			
        } else {
            $("label#children_error").fadeIn(250);
            quit = true;
        }
        if(validateInput('infants')){
            children = $("input#children").val();
            $("label#infants_error").fadeOut(0);
			
        } else {
            $("label#infants_error").fadeIn(250);
            quit = true;
        }
        if(validateEmail()){
            email = validateEmail();
            $("label#email_error").fadeOut(0);
            $("label#email_error2").fadeOut(0);
        }else if(validateInput('email')){
            $("label#email_error").fadeOut(0);
            $("label#email_error2").fadeIn(250);
            quit = true;
        }else{
            $("label#email_error").fadeIn(250);
            $("label#email_error2").fadeOut(0);
            quit = true;
        }
        if(validatePhone()){
            phone = validatePhone();
            $("label#tel_error").fadeOut(0);
            $("label#tel_error2").fadeOut(0);
        }else if(validateInput('tel')){
            $("label#tel_error").fadeOut(0);
            $("label#tel_error2").fadeIn(250);
            quit = true;
        }else{
            $("label#tel_error").fadeIn(250);
            $("label#tel_error2").fadeOut(0);
            quit = true;
        }
        var mailing_address = $("input#mailing_address").val();
        var company_info = $("input#company_info").val();
        var fax = $("input#fax").val();
        var special_requests = $("textarea#special_requests").val();
                
        if(quit){
            return false;
        }
		
        var stripHTML = $("input#stripHTML").val();
        var smtpMailServer = $("input#smtpMailServer").val();
		
        var dataString = '\
                first_name=' + first_name
        + '&surname=' + surname
        + '&mailing_address=' + mailing_address
        + '&company_info=' + company_info
        + '&email=' + email
        + '&tel=' + tel
        + '&fax=' + fax
        + '&first_destination=' + first_destination
        + '&first_arrival_date=' + first_arrival_date
        + '&first_departure_date=' + first_departure_date
        + '&first_bedrooms=' + first_bedrooms
        + '&second_destination=' + second_destination
        + '&second_arrival_date=' + second_arrival_date
        + '&second_departure_date=' + second_departure_date
        + '&second_bedrooms=' + second_bedrooms
        + '&total_people=' + total_people
        + '&adults=' + adults
        + '&children=' + children
        + '&infants=' + infants
        + '&special_requests=' + special_requests
        + '&owner_email=' + owner_email
        + '&stripHTML=' + stripHTML
        + '&smtpMailServer=' + smtpMailServer;
		
        var serverProcessorType = $("input#serverProcessorType").val();
        if(serverProcessorType == 'asp'){
            fileExtension = 'ashx';
        }else{
            fileExtension = serverProcessorType;
        }
        var mailHandlerURL = "bin/destination-MailHandler." + fileExtension;
        $.ajax({
            type: "POST",
            url: mailHandlerURL,
            data: dataString,
            success: function(){
                $('.error').fadeOut(0);
                $('form#contact-form').clearForm();
                $('#contact_form').html("<div>Inquiry form submitted!</div>").append("<br><label for='message'><strong>We will be in touch soon.</strong></label>").fadeOut(0).fadeIn(1500, function(){
                    $('#contact_form').append("<br><br><a id='back' onclick='window.location.reload(); return false;' class='button'>back</a>");
                });
            }
        });				
        return false;
    });
});
$.fn.clearForm = function(){
    return this.each(function(){
        var type = this.type, tag = this.tagName.toLowerCase();
        if (tag == 'form'){
            return $(':input',this).clearForm();
        }
        if (type == 'text' || type == 'password' || tag == 'textarea'){
            this.value = '';
        }else if (type == 'checkbox' || type == 'radio'){
            this.checked = false;
        }else if (tag == 'select'){
            this.selectedIndex = -1;
        }
    });
};
function isValidName(name){
    var pattern = new RegExp(/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/);
	
    return pattern.test(name);
}
function isValidEmailAddress(emailAddress){
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	
    return pattern.test(emailAddress);
}

function isValidPhoneNumber(phoneNumber){
    var pattern = new RegExp(/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/);
	
    return pattern.test(phoneNumber);
}

function validateEmail(){
    var email = $("input#email").val();
    if(!isValidEmailAddress(email)){
        return false;
    }else{
        return email;
    }
}

function validatePhone(){
    var phone = $("input#phone").val();
    if(!isValidPhoneNumber(phone)){
        return false;
    }else{
        return phone;
    }
}

// make sure visitor does not input a blank field
function validateInput(field){
    var fieldObject = $("input#" + field + "").val();
    if(fieldObject.length < 1){
        return false;
    }else{
        return true;
    }
}

function validateTextArea(field){
    var fieldObject = $("textarea#" + field + "").val();
    if(fieldObject.length < 1){
        return false;
    }else{
        return true;
    }
}