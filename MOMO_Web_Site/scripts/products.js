// JavaScript source code Dessert Cafe MOMO
// Authors : Suim Park, Larisa Sabalin, Roman Shaiko, Dmitrii Kudrik
// Script Date : 12 December, 2017

//number of images in each of products folders
var imgWedding = 4;
var imgBirthday = 57;
var imgCustom = 72;
var imgPhoto = 29;
var imgKorean = 19;
var imgFlower = 7;
var imgBingSoo = 6;
var imgCakePops = 37;
var imgCoffee = 8;
var imgCookies = 5;
var imgCupCakes = 50;

var currentType; //current folder that is used
var currentNumber; //current displayed number of pictures
var numberOfImages; //number of images in current folder
var currentLanguage;

/**
 * Displaying <show more> button in current language (lang)
 * @param {any} lang language code (1-en, 2-fr)
 */
function addShowMoreButton(lang) {
    if (lang == 1)
        document.getElementsByName("show_more")[0].style.display = "block";
    else
        document.getElementsByName("show_more")[1].style.display = "block";
}

/**
 * generating list of "<a <img ... >>" tags from choosen image folder
 * @param {any} type
 */
function showImages(type) {
    var im;
    currentType = type;
    numberOfImages = getNumberOfImages(type);
    currentNumber = 0;
    var tmpString = "";
    var gallery = document.getElementById("gallery_products");
        for (im = 1; im <= 12; im++) {
        if (im <= numberOfImages) {
            tmpString = tmpString + "<a class=\"fancybox-buttons\" data-fancybox-group=\"button\" title = \"Product ID: " +
                type + im + "\" href=\"images/products/" + type + "/" + im + ".jpg\"><img src= \"images/products/" +
                type + "/preview/" + im + ".jpg\" alt = \"\" /></a >";
            currentNumber = im;
        } 
        else {
            document.getElementsByName("show_more")[0].style.display = "none";
            document.getElementsByName("show_more")[1].style.display = "none";
            break;
        }
    }
    gallery.innerHTML = tmpString;
    showGallery();
}

/**
 * function adds new portion of "<a < img ...>>" tags when user clicks <show_more> button
 */
function addImages() {
    gallery = document.getElementById("gallery_products");
    var tmpString = gallery.innerHTML;
    currentNumber++;
    var lastNumber = currentNumber + 11;
    for (var im = (currentNumber); im <= (lastNumber); im++) {
        if (im <= numberOfImages) {
            tmpString = tmpString + "<a class=\"fancybox-buttons\" data-fancybox-group=\"button\" title = \"Product ID: " + currentType + im +"\" href=\"images/products/" + currentType + "/" +
                im + ".jpg\"><img src= \"images/products/" + currentType + "/preview/" + im + ".jpg\" alt = \"\" /></a >";
            currentNumber = im;
        }
        else {
            document.getElementsByName("show_more")[0].style.display = "none";
            document.getElementsByName("show_more")[1].style.display = "none";
            break;
        }
    }
    gallery.innerHTML = tmpString;
    showGallery();
}

/**
 * function styles clicked button as active using its serial number
 * @param {any} number
 */
function setActive(number) {
    for (var j = 1; j <= 12; j++) {
        if (j != number) {
            document.getElementsByName("products")[j - 1].style.border = "none";
            document.getElementsByName("products")[j - 1].style.padding = "5px 8px";
        }
        else {
            document.getElementsByName("products")[j - 1].style.border = "1px solid brown";
            document.getElementsByName("products")[j - 1].style.padding = "4px 7px";
        }
    }
}

/**
 * Enabling fancybox preview
 * function to use fancybox options + some settings for effects
 */
function showGallery() {
    $(document).ready(function () {
        /* Button helper. Disable animations, hide close button, change title type and content */
        $('.fancybox-buttons').fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            speedIn: 500,
            speedOut: 500,
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: false,
            helpers: {
                title: {
                    type: 'inside'
                },
                buttons: {}
            },
            afterLoad: function () {
                this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
            }
        });
    });
}


/**
 * breadcrumbs generator for english version
 * @param {any} type current page
 * @param {any} subtype current image folder
 */
function showBreadCrumb(type, subtype) {
    var newBreadCrumb = "<a href=\"index.html\">MOMO</a> >> <a href=\"cakes.html\">"+type+"</a> >> " + subtype;
    document.getElementById("breadcrumb").innerHTML = newBreadCrumb;
}

/**
 * breadcrumbs generator for french version
 * @param {any} type current page
 * @param {any} subtype current image folder
 */
function showBreadCrumbMenu(type, subtype) {
    var newBreadCrumb = "<a href=\"index.html\">MOMO</a> >> <a href=\"menu.html\">" + type +"</a> >> " + subtype;
    document.getElementById("breadcrumb").innerHTML = newBreadCrumb;
}

/**
 * Function translates breadcrumbs and current button right after user clicks language button 
 * 
 */
