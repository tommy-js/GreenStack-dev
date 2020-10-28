export function returnDate(timestamp: number) {
  let date = new Date(timestamp * 1000);
  let years = date.getFullYear();
  let months = date.getMonth();
  let days = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let timeOfDay = "AM";
  if (hours / 12 > 1) {
    timeOfDay = "PM";
    hours -= 12;
  }

  let str = `${months}/${days}/${years} at ${hours}:${minutes}${timeOfDay}`;
  return str;
}
