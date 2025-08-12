
const Button = ({className, children}) => {
  return (
    <button className={`${className} px-4 py-2  `}>{children}</button>
  );
};

export default Button;