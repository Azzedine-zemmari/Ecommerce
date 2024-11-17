const scrollContainer = document.getElementById("scroll-container");

function leftscroll() {
  scrollContainer.scrollBy({ right: -320, behavior: "smooth" }); 
}

function rightscroll() {
  scrollContainer.scrollBy({ left: 320, behavior: "smooth" });
}