window.onload = function ()
{
    text_sus=document.getElementById("animation1");
    text_sus.addEventListener("click",(event)=>
    {
        main=document.getElementsByClassName("big-box");
        main[0].removeChild(event.target);
    })
}
