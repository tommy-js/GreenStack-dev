export function returnDate(timestamp: number) {
  let date = new Date(timestamp * 1000);
  let years = date.getFullYear();
  let months = date.getMonth() + 1;
  let days = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let updatedMin = `${minutes}`;

  if (minutes < 10) {
    updatedMin = `0${minutes}`;
  }

  let timeOfDay = "AM";
  if (hours / 12 > 1) {
    timeOfDay = "PM";
    hours -= 12;
  }

  let str = `${months}/${days}/${years} at ${hours}:${updatedMin}${timeOfDay}`;
  return str;
}
