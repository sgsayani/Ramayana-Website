const firebaseConfig = {
    apiKey: "AIzaSyAHYKLJq2HstjT4hGzFo1ctdzDBAFPejbo",
    authDomain: "contact-final-a7232.firebaseapp.com",
    databaseURL: "https://contact-final-a7232-default-rtdb.firebaseio.com",
    projectId: "contact-final-a7232",
    storageBucket: "contact-final-a7232.appspot.com",
    messagingSenderId: "1045755121888",
    appId: "1:1045755121888:web:9c6d3f87320a257d2f8085"
  };
  //initialize
  firebase.initializeApp(firebaseConfig);

  //reference database
var contactFormDB = firebase.database().ref('contactFrom')
document.getElementById('contactForm').addEventListener('submit',submitForm);


function submitForm(e){
    e.preventDefault();
    var name=getElementById('name');
    var emailid = getElementById('emailid');
    var phonenumber = getElementById('phonenumber');
    var msgContent = getElementById('msgContent');

    saveMessages(name,emailid,phonenumber,msgContent);

    //enable report
    document.querySelector(".alert").style.display ="block";
    //remove alert
    setTimeout(()=>{
        document.querySelector(".alert").style.display="none";
    },3000);

    //reset form
    document.getElementById("contactForm").reset();

    
}
const saveMessages = (name,emailid,phonenumber,msgContent)=>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        emailid : emailid,
        phonenumber : phonenumber,
        msgContent : msgContent,
    });
};
const getElementById =(id)=>{
    return document.getElementById(id).value;

};
