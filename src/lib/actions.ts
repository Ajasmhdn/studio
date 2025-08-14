'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }
  
  // This is a mock submission. In a real application, you would send this data to a server.
  console.log('Form data submitted:', validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate an error for demonstration purposes occasionally
  // if (Math.random() > 0.5) {
  //    return {
  //     errors: {
  //       _form: ['There was an error sending your message. Please try again later.'],
  //     },
  //     message: 'There was an error sending your message. Please try again later.',
  //    }
  // }
  
  return {
    message: 'Thank you for your message! We will get back to you soon.',
    errors: null,
  };
}
