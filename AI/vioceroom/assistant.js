// function to greet according to time
function time() {
    var today = new Date();
    var hour = today.getHours();
    if (hour >= 0 && hour < 12) {
        eel.speak("Good Morning!");
        eel.create_connection();
    }


    else if (hour >= 12 && hour < 18) {
        eel.speak("Good Afternoon!");
        eel.create_connection();
    }


    else {
        eel.speak("Good Evening!");
        eel.create_connection();
    }
}

