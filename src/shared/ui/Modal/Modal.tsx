import * as React from 'react';
import { Dialog, DialogContent, Paper, PaperProps } from '@mui/material';
import Draggable from 'react-draggable';

interface DraggableDialogProps {
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
  
const DraggableDialog: React.FC<DraggableDialogProps> = ({ open, handleClose, children, ...other }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      {...other}
    >
      <DialogContent id="draggable-dialog-title">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DraggableDialog;