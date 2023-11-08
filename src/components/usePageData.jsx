import { useState } from "react";

function usePageData(initialData) {
  const [selectedItem, setSelectedItem] = useState(initialData[0]);

  const handleSelectedItem = (name) => {
    const item = initialData.find((data) => data.name === name);
    setSelectedItem(item);
  };

  return [selectedItem, handleSelectedItem];
}

export { usePageData };
