export const formatDateWithHour = (dateToFormat: string) => {
  const date = new Date(dateToFormat);

  const localeDate = date.toLocaleDateString();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${localeDate} ${hours}:${minutes}`;
};
