document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("form");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function testez(emailInput, sumaInput) {
        let ok = emailRegex.exec(emailInput);
        if (!ok) {
            output.textContent = "Emailul introdus este invalid!";
            return;
        }
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            age: document.getElementById('age').value,
            birthday: document.getElementById('birthday').value,
            range: document.getElementById('range').value,
            hobbies: Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(hobby => hobby.value),
            interest: document.getElementById('interests').value,
            message: document.getElementById('message').value
        };

        testez(formData.email, formData.age);

        console.log(formData);
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.redirected) {
                    window.location.href = response.url;
                } else {
                    return response.json();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
