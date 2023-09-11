document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registroForm");

    formulario.addEventListener("submit", function () {
        // Evita que se envíe el formulario
        event.preventDefault();

        // Obtén los valores ingresados por el usuario
        const nombre = document.getElementById("nombreInput").value;
        const apellido = document.getElementById("apellidoInput").value;
        const fechaNacimiento = document.getElementById("fecha_nacimiento").value;

        // Crea un objeto con los datos del formulario
        const formData = {
            Nombre: nombre,
            Apellido: apellido,
            fecha_nacimiento: fechaNacimiento
        };

        // Realiza la solicitud HTTP con fetch()
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST", // Utiliza el método POST
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData) // Convierte los datos a formato JSON
        })
        .then(response => response.json()) // Convierte la respuesta a JSON
        .then(data => {
            // Maneja la respuesta del servidor
            console.log("Respuesta del servidor:", data);
        })
        .catch(error => {
            // Maneja los errores
            console.error("Error:", error);
        });
    });
});
