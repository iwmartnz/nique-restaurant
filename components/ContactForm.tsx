"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z
    .string()
    .min(15, {
      message: "Message must be at least 15 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 30 characters.",
    }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-brand-gray-dark pb-10"
      >
        {/* Name input */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  {...field}
                  className=" bg-brand-black rounded-xl border-brand-gray-dark py-8 focus:ring-offset-brand-accent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email input */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="johndoe@example.com"
                  type="email"
                  {...field}
                  className=" bg-brand-black rounded-xl border-brand-gray-dark py-8 focus:ring-offset-brand-accent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Message input */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your experience"
                  className="resize-none bg-brand-black rounded-xl border-brand-gray-dark py-8 focus:ring-offset-brand-accent"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className=" bg-brand-accent w-full text-brand-black py-8 hover:bg-brand-accent/80 rounded-full"
        >
          SEND MESSAGE
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
