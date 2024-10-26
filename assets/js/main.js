(function ($) {
"use strict";

(() =>{
 
	const openNavMenu = document.querySelector(".open-nav-menu"),
	closeNavMenu = document.querySelector(".close-nav-menu"),
	navMenu = document.querySelector(".main-menu"),
	menuOverlay = document.querySelector(".menu-overlay"),
	mediaSize = 991;
  
	openNavMenu.addEventListener("click", toggleNav);
	closeNavMenu.addEventListener("click", toggleNav);
	// close the navMenu by clicking outside
	menuOverlay.addEventListener("click", toggleNav);
  
	function toggleNav() {
	  navMenu.classList.toggle("open");
	  menuOverlay.classList.toggle("active");
	  document.body.classList.toggle("hidden-scrolling");
	}
  
	navMenu.addEventListener("click", (event) =>{
		if(event.target.hasAttribute("data-toggle") && 
		  window.innerWidth <= mediaSize){
		  // prevent default anchor click behavior
		  event.preventDefault();
		  const menuItemHasChildren = event.target.parentElement;
		  // if menuItemHasChildren is already expanded, collapse it
		  if(menuItemHasChildren.classList.contains("active")){
			collapseSubMenu();
		  }
		  else{
			// collapse existing expanded menuItemHasChildren
			if(navMenu.querySelector(".menu-item-has-children.active")){
			collapseSubMenu();
			}
			// expand new menuItemHasChildren
			menuItemHasChildren.classList.add("active");
			const subMenu = menuItemHasChildren.querySelector(".sub-menu");
			subMenu.style.maxHeight = subMenu.scrollHeight + "px";
		  }
		}
	});
	function collapseSubMenu(){
	  navMenu.querySelector(".menu-item-has-children.active .sub-menu")
	  .removeAttribute("style");
	  navMenu.querySelector(".menu-item-has-children.active")
	  .classList.remove("active");
	}
	function resizeFix(){
	   // if navMenu is open ,close it
	   if(navMenu.classList.contains("open")){
		 toggleNav();
	   }
	   // if menuItemHasChildren is expanded , collapse it
	   if(navMenu.querySelector(".menu-item-has-children.active")){
			collapseSubMenu();
	   }
	}
  
	window.addEventListener("resize", function(){
	   if(this.innerWidth > mediaSize){
		 resizeFix();
	   }
	});
  
  })();

$('.slides-wrapper').slick({
	arrows: true,
	dots: false,
	autoplay: false,
	speed: 300,
	slidesToShow: 4,
	prevArrow: '<span class="priv_arrow"><i class="fa-light fa-circle-arrow-right"></i></span>',
    nextArrow: ' <span class="next_arrow"><i class="fa-light fa-circle-arrow-left"></i></span>',
	responsive: [
	  {
		breakpoint: 1199,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		}
	  },
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  dots: true,
		  arrows: false,
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  arrows: false,
		}
	  }
	]
  });

// WOW active
new WOW().init();


})(jQuery);