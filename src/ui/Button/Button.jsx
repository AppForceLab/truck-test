
const Button = ({ children, className, onClick, ...Props }) => (
    <button className={className} onClick={onClick} {...Props}>
      {children}
    </button>
  );
  
  export default Button;