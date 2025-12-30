const capitalizeFirstLetter = (word:string) => word.charAt(0).toUpperCase() + word.slice(1);

const formatDate = (date: Date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

export { capitalizeFirstLetter, formatDate };
