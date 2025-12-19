import { z } from 'zod';

const initialContact = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

const contactValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().length(10, "Mobile phone is required()"), // Optional field
  message: z.string().optional(), // Optional field
});

  export {
    initialContact,
    contactValidationSchema
  }