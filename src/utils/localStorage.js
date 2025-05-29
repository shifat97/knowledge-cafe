const getStorageItems = () => {
  const localStorageItem = localStorage.getItem("bookmark");

  if (localStorageItem) {
    return JSON.parse(localStorageItem);
  }

  return [];
};

const setStorageItems = (id) => {
  const bookmarkItem = getStorageItems();

  if (!bookmarkItem.includes(id)) {
    bookmarkItem.push(id);
    localStorage.setItem("bookmark", JSON.stringify(bookmarkItem));
  }
};

const removeStorageItems = (id) => {
  const bookmarkItem = getStorageItems();
  const updatedBookmarks = bookmarkItem.filter((item) => item !== id);
  localStorage.setItem("bookmark", JSON.stringify(updatedBookmarks));
};

export { getStorageItems, setStorageItems, removeStorageItems };
