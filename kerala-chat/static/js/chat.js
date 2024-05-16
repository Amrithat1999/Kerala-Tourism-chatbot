document.getElementById("sendBtn").addEventListener("click", function() {
    var userInput = document.getElementById("userInput").value;
    var lang = document.getElementById("lang").value;

    // Send user input and selected language to server
    fetch('/get_response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_input: userInput,
            lang: lang
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle response
        console.log(data);
    });
});
