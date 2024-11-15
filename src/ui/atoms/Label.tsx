
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({children, ...props}) => {
    return (
        <label {...props}>
            {children}
        </label>
    );
};

export default Label;
