export function formatDate(dateString) {
  const date = dateString.split("T")[0];
  const time = dateString.split("T")[1];

  const formatedDate = date.split("-").reverse().join("/");
  const hour = time.split(":")[0];
  const minutes = time.split(":")[1];

  return `${formatedDate} às ${hour}:${minutes}`;
}
