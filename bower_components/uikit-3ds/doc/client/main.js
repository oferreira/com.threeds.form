$( document ).ready(function() {
    $('body').header3ds({
        "bgcolor": "white",
        "hasfooter": true,
        "language": 'en',
        "haslogin": true,
        "hascompass": true,
        "hassocial": true,
        "hastrigram": true,
        "hasconnect": true,
        "hasborder": true,
        "margin": 0,
        "width": "100%",
        "callback": null,
        "modalId": 'myModal',
        "apiURL": "http://localhost:3000",
        "debug": true
    });
});