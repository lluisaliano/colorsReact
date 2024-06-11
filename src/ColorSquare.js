const ColorSquare = ({ currentColor }) => {
    return (
        <>
        <div className="colorName">{currentColor.toUpperCase()}</div>
        <div className="ColorSquare" style={{
        backgroundColor: currentColor.toLowerCase()}}>
        </div>
        </>
    )
}

export default ColorSquare;