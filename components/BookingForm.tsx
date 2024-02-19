"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "./Icons";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  numberOfGuests: z.coerce.number().min(0).max(10),
  date: z.date({
    required_error: "A date of reservation is required.",
  }),
  time: z.string({
    required_error: "A time of reservation is required.",
  }),
});

const times = [
  { value: "1600", label: "4:00 PM", tablesAvailable: 3 },
  { value: "1700", label: "5:00 PM", tablesAvailable: 1 },
  { value: "1800", label: "6:00 PM", tablesAvailable: 2 },
  { value: "1900", label: "7:00 PM", tablesAvailable: 1 },
  { value: "2000", label: "8:00 PM", tablesAvailable: 1 },
  { value: "2100", label: "9:00 PM", tablesAvailable: 2 },
  { value: "2200", label: "10:00 PM", tablesAvailable: 4 },
];

const BookingForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      numberOfGuests: 0,
    },
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
        {/* Guests Input */}
        <FormField
          control={form.control}
          name="numberOfGuests"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Number of Guests</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  max={10}
                  placeholder="0"
                  {...field}
                  className=" bg-brand-black border-brand-gray-dark py-8 rounded-xl focus:ring-offset-brand-accent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row flex-wrap w-full gap-4">
          {/* Date Input */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-lg">Date of Reservation</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal  py-8 rounded-xl hover:bg-brand-gray-dark/30 hover:text-brand-white focus:ring-offset-brand-accent flex justify-start gap-4 bg-brand-black border-brand-gray-dark",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon color=" #4b4b4b" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Time Input */}
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-lg">Time</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[240px] justify-between bg-brand-black rounded-xl focus:ring-offset-brand-accent py-8 border-brand-gray-dark hover:bg-brand-gray-dark/30 hover:text-brand-white",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? times.find((time) => time.value === field.value)
                              ?.label
                          : "Select time"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search Time..." />
                      <CommandEmpty>No available time found.</CommandEmpty>
                      <CommandGroup>
                        {times.map((time) => (
                          <CommandItem
                            value={time.label}
                            key={time.value}
                            onSelect={() => {
                              form.setValue("time", time.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                time.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {time.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className=" bg-brand-accent w-full text-brand-black py-8 hover:bg-brand-accent/80 rounded-full"
        >
          BOOK A TABLE
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
