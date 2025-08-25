window.updateDataFromLocalS = function updateDataFromLocalS() {
  let dataInLocalStorage = localStorage.getItem("formData");
  if (!dataInLocalStorage) return; // אם אין כלום, יוצאים
  
  dataInLocalStorage = JSON.parse(dataInLocalStorage);

  dataInLocalStorage.forEach((item, index) => {
    // בדיקה אם קיים אייטם עם אותו title
    const exists = data.some(d => d.title === item.title);

    if (exists) {
      console.log(`"${item.title}" already exists`);
    } else {
      data.push(item);
      console.log(`"${item.title}" was added (index: ${index})`);
    }
  });
};
