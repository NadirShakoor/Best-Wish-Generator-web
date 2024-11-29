let list = [
    "Congratulations!", "Well done", "Cheers to you", "You deserve it", "Keep shining", 
    "Follow your dreams!", "Believe in yourself!", "Stay positive!", "Dream big!", 
    "You are amazing!", "Keep going!", "Dont give up!", "You can do it!", 
    "Stay strong!", "Keep moving forward!", "Stay blessed!", "Have a great day!", 
    "Keep smiling!", "Cheers!", "Take care!"
];

let wishmessage = document.getElementById("wishMessage");
let wishgenerater = document.getElementById("wishgenerater");
let nameInput = document.getElementById("nameInput");

wishgenerater.addEventListener("click", function() {
    // Get the name from the input field
    let name = nameInput.value.trim();

    if (name) {
        // Generate a random wish and include the name
        wishmessage.textContent = `${name}: ${list[Math.floor(Math.random() * list.length)]} 😊 `;
    } else {
        // Show a default message if no name is provided
        wishmessage.textContent = "Please enter your name to receive a wish!";
    }
});
