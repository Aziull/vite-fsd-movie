import * as React from 'react';
import { Dialog, DialogContent, DialogProps, Paper, PaperProps } from '@mui/material';
import Draggable from 'react-draggable';

interface ModalProps extends DialogProps{
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  // Add any other props you want here
}

function PaperComponent(props: PaperProps) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  
const Modal: React.FC<ModalProps> = ({ open, handleClose, children, ...other }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      //PaperComponent={PaperComponent}
      {...other}
    >
      <DialogContent id="draggable-dialog-title">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;