
document.addEventListener("DOMContentLoaded", ()  => {
    document.body.addEventListener("keydown", (e) => {
        if (["R", "G", "Y", "B"].includes(e.key.toUpperCase())) {
            let div = document.createElement("div");
            let color;

            if (e.key.toUpperCase() === "R") {
                color = "red";
            }

            if (e.key.toUpperCase() === "G") {
                color = "green";
            }

            if (e.key.toUpperCase() === "Y") {
                color = "yellow";
            }

            if (e.key.toUpperCase() === "B") {
                color = "blue";
            }

            let circle = document.createElement("div");

            Object.assign(circle.style, {
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            })

            circle.addEventListener("click", (e) => {
                let circle2 = document.createElement("div");
                Object.assign(circle2.style, {
                    backgroundColor: color,
                    width: "50%",
                    height: "50%",
                    borderRadius: "50%",
                    border: "black",
                    borderWidth: "2px",
                    borderStyle: "solid"
                })

                circle.append(circle2);
            })

            Object.assign(div.style, {
                backgroundColor: "black",
                margin: "10px",
                width: "100px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                left: `${Math.random() * (window.innerWidth)}px`,
                top: `${Math.random() * (window.innerHeight)}px`
            });


            div.append(circle);
            document.body.append(div);
        }
    })
})