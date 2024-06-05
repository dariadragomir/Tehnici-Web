# Tehnici-Web
Proiect personal realizat folosind HTML & CSS & JavaScript & Node.js & AJAX 

# Instalare
- Instalarea Node.js pentru rularea serverului: https://nodejs.org/en/download/prebuilt-installer 
- Utilizand orice IDE care are terminal (de exemplu WebStorm https://www.jetbrains.com/webstorm/download/#section=windows ), se instaleaza urmatoarele dependențe

    npm i express

    npm i cors body-parser

- Conectarea la server se realizeaza ruland comanda:

    node server.js
  
- Site-ul se acceseaza utilizand orice browser, la adresa http://localhost:3000
- Pentru a vedea formularul de contact, se poate face logarea utilizand username: user1, password: password1. 

# Descriere partea a 2-a
- Pe pagina index.html, butonul Inchide este creat cu Javascript si sterge box-ul de text.
- Pagina Resume permite atasarea unui fisier din calculatorul utilizatorului si descarcarea CV-ului.
- Pagina contact, la apasarea animatiei, aceasta dispare (utilizand javascript).
- Pagina Photos afiseaza poze la apasarea tastelor a/b/c/d, duplica o poza la apasarea acesteia (onclick). Utilizez proprietatile: setInterval, Math.round(), Math.floor(), Math.random(), target, stopPropagation, getComputedStyle. (schimbarea aleatoare a valorilor unei proprietăți: dimensiuni si pozitie )
  
- Pagina Login cu Node.js cu cereri AJAX pentru a verifica daca userul se afla in fisierul users.json.
- Pagina form.html cu inputuri funcționale (input de tip text/range/number/radio/checkbox, select, date) si validarea datelor din formular folosind expresii regulate pentru nume si email.
- Pagina form.html foloseste cereri get/post pentru preluare date din formular, iar la trimitere datele se salveaza in fisierul raspunsuri.json.
