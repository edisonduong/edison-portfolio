import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Alert } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

function AlertMessage(props) {
  return (
    <Alert
      severity={props.severity}
      onClose={props.onClose}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={props.onClose}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      {props.message}
    </Alert>
  );
}

export default AlertMessage;
