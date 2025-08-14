'use server';

import { z } from 'zod';
import { firestore } from '@/lib/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

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

  try {
    const contactCollection = collection(firestore, 'Contactus');
    await addDoc(contactCollection, {
      ...validatedFields.data,
      submittedAt: serverTimestamp(),
    });
    
    return {
      message: 'Thank you for your message! We will get back to you soon.',
      errors: null,
    };
  } catch(error) {
     console.error("Error writing document: ", error);
     return {
      errors: {
        _form: ['There was an error sending your message. Please try again later.'],
      },
      message: 'There was an error sending your message. Please try again later.',
     }
  }
}
