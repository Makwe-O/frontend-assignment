export const formatDate = (releaseDate) => {
  let date = new Date(releaseDate);
  let formattedDate = date.toDateString();

  let formattedDateArray = formattedDate.split(" ");
  formattedDateArray[2] = formattedDateArray[2] + ",";
  formattedDateArray.shift();

  return formattedDateArray.join(" ");
};
