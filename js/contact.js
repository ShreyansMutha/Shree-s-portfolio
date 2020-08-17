// used to grab onto firebase -> Connection
var config = {
    apiKey: "AIzaSyCJXJFmLrnm_i03qGW5_OMhZudpznK9Poc",
    authDomain: "shree-s-portfolio.firebaseapp.com",
    databaseURL: "https://shree-s-portfolio.firebaseio.com",
    projectId: "shree-s-portfolio",
    storageBucket: "shree-s-portfolio.appspot.com",
    messagingSenderId: "966411242090",
    appId: "1:966411242090:web:0650a388abe76e76f15813",
    measurementId: "G-DL2Q0C01R8"
};
firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('Contact_Data');

//listen for submit event//(1)
document
    .getElementById('contactForm')
    .addEventListener('submit', formSubmit);




//Submit form(1.2)
function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let purpose = document.querySelector('#purpose').value;
    let message = document.querySelector('#message').value;

    //send message values
    sendMessage(name, email, purpose, message);



    //Form Reset After Submission(7)
    document.getElementById('contactForm').reset();
    JSalert();
}

//Send Message to Firebase(4)

function sendMessage(name, email, purpose, message) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
        name: name,
        email: email,
        purpose: purpose,
        message: message
    });
}

function JSalert(){
	swal("Thank you for getting in touch! We appreciate you contacting us.");
}





