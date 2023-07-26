import Image from 'next/image';
import {Fragment} from 'react'

const TopSection = () => {
  return (
    <Fragment>
      <section className="pt-16 pb-12" id="about">
        <div className="max-w-7xl mx-auto py-4 px-4 grid gird-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 lg:gap-x-28">
          <div className="flex flex-col justify-between">
            {" "}
            <div className="text-slate-700 flex space-x-3 items-center">
              <p className="text-sm md:text-lg md:font-bold font-serif uppercase font-medium">
              More info{" "}
              </p>{" "}
            </div>{" "}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800">
              Animal <span className="text-brand-main lowercase"> Adoption</span>{" "}
            </h1>
            <p className="text-lg md:text-xl lg:text-[1.4rem] leading-8 font-medium mt-4 text-gray-700 text-justify">
            Thanks to the internet's transformative influence, a plethora of online animal adoption platforms now exist, providing the convenience of selecting a cat or dog for adoption without the need for physical visits to shelters.
            </p>
            <p className="text-lg md:text-xl lg:text-[1.4rem] leading-8 font-medium mt-4 text-gray-700 text-justify">
            The majority of these online platforms consist of animal rescue groups that operate without a physical shelter. Rescued animals are placed in temporary homes under the care of a network of foster parents who willingly provide nurturing environments until the animals are matched with their forever homes.
            </p>
            <p className="text-lg md:text-xl lg:text-[1.4rem] leading-8 font-medium mt-4 text-gray-700 text-justify">
            "All aspects of the adoption process, from browsing available pets, understanding their background and personality, to conducting adoption interviews, can now be conveniently carried out online. This approach not only saves valuable time and travel expenses associated with visiting multiple shelters in search of a pet but also grants access to a wider selection of animals awaiting adoption. In summary, this efficient method empowers you to discover your ideal pet with greater ease and convenience.
            </p>
          </div>
          <div className="h-full">
            <Image
              src="/images/adoption.jpg"
              width={600}
              height={400}
              alt="Friends"
              className="w-full aspect-1 col-span-2 md:col-span-1 object-cover "
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default TopSection;