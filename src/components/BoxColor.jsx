import { useRef,useEffect,useState } from "react";
import style from './BoxColor.module.css'

const BoxColor = ({ color, inputValue }) => {
  const boxRef = useRef(null);
  console.log('color: ', color)
  console.log('color 2: ', inputValue)
  const isMatch = color === (inputValue ? inputValue.trim().toLowerCase() : "");
  const [classList, setClassList] = useState(''); 
  

  useEffect(() => {
    if (boxRef.current) {
      const newClassList = boxRef.current.classList.value;
      if (newClassList !== classList) {
        setClassList(newClassList);
      }
    }
  }, [color, inputValue]); 

  return (
    <div
      ref={boxRef}
     className={`box ${color} ${style[color] || ""} ${style.colorBox} ${isMatch ? style.matched : ""}`}
        >
      <p>{isMatch ? `Yes, I'm ${color} color` : `I'm not a ${inputValue} color `}</p>
    </div>
  );
};

export default BoxColor;

