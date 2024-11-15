import { Icons } from '@/ui/atoms/Icons';
import styles from './buttonCreate.module.scss';
import Button from '@/ui/atoms/button/Button';

interface ButtonCreateProps {
    text?: string;
    onClick?: () => void;
}

const ButtonCreate: React.FC<ButtonCreateProps> = ({ text, onClick }) => {
    return (
        <div className={styles.ButtonCreate}>
            <Button className='primary-icons' onClick={onClick}>
                {Icons.add}
                {text}
            </Button>
        </div>
    );
}
6
export default ButtonCreate;