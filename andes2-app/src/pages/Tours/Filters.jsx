import React, { useState } from "react";
import { Accordion, Form } from "react-bootstrap";
import { Categories} from "../../utils/data.js";
import "../Tours/tour.css";

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: [],
    duration: [],
   
  });

  const handleCheckboxChange = (filterType, value, isChecked) => {
    setFilters((prevFilters) => {
      const updatedFilter = isChecked
        ? [...prevFilters[filterType], value]
        : prevFilters[filterType].filter((item) => item !== value);

      const updatedFilters = {
        ...prevFilters,
        [filterType]: updatedFilter,
      };

      // Pasar los filtros actualizados al componente padre
      onFilterChange(updatedFilters);

      return updatedFilters;
    });
  };

  return (
    <div className="side_bar">
      <div className="filter_box shadow-sm rounded-2">
        <Accordion defaultActiveKey="0">
          {/* Categorías */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Categories</Accordion.Header>
            <Accordion.Body>
              {Categories.map((cat, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  id={cat}
                  label={cat}
                  value={cat}
                  checked={filters.category.includes(cat)}
                  onChange={(e) =>
                    handleCheckboxChange("category", cat, e.target.checked)
                  }
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Filters;
