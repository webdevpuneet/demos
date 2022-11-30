// JavaScript Document

/*
var _title = "Ελέγχξετε τα πεδία ξανά";
var _p_required = "Είναι υποχρεωτικό";
var _p_notvalidnumber = "Is not a valid number";
var _p_wrongemail = "Εισάγετε ένα σωστό e-mail";
var _p_htmlerror = "Δεν επιτρέπεται HTML σε αυτό το πεδίο";
*/

var _title = "Check the fields again";
var _p_required = "Is required";
var _p_notvalidnumber = "Is not a valid number";
var _p_wrongemail = "Invalid email address";
		
jQuery.fn.extend({ 
	xvalidate: function() {
		
		obj = jQuery(this);
		formcontents = obj.find(".validate");
	
		var htmltags = /<\S[^><]*>/g;
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
	
		valid = true;
		var validationErrors = new Array ();
	
		formcontents.each( function() {
			tmpobj = $j(this).find("input, textarea, select");
			
			if (!tmpobj.attr("disabled")) {
				
				if (tmpobj.val() == "") { IsNull = true; } else { IsNull = false; }
				
				object_label = $j("label[for="+tmpobj.attr("id")+"]").html();
				
				/* PRE-CHECK */
				IsEmail = emailPattern.test(tmpobj.val());  
				IsString = isNaN(tmpobj.val());
				HasHTML = htmltags.test(tmpobj.val());
				IsCheckbox = tmpobj.attr("type") == "checkbox" ? true : false;
				
				/* CLASS CHECK */	
				CheckReq = $j(this).hasClass("required");
				CheckNom = $j(this).hasClass("number");
				CheckEmail = $j(this).hasClass("email");
				CheckCreditCard = $j(this).hasClass("creditcard");
				AllowHTML = $j(this).hasClass("allowhtml");
				
				// SINGLE CHECKBOX CHECK
				if ((IsCheckbox) && (!tmpobj.attr("checked"))) {
					validationErrors.push("<b>"+object_label+"</b>: "+_p_required+"");
				}
										
				// HTML TAGS CHECK
				if ((!AllowHTML) && (HasHTML)) {
					tmpobj.val(stripHTML(tmpobj.val()));
				}
				
				// NULL CHECK
				if ((CheckReq) && (IsNull)) {
					validationErrors.push("<b>"+object_label+"</b>: "+_p_required+"");
					$j(this).addClass("invalid-req");
				} else {
					$j(this).removeClass("invalid-req");
				}
				
				// NUMBER CHECK
				if ((CheckNom) && (IsString)) {
					validationErrors.push("<b>"+object_label+"</b>: "+_p_notvalidnumber+"");
					$j(this).addClass("invalid-nom"); 
				} else {
					$j(this).removeClass("invalid-nom");
				}
				
				// EMAIL CHECK
				if (CheckEmail && (!IsEmail)) {
					validationErrors.push("<b>"+object_label+"</b>: "+_p_wrongemail+"");
					$j(this).addClass("invalid-email");
				} else {
					$j(this).removeClass("invalid-email");
				}
				
				// CREDIT CARD CHECK
				if (CheckCreditCard) {
					CreditCardNumber = tmpobj.val();
					CreditCardName = $j("select[name="+tmpobj.attr("cartnamefield")+"]").val();
					CreditCard_is_valid = checkCreditCard(CreditCardNumber, CreditCardName);
					
					if (CreditCard_is_valid) {
						$j(this).removeClass("invalid-creditcard");	
					} else {
						validationErrors.push("<b>"+object_label+"</b>: Is not a valid credit card");
						$j(this).addClass("invalid-creditcard");		
					}
				}		
			}
		});
		
		if (validationErrors.length > 0) {
			valid = false;
			tempmessage = validationErrors.join("<br>");
			//obj.find(".invalid-req:first").attr("class");
			
			message(""+_title+" ("+validationErrors.length+")", tempmessage);
		}
		return valid;		
	}
});

function message(title, str) {
	html = '<div id="simple-message" title=""><p></p></div>';
	if ($j("#simple-message").length == 0) { $j("body").append(html); }
	$j("#simple-message p").html(str);
	$j("#simple-message").dialog({
		resizable: false,
		title: title,
		modal: true,
		open: function(event, ui) {
			$j(this).parent().find('.ui-dialog-buttonpane button:first-child').button({ icons: { primary: 'ui-icon-close' }});
		},
		buttons: {
			"Close": function() {
				$j(this).dialog('close');
			}
		}
	});
}

jQuery.fn.hint = function (blurClass) {
	if (!blurClass) { 
		blurClass = 'blur';
	}
	
	return this.each(function () {
	// get jQuery version of 'this'
		var $input = jQuery(this),
		
		// capture the rest of the variable to allow for reuse
		title = $input.attr('title'),
		$form = jQuery(this.form),
		$win = jQuery(window);
		
		function remove() {
		  if ($input.val() === title && $input.hasClass(blurClass)) {
			$input.val('').removeClass(blurClass);
		  }
		}
		
		// only apply logic if the element has the attribute
		if (title) { 
		  // on blur, set value to title attr if text is blank
		  $input.blur(function () {
			if (this.value === '') {
			  $input.val(title).addClass(blurClass);
			}
		  }).focus(remove).blur(); // now change all inputs to title
		
		  // clear the pre-defined text when form is submitted
		  $form.submit(remove);
		  $win.unload(remove); // handles Firefox's autocomplete
	}
	});
};

jQuery(document).ready(function($) {
	$j('input[title!=""]').hint();
});


var ccErrorNo = 0;
var ccErrors = new Array ()

