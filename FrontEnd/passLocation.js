var position = navigator.geolocation.getCurrentPosition(showPosition);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    console.log(position.coords.latitude + 
  " " + position.coords.longitude);
    document.getElementById("lonIn").value = position.coords.longitude;
    document.getElementById("latIn").value = position.coords.latitude;
}

document.getElementById("curDate").value = Date()[4]+Date()[5]+Date()[6];