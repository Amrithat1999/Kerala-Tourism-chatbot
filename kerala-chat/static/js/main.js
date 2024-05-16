

function sendMessage() {
    var userInput = document.getElementById('input').value;
    console.log(userInput);
    document.getElementById('input').value = '';

    var messageSection = document.getElementById('message-section');
    var userMessage = document.createElement('div');
    userMessage.className = 'message';
    userMessage.innerHTML = '<div id="user"><span id="user-response">' + userInput + '</span></div>';
    messageSection.appendChild(userMessage);

    fetch("/get_response", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "user_input=" + userInput
    })
    .then(response => response.json())
    .then(data => {
        var botResponse = document.createElement('div');
        botResponse.className = 'message';
        if (Array.isArray(data.response)) {
            // Handle array response (e.g., for multiple items)
            botResponse.innerHTML = data.response.map(item => `<div id="bot"><span id="bot-response">${item}</span></div>`).join('');
        } else {
            // Handle single response
            botResponse.innerHTML = '<div id="bot"><span id="bot-response">' + data.response + '</span></div>';
        }
        messageSection.appendChild(botResponse);
        messageSection.scrollTop = messageSection.scrollHeight;
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors if necessary
    });
}
function show(params) {
  
    document.getElementById('card').style.display='block';     
    document.getElementById('main').style.display='none';        
  
  }
  function closecard(params) {
  
    document.getElementById('card').style.display='none';
    document.getElementById('main').style.display='block';

}