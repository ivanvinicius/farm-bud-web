import { StylesConfig } from 'react-select';

const customSelectStyle: StylesConfig = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : '#6A6180',
    backgroundColor: state.isSelected ? '#5506B0' : 'white',
  }),

  control: (provided: any) => ({ //eslint-disable-line
    ...provided,
    boxShadow: null,
    minHeight: '5.7rem',
    fontSize: '1.7rem',
    fontFamily: 'Archivo',
    borderWidth: 0,
    borderRadius: '0.8rem',
  }),

  singleValue: (provided) => ({
    ...provided,
    color: '#6A6180',
  }),
};

export default customSelectStyle;
