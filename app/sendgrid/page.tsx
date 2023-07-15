import type { NextPage } from "next";
import Head from "next/head";
import { Form } from "@/components/contactForm/Form";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact form with Sendgrid</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <h1 className="text-6xl text-center my-10">
          Contact form with <span className="text-blue-500">SendGrid</span>
        </h1>
        <div className="container mx-auto my-10 max-w-7xl cpx-4 sm:px-6 lg:px-60">
          <Form />
        </div>
      </main>
    </div>
  );
};
export default Home;
