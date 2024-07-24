document.addEventListener("DOMContentLoaded", (e) => {
    let table = document.createElement("table")

    for (let i = 0; i < 6; i++ ){
        let tableRow = document.createElement("tr")
        for (let j = 0; j < 10; j++) {
            let tableC = document.createElement("td")
            tableRow.append(tableC)

            tableC.addEventListener("click", (e) => {
                tableC.style.backgroundImage = "url('bubble1.jpg')"

                const number = Math.floor(Math.random() * 3) + 1

                let audioElem = document.createElement("audio")
                audioElem.src = `bubble${number}.mp3`
                audioElem.play()

                tableC.append(audioElem)
            })

            tableC.style.backgroundImage = "url('bubble0.jpg')"
            tableC.style.backgroundSize = "60px 60px"
            tableC.style.width = "60px"
            tableC.style.height = "60px"
        }

        table.append(tableRow)
    }

    document.body.append(table)
    // document -> body -> table -> ...

    document.addEventListener("keydown", (e) => {
        if (e.key.toUpperCase() === "B") {
            const number = Math.floor(Math.random() * 60)

            const row = parseInt(number / 6)
            const column = number % 10;

            let rows = table.children
            for(let i = 0; i < rows.length; i++) {
                let columns = rows[i].children;
                for (let j = 0; j < columns.length; j++) {
                    if (i === row && j === column) {
                        columns[j].click()
                    }
                }
            }
        }
    })

    function reset() {
        let table = document.getElementsByTagName("table")[0]

        if (table.children.length > 0) {
            let element = table.children[0];
            table.removeChild(element);
            table.appendChild(element);
        }

        console.log("debug");
    }

    setInterval(reset, 500)

})

