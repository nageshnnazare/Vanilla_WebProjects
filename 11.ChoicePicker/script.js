const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value);

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10);

		randomSelect();
	}
});

function createTags(input) {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());

	tagsEl.innerHTML = '';
	tags.forEach((tag) => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
}

function randomSelect() {
	const times = 30;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();
		highlightTag(randomTag);

		setTimeout(() => {
			unhighlightTag(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);

		setTimeout(() => {
			const randomTag = pickRandomTag();
			highlightTag(randomTag);
		}, 100);
	}, times * 100);
}

function pickRandomTag() {
	const tagselect = document.querySelectorAll('.tag');
	return tagselect[Math.floor(Math.random() * tagselect.length)];
}

function highlightTag(tag) {
	tag.classList.add('highlight');
}

function unhighlightTag(tag) {
	tag.classList.remove('highlight');
}
