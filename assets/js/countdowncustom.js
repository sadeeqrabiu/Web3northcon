// Set the date we're counting down to
(function () {
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	// Set target date to 39 days from now
	let targetDate = new Date();
	targetDate.setDate(targetDate.getDate() + 39);

	const countDown = targetDate.getTime(),
		x = setInterval(function () {
			const now = new Date().getTime(),
				distance = countDown - now;

			(document.getElementById("day").innerText = Math.floor(
				distance / day
			)),
				(document.getElementById("hour").innerText = Math.floor(
					(distance % day) / hour
				)),
				(document.getElementById("min").innerText = Math.floor(
					(distance % hour) / minute
				)),
				(document.getElementById("sec").innerText = Math.floor(
					(distance % minute) / second
				));

			//do something later when date is reached
			if (distance < 0) {
				clearInterval(x);
			}
			//seconds
		}, 0);
})();
