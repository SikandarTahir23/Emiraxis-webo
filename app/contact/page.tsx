"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Navbar from "@/components/navbar";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum(["Portfolio", "Get a Quote", "Other"]),
  services: z.enum([
    "Event Management",
    "Event Staffing",
    "Marketing & Promotions",
    "Sponsorship Coordination",
    "Logistics & Operations",
    "Branding & Design",
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help: "Portfolio" | "Get a Quote" | "Other";
  services:
    | "Event Management"
    | "Event Staffing"
    | "Marketing & Promotions"
    | "Sponsorship Coordination"
    | "Logistics & Operations"
    | "Branding & Design";
  info: string;
  terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Portfolio",
      services: "Event Management",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);

      // Prepare data for Web3Forms
      const payload = {
        access_key: "49559b83-1860-4fb3-b753-218c345b577c", // Replace with your actual Web3Forms API key
        ...data,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form. Please try again.");
      }

      setSubmitted(true);

      toast({
        title: "Success",
        description: "Your form has been submitted successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
      <div className="md:flex items-start justify-center md:py-20 px-6">
        <div>
          <div className="text-5xl font-medium w-full md:w-2/3 pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact our sales team
          </div>
          <div className="py-4 text-gray-300">
            Let&apos;s talk about how Emiraxis can help your Event Elevate.
          </div>
        </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 h-full border rounded-3xl p-10 md:w-1/3"
            >
              <div className="md:flex items-center gap-6 text-white">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">First name *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Last name *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="items-center gap-6 text-white">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Company name *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Services you are interested in</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Event Management">Event Management</SelectItem>
                        <SelectItem value="Event Staffing">Event Staffing</SelectItem>
                        <SelectItem value="Marketing & Promotions">Marketing & Promotions</SelectItem>
                        <SelectItem value="Sponsorship Coordination">Sponsorship Coordination</SelectItem>
                        <SelectItem value="Logistics & Operations">Logistics & Operations</SelectItem>
                        <SelectItem value="Branding & Design">Branding & Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="help"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">How can we help?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Portfolio">Portfolio</SelectItem>
                        <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Anything else?</FormLabel>
                    <FormControl>
                      <Textarea style={{ height: "100px" }} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-4 items-center text-white">
                <Checkbox />
                <div className="text-xs">
                  I agree to Emiraxis&apos; sending marketing communications.
                </div>
              </div>

              <Button type="submit" disabled={loading}>
                Submit
              </Button>
            </form>
          ) : (
            <div className="text-xl flex items-center justify-center flex-col text-white">
              <PiSmiley size={48} className="text-green-500" />
              <div className="py-4">
                Your form has been successfully submitted. Thank you!
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
