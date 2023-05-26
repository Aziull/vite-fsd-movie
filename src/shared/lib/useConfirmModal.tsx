import React, { useCallback, useEffect, useState } from 'react'
import Modal from '../ui/Modal/Modal'
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material'



type ConfirmDialogProps = {
    title: string;
    children?: React.ReactNode;
    open: boolean;
    onConfirm: () => void;
    close: () => void;
    confirmText?: string,
    cancelText?: string,
};

type ConfirmDialogComponentType = React.FC<Omit<ConfirmDialogProps, 'open' | 'close'>>;

type UseConfirmModalHook = [
  ConfirmDialogComponentType,
  () => void,
  () => void,
];

const ConfirmDialog = ({
    title,
    children,
    open,
    onConfirm,
    close,
    confirmText = 'Yes',
    cancelText = 'No',
}: ConfirmDialogProps) => {
    return (
        <Modal open={open} handleClose={close}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button onClick={close} color="secondary">
                    {cancelText}
                </Button>
                <Button onClick={onConfirm} color="primary">
                    {confirmText}
                </Button>
            </DialogActions>
        </Modal>
    );
};

const useConfirmModal = (): UseConfirmModalHook => {
    const [isOpen, setIsOpen] = useState(false);
    const [confirmAction, setConfirmAction] = useState(null);

    const show = useCallback(() => {
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
        setConfirmAction(null);
    }, []);

    const ConfirmDialogComponent = useCallback(
        (props: Omit<ConfirmDialogProps, 'open' | 'close'>) => (
            <ConfirmDialog
                close={close}
                open={isOpen}
                {...props}
            />
        ),
        [isOpen, close, confirmAction]
    );

    return [ConfirmDialogComponent, show, close];
}

export default useConfirmModal;
