$(document).ready(function(){
    $('#button').hover(
        function(){
            $(this).addClass('highlighted');
        },
        function(){
            $(this).removeClass('highlighted');
        }
    );
});


