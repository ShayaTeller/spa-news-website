// this function do an matching betwen the localstorege data and the arrey of basic data
// if is not exist in the basic data, the function is push the new data from the local storege to the basic data
// the basic data is in file "../news.js"
window.updateDataFromLocalS = function updateDataFromLocalS() {
  let dataInLocalStorage = localStorage.getItem("formData"); // takes the arrey of forms that is in the local storege
  if (!dataInLocalStorage) return; // if the localstorege is empty , return nothing = > breake;
  dataInLocalStorage = JSON.parse(dataInLocalStorage); // parse the data to an arrey (its was an object)

  dataInLocalStorage.forEach((item, index) => {
    const exists = data.some((d) => d.title === item.title); // its do the check by match the "title" if match returned true

    if (exists) {
      console.log(`"${item.title}" already exists`); // but do nothing
    } else {
      data.push(item); // update the new data to the basic data file
      console.log(`"${item.title}" was added (index: ${index})`);
    }
  });
};
