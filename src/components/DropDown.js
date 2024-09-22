import React from 'react';

const Dropdown = ({ options, selectedOptions, setSelectedOptions }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div>
      <select multiple onChange={handleChange} value={selectedOptions}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;