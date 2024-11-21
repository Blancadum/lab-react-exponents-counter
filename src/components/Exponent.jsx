const Exponent = ({ num, exponent }) => {
    const result = num ** exponent; // Calcula el resultado dinámicamente
  
    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">n^{exponent}</p>
        <p className="exponent-result">
          {Array(exponent)
            .fill(num)
            .join(" * ")}{" "}
          = <span className="total">{result}</span>
        </p>
      </div>
    );
  };
  
  export default Exponent;  