'use client'
import { useState } from 'react'
export default function ApplyJob() {
  const [inputData, setInputData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  })
  const handleChange = (e: any) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }
  async function handleOnsubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(inputData)
  }
  return (
    <div>
      <h1>APPLY</h1>
      <form method="post" onSubmit={handleOnsubmit}>
        <label className="flex flex-col ">
          First Name*{' '}
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col ">
          Last Name*{' '}
          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Email*{' '}
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Your Phone*{' '}
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Do you have a 4-year in engineering?*
          <select name="experience" id="experiance" required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label className="flex flex-col">
          Are you authorized to work unrestricted in the U.S without any visa
          sponsorship?*
          <select name="authorized" id="authorized" required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label className="flex flex-col">
          Upload Resume*
          <input type="file" name="resume" id="resume" />
        </label>
        <button className="bg-primary text-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
