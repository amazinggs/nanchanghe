(function() {
	var root = document.querySelector('.my_sticky_addtocart');
	if (!root) return;
	var ticking = false;
	function update() {
		var shouldShow = window.scrollY > 0;
		if (shouldShow) {
		root.classList.add('is-visible');
		} else {
		root.classList.remove('is-visible');
		}
		ticking = false;
	}
	function onScroll() {
		if (!ticking) {
		window.requestAnimationFrame(update);
		ticking = true;
		}
	}
	update();
	window.addEventListener('scroll', onScroll, { passive: true });
})();