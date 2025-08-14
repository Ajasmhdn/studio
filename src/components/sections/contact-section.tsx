'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, { message: null, errors: null });
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: state.message,
        });
      } else {
        toast({
          title: 'Success!',
          description: state.message,
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Card>
              <CardContent className="p-6">
                <form ref={formRef} action={formAction} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" placeholder="Your Name" required aria-describedby="name-error" />
                    <p id="name-error" className="text-sm font-medium text-destructive mt-1 h-5">{state.errors?.name?.[0]}&nbsp;</p>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required aria-describedby="email-error" />
                    <p id="email-error" className="text-sm font-medium text-destructive mt-1 h-5">{state.errors?.email?.[0]}&nbsp;</p>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" type="text" placeholder="Message Subject" required aria-describedby="subject-error" />
                    <p id="subject-error" className="text-sm font-medium text-destructive mt-1 h-5">{state.errors?.subject?.[0]}&nbsp;</p>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message..." rows={5} required aria-describedby="message-error" />
                    <p id="message-error" className="text-sm font-medium text-destructive mt-1 h-5">{state.errors?.message?.[0]}&nbsp;</p>
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><MapPin className="h-5 w-5 text-primary" /></div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">TKM College of Engineering, Karicode, Kollam-691005, Kerala, India</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Phone className="h-5 w-5 text-primary" /></div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+914742712024" className="text-muted-foreground hover:text-primary transition-colors">+91-474-2712024</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Mail className="h-5 w-5 text-primary" /></div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:info@tkmce.ac.in" className="text-muted-foreground hover:text-primary transition-colors">info@tkmce.ac.in</a>
                </div>
              </li>
            </ul>
            <div className="aspect-video w-full rounded-lg overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.603319080996!2d76.6340220747805!3d8.914092491122138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd3036021c31%3A0x915569774655845!2sTKM%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps location of TKM College of Engineering"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
