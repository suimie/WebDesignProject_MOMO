// JavaScript source code Dessert Cafe MOMO
// Authors : Suim Park, Larisa Sabalin, Roman Shaiko, Dmitrii Kudrik
// Script Date : 12 December, 2017
"use strict";

/**
 * When the index.html is loaded, this funcion is called to reform the review division
 * It decide how many review will be displayed depends on the browser size
 */
function resizeBrowser() {
    var w = window.innerWidth;


    // for customer reviews in index.html
    if (w < 991 && w >= 767) {
        /*
                <!-- Add the extra clearfix for only the required viewport -->
        <div class="clearfix hidden-sm-up"></div>
*/
        if (document.getElementById("review-seperator")) return;

        var review = document.getElementById("review");
        var reviews = review.getElementsByTagName("div");
        for (var i = 0; i < reviews.length; i++) {
            if (reviews[i].classList.clearfix) continue;
            reviews[i].classList.remove("col-sm-3");
            reviews[i].classList.add("col-sm-6");
        }

        var thirdReview = document.getElementById("third-review");
        var div = document.createElement("div");
        div.setAttribute("class", "clearfix hidden-sm-up");
        div.setAttribute("id", "review-seperator");
        review.insertBefore(div, thirdReview);
    } else {
        var review = document.getElementById("review");
        if (document.getElementById("review-seperator")) {
            var seperator_grid = document.getElementById("review-seperator");
            review.removeChild(seperator_grid);

            var reviews = review.getElementsByTagName("div");
            for (var i = 0; i < reviews.length; i++) {
                reviews[i].classList.remove("col-sm-6");
                reviews[i].classList.add("col-sm-3");
            }
        }
    }
}


/**
 * 
 * @param {any} sn_name
 * This function is called when the social network button is clicked.
 * It open a new browser tab to show the SN.
 */
function move_sn(sn_name)
{
    switch (sn_name) {
        case 'facebook':
            window.open("https://en-gb.facebook.com/pg/dessertcafemomo/posts/");
            break;
        case 'instagram':
            window.open("https://www.instagram.com/explore/tags/dessertcafemomo/");
            break;
        case 'kakao':
            break;
    }
}

/**
 * This funtion is for the search box in footer
 * It open new browser tab and move to the google search
 */
function google_search()
{
    var keyword = document.forms[0].keyword.value;
    window.open("https://www.google.com/search?q=" + keyword);
}

/**
 * This function is for the google map in the contact.html
 */
function myMap() {
    var myLatLng = { lat: 45.479550, lng: -73.622227 };
    var mapOptions = {
        center: myLatLng,
        zoom: 15,
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Dessert Cafe MOMO'
    });

}

/**
 * When the mouseover of the kakaoTalk button in footer
 * It shows the id of kakaoTalk
 */
function kakaoTalk_down()
{
    var text = document.getElementById("tooltiptext");
    text.style.visibility = "visible";
}

/**
 * When the mouseout from the kakaoTalk button in footer
 * It hides the id of kakaoTalk
 */
function kakaoTalk_up() {
    var text = document.getElementById("tooltiptext");
    text.style.visibility = "hidden";
}

