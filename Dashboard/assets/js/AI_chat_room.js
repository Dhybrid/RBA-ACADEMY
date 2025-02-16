// script.js

const startRecordingBtn = document.getElementById("start-recording");
const userAvatar = document.getElementById("user-avatar");
const aiAvatars = document.querySelectorAll(".ai-avatar");

let isListening = false;
let recognitionTimeout; // To track the silence after speaking

// Initialize Speech Recognition and Speech Synthesis
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
const synth = window.speechSynthesis;

// Setup for speech recognition
recognition.continuous = true; // Keep listening continuously
recognition.interimResults = false; // Capture interim results
recognition.lang = 'en-US';
recognition.maxAlternatives = 1; // Only take the most likely transcript

// Handle speech recognition results
recognition.onresult = function (event) {
  let transcript = '';
  let finalTranscript = '';

  // Loop through all results
  for (let i = event.resultIndex; i < event.results.length; i++) {
    const result = event.results[i];
    
    if (result.isFinal) {
      finalTranscript = result[0].transcript;
    } else {
      transcript += result[0].transcript; // Capture ongoing speech
    }
  }

  // Update chat with interim results (as user is speaking)
  if (transcript) {
    addChatMessage(transcript, 'user');
    userAvatar.classList.add("speaking"); // Show avatar as speaking
  }

  // When speech ends, finalize the message and process the response
  if (finalTranscript) {
    addChatMessage(finalTranscript, 'user');
    userAvatar.classList.remove("speaking"); // Hide speaking state
    startAiResponse(finalTranscript);
  }

  // Reset timeout for user finishing speech
  clearTimeout(recognitionTimeout);
  recognitionTimeout = setTimeout(() => {
    if (finalTranscript) {
      addChatMessage(finalTranscript, 'user');
      userAvatar.classList.remove("speaking");
      startAiResponse(finalTranscript);
    }
  }, 20000); // Timeout after 1 second of silence (adjustable)

};

// Add new chat messages to the chat container
function addChatMessage(message, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = message;
  document.querySelector('.chat').appendChild(msgDiv);
  document.querySelector('.chat').scrollTop = document.querySelector('.chat').scrollHeight;
}

// AI starts responding (simulating a response)
function startAiResponse(userMessage) {
  aiAvatars.forEach(avatar => avatar.style.animation = "bobble 1s ease-in-out infinite, changeShape 2s ease-in-out infinite"); // AI avatars bobbing

  // Simulate AI response
  const aiResponse = "I’m here to assist you!";
  setTimeout(() => {
    addChatMessage(aiResponse, 'ai');
    aiAvatars.forEach(avatar => avatar.style.animation = "none"); // Stop animation after AI response
  }, 1500);
}

// Prevent automatic stopping after a period of silence
recognition.onend = function () {
  if (!isListening) {
    // If the button has not been clicked to stop, restart recognition
    recognition.start();
  }
};

// // Function to check if microphone permission is granted
// function checkMicrophonePermission() {
//   navigator.permissions.query({ name: 'microphone' }).then(function (result) {
//     if (result.state === 'granted') {
//       // Permission already granted, start speech recognition
//       startRecording();
//     } else if (result.state === 'prompt') {
//       // Permission still pending, you can show a message to the user
//       console.log("Please allow microphone access to start the conversation.");
//     } else {
//       // Permission denied, handle accordingly
//       console.log("Microphone access has been denied.");
//     }
//   });
// }

// Start/Stop conversation toggle
startRecordingBtn.addEventListener("click", () => {
  if (!isListening) {
    recognition.start();
    startRecordingBtn.textContent = "Stop Conversation";
    isListening = true;
    userAvatar.classList.remove("speaking"); // Reset avatar on start
  } else {
    recognition.stop(); // Stop speech recognition explicitly
    startRecordingBtn.textContent = "Start Conversation";
    isListening = false;
    userAvatar.classList.remove("speaking"); // Reset avatar on stop
  }
});

// // Start/Stop conversation toggle
// startRecordingBtn.addEventListener("click", () => {
//   checkMicrophonePermission(); // Check for microphone permission before starting speech recognition
// });