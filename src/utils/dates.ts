export const formatDateWithHour = (dateToFormat: string) => {
  const date = new Date(dateToFormat);

  return date.toLocaleString(
    'es',
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    },
  );
};
