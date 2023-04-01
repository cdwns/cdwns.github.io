(function () {
  const msecond = 1,
        second = msecond * 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
				week = day * 7;

  let summer = "Jun 1, 2023 00:00:00",
      countDown = new Date(summer).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

	document.getElementById("weeks").innerText = Math.floor(distance / (week)),
        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second),
        document.getElementById("mseconds").innerText = Math.floor((distance % (second)) / msecond);

        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "Ամառ է!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
      }, 0)
  }());
