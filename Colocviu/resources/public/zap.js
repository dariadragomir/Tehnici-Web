let tv = document.getElementById("tv")

field.addEventListener("click", async () => {
    try {
        const response = await fetch('zap')
        const data = await response.json()
        console.log(data)

        let number = Math.floor(Math.random() * data.length)
        let film = data[number]

        // /// let film
        // field.addEventListener("mouseover", () => {
        //
        // })

    } catch(e) {
        //
    }
})
