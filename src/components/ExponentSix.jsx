const ExponentSix = ({ count }) => {
  const result = count ** 6; // Calcula el exponente dinámicamente

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁶</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} * {count} * {count} ={" "}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentSix;
