// JavaScript source code Dessert Cafe MOMO
// Authors : Suim Park, Larisa Sabalin, Roman Shaiko, Dmitrii Kudrik
// Script Date : 12 December, 2017

/**
*function showErrMsg(c)
*this fuction gives the option of error message answer
*based on the language options
*it is formated as an array and the resopnse is chosen based on the
*situation's requierments
*the "c" value is the index of the array requiered.
*/
function showErrMsg(c) {
    var msgs_fr = [
        "Entrez votre nom s'il vous plaît", "Entrez votre email s'il vous plaît", "Entrez votre numéro de téléphone s'il vous plaît"
    ]

    var msgs_en = [
        "Enter your name please", "Enter your email please", "Enter your phone number please"
        ]
    if(language == "EN")
        window.alert(msgs_en[c]);
    else
        window.alert(msgs_fr[c]);

}

/**
*function validateForm()
*validates the laguage chosen by the customer
*chooses the form in function of the language
*validates the form content for name, e-mail and phone
*if all valid procedes to the print function
*/

function validateForm() {
var language="";
    if (document.cookie)
    {
        var c = document.cookie;
        language = c.substring(c.lastIndexOf("=") + 1);
    }
    else
    {
        language = "EN";
    }

    if (language == "EN")
    {
        event_form = document.getElementsByName("events")[0];

      }
    else
    {
        event_form = document.getElementsByName("events")[1];

    }

    if (!event_form.your_name.value) {
        showErrMsg(0);
        event_form.your_name.focus();
        return;
    }
    else if (!event_form.email.value) {
        showErrMsg(1);
        event_form.email.focus();
        return;
    }
    else if (!event_form.ph_number.value) {
        showErrMsg(2);
        event_form.ph_number.focus();
        return;
    }
    else {
      printHtml(event_form, language);
    }

}

/**
*function printHtml(event_form, language)
*chnges the title of the form
*changes the displayed form from one to another
*chooses which table to be displayed based on language
*displayes the inner content of the table
*/

function printHtml(event_form, language){
    var form_titles = document.getElementsByClassName("form_title");

form_titles[0].innerHTML = "Your information has been uploaded which is as below."
form_titles[1].innerHTML = "Votre information a été téléchargée, comme ci-dessous."

    var event_info;
    document.getElementById("event_table").style.display = "none";
    document.getElementById("event_info").style.display = "block";

   if (language == "EN") {

        event_info = document.getElementsByClassName("order_info_t")[0];

        document.getElementsByClassName("order_info_t")[1].style.display = "none";


    }
    else {

        event_info = document.getElementsByClassName("order_info_t")[1];
        document.getElementsByClassName("order_info_t")[0].style.display = "none";


    }
   event_info.style.display = "table";
   event_form.style.display = "none";

   event_info.getElementsByClassName("name_v")[0].appendChild(document.createTextNode(event_form.your_name.value));
    event_info.getElementsByClassName("mail_v")[0].appendChild(document.createTextNode(event_form.email.value));
    event_info.getElementsByClassName("phone_v")[0].appendChild(document.createTextNode(event_form.ph_number.value));
    event_info.getElementsByClassName("event_v")[0].appendChild(document.createTextNode(event_form.event.value));
    event_info.getElementsByClassName("nbr_people_v")[0].appendChild(document.createTextNode(event_form.nbr_personnes.value));
    event_info.getElementsByClassName("date_v")[0].appendChild(document.createTextNode(event_form.eventDate.value));
    event_info.getElementsByClassName("message_v")[0].appendChild(document.createTextNode(event_form.your_text.value));

 }
