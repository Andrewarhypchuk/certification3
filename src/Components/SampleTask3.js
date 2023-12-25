import React, { useState, useEffect } from "react";
import AutoFilterDropdown from "./AutoFilter";

const SampleTask3 = ({ api, searchProperty }) => {
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setEntities(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [api]);

  return (
    <div>
      <h2>Select a {searchProperty}:</h2>
      <AutoFilterDropdown
        data={entities}
        property={searchProperty}
        valueChange={(selectedItem) => setSelectedEntity(selectedItem)}
      />
      <p>
        Selected {searchProperty}:{" "}
        {selectedEntity ? selectedEntity[searchProperty] : "None"}
      </p>
    </div>
  );
};

export default SampleTask3;
