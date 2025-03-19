import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

function ContactForm() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Popup
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="popup-title" variant="h6" component="h2">
            Popup Title
          </Typography>
          <Typography id="popup-description" sx={{ mt: 2 }}>
            This is a simple popup modal. You can add more content here.
          </Typography>
          <Button variant="contained" color="secondary" onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ContactForm;
