document.addEventListener("DOMContentLoaded", () => {
    console.log("INFO-ENSA Frontend Loaded");

    const messageElement = document.getElementById("backend-message");

    fetch("http://localhost:8080/")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Success:", data);
            messageElement.textContent = data.message;
            messageElement.style.color = "#10b981"; // Success green
        })
        .catch(error => {
            console.error("Error:", error);
            messageElement.textContent = "Error connecting to backend";
            messageElement.style.color = "#ef4444"; // Error red
        });
});
