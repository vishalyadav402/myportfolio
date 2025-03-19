import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import CloseIcon from '@mui/icons-material/Close';

function PopupModal() {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [status, setStatus] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setStatus('');
    reset();
  };

  const onSubmit = (data) => {
    console.log(data);
    setStatus('Sending...');
    emailjs.send(
      'service_atxmjsq', // Replace with your actual EmailJS Service ID
      'template_1ipcgn2', // Replace with your actual EmailJS Template ID
      {
        mobile: data.mobile,
        email: data.email,
        message: data.message,
      },
      'LS8vhY88JQ7oXhUxW' // Replace with your actual EmailJS Public Key
    )
    .then(() => {
      setStatus('Message sent successfully!');
      reset();
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setStatus('Failed to send message. Please try again later.');
    });
  };

  return (
    <div>
      <span
        onClick={handleOpen}
        className="cursor-pointer inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-gray-300 transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </span>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
      >
        <Box
          className="bg-gray-300 shadow-lg rounded-lg md:w-[400px]"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 350,
            bgcolor: 'background.paper',
            border: 'none',
            boxShadow: 24,
            p: 4,
          }}
        >
          <section>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <CloseIcon />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  {...register('mobile', {
                    required: 'Mobile number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Enter a valid 10-digit mobile number',
                    },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Your mobile number"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address',
                    },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="cursor-pointer inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-gray-300 transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400 w-full"
              >
                Send Message
              </button>
            </form>

            {status && (
              <p className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </section>
        </Box>
      </Modal>
    </div>
  );
}

export default PopupModal;
