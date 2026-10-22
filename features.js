(() => {
  const timer = document.getElementById('countdown');
  if (timer) {
    // Edit this ISO local date/time to change the event. Include a timezone offset if needed.
    const target = new Date(timer.dataset.target || '2026-10-23T19:23:59').getTime();
    const parts = {days:document.getElementById('countDays'),hours:document.getElementById('countHours'),minutes:document.getElementById('countMinutes'),seconds:document.getElementById('countSeconds')};
    const update = () => {
      let left = Math.max(0, target - Date.now());
      const days = Math.floor(left / 86400000); left %= 86400000;
      const hours = Math.floor(left / 3600000); left %= 3600000;
      const minutes = Math.floor(left / 60000); left %= 60000;
      const seconds = Math.floor(left / 1000);
      parts.days.textContent = String(days); parts.hours.textContent = String(hours).padStart(2,'0');
      parts.minutes.textContent = String(minutes).padStart(2,'0'); parts.seconds.textContent = String(seconds).padStart(2,'0');
    };
    update(); window.setInterval(update, 1000);
  }
})();