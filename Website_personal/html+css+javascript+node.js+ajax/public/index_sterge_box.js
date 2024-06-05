window.onload =function()
{
    let Buton_Inchidere = document.createElement("button");
    Buton_Inchidere.style.backgroundColor="#EEAF9D";
    Buton_Inchidere.style.width="30%";
    Buton_Inchidere.style.justifyContent="center";
    Buton_Inchidere.textContent="Inchide";
    Buton_Inchidere.setAttribute("id","buton");
    Buton_Inchidere.addEventListener("click",inchid);
    let Lista=document.getElementsByClassName("big-box");
    Lista[0].appendChild(Buton_Inchidere);


    function inchid(event)
    {
        let iframe=document.getElementsByClassName("little-box")[0];
        let Buton=document.getElementById("buton");
        let Lista=document.getElementsByClassName("big-box")[0];
        Lista.removeChild(iframe);
        Lista.removeChild(Buton);
        Lista.style.marginBottom="-70px";
    }

}
