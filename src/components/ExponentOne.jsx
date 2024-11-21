const ExponentOne = ({ count }) => {
    const result = count ** 1; // Calcula el exponente (es el mismo valor de count)
  
    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">n¹</p>
        <p className="exponent-result">
          {count} = <span className="total">{result}</span>
        </p>
      </div>
    );
  };
  
  export default ExponentOne;  