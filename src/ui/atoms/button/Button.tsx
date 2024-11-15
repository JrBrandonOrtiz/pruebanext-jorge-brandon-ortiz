import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button className={`${styles.button} ${className ? styles[className] : ''}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
