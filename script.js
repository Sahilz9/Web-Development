document.addEventListener("DOMContentLoaded", function() {
    const hourHand = document.getElementById("hour");
    const minuteHand = document.getElementById("minute");
    const secondHand = document.getElementById("second");

    function updateClockHands() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hourRotation = (hours % 12) * 30 + (minutes / 2);
        const minuteRotation = minutes * 6 + (seconds / 10);
        const secondRotation = seconds * 6;

        hourHand.style.transform = `rotate(${hourRotation}deg)`;
        minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
        secondHand.style.transform = `rotate(${secondRotation}deg)`;
    }

    function updateDigitalClock() {
        const now = new Date();
        const digitalHour = String(now.getHours()).padStart(2, "0");
        const digitalMinute = String(now.getMinutes()).padStart(2, "0");
        const digitalSecond = String(now.getSeconds()).padStart(2, "0");

        document.getElementById("digital-hour").textContent = digitalHour;
        document.getElementById("digital-minute").textContent = digitalMinute;
        document.getElementById("digital-second").textContent = digitalSecond;
    }

    setInterval(updateClockHands, 1000);
    setInterval(updateDigitalClock, 1000);

    updateClockHands();
    updateDigitalClock();
});