function translateBreadCrumbAndSetActiveButton() {
    var type, subtype;
    var activeButtonNumber;
    if (currentLanguage == 2) { //if we switch from French
        currentLanguage = 1;
        if (currentNumber < numberOfImages) {
            document.getElementsByName("show_more")[0].style.display = "block";
            document.getElementsByName("show_more")[1].style.display = "none";
        }
        var sdf = currentType;
        switch (currentType) {
            case "wedding":
                type = "Cakes";
                subtype = "Wedding cakes";
                activeButtonNumber = 1;
                break;
            case "birthday":
                type = "Cakes";
                subtype = "Birthday cakes";
                activeButtonNumber = 2;
                break;
            case "custom":
                type = "Cakes";
                subtype = "Custom cakes";
                activeButtonNumber = 3;
                break;
            case "photo":
                type = "Cakes";
                subtype = "Photo cakes";
                activeButtonNumber = 4;
                break;
            case "korean":
                type = "Cakes";
                subtype = "Korean style cakes & bread";
                activeButtonNumber = 5;
                break;
            case "flower":
                type = "Cakes";
                subtype = "Flower cakes";
                activeButtonNumber = 6;
                break;
            case "coffee":
                type = "Menu";
                subtype = "Coffee & Tea";
                activeButtonNumber = 2;
                break;
            case "bingsoo":
                type = "Menu";
                subtype = "Bing-Soo";
                activeButtonNumber = 1;
                break;
            case "cakepops":
                type = "Menu";
                subtype = "Cake Pops";
                activeButtonNumber = 3;
                break;
            case "cookies":
                type = "Menu";
                subtype = "Cookies";
                activeButtonNumber = 4;
                break;
            case "cupcakes":
                type = "Menu";
                subtype = "Cupcakes";
                activeButtonNumber = 5;
                break;
        }
    }
    else {
        currentLanguage = 2;
        if (currentNumber < numberOfImages) {
            document.getElementsByName("show_more")[0].style.display = "none";
            document.getElementsByName("show_more")[1].style.display = "block";
        }
        switch (currentType) {
            case "wedding":
                type = "G&#226;teaux";
                subtype = "G&#226;teaux de mariage";
                activeButtonNumber = 7;
                break;
            case "birthday":
                type = "G&#226;teaux";
                subtype = "G&#226;teaux d'anniversaire";
                activeButtonNumber = 8;
                break;
            case "custom":
                type = "G&#226;teaux";
                subtype = "G&#226;teaux personnalis&#233;s";
                activeButtonNumber = 9;
                break;
            case "photo":
                type = "G&#226;teaux";
                subtype = "G&#226;teaux photo";
                activeButtonNumber = 10;
                break;
            case "korean":
                type = "G&#226;teaux";
                subtype = "G&#226;teaux et pain de style cor&#233;en";
                activeButtonNumber = 11;
                break;
            case "flower":
                type = "G&#226;teaux";
                subtype = "G&#226;teaux aux fleurs";
                activeButtonNumber = 12;
                break;
            case "coffee":
                type = "Menu";
                subtype = "Caf&#233; et Th&#233;";
                activeButtonNumber = 8;
                break;
            case "bingsoo":
                type = "Menu";
                subtype = "Bing-Soo";
                activeButtonNumber = 7;
                break;
            case "cakepops":
                type = "Menu";
                subtype = "Cake Pops";
                activeButtonNumber = 9;
                break;
            case "cookies":
                type = "Menu";
                subtype = "Biscuits";
                activeButtonNumber = 10;
                break;
            case "cupcakes":
                type = "Menu";
                subtype = "Cupcakes";
                activeButtonNumber = 11;
                break;
        }
    }
    if (type != "Menu")
        showBreadCrumb(type, subtype);
    else
        showBreadCrumbMenu(type, subtype);

    setActive(activeButtonNumber);
}

/**
 * function return us number of images in current image folder
 * @param {any} type
 */
function getNumberOfImages(type) {
    switch (type) {
        case "wedding":
            return imgWedding;
            break;
        case "birthday":
            return imgBirthday;
            break;
        case "custom":
            return imgCustom;
            break;
        case "photo":
            return imgPhoto;
            break;
        case "korean":
            return imgKorean;
            break;
        case "flower":
            return imgFlower;
            break;
        case "coffee":
            return imgCoffee;
            break;
        case "bingsoo":
            return imgBingSoo;
            break;
        case "cakepops":
            return imgCakePops;
            break;
        case "cookies":
            return imgCookies;
            break;
        case "cupcakes":
            return imgCupCakes;
            break;
    }
}


/**
 * function gets us initial Breadcrumbs, styles active button and displays show_more button
 * depending on language, that is taken from cookies
 */
function getScriptBreadCrumb() {
    if (document.getElementById("titleID").innerHTML == "Cakes") {
        if (language == "EN") {
            currentLanguage = 1;
            showBreadCrumb("Cakes", "Custom cakes");
            document.getElementsByName("products")[2].style.border = "1px solid brown";
            document.getElementsByName("products")[2].style.padding = "4px 7px";
            document.getElementsByName("show_more")[0].style.display = "block";
        } else {
            currentLanguage = 2;
            showBreadCrumb("G&#226;teaux", "G&#226;teaux personnalis&#233;s");
            document.getElementsByName("products")[8].style.border = "1px solid brown";
            document.getElementsByName("products")[8].style.padding = "4px 7px";
            document.getElementsByName("show_more")[1].style.display = "block";
        }
        showImages('custom');
    }
    else {
        if (language == "EN") {
            currentLanguage = 1;
            showBreadCrumbMenu("Menu", "Coffee & Tea");
            document.getElementsByName("products")[1].style.border = "1px solid brown";
            document.getElementsByName("products")[1].style.padding = "4px 7px";
            document.getElementsByName("show_more")[0].style.display = "block";
        } else {
            currentLanguage = 2;
            showBreadCrumbMenu("Menu", "Caf&#233; et th&#233;");
            document.getElementsByName("products")[7].style.border = "1px solid brown";
            document.getElementsByName("products")[7].style.padding = "4px 7px";
            document.getElementsByName("show_more")[1].style.display = "block";
        }
        showImages('coffee');
    }
}

if (window.addEventListener) {
    window.addEventListener("load", getScriptBreadCrumb, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", getScriptBreadCrumb);
}