// JavaScript source code Dessert Cafe MOMO
// Authors : Suim Park, Larisa Sabalin, Roman Shaiko, Dmitrii Kudrik
// Script Date : 12 December, 2017

var language;

/**
 * 
 * @param {any} evt
 * When user click the language button is called.
 * Set cookie on the browser for language setting
 */
function processCookie(evt) {
    evt.innerHTML = language;
   if (language == "FR") {
       language = "EN";
    } else {
        language = "FR";
    }


    var tmp = "momo_language=" + language;
    document.cookie = tmp;

    translatePage();
}


/**
 * When the page is loaded, it called to check the language setting in cookie
 *
 */
function languageInfo() {
    if (document.cookie) {
        var c = document.cookie;
        language = c.substring(c.lastIndexOf("=") + 1);

        if (language == "FR") {
            document.getElementById("btnLang").text = "EN";
        } else {
            document.getElementById("btnLang").text = "FR";
        }

        translatePage();
    } else { 
        language = "EN";
        translatePage();
    }
}

/**
 * It decide which language will be shown depends on the language setting
 */
function translatePage() {
    if (language == "EN") {
        var e = document.getElementsByClassName("lang-fr");
        for (var i = 0; i < e.length; i++) {
            e[i].style.display = "none";
        }
        e = document.getElementsByClassName("lang-en");
        for (var i = 0; i < e.length; i++) {
            e[i].style.display = "block";
        }
    } else {
        var e = document.getElementsByClassName("lang-en");
        for (var i = 0; i < e.length; i++) {
            e[i].style.display = "none";
        }
        e = document.getElementsByClassName("lang-fr");
        for (var i = 0; i < e.length; i++) {
            e[i].style.display = "block";
        }
    }

}

/**
 * 
 * @param {any} evt
 * When the page is loaded, it is called.
 * resizeBroswer is for index.html to reform the review division
 * every page call languageInfo() to translate the site depends on the language setting
 */
function setUpPage(evt) {
    if (evt.target.body.getAttribute("id") == "index") {
        resizeBrowser();
    }
    languageInfo();

}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
    window.addEventListener("resize", resizeBrowser, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
    window.attachEvent("onresize", resizeBrowser);
}

