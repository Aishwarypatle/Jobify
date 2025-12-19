import { ReactNode } from "react";

export interface CustomButtonProps {
    className?: string;
    handler?: () => void;
    children?: any;
}

export interface CustomInputProps {
    type?: string;
    placeholder?: string;
    className?: string;
    handler?: () => void;
    label?: any;
    error?: any;
    children?: any;
    displayName?: any
}

interface DropdownOption {
    label: string;
    value: string;
    icon?: React.ReactNode;
}

export interface CustomDropdownProps {
    children: any
    options: DropdownOption[];
    onSelect: (value: string) => void;
    className?: string;
}


export interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title?: string | any;
  children: ReactNode | any;
  className?: string;
}