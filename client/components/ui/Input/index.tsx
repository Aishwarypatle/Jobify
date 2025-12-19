
import { Input } from './input';
import { CustomInputProps } from '@/types/entities';

export const CustomInput = (({ label, type="text", error, className,placeholder, ...props } : CustomInputProps) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {label}
                    </label>
                )}
                <Input
                    type={type}
                    placeholder={placeholder}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg !focus:!outline-none  focus:border-transparent transition ${
                        error ? 'border-red-500' : ''
                    } ${className}`}
                    {...props}
                />
                {error && (
                    <p className="text-sm text-red-500 mt-1">{error}</p>
                )}
            </div>
        );
    }
);

export default CustomInput