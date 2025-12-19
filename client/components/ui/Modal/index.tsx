"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { CustomModalProps } from "@/types/entities";


export default function CustomModal({ open, onClose, title, children, className }: CustomModalProps) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        showCloseButton={false}
        className={cn("sm:max-w-3xl", className)}
      >
        {title && (
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle>{title}</DialogTitle>

            <button
              onClick={onClose}
              className="rounded-md p-1 hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          </DialogHeader>
        )}
        <div className="pt-2 !max-h-[42rem] overflow-y-auto !max-w-[64rem]">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