ccErrors [0] = "Unknown card type";
ccErrors [1] = "No card number provided";
ccErrors [2] = "Credit card number is in invalid format";
ccErrors [3] = "Credit card number is invalid";
ccErrors [4] = "Credit card number has an inappropriate number of digits";

function checkCreditCard(cardnumber, cardname) {
     
  // Array to hold the permitted card characteristics
  var cards = new Array();

  // Define the cards we support. You may add addtional card types.
  
  //  Name:      As in the selection box of the form - must be same as user's
  //  Length:    List of possible valid lengths of the card number for the card
  //  prefixes:  List of possible prefixes for the card
  //  checkdigit Boolean to say whether there is a check digit
  
  cards [0] = {name: "Visa", 
               length: "13,16", 
               prefixes: "4",
               checkdigit: true};
  cards [1] = {name: "MasterCard", 
               length: "16", 
               prefixes: "51,52,53,54,55",
               checkdigit: true};
  cards [2] = {name: "DinersClub", 
               length: "14,16", 
               prefixes: "305, 36, 38, 54,55",
               checkdigit: true};
  cards [3] = {name: "CarteBlanche", 
               length: "14", 
               prefixes: "300,301,302,303,304,305",
               checkdigit: true};
  cards [4] = {name: "AmEx", 
               length: "15", 
               prefixes: "34,37",
               checkdigit: true};
  cards [5] = {name: "Discover", 
               length: "16", 
               prefixes: "6011,622,64,65",
               checkdigit: true};
  cards [6] = {name: "JCB", 
               length: "16", 
               prefixes: "35",
               checkdigit: true};
  cards [7] = {name: "enRoute", 
               length: "15", 
               prefixes: "2014,2149",
               checkdigit: true};
  cards [8] = {name: "Solo", 
               length: "16,18,19", 
               prefixes: "6334, 6767",
               checkdigit: true};
  cards [9] = {name: "Switch", 
               length: "16,18,19", 
               prefixes: "4903,4905,4911,4936,564182,633110,6333,6759",
               checkdigit: true};
  cards [10] = {name: "Maestro", 
               length: "12,13,14,15,16,18,19", 
               prefixes: "5018,5020,5038,6304,6759,6761",
               checkdigit: true};
  cards [11] = {name: "VisaElectron", 
               length: "16", 
               prefixes: "417500,4917,4913,4508,4844",
               checkdigit: true};
  cards [12] = {name: "LaserCard", 
               length: "16,17,18,19", 
               prefixes: "6304,6706,6771,6709",
               checkdigit: true};
               
  // Establish card type
  var cardType = -1;
  for (var i=0; i<cards.length; i++) {

    // See if it is this card (ignoring the case of the string)
    if (cardname.toLowerCase () == cards[i].name.toLowerCase()) {
      cardType = i;
      break;
    }
  }
  
  // If card type not found, report an error
  if (cardType == -1) {
     ccErrorNo = 0;
     return false; 
  }
   
  // Ensure that the user has provided a credit card number
  if (cardnumber.length == 0)  {
     ccErrorNo = 1;
     return false; 
  }
    
  // Now remove any spaces from the credit card number
  cardnumber = cardnumber.replace (/\s/g, "");
  
  // Check that the number is numeric
  var cardNo = cardnumber
  var cardexp = /^[0-9]{13,19}$/;
  if (!cardexp.exec(cardNo))  {
     ccErrorNo = 2;
     return false; 
  }
       
  // Now check the modulus 10 check digit - if required
  if (cards[cardType].checkdigit) {
    var checksum = 0;                                  // running checksum total
    var mychar = "";                                   // next char to process
    var j = 1;                                         // takes value of 1 or 2
  
    // Process each digit one by one starting at the right
    var calc;
    for (i = cardNo.length - 1; i >= 0; i--) {

    
      // Extract the next digit and multiply by 1 or 2 on alternative digits.
      calc = Number(cardNo.charAt(i)) * j;
    
      // If the result is in two digits add 1 to the checksum total
      if (calc > 9) {
        checksum = checksum + 1;
        calc = calc - 10;
      }
    
      // Add the units element to the checksum total
      checksum = checksum + calc;
    
      // Switch the value of j
      if (j ==1) {j = 2} else {j = 1};
    } 
  
    // All done - if checksum is divisible by 10, it is a valid modulus 10.
    // If not, report an error.
    if (checksum % 10 != 0)  {
     ccErrorNo = 3;
     return false; 
    }
  }  

  // The following are the card-specific checks we undertake.
  var LengthValid = false;
  var PrefixValid = false; 
  var undefined; 

  // We use these for holding the valid lengths and prefixes of a card type
  var prefix = new Array ();
  var lengths = new Array ();
    
  // Load an array with the valid prefixes for this card
  prefix = cards[cardType].prefixes.split(",");
      
  // Now see if any of them match what we have in the card number
  for (i=0; i<prefix.length; i++) {
    var exp = new RegExp ("^" + prefix[i]);
    if (exp.test (cardNo)) PrefixValid = true;
  }
      
  // If it isn't a valid prefix there's no point at looking at the length
  if (!PrefixValid) {
     ccErrorNo = 3;
     return false; 
  }
    
  // See if the length is valid for this card
  lengths = cards[cardType].length.split(",");
  for (j=0; j<lengths.length; j++) {
    if (cardNo.length == lengths[j]) LengthValid = true;
  }
  
  // See if all is OK by seeing if the length was valid. We only check the 
  // length if all else was hunky dory.
  if (!LengthValid) {
     ccErrorNo = 4;
     return false; 
  };   
  
  // The credit card is in the required format.
  return true;
}


