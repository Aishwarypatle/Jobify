import { ReactNode } from "react";
export interface CustomButtonProps {
    className?: string;
    handler?: () => void;
    children?: any;
}

export interface CustomInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: any;
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

export interface User {
    _id: string;
    name: string;
    email: string;
    bookmarks: string[];
    appliedJobs: {
        jobId: string;
        appliedAt: string;
    }[];
    createdAt: string;
    updatedAt: string;
}

export interface ProfileProps {
    openProfile: boolean;
    setOpenProfile: (openProfile: boolean) => void;
    user: any;
}
