$(function(){

// Menu Globals:
var $form = $("#FooterForm");
var $win = $(window);
var $body = $("body");
var $menu = $("nav");
var $dimmer = $(".menu_dimmer2");
var $menuLink = $("#header a.toggle-menu");
var $menuCloseLink = $(".ar_icon_close a");
var $formLink = $("#FormLink");
var $formCloseLink = $("#FormCloseLink");
var $section2Sliders = $("#section2 .slider");
var anchorArray = ['chapter_0', 'chapter_1', 'chapter_2', 'chapter_3', 'chapter_4'];// Anchor array
var $chapterNavListItems = $("nav li.chapter_nav");
var initialChapterIndex;
var $rotateDivs = $(".rotate_icon, .mobile_alert");

// Menu Event Handlers:
    //$("nav .chapter_nav a").click(chapterNav);
    $dimmer.click(cleanup);
    $menuLink.click(showMenuLink);
    $menuCloseLink.click(function () { return hideMenu(); });
		$(".toggle-menu").on("click",showMenu);


// Menu:
function menuIsHidden() {
    return $menu.css("right") != "0px";
}

function showMenuLink() {
    if ($form.css("display") == "none") {
        showMenu();
    }
    else {
        hideSlideFromBottom($form, function () { showMenu(true); }, true)
    }
    return false;
}

function initialShowMenu() {
    setTimeout(function () { if(isHidden($rotateDivs)){ showMenu(); } }, 4000);
}

function showMenu(skipDim) {
    showDimmmer(skipDim);
    $menuLink.removeClass("nav_button").addClass("nav_button_open");
    $menu.animate({ "right": 0 }, 1000, "easeOutCubic");
    $body.animate({ "right": 240 }, 1000, "easeOutCubic");
    return false;
}

function hideMenu(callback, skipDim) {
    if (menuIsHidden()) {
        return false;
    }
    var detailsCallback = function () {
        $menuLink.removeClass("nav_button_open").addClass("nav_button");
        execIfF(callback);
    }
    hideDimmer(null, skipDim);
    $menu.animate({ "right": -240 }, 1000, "easeInCubic");
    $body.animate({ "right": 0 }, 1000, "easeInCubic", detailsCallback);
    return false;
}


// Dimmer:
function showDimmmer(skipDim) {
    if (!skipDim && isHidden($dimmer)) {
        $dimmer.fadeIn(600, "easeOutCubic");
    }
}

function hideDimmer(callBack, skipDim) {
    if (!skipDim && !isHidden($dimmer)) {
        $dimmer.fadeOut(600, "easeInCubic", callBack);
    }
    else {
        execIfF(callBack);
    }
}


// not part of dimer
function cleanup() {
    hideDimmer();
    hideSlideFromBottom($form, null, true);
    hideMenu(null, true);
    return false;
}


// Generic item animations:
function hideSlideFromBottom($item, callBack, skipDim) {
    if (isHidden($item)) {
        hideDimmer(callBack, skipDim);
    }
    else {
        hideDimmer(null, skipDim);
        $item.animate({ "top": $win.height() }, 1500, "easeInCubic", function () { $item.hide(); execIfF(callBack) });
    }
}

function showSlideFromBottom($item, callBack, skipDim) {
    showDimmmer(null, skipDim);
    $item.css("top", $win.height());
    $item.show();
    $item.animate({ "top": $win.height() - $item.height() }, 1500, "easeOutCubic", callBack);
}

function showSlideFromRight($item, finalLeftOffset, callback) {
    $item.css("left", $win.width());
    $item.show();
    $item.animate({ "right": finalLeftOffset }, 1500, "easeOutCubic", callback);
}
function hideSlideRight($item, callback) {
    $item.animate({ "right": $win.width() }, 1500, "easeInCubic", function () { $item.hide(0); execIfF(callback); });
}
function showSlideFromLeft($item, finalLeftOffset, callback) {
    $item.css("right", -$item.width());
    $item.show();
    $item.animate({ "right": finalLeftOffset }, 1500, "easeOutCubic", callback);
}
function hideSlideLeft($item, callback) {
    $item.animate({ "right": -$item.width() }, 1500, "easeInCubic", function () { $item.hide(0); execIfF(callback); });
}


// Helper functions:
function execIfF(itemToExecuteIfFunction) {
    if ($.isFunction(itemToExecuteIfFunction)) {
        itemToExecuteIfFunction();
    }
}

function isHidden($item) {
    return $item.css("display") == "none";
}

function getChapterIndexFromHash() {
    var hash = window.location.hash;
    if (hash.length > 0) {
        hash = hash.substr(1).toLowerCase();
    }
    var index = $.inArray(hash, anchorArray) + 1;
    if (index == 0) {
        return 1;
    }
    else {
        return index;
    }
}

});