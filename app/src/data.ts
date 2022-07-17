export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const customStyles = {
  control: () => ({
      display:"inline-flex",
      height:"40px",
      width:"300px",
      background: '#000000',
      border: "2px solid #8D98F8",
  }),
  menu:(provided) =>({
      ...provided,
      background: '#000000',
      border: "2px solid #8D98F8",
      marginTop:"20px",
  }),
  input:() =>({
      color:"white",
      lineHeight:"2.1",
      paddingLeft:"7px",
      fontSize: "16px",
      fontFamily: 'Verdanai',
  }),
  valueContainer:() =>({
      width:"100%",
  }),
  singleValue:() =>({
      color:"white",
      lineHeight:"2.1",
      paddingLeft:"7px",
      fontSize: "16px",
      fontFamily: 'Verdanai',
      height: "0px",
  }),
  option: () => ({
      backgroundColor: "black",
      padding: 10,
      fontSize: "16px",
      fontFamily: 'Verdanai',
      
    }),
  placeholder: () => ({
      color:"white",
      filter:"brightness(0.5)",
      lineHeight:"2.7",
      paddingLeft:"7px",
      fontSize: "13px",
      fontFamily: 'Verdanai',
      width:"100%",
      height:"0px",
    }),  
    noOptionsMessage:() =>({
      color:"white",
      lineHeight:"2.1",
      paddingLeft:"7px",
      filter:"brightness(0.5)",
      fontSize: "16px",
      fontFamily: 'Verdanai',
    }),
  indicatorSeparator: () => ({
      display:"none",
    }),
}
export const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];
  
export interface GroupedOption {
  readonly label: string;
  readonly options: readonly ColourOption[];
}

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: 'Colours',
    options: colourOptions,
  },
];
