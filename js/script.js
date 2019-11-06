var feedbackPopup = document.querySelector(".feedback");
var feedbackButton = document.querySelector(".feedback-button");
var feedbackClose = document.querySelector(".feedback-close");

if (feedbackButton != null && feedbackClose != null) {
  feedbackButton.addEventListener("click", function (event) {
    event.preventDefault(event);
    feedbackPopup.classList.add("show-block");
  });

  feedbackClose.addEventListener("click", function (event) {
    event.preventDefault(event);
    feedbackPopup.classList.remove("show-block");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
      if (feedbackPopup.classList.contains("show-block")) {
        feedbackPopup.classList.remove("show-block");
      }
    }
  });
}

var buyItemButtons = document.querySelectorAll(".button-buy"),
  i;
var basketBlock = document.querySelector(".basket-notification");
var basketClose = document.querySelector(".basket-notification-close");
var basketCancel = document.querySelector(".basket-cancel-btn");

for (i = 0; i < buyItemButtons.length; ++i) {
  buyItemButtons[i].addEventListener("click", function (event) {
    event.preventDefault(event);
    basketBlock.classList.add("show-block");
  })
}

basketClose.addEventListener("click", function (event) {
  event.preventDefault(event);
  basketBlock.classList.remove("show-block");
});

basketCancel.addEventListener("click", function (event) {
  event.preventDefault(event);
  basketBlock.classList.remove("show-block");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (basketBlock.classList.contains("show-block")) {
      basketBlock.classList.remove("show-block");
    }
  }
});

var mapBlock = document.querySelector(".map");
var mapLink = document.querySelector(".company-map");
var mapClose = document.querySelector(".map-close");

mapLink.addEventListener("click", function (event) {
  event.preventDefault(event);
  mapBlock.classList.add("show-block");
});

mapClose.addEventListener("click", function (event) {
  event.preventDefault(event);
  mapBlock.classList.remove("show-block");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (mapBlock.classList.contains("show-block")) {
      mapBlock.classList.remove("show-block");
    }
  }
});

var serviceLinks = document.querySelectorAll(".service-list a");
var serviceBlocks = document.querySelectorAll(".details-block");
var j, h, k;

for (i = 0; i < serviceLinks.length; ++i) {
  serviceLinks[i].addEventListener("click", function (event) {
    event.preventDefault(event);
    for (j = 0; j < serviceLinks.length; ++j) {
      serviceLinks[j].classList.remove("active-button");
    }
    for (h = 0; h < serviceLinks.length; ++h) {
      if (serviceLinks[h] == this) {
        serviceLinks[h].classList.add("active-button");
        for (k = 0; k < serviceBlocks.length; ++k) {
          serviceBlocks[k].classList.remove("details-active");
        }
        serviceBlocks[h].classList.add("details-active");
      }
    }
  })
}

function initialize() {     
	var myLatlng = new google.maps.LatLng(59.938851, 30.323477);
	var myOptions = {
		zoom: 8,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map"), myOptions); 
}
