(() => {

  let allSVGs = document.querySelectorAll("svg"),
   allIMGs = document.querySelectorAll("img");

  function logSVG() {
  		console.log(this.id);
  }

  function toggleSelected() {
  	this.classList.toggle('selected');
  }

  allSVGs.forEach(item => item.addEventListener("click", logSVG));
  allIMGs.forEach(item => item.addEventListener("click", logSVG));
  allSVGs.forEach(item => item.addEventListener("click", toggleSelected));
  allIMGs.forEach(item => item.addEventListener("click", toggleSelected));

})();

