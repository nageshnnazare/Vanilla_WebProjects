const toggleButtons = document.querySelectorAll('.faq-toggle');

toggleButtons.forEach((toggle) => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});
