function drawTable(nrows, ncols) {
    var container = document.getElementById("container");
    var table = document.createElement("table");
    table.id = "table";
    for (let i = 0; i < nrows; ++i)
    {
       var row = document.createElement("tr");
       for (let j = 0; j < ncols; ++j)
       {
           var cell = document.createElement("td");
           cell.classList.add("r" + i);
           cell.classList.add("c" + j);
           cell.style.border = "1px solid black";
           cell.style.width = "20px";
           cell.style.height = "20px";
           row.appendChild(cell);
       }
       table.appendChild(row);
     }
     container.appendChild(table);
     /*
     1. Generați un tabel cu 'nrows' rânduri și 'ncols' coloane
     și adăugați-l în div-ul cu id-ul 'container'.
  */
  }
  
  function colorCol(column, color) {
    var c = document.getElementsByClassName("c" + column);
        for (let i = 0; i < c.length; ++i){
              c[i].style.backgroundColor = color;
          }
  /*
     2. Colorați coloana 'column' din tabla de desenat cu culoarea 'color'.
  */
  }
  
  function colorRow(row, color) {
    var r = document.getElementsByClassName("r" + row);
    for (let i = 0; i < r.length; ++i)
    {
        r[i].style.backgroundColor = color;
    }
  }
  
  function rainbow(target) {
     let colors = ["rgb(255, 0, 0)", "rgb(255, 154, 0)", "rgb(240, 240, 0)", "rgb(79, 220, 74)", "rgb(63, 218, 216)", "rgb(47, 201, 226)", "rgb(28, 127, 238)", "rgb(95, 21, 242)", "rgb(186, 12, 248)", "rgb(251, 7, 217)"];
     for (let i = 0; i < colors.length; ++i)
         {
             if (target == "row")
             {
                 colorRow(3 * i, colors[i]);
                 colorRow(3 * i + 1, colors[i]);
                 colorRow(3 * i + 2, colors[i]);
             }
             else if(target == "column")
             {
                 colorCol(3 * i, colors[i]);
                 colorCol(3 * i + 1, colors[i]);
                 colorCol(3 * i + 2, colors[i]);
             }
         }
  //3. Desenați un curcubeu pe verticală sau orizontală conform argumentului 'target' folosind culorile din 'colors' și funcțiile 'colorCol' și 'colorRow'.
  }
  
  function getNthChild(element, n) {
    var children = element.children;
        if (children.length < n)
        {
            return null;
        }
        return children[n - 1];
  //4. Întoarceți al n-lea element copil al unui element dat ca argument.
  };
  
  function drawPixel(row, col, color) {
     document.querySelector(".r" + row + ".c" + col).style.backgroundColor = color;
   //5. Colorați celula de la linia 'row' și coloana 'col' cu culoarea `color'.
  }
  
  function drawLine(r1, c1, r2, c2, color) {
    if (r1 == r2)
        {
            for (let i = c1; i <= c2; ++i)
            {
                drawPixel(r1, i, color);
            }
        }
        else if (c1 == c2)
        {
            for (let i = r1; i <= r2; ++i)
            {
                drawPixel(i, c1, color);
            }
        }
  /*
     6. Desenați o linie (orizontală sau verticală) de la celula aflată
     pe linia 'r1', coloana 'c1' la celula de pe linia 'r2', coloana 'c2'
     folosind culoarea 'color'.
     Hint: verificați mai întâi că punctele (r1, c1) și (r2, c2) definesc
     într-adevăr o linie paralelă cu una dintre axe.
  */
  }
  
  function drawRect(r1, c1, r2, c2, color) {
    for (let i = r1; i <= r2; ++i)
      {
          drawLine(i, c1, i, c2, color);
      }
  /*
     7. Desenați, folosind culoarea 'color', un dreptunghi cu colțul din
     stânga sus în celula de pe linia 'r1', coloana 'c1', și cu
     colțul din dreapta jos în celula de pe linia 'r2', coloana 'c2'.
  */
  }
  
  function drawPixelExt(row, col, color) {
    var table = document.getElementById("table");
      var rows = table.children;
      if (rows.length <= row)
      {
          for (let i = rows.length; i <= row; ++i)
          {
              var newRow = document.createElement("tr");
              for (let j = 0; j < table.children[0].children.length; ++j)
              {
                  let newCell = document.createElement("td");
                  newCell.classList.add("r" + i);
                  newCell.classList.add("c" + j);
                  newCell.style.border = "1px solid black";
                  newCell.style.width = "20px";
                  newCell.style.height = "20px";
                  newRow.appendChild(newCell);
              }
              table.appendChild(newRow);
          }
      }
      for (let i = 0; i < rows.length; ++i)
      {
          var cells = rows[i].children;
          if (cells.length <= col)
          {
              for (let j = cells.length; j <= col; ++j)
              {
                  let newCell = document.createElement("td");
                  newCell.classList.add("r" + i);
                  newCell.classList.add("c" + j);
                  newCell.style.border = "1px solid black";
                  newCell.style.width = "20px";
                  newCell.style.height = "20px";
                  rows[i].appendChild(newCell);
              }
          }
      }
      drawPixel(row, col, color);
  /*
     8. Colorați celula de la linia 'row' și coloana 'col' cu culoarea 'color'.
     Dacă celula nu există, extindeți tabla de desenat în mod corespunzător.
  */
  }
  
  function colorMixer(colorA, colorB, amount){
     let cA = colorA * (1 - amount);
     let cB = colorB * (amount);
     return parseInt(cA + cB);
  }
  
  function drawPixelAmount(row, col, color, amount) {
    let cell = document.querySelector(".r" + row + ".c" + col);
      if (amount == 1)
      {
          cell.style.backgroundColor = color;
      }
      else if (amount != 0)
      {
          var oldColorArray = getComputedStyle(cell).backgroundColor.match(/\d+/g);
          var newColorArray = color.match(/\d+/g);
          var x = colorMixer(oldColorArray[0], newColorArray[0], amount);
          var y = colorMixer(oldColorArray[1], newColorArray[1], amount);
          var z = colorMixer(oldColorArray[2], newColorArray[2], amount);
          cell.style.backgroundColor = "rgb(" + x + ", " + y + ", " + z + ")";
      }
     /*
     9. Colorați celula la linia 'row' și coloana 'col' cu culoarea 'color'
     în funcție de ponderea 'amount' primită ca argument (valoare între 0 și 1).
     Dacă 'amount' are valoarea:
     1, atunci celula va fi colorată cu 'color'
     0, atunci celula își va păstra culoarea inițială
     pentru orice altă valoare, culoarea inițială și cea dată de argumentul
     'color' vor fi amestecate. De exemplu, dacă ponderea este 0.5, atunci
     culoarea inițială și cea nouă vor fi amestecate în proporții egale (50%).
     */
  
     /*
     Hint 1: folosiți funcția colorMixer de mai sus.
  
     Hint 2: pentru un argument 'color' de forma 'rgb(x,y,z)' puteți folosi
     let newColorArray = color.match(/\d+/g);
     pentru a obține un Array cu trei elemente, corespunzătoare valorilor
     asociate celor trei culori - newColorArray = [x, y, z]
  
     Hint 3: pentru a afla culoarea de fundal a unui element puteți folosi
     metoda getComputedStyle(element). Accesând proprietatea backgroundColor
     a obiectului întors, veți obține un string de forma 'rgb(x,y,z)'.
     */
  }
  
  function delRow(row) {
    var table = document.getElementById("table");
      var rows = table.children;
      if (rows.length <= row)
      {
          return;
      }
      for (let i = row + 1; i < rows.length; ++i)
      {
          var cells = rows[i].children;
          for (let j = 0; j < cells.length; ++j)
          {
              cells[j].classList.remove("r" + i);
              cells[j].classList.add("r" + (i - 1));
          }
      }
      table.removeChild(rows[row]);
  //10. Ștergeți linia cu numărul 'row' din tabla de desenat.
  }
  
  function delCol(col) {
    var table = document.getElementById("table");
      var rows = table.children;
      for (let i = 0; i < rows.length; ++i)
      {
          var cells = rows[i].children;
          if (cells.length <= col)
          {
              return;
          }
          for (let j = col + 1; j < cells.length; ++j)
          {
              cells[j].classList.remove("c" + j);
              cells[j].classList.add("c" + (j - 1));
          }
          rows[i].removeChild(cells[col]);
      }
  //   10. Ștergeți coloana cu numărul 'col' din tabla de desenat.
  }
  
  function shiftRow(row, pos) {
      var table = document.getElementById("table");
      var cells = table.children[row].children;
      for (let i = cells.length - 1; i > 0; --i)
      {
          var aux = cells[i].style.backgroundColor;
          cells[i].style.backgroundColor = cells[(i + pos) % cells.length].style.backgroundColor;
          cells[(i + pos) % cells.length].style.backgroundColor = aux;
      }
  /*
     11. Aplicați o permutare circulară la dreapta cu 'pos' poziții a
     elementelor de pe linia cu numărul 'row' din tabla de desenat.
  */
  }
  
  function jumble() {
  /*
     12. Folosiți funcția 'shiftRow' pentru a aplica o permutare circulară
     cu un număr aleator de poziții fiecărei linii din tabla de desenat.
  */
  var table = document.getElementById("table");
      var rows = table.children;
      for (let i = 0; i < rows.length; ++i)
      {
          var rand = Math.floor(Math.random() * rows.length);
          shiftRow(i, rand);
      }
  }
  
  function transpose() {
  //13. Transformați tabla de desenat în transpusa ei.
  var table = document.getElementById("table");
     var rows = table.children;
     var newTable = document.createElement("table");
     newTable.id = "table";
     for (let i = 0; i < rows.length; ++i)
     {
         var newRow = document.createElement("tr");
         for (let j = 0; j < rows.length; ++j)
         {
             let newCell = document.createElement("td");
             newCell.classList.add("r" + i);
             newCell.classList.add("c" + j);
             newCell.style.border = "1px solid black";
             newCell.style.width = "20px";
             newCell.style.height = "20px";
             newRow.appendChild(newCell);
         }
         newTable.appendChild(newRow);
     }
     for (let i = 0; i < rows.length; ++i)
     {
         var cells = rows[i].children;
         for (let j = 0; j < cells.length; ++j)
         {
             var color = cells[j].style.backgroundColor;
             let newCell = newTable.querySelector(".r" + j + ".c" + i);
             newCell.style.backgroundColor = color;
         }
     }
     table.parentNode.replaceChild(newTable, table);
  }
  
  function flip(element) {
  
  //   14. Inversați ordinea copiilor obiectului DOM 'element' primit ca argument.
  const children = [];
      while (node.childNodes.length > 0)
      {
          children.push(node.childNodes[0]);
          node.removeChild(node.childNodes[0]);
      }
      for (let i = children.length - 1; i >= 0; --i)
      {
          node.appendChild(children[i]);
      }
  
  }
  
  function mirror() {
  /*
     15. Oglindiți pe orizontală tabla de desenat: luați jumătatea stângă a tablei,
     aplicați-i o transformare flip și copiați-o în partea dreaptă a tablei.
  */
  var table = document.getElementById("table");
      var rows = table.children;
  
      // Oglindirea pe orizontală
      for (let i = 0; i < rows.length; ++i) {
          var cells = rows[i].children;
          var mirrorCells = [];
  
          // Creează o copie a jumătății stângi a rândului
          for (let j = 0; j < cells.length / 2; ++j) {
              let newCell = document.createElement("td");
              newCell.classList.add("r" + i);
              newCell.classList.add("c" + (cells.length + j));
              newCell.style.border = "1px solid black";
              newCell.style.width = "20px";
              newCell.style.height = "20px";
              let color = cells[j].style.backgroundColor;
              if (color !== "") newCell.style.backgroundColor = color; // Copiază culoarea dacă există
              mirrorCells.push(newCell);
          }
  
          // Inversează ordinea celulelor oglindite
          mirrorCells.reverse();
  
          // Adaugă celulele oglindite la sfârșitul rândului
          for (let j = 0; j < mirrorCells.length; ++j) {
              rows[i].appendChild(mirrorCells[j]);
          }
      }
  }
  
  function smear(row, col, amount) {
  /*
     16. Întindeți culoarea unei celule de pe linia 'row' și coloana 'col' în celulele
     învecinate la dreapta, conform ponderii date de 'amount' (valoare între 0 și 1).
     Cu colorarea fiecărei celule la dreapta, valoarea ponderii se înjumătățește.
     Hint: folosiți funcția 'drawPixelAmount'.
  */
      var table = document.getElementById("table");
      var rows = table.children;
  
      var cell = rows[row].children[col];
      var color = getComputedStyle(cell).backgroundColor;
  
      // Aplică culoarea celulei inițiale
      drawPixel(row, col, color);
  
      // Întinde culoarea către dreapta
      for (let i = col + 1; i < rows[row].children.length; ++i) {
          amount /= 2; // Înjumătățește ponderea pentru fiecare celulă
          let newColor = color;
          if (amount !== 0 && amount !== 1) {
              let oldColorArray = color.match(/\d+/g);
              let newColorArray = color.match(/\d+/g);
              for (let j = 0; j < 3; ++j) {
                  newColorArray[j] = colorMixer(oldColorArray[j], newColorArray[j], amount);
              }
              newColor = "rgb(" + newColorArray.join(", ") + ")";
          }
          drawPixel(row, i, newColor);
      }
  }
  
  //Lab7
  window.onload = function(){
      const rows = 30;
      const cols = 30;
      drawTable(rows, cols);
      colorCol(2, "red");
      colorRow(3, "blue");
      rainbow("column");
      drawLine(2, 2, 4, 2, "green");
      drawRect(6, 6, 8, 8, "blue");
      var rand1 = Math.floor(Math.random() * 35), rand2 = Math.floor(Math.random() * 35);
      drawPixelExt(rand1, rand2, "orange");
      var rand3 = Math.random();
      drawPixelAmount(5, 0, "rgb(100, 100, 100)", rand3);
      if (rand3 <= 0.5)
      {
               delRow(6);
               delCol(6);
               drawPixel(6, 6, "red");
      }
  }
  
  
      // Lab 8
      {
          document.body.onclick = draw_pixel;
          function draw_pixel(event)
          {
              var pos = event.target.classList;
              var x = pos[0].substring(1);
              var y = pos[1].substring(1);
              drawPixel(x, y, document.querySelector("#color-picker").value);
          }
          // when clicking the button rainbow, call function rainbow
          document.querySelector("#rainbow").onclick = rainbow;
          document.querySelector("#jumble").onclick = jumble;
          document.querySelector("#rotate").onclick = transpose;
          document.querySelector("#clear").onclick = function()
          {
              document.querySelectorAll("td").forEach((el) => el.style.backgroundColor = "white");
          }
      }
  