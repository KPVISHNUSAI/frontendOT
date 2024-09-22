import React from 'react';
import '../App.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const Dropdown = ({ options, selectedOptions, setSelectedOptions }) => {
  const handleChange = (selected) => {
    const values = selected ? selected.map((option) => option.value) : [];
    setSelectedOptions(values);
  };

  const formattedOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <Select
      components={animatedComponents}
      options={formattedOptions}
      isMulti
      onChange={handleChange}
      value={formattedOptions.filter(option => selectedOptions.includes(option.value))}
      className='Select'
    />
  );
};

export default Dropdown;
