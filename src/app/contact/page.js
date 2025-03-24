"use client"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="min-h-screen w-full items-start flex flex-col md:flex-row">
      {/* Left side - Title */}
      <div className="md:w-1/2 flex items-center  p-8">
        <h1 className=" font-semibold text-(--primary-text) text-5xl tablet:w-1/3 tablet:text-7xl tracking-tighter tablet:leading-20">
          Contact
        </h1>
      </div>

      {/* Right side - Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-white text-xl">
              Name <span className="text-gray-400">(required)</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-white text-black"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-white text-xl">
              Email <span className="text-gray-400">(required)</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-white text-black"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-white text-xl">
              Message <span className="text-gray-400">(required)</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 bg-white text-black"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-3 px-12 text-xl"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

