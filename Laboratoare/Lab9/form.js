const options = ["Autobot", "Daimons", "Deep Ones", "Experiment", "Goa'uld", "Hutt", "Jawa", "Kryptonian", "Mandalorians", "Martian", "Protoss", "Rodian", "Romulan", "Tleilaxu", "Vogon", "Wookie", "Xenu", "Yeti", "Zerg"];

window.onload = function() {
  /* Adăugați cod pentru schimbarea culorii de fundal și
     pentru eticheta cu valoarea creditului social      */

    let dropdown = document.getElementById("rasa");
    for (let i = 0; i < options.length; i++) {
        let option = document.createElement("option");
        option.value = options[i];
        option.text = options[i];
        dropdown.appendChild(option);
    }


    const credit = document.getElementById("credit").value;
    const creditValue = document.getElementById("credit-value");
    creditValue.innerHTML = credit;

    document.getElementById("credit").oninput = (event) =>
    {
        const credit = event.target.value;
        const creditValue = document.getElementById("credit-value");
        creditValue.innerHTML = credit;
    };
    // Funcție pentru a schimba culoarea de fundal a paginii
    function changeBackgroundColor() {
        var culoareSelectata = document.getElementById("culoare").value;
        document.body.style.backgroundColor = culoareSelectata;
        // Salvăm culoarea în localStorage pentru a fi reținută de la o vizită la alta
        localStorage.setItem("culoarePreferata", culoareSelectata);
    }

    // Verificăm dacă există o culoare preferată salvată anterior în localStorage
    var culoarePreferataSalvata = localStorage.getItem("culoarePreferata");
    if (culoarePreferataSalvata) {
        // Setăm culoarea de fundal salvată
        document.body.style.backgroundColor = culoarePreferataSalvata;
        // Setăm valoarea input-ului de culoare la culoarea salvată
        document.getElementById("culoare").value = culoarePreferataSalvata;
    }

    function submitForm() {
    // Verificare câmpuri pentru date personale
    var nume = document.getElementById("nume").value;
    var id = document.getElementById("id").value;
    var rasa = document.getElementById("rasa").value;
    var dataNastere = document.getElementById("data-nastere").value;
    var credit = document.getElementById("credit").value;
    var fotografie = document.querySelector("input[type=file]").value;

    // Verificare câmpuri pentru date de contact
    var galaxie = document.getElementById("galaxie").value;
    var planeta = document.getElementById("planeta").value;
    var adresa = document.getElementById("adresa").value;
    var telefon = document.getElementById("telefon").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;

    // Verificare câmpuri pentru semnalmente fizice
    var inaltime = document.getElementById("inaltime").value;
    var greutate = document.getElementById("greutate").value;
    var membri = document.getElementById("membre").value;
    var ochi = document.getElementById("ochi").value;
    var culoare = document.getElementById("culoare").value;

    // Verificare câmpuri pentru detalii vizită
    var dataSosirii = document.getElementById("dataSosirii").value;
    var oraSosirii = document.getElementById("oraSosirii").value;
    var tipSedere = document.getElementById("tipSedere").value;
    var turism = document.getElementById("turism").checked;
    var afaceri = document.getElementById("afaceri").checked;
    var studii = document.getElementById("studii").checked;
    var invazie = document.getElementById("invazie").checked;
    var alteDetalii = document.getElementById("alteDetalii").value;

    // Verificare dacă toate câmpurile sunt completate
    if (nume && id && rasa && dataNastere && credit && fotografie &&
        galaxie && planeta && adresa && telefon && email && website &&
        inaltime && greutate && membri && ochi && culoare &&
        dataSosirii && oraSosirii && tipSedere && (turism || afaceri || studii || invazie)) {
        // Ascunde formularul și afișează mesajul de confirmare
        document.getElementById("container").style.display = "none";
        document.getElementById("confirmare").style.display = "block";
    } else {
        alert("Te rog completează toate câmpurile obligatorii!");
    }
}

};
