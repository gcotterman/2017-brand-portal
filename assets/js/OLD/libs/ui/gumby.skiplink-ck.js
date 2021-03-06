/**
* Gumby SkipLink
*/!function(e){"use strict";function t(e){Gumby.debug("Initializing Skiplink",e);this.$el=e;this.targetPos=0;this.duration=0;this.offset=!1;this.easing="";this.update=!1;this.setup();var t=this;this.$el.on(Gumby.click+" gumby.skip",function(e){e.preventDefault();e.namespace==="skip"&&Gumby.debug("Skip event triggered",t.$el);t.update?t.calculateTarget(t.skipTo):t.skipTo()}).on("gumby.initialize",function(){Gumby.debug("Re-initializing Skiplink",t.$el);t.setup()})}t.prototype.setup=function(){this.duration=Number(Gumby.selectAttr.apply(this.$el,["duration"]))||200;this.offset=Gumby.selectAttr.apply(this.$el,["offset"])||!1;this.easing=Gumby.selectAttr.apply(this.$el,["easing"])||"swing";this.update=Gumby.selectAttr.apply(this.$el,["update"])?!0:!1;this.calculateTarget()};t.prototype.calculateTarget=function(t){var n=this,r=Gumby.selectAttr.apply(this.$el,["goto"]),i;if(r=="top")this.targetPos=0;else if(e.isNumeric(r))this.targetPos=Number(r);else{i=e(r);if(!i.length){Gumby.error("Cannot find skiplink target: "+r);return!1}this.targetPos=i.offset().top}t&&t.apply(this)};t.prototype.skipTo=function(){Gumby.debug("Skipping to target",this.$el);var t=this;e("html,body").animate({scrollTop:this.calculateOffset()},this.duration,this.easing).promise().done(function(){Gumby.debug("Triggering onComplete event",t.$el);t.$el.trigger("gumby.onComplete")})};t.prototype.calculateOffset=function(){if(!this.offset)return this.targetPos;var e=this.offset.substr(0,1),t=Number(this.offset.substr(1,this.offset.length));if(e==="-")return this.targetPos-t;if(e==="+")return this.targetPos+t};Gumby.addInitalisation("skiplink",function(n){e(".skiplink > a, .skip").each(function(){var r=e(this);if(r.data("isSkipLink")&&!n)return!0;if(r.data("isSkipLink")&&n){r.trigger("gumby.initialize");return!0}r.data("isSkipLink",!0);new t(r)})});Gumby.UIModule({module:"skiplink",events:["initialize","onComplete","skip"],init:function(){Gumby.initialize("skiplink")}})}(jQuery);