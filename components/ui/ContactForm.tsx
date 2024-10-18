"use client";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { toast } from "react-toastify"; // For notifications
import emailjs from '@emailjs/browser';
import { Label } from "./label"; // Adjust the import path as needed
import Input  from "./input"; // Adjust the import path as needed
import { BottomGradient } from "./BottomGradient"; // Adjust the import path as needed
import Lottie from 'lottie-react'; // Import Lottie
import Animation from '@/data/animation.json'; // Import your Lottie JSON animation

interface ContactFormProps {
  setXSubmitted: Dispatch<SetStateAction<boolean>>;
  xsubmitted: boolean;
}

function ContactForm({ xsubmitted, setXSubmitted }: ContactFormProps) {
  const [userInput, setUserInput] = useState({
    from_name: "",
    lastName: "",
    from_email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      const emailParams = {
        from_name: userInput.from_name,
        lastName: userInput.lastName,
        from_email: userInput.from_email,
        message: userInput.message
      };

      const res = await emailjs.send(serviceID, templateID, emailParams, userID);

      if (res.status === 200) {
        setXSubmitted(true);
        toast.success("Message sent successfully!");
        setUserInput({
          from_name: "",
          lastName: "",
          from_email: "",
          message: ""
        });

        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 4500); 
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  // Reset xsubmitted state after a delay
  useEffect(() => {
    if (xsubmitted) {
      const timer = setTimeout(() => {
        setXSubmitted(false); 
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [xsubmitted, setXSubmitted]);

  return (
    <div className="relative">
      <div className={`transition-opacity duration-500 ${xsubmitted ? 'opacity-0' : 'opacity-100'}`}>
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <Label htmlFor="from_name">First Name:</Label>
              <Input
                id="from_name"
                name="from_name"
                placeholder="John"
                type="text"
                value={userInput.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <Label htmlFor="lastName">Last Name:</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                type="text"
                value={userInput.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <Label htmlFor="from_email">Your Email:</Label>
            <Input
              id="from_email"
              name="from_email"
              placeholder="you@example.com"
              type="email"
              value={userInput.from_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <Label htmlFor="message">Your Message:</Label>
            <textarea
              id="message"
              name="message"
              placeholder="What would you like to say?"
              value={userInput.message}
              onChange={handleChange}
              required
              className="border p-2 w-full h-32"
            />
          </div>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send! &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
      {xsubmitted && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Lottie animationData={Animation} loop={false} />
        </div>
      )}
    </div>
  );
}

export default ContactForm;
