// utils.ts or utils.js
const getFormatDate = (dateString: string | number | Date | undefined) => {
  if (!dateString) {
    return '';
  }
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export {getFormatDate};
