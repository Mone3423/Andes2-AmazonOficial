import React, { useState } from "react";
import { popularsDataBolivia } from "../../utils/data"; // Importa la data correctamente

const SimpleSearch = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filtra solo si hay datos y si la búsqueda no está vacía
    const filteredResults =
      popularsDataBolivia && popularsDataBolivia.length > 0
        ? popularsDataBolivia.filter((tour) =>
            tour.title.toLowerCase().includes(value.toLowerCase())
          )
        : [];

    onSearchResults(filteredResults); // Envía los resultados al componente padre
  };

  return (
  <div className="input-group">
    <span className="input-group-text">
      <i className="bi bi-search"></i>
    </span>
    <input
      type="text"
      className="form-control"
      placeholder="Search tours"
      value={query}
      onChange={handleSearch}
    />
  </div>
  
  );
};

export default SimpleSearch;
