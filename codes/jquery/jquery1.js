




// Search logic
$("#filterCards").on('keyup change search', function() {

    var filter = $(this).val();

    $('.senderID__card').each(function() {

        var $i = 0;

        $(this).find('.searchable').each(function() {
            if ($(this).text().search(new RegExp(filter, "i")) >= 0) {
                $i++;
            }
        });

        if ($i > 0) {
            $(this).closest('.col-sm-6').removeClass('d-none');
        } else {
            $(this).closest('.col-sm-6').addClass('d-none');
        }

        if( $(this).closest('.row').find('.col-md-6').not('.d-none').length == 0 ){
            if( $(this).closest('.row').find('.noResult').length <= 0 ){
                $(this).closest('.row').append('<h6 class="noResult" style="color:#666;">Nothing found, try searching again.</h6>');
            }
        }else{
            $(this).closest('.row').find('.noResult').remove();
        }

    });

});









// Scroll to bottom in chats, using .stop() to stop previous animation
const scrollToBottom = function(){
    $(".chat-container").stop().animate({ scrollTop: $(".chat-container")[0].scrollHeight}, 1000);
}


// Document ready
$(document).ready(function(){
    
});






