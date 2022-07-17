import React,{useState, Fragment} from 'react';
import logo from './assets/logo.png';
import './styles/App.scss';
import Select from 'react-select';
import { customStyles, colourOptions } from './data';
 
function App() {

    const [valuePrice, setValuePrice] = useState('');
    function handleChangePrice(event) {
        setValuePrice(event.target.value);
    }

    const [valueRarity, setValueRarity] = useState('');
    function handleChangeRarity(event) {
        setValueRarity(event.target.value);
    }

    const [value1, setValue1] = useState('');
    function handleChange1(event) {
        setValue1(event.target.value);
    }

    const [value2, setValue2] = useState('');
    function handleChange2(event) {
        setValue2(event.target.value);
    }

    const [styleFilters, setCount] = useState(["flex" ,"Enter The Lodge", "610px"]);
    function handlePrevButtonClick(e){
        setCount(["flex","Enter The Lodge", "610px"])
    }
    function handleNextButtonClick(e){
        setCount(["none","No Results", "690px"])
    }
   
    return (
        <div className="App">
            <div className="App-container">
                <div className = "back-App"style={{height:styleFilters[2]}}>
                    <img className="App-logo" src={logo} alt="The eye"/> 
                    <h2 className="App-title">{styleFilters[1]}</h2>
                    <div className='buttons' style={styleFilters[0] == "flex" ? {zIndex: "0"} : {zIndex: "2"}}>
                        <div className='line'/>
                        <button className="button-prev"  onClick={handlePrevButtonClick}>Back</button>
                        <button className="button-next"  onClick={handleNextButtonClick}>Next</button>
                    </div>
                </div>
                
                <div className="filters" style={{display: styleFilters[0]}}>
                    <div className = "select-collection">
                        <Fragment>
                            <Select
                                noOptionsMessage={() => 'No matches found!'}
                                placeholder={'Select Collection'}
                                styles={customStyles}
                                className="basic-single"
                                classNamePrefix="select"
                                name="color"
                                options={colourOptions}
                            />
                        </Fragment>
                    </div>
                    <input className = "select-price" value={valuePrice} onChange={handleChangePrice} placeholder={'Minimum price'}/>
                    <input className = "select-rarity" value={valueRarity} onChange={handleChangeRarity} placeholder={'Select Rarity'}/>
                </div>
                <div className="found-value" style={styleFilters[0] == "flex" ? {display: "none"} : {display:"flex"} } >
                    <div className="form">
                        <h2 className="App-title">Order</h2>
                        <input className = "select-price" style={{width: '250px'}} value={value1} onChange={handleChange1} placeholder={'Minimum price'}/>
                        <input className = "select-rarity" style={{width: '250px'}}value={value2} onChange={handleChange2} placeholder={'Select Rarity'}/>
                        <button className="button-send" >Send</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;