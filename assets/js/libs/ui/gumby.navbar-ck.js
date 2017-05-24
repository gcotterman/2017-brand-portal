/**
* Gumby Navbar
*/!function(e){"use strict";function t(e){Gumby.debug("Initializing Navbar",e);this.$el=e;this.$dropDowns=this.$el.find("li:has(.dropdown)");var t=this,n=this.$el.attr("gumby-persist");typeof n=="undefined"&&n!=="false"&&this.$el.find("li:not(:has(.dropdown)) a").on(Gumby.click,function(){t.$el.find("ul").removeClass("active")});this.$dropDowns.on(Gumby.click,this.toggleDropdown).on("swiperight",this.openLink);this.$dropDowns.children("a").attr("href")!=="#"&&this.$dropDowns.children("a").append('<i class="icon-popup"></i>').children("i").on(Gumby.click,this.openLink);this.$el.find("li:not(:has(.dropdown)) a[href]").on(Gumby.click,this.openLink)}if(!Gumby.gumbyTouch)return;t.prototype.toggleDropdown=function(t){t.preventDefault();e(this).parents(".dropdown")&&t.stopImmediatePropagation();if(e(t.target).is("i"))return;var n=e(this);n.hasClass("active")?n.removeClass("active"):n.addClass("active")};t.prototype.openLink=function(t){t.preventDefault();var n=e(this),r=n,i;n.is("i")?r=n.parent("a"):n.is("li")&&(r=n.children("a"));i=r.attr("href");r.attr("target")=="blank"?window.open(i):window.location=i};Gumby.addInitalisation("navbar",function(){e(".navbar").each(function(){var n=e(this);if(n.data("isNavbar"))return!0;n.data("isNavbar",!0);new t(n)})});Gumby.UIModule({module:"navbar",events:[],init:function(){Gumby.initialize("navbar")}})}(jQuery);