$(function() {
    var cnt1 = 0;
    $('#all_hidden_button').click(function() {
        cnt1 += 1;
        if(cnt1 == 2){
            $('.map_home_box').css("transform", "translateX(0%)");
            $('.all_hidden_button_img').css("transform", "rotate(0deg)");
            cnt1 = 0;
        } else{
            $('.map_home_box').css("transform", "translateX(-100%)");
            $('.all_hidden_button_img').css("transform", "rotate(180deg)");
        }
    }); 
})