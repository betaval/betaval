
function validate() {
   if (document.form1.name.value.length < 1) {
     alert("Please enter your full name.");
     return false;
   }
  if (document.form1.email.value.length < 1) {
    alert("Please enter your E-mail.");
    return false;
  }
  if (document.form1.gender.value.length < 1) {
     alert("Please select your gender.");
     return false;
     }
  if (document.form1.location.value.length < 1) {
     alert("Please select your location.");
     return false;
     }
  if (document.form1.enquiry.value.length < 1) {
    alert("Please enter your Detail Enquiry.");
    return false;
  }

  DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
  message = "<ul><li><b>Congratulations..!!! </b>";
  message += "<ul><li><b>Your Name: </b>" + document.form1.name.value;
  message += "<li><b>Your Email: </b>" + document.form1.email.value;
  message += "<li><b>Your Gender: </b>" + document.form1.gender.value;
  message += "<li><b>You are from: </b>" + document.form1.location.value;
  message += "<li><b>Your Detail Enquiry: </b>" + document.form1.enquiry.value + "</ul>";
  DispWin.document.write(message);
  return true;
}
