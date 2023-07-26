import Image from 'next/image';
import {Fragment} from 'react'

const MiddleSection = () => {
  return (
    <Fragment>
      <section className="pt-16 pb-12" id="about">
        <div className="max-w-7xl mx-auto py-4 px-4 grid gird-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 lg:gap-x-28">
        <div className="h-full">
            <Image
              src="/images/mission2.jpg"
              width={400}
              height={400}
              alt="Friends"
              className="w-full aspect-1 col-span-2 md:col-span-1 object-cover "
            />
          </div>
          <div className="flex flex-col justify-between">
            {" "}
            <div className="text-slate-700 flex space-x-3 items-center">
              <p className="text-sm md:text-lg md:font-bold font-serif uppercase font-medium">
              More info{" "}
              </p>{" "}
            </div>{" "}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800">
              Samaritan <span className="text-brand-main lowercase"> Act</span>{" "}
            </h1>
            <p className="text-lg md:text-xl lg:text-[1.4rem] leading-8 font-medium mt-4 text-gray-700 text-justify">
            Adopting an animal companion means making a long-term commitment to care for and spend time with the animal for his or her entire life. 
            </p>
            <p className="text-lg md:text-xl lg:text-[1.4rem] leading-8 font-medium mt-4 text-gray-700 text-justify">
            Dogs, cats, rabbits, and other domesticated animals rely on the care of devoted human guardians to keep them safe, happy, and healthy. Some of these animals are lucky enough to be adopted into responsible, permanent homes. Sadly, there are far more animals in need of a caring family than there are people willing or able to provide them with a lifetime of love and support. 
            </p>
          </div>

        </div>
      </section>
    </Fragment>
  );
};
export default MiddleSection;