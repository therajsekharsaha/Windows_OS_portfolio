var closeBtn = document.querySelector(".close");
var popupBox = document.querySelector(".popup-sub");

closeBtn.addEventListener("click",function(){
    // popupBox.style.transform = "scale(1)";
    // setTimeout(function(){
    //     popupBox.style.transform = "scale(0)";
    // },1000);
    popupBox.style.opacity=0;
});