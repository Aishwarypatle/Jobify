import { CustomButtonProps } from '@/types/entities';
import { Button } from './button';

export const CustomButton = ({className = '',handler,children}: CustomButtonProps) => {
    return (
        <Button
            className={`px-4 py-2 rounded font-medium transition-colors ${className}`}
            onClick={handler}
        >
            {children}
        </Button>
    );
};

export default CustomButton;