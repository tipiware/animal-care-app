import {Fragment, useState} from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Home/Hero'
import TopSection from '../components/About/TopSection';
import Contact from '../components/Home/Contact';
import { AnimatePresence } from 'framer-motion';
import ContactForm from '../components/Home/ContactForm';
import MiddleSection from '../components/About/MiddleSection';

const Home: NextPage = () => {

  const [show, setShow] = useState(false)


  return (
    <Fragment>
      <Head>
        <title>Animal Rescue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <TopSection />
        <MiddleSection />

        <section id="promise">
          <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="w-full md:pl-6 py-3">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold  text-slate-800">
                  Do you like animals?
                  <span className="text-brand-main lowercase">Try adopt one</span>
                </h1>{" "}
                <p className="text-lg md:text-[1.4rem] font-medium mt-4 text-gray-700">
                  At our animal shelther, we have diffrent type of animals. eg. dog, cat, rodent, gold fish, etc. Get one pet for free!
                </p>
                <p className="text-lg md:text-[1.4rem] mt-4 text-gray-700">
                  Here we try to remind you, these days scammer are everywhere. Regardless student, working adult, or elders, anyone can be the next victim.
                </p>
              </div>{" "}
              <Image
                alt="friends"
                src="/images/mission.jpg"
                width={600}
                height={400}
                className="w-full aspect-1 col-span-2 md:col-span-1 object-cover "
              />
            </div>
          </div>
        </section>

        <ContactForm />
        <Contact />
      </main>
    </Fragment>
  );
}

export default Home