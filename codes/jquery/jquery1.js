














// Scroll to bottom in chats, using .stop() to stop previous animation
const scrollToBottom = function(){
    $(".chat-container").stop().animate({ scrollTop: $(".chat-container")[0].scrollHeight}, 1000);
}








