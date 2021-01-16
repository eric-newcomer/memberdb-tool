import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const EnumAttribute = ({
  value = '',
  valueOptions = [],
  attributeLabel = '',
  isDisabled = false,
  onChange,
}) => {
  const onValueChange = option => {
    onChange(option, attributeLabel);
  };

  return (
    <div>
      <p>{attributeLabel}</p>
      <Select
        defaultValue={value}
        value={value}
        placeholder={value}
        isDisabled={isDisabled}
        name={attributeLabel}
        options={valueOptions}
        onChange={onValueChange}
      />
    </div>
  );
};

EnumAttribute.propTypes = {
  value: PropTypes.string,
  valueOptions: PropTypes.arrayOf(PropTypes.string),
  attributeLabel: PropTypes.string,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default EnumAttribute;