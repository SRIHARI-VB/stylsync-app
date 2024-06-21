"use client";
import { Button } from "@/components/ui/button";
import { Bebas_Neue, Questrial } from "next/font/google";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
});
const bebas_neue_font = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas_neue",
});
const questrial_font = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
});
export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white gap-16">
      <div className="flex flex-col items-center gap-1">
        <p className={`text-5xl bebas_neue ${bebas_neue_font.variable}`}>
          StylSync
        </p>
        <p className={`text-md questrial ${questrial_font.variable}`}>
          ETERNAL
        </p>
      </div>
      <div className="w-3/4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
