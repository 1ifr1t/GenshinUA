document.querySelector("#searchInput").oninput = function() {
	let val = this.value.trim();
	let searchItems = document.querySelectorAll(".char");
	if (val != '') {
		searchItems.forEach(function(elem) {
			if (elem.innerText.search(val)) {
				elem.classList.add("hide")
			}
			else {
				elem.classList.remove("hide")
			}
		});
	}
	else {
		searchItems.forEach(function(elem) {
			elem.classList.remove("hide");
		});
	}
}