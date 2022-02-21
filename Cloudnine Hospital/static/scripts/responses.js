function getBotResponse(input) {
    

    // Simple responses
    if (input == "hello") {
        return "Hello there! <br>Please tell us your name,your age,your Contact and your issue?";
    } else if (input == "thankyou") {
        return "Thank you we will get back to you!";
    } else {
        return "Please tell us your name,your age,your Contact and your issue?<br>Enter THANKYOU if already sorted out";
    }
}