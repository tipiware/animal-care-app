import { FormEvent } from "react";

const ContactForm = () => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

       const { first_name, last_name, email, age, pronouns, education, spoken_languages, message } = Object.fromEntries(
         new FormData(e.currentTarget)
       );


       console.log({ first_name, last_name, email, age, pronouns, education, spoken_languages, message })

  };

  return (
    <div id="contact_form" className="max-w-7xl mx-auto px-4 my-4">
      <h2 className="text-5xl text-brand-main font-bold text-center">
        Get In Touch
      </h2>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="max-w-3xl mx-auto p-4 bg-late-200 rounded-lg"
      >
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY}
        ></input>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              required
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="first_name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              required
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="given-name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              required
              type="number"
              name="age"
              id="age"
              autoComplete="age"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="pronouns"
              className="block text-sm font-medium text-gray-700"
            >
              Pronouns
            </label>
            <select
              required
              id="pronouns"
              name="pronouns"
              autoComplete="pronouns"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>He/him</option>
              <option>She/her</option>
              <option>Them/they</option>
              <option>Rather No Say</option>
            </select>
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            About
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="please describe your current circumstances and how we could support you, when can we reach you and how"
              defaultValue={""}
            />
          </div>
        </div>

        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        ></input>

        <button
          type="submit"
          className="bg-brand-main text-white font-bold px-6 py-2 w-1/2 sm:w-1/3 rounded-md mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactForm;