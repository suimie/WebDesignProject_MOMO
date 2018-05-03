
//var dateValidity=true;

function validateDate(){
    if (document.cookie) {
        var c = document.cookie;
        language = c.substring(c.lastIndexOf("=") + 1);
    } else {
        language = "EN";
    }

   var pickupDate=document.getElementById("pickupDate").value;
     
   var newDate= new Date(pickupDate);
    
    var today = new Date();
    
    if (today > newDate) {
        if (language == "EN") 
            alert("Please specify a valid date and time!");
        else
            alert("SVP, choisissez la date et l'heure valide!");

       //document.getElementById("pickupDate").value="";
        setPicup(); // suim change
       // dateValidity=false;
    }

    /* Dmitrii's code
    var dayofWeek=newDate.getDay();
    var hourofDay=newDate.getHours();
    
    if(dayofWeek==0)
    {
        if (hourofDay < 9 || hourofDay >= 19) {
            if (language == "EN") 
                alert("Please specify a valid time!");
            else
                alert("SVP, choisissez l'heure valide!");

        document.getElementById("pickupDate").value="";
        }
    }
    else if (hourofDay<9 || hourofDay>=21){
        alert("Please specify a valid time!"+"\n"
              +"SVP, choisissez l'heure valide!");
        document.getElementById("pickupDate").value="";
        }
    */
}

function selectDate() {
    
}

function validateImgFile() { 
    if (document.cookie) {
        var c = document.cookie;
        language = c.substring(c.lastIndexOf("=") + 1);
    } else {
        language = "EN";
    }

    var order_form;
    if (language == "EN")
        order_form = document.getElementsByName("order")[0];
    else {
        order_form = document.getElementsByName("order")[1];
    }
    var file = order_form.productPhoto;
    
    var ext = file.value.substring(file.value.length - 3, file.value.length);
    if (!(ext == "png" || ext == "jpg" || ext == "gif")) {
        if (language == "EN") 
            window.alert("Selected image type is not supported! (.png, .jpg, .gif only).");
        else
            window.alert("Le type de fichier sélectionné  n'est pas pris en charge! (.png, .jpg, .gif uniquement).");

            file.value = "";
        file.focus();
    }
}

function setPicup() {
    if (document.cookie) {
        var c = document.cookie;
        language = c.substring(c.lastIndexOf("=") + 1);
    } else {
        language = "EN";
    }

    var today = new Date();
    var strDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getDate() + 1);
    if (language == "EN") {
        document.getElementsByName("pickupDate")[0].value = strDate;
        document.getElementsByName("pickupTime")[0].selectedIndex = "1";
   } else {
        document.getElementsByName("pickupDate")[1].value = strDate;
        document.getElementsByName("pickupTime")[1].selectedIndex = "1";
    }

}

/**
 * 
 * @param {any} radioE
 * When the radio buttons for the cake category is clicked, this function is called.
 * It makes the list of cakes of the selected category.
 */
function select_cake_category(evt) {
    if (document.cookie) {
        var c = document.cookie;
        language = c.substring(c.lastIndexOf("=") + 1);
    } else {
        language = "EN";
    }

    var selectE;
    var selectC;
    if (language == "EN") {
        selectC = document.getElementsByName("cakeCat")[0];
        selectE = document.getElementsByName("cakeID")[0];
    } else {
        selectC = document.getElementsByName("cakeCat")[1];
       selectE = document.getElementsByName("cakeID")[1];
    }

   for (var i = selectE.length-1; i >= 0 ; i--) {
        selectE.remove(i);
    }

   var order_form;
    selectE.disabled = false;
    if (language == "EN") {
        order_form = document.getElementsByName("order")[0];
    } else {
        order_form = document.getElementsByName("order")[1];
    }
    order_form.productPhoto.disabled = true;
    if (selectC.selectedIndex == 0) {           // wedding cakes
        for (var i = 1; i < 5; i++) {
            var option = document.createElement("option");
            if (language == "EN") 
                option.text = "Wedding Cake No. " + i;
            else
                option.text = "Gâteau de mariage No." + i;

            selectE.add(option);
        }
    } else if (selectC.selectedIndex == 1) {    // birthday cakes
        for (var i = 1; i < 58; i++) {
            var option = document.createElement("option");
            if (language == "EN") 
                option.text = "Gâteaux d'anniversaire No." + i;
            else
                option.text = "Gâteau de mariage No. " + i;
            selectE.add(option);
        }
    } else if (selectC.selectedIndex == 4) {    // custome
        selectE.disabled = true;
        order_form.productPhoto.disabled = false;
    } else if (selectC.selectedIndex == 2) {    // Korea Style cakes
        for (var i = 1; i < 20; i++) {
            var option = document.createElement("option");
            if (language == "EN") 
                option.text = "Korea Style Cake No. " + i;
            else
                option.text = "Gâteau de style coréene No. " + i;
            selectE.add(option);
        }
    } else if (selectC.selectedIndex == 3) {    // Flower cakes
        for (var i = 1; i < 8; i++) {
            var option = document.createElement("option");
            if (language == "EN") 
                option.text = "Flower Cake No. " + i;
            else
                option.text = "Gâteau aux fleurs No. " + i;
           selectE.add(option);
        }
    }
    if (selectC.selectedIndex == 4)
        selectE.selectedIndex = 0;
}


/**
 * 
 * @param {any} c
 * It shows the error message depends on the language setting and c.
 * c is the position of the text.
 * name - 0
   email - 1
   phone - 2
   email format -3
 */
function showErrMsg(c) {
    var msgs_fr = [
        "Entrez votre nom s'il vous plaît", "Entrez votre email s'il vous plaît", "Entrez votre numéro de téléphone s'il vous plaît", 
        "Votre courriel doit respecter le format: example@domain.com", "Votre numéro de téléphone doit respecter le format: 0123456789"
    ]

    var msgs_en = [
        "Enter your name please", "Enter your email please", "Enter your phone number please", "Email address should respect the format: example@domain.com", "Phone number should respect the format: 0123456789"
        ]
    if(language == "EN")
        window.alert(msgs_en[c]);        
    else 
        window.alert(msgs_fr[c]);        
 
}

/**
 * This function is for the validation of the form.
 */
function validateForm() {
    if (document.cookie) {
        var c = document.cookie;
        language = c.substring(c.lastIndexOf("=") + 1);
    } else {
        language = "EN";
    }

    var order_form;
    if (language == "EN")
        order_form = document.getElementsByName("order")[0];
    else {
        order_form = document.getElementsByName("order")[1];
    }

    if (!order_form.your_name.value) {
        showErrMsg(0);
        order_form.your_name.focus();
        return;
    }

    if (!order_form.email.value) {
        showErrMsg(1);
        order_form.email.focus();
        return;
    }
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(!order_form.email.value.match(mailformat))  
    {  
        showErrMsg(3);
        order_form.email.focus();  
        return ;  
    }  
    
    
    
    if (!order_form.ph_number.value) {
        showErrMsg(2);
        order_form.ph_number.focus();
        return;
    }
    
    var phoneNo = /^\d{10}$/;  
    var temp= order_form.ph_number.value;
  if(!temp.match(phoneNo))  
       
      {  showErrMsg(4);
        order_form.ph_number.focus();
        return; 
      }
    

    if (order_form.cakeCat.selectedIndex == 4 && !order_form.productPhoto.value) {
        if (language == "EN")
            window.alert("You should select the image file for custom cake.");
        else {
            window.alert("Vous devez sélectionner le fichier image pour un gâteau personnalisé.");
        }
        return;
   }


    var form_titles = document.getElementsByClassName("form_title");
    form_titles[0].innerHTML = "Your order has been uploaded which is as below."
    form_titles[1].innerHTML = "Votre commande a été téléchargée, comme ci-dessous."

    var order_info;
    var order_form;
    document.getElementById("order_table").style.display = "none";
    document.getElementById("order_info").style.display = "block";
   if (language == "EN") {
        order_info = document.getElementsByClassName("order_info_t")[0];
        order_form = document.getElementsByName("order")[0];
        document.getElementsByClassName("order_info_t")[1].style.display = "none";
    }else {
        order_info = document.getElementsByClassName("order_info_t")[1];
        order_form = document.getElementsByName("order")[1];
        document.getElementsByClassName("order_info_t")[0].style.display = "none";
    }


   order_info.style.display = "table";
   order_form.style.display = "none";

    order_info.getElementsByClassName("name_v")[0].appendChild(document.createTextNode(order_form.your_name.value));
    order_info.getElementsByClassName("mail_v")[0].appendChild(document.createTextNode(order_form.email.value));
    order_info.getElementsByClassName("address_v")[0].appendChild(document.createTextNode(order_form.address.value));
    order_info.getElementsByClassName("phone_v")[0].appendChild(document.createTextNode(order_form.ph_number.value));

    if (order_form.cakeCat.selectedIndex == 4) {
        var fName = order_form.productPhoto.value;
        var img = document.createElement('img');
        img.src = "images/" + fName.substring(fName.lastIndexOf("\\") + 1, fName.length);
        img.style.width = "100px";
        order_info.getElementsByClassName("cake_v")[0].appendChild(img);
    } else {
        var selectE = order_form.cakeID;
        var x = selectE.options[selectE.selectedIndex].text;
        order_info.getElementsByClassName("cake_v")[0].appendChild(document.createTextNode(x));
    }


    var pickupDate = order_form.pickupDate.value;
    var pickupTime = order_form.pickupTime[order_form.pickupTime.selectedIndex].text
    order_info.getElementsByClassName("date_v")[0].appendChild(document.createTextNode(pickupDate + " " + pickupTime));

    order_info.getElementsByClassName("message_v")[0].appendChild(document.createTextNode(order_form.your_text.value));

}