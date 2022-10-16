let burger = false
const burgerMenu = document.querySelector('#burger')
const burgerOffMenu = document.querySelector('#burgerOff')
const burgerOnMenu = document.querySelector('#burgerOn')
const footer = document.querySelector('#footer')

function burgerAct() {
	if (burger == false) {
		burger = true
		burgerMenu.classList.add('Active');
		burgerMenu.classList.remove("burger");
		burgerOnMenu.classList.remove('noneBurger');
		burgerOffMenu.classList.add('noneBurger');
		footer.classList.add('footer2');
		footer.classList.remove('footer');
	} else if (burger == true) {
		burger = false;
		burgerMenu.classList.add("burger")
		burgerMenu.classList.remove('Active');
		burgerOnMenu.classList.add('noneBurger');
		burgerOffMenu.classList.remove('noneBurger');
		footer.classList.add('footer');
		footer.classList.remove('footer2');
	}
}

burgerMenu.addEventListener('click', burgerAct);
