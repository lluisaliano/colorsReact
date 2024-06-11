import { useRef } from "react";

const InputColor = ({ currentColor, setCurrentColor }) => {
    const inputRef = useRef();

    return (
        <form className="InputColor">
            <label htmlFor="colorInput" className="inputLabel">Introduce Tu Color:</label>
            <input className="inputForm"
                   ref={inputRef}
                   type="text"
                   value={currentColor}
                   onChange={(e) => setCurrentColor(e.target.value)}
                   id="colorInput"
                   placeholder="Color CSS"
                   autoFocus
                   onBlur={() => inputRef.current.focus()}
            />
        </form>
    )
}

export default InputColor;