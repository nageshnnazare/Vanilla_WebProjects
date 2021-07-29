const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleElement = document.querySelector('.toggle');

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

toggleElement.addEventListener('click', (e) => {
	const html = document.querySelector('html');
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark Mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light Mode';
	}
});

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function setTime() {
	const time = new Date();
	console.log(time);
	const month = time.getMonth();
	const date = time.getDate();
	const day = time.getDay();
	const hour = time.getHours();
	const minute = time.getMinutes();
	const second = time.getSeconds();
	const ampm = hour >= 12 ? 'PM' : 'AM';

	const hoursForClock = hour % 12;

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360
	)}deg)`;

	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		minute,
		0,
		59,
		0,
		360
	)}deg)`;

	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		second,
		0,
		59,
		0,
		360
	)}deg)`;

	timeEl.innerHTML = `${hoursForClock}:${
		minute < 10 ? `0${minute}` : minute
	} ${ampm}`;

	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setInterval(setTime, 1000);
