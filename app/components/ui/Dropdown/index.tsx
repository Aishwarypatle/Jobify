import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { CustomDropdownProps } from '@/types/entities';


export const CustomDropdown = ({ options, onSelect, className = '', children}: CustomDropdownProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center justify-center px-4 py-2 border border-slate-300 rounded-full cursor-pointer hover:bg-gray-100 ${className}`}>
                {children}
                <ChevronDown className="ml-2 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {options?.map((option:any) => (
                    <DropdownMenuItem
                        key={option?.value}
                        onClick={() => onSelect(option?.value)}
                    >
                        {option.icon && <span className="mr-2">{option.icon}</span>}
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}