// JavaScript source code

//number of images in the products folders
var imgWedding = 4;
var imgBirthday = 57;
var imgCustom = 72;
var imgPhoto = 29;
var imgKorean = 19;
var imgFlower = 7;

var currentType; //list of 6
var currentNumber;
var numberOfImages;

function showImages(type) {
    var im;
    currentType = type;
    numberOfImages = getNumberOfImages(type);
    currentNumber = 0;
    var tmpString = "";
    var gallery = document.getElementById("gallery_cakes");
    document.getElementById("show_more").style.display = "";
    for (im = 1; im <= 12; im++) {
        if (im <= numberOfImages) {
            tmpString = tmpString + "<a class=\"fancybox-buttons\" data-fancybox-group=\"button\" href=\"images/products/" + type + "/" + im + ".jpg\"><img src= \"images/products/" + type + "/preview/" + im + ".jpg\" alt = \"\" /></a >";
            currentNumber = im;
        } 
        else {
            document.getElementById("show_more").style.display = "none";
            break;
        }
    }
    gallery.innerHTML = tmpString;
    showGallery();
}

function addImages() {
    gallery = document.getElementById("gallery_cakes");
    var tmpString = gallery.innerHTML;
    currentNumber++;
    var lastNumber = currentNumber + 11;
    for (var im = (currentNumber); im <= (lastNumber); im++) {
        if (im <= numberOfImages) {
            tmpString = tmpString + "<a class=\"fancybox-buttons\" data-fancybox-group=\"button\" href=\"images/products/" + currentType + "/" +
                im + ".jpg\"><img src= \"images/products/" + currentType + "/preview/" + im + ".jpg\" alt = \"\" /></a >";
            currentNumber = im;
        }
        else {
            document.getElementById("show_more").style.display = "none";
            break;
        }
    }
    gallery.innerHTML = tmpString;
    showGallery();
}

function setActive(number) {
    for (var j = 1; j <= 6; j++) {
        if (j != number) {
            document.getElementsByName("cakes")[j - 1].style.border = "none";
            document.getElementsByName("cakes")[j - 1].style.padding = "8px";
        }
        else {
            document.getElementsByName("cakes")[j - 1].style.border = "1px solid brown";
            document.getElementsByName("cakes")[j - 1].style.padding = "7px";
        }
    }
}

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
    }
}