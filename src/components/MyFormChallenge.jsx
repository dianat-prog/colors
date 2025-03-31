import { useState} from "react";
import BoxColor from "./BoxColor";
import style from './MyFormChallenge.module.css'

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyFormChallenge = () => {
  const [inputValue, setInputValue] = useState("");


   return (
    <div>
      <input 
        type="text" 
        placeholder="Escribe un color..." 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <div className={style.gridContainer}>
        {colors.map((color) => (
          <BoxColor key={color} color={color} inputValue={inputValue} />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;