"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// we dont need to use a "FormData" interface if we're using the Formspree
// the API automatically handles filed names and values

const Contact: React.FC = () => {
    const [status, setStatus] = useState(""); // For status messages

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending your message...");

        // Use Formspree to send the form data
        const form = e.currentTarget;
        const formData = new FormData(form); // Automatically collects form data

        try {
            const response = await fetch("https://formspree.io/f/mldeagwv", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                form.reset(); //reset after sent
            } else {
                setStatus("Failed to send the message. Please try again later.");
            }
            } catch (error) {
            console.error("Error sending the form:", error);
            setStatus("An error occurred. Please try again later.");
        }
    };

  return(
    <div>
      <Header transparent={false}/>
      <div className="h-20 bg-white w-full"></div>
      <main className="container mx-auto px-20 py-8 mb-40">
            {/* only 1 column on small screen, 2 on large */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* left side */}
            <div>
                <h1 className="text-4xl font-bold text-[#64b0e2]">Contact Us</h1>
              
                <p className="text-lg text-gray-600 mt-4 pt-4">
                    Contact us to learn more about our community and to
                    become involved yourself.
                </p>

            </div>

            {/* right side */}
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName" className="block text-md font-medium text-gray-600">
                    First Name (required)
                    </label>
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#64b0e2] focus:border-[#64b0e2] px-3 py-1"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-md font-medium text-gray-600">
                    Last Name
                    </label>
                    <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#64b0e2] focus:border-[#64b0e2] px-3 py-1"
                    />
                </div>
              </div>


                <div>
                    <label htmlFor="email" className="block text-md font-medium text-gray-600">
                        Email (required)
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#64b0e2] focus:border-[#64b0e2] px-3 py-1"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-md font-medium text-gray-600">
                        Message (required)
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#64b0e2] focus:border-[#64b0e2] px-3 py-1"
                        required
                    ></textarea>
                </div>

                <div>
                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#64b0e2] text-white font-medium rounded-md hover:bg-blue-500 transition"
                >
                    Send
                </button>
                </div>
              
            </form>

            {/* display successful send to users */}
            {status && (
                <div className="lg:col-span-2 mt-4">
                <p
                    className={`text-center text-sm font-medium ${
                    status.includes("successfully")
                        ? "text-[#64b0e2]"
                        : "text-red-500"
                    }`}
                >
                    {status}
                </p>
                </div>
            )}

          </div>
      </main>
      <Footer/>
    </div>
  );

};

export default Contact;