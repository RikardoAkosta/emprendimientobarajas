import React from "react";
import { RiCheckboxBlankCircleFill, RiPlayFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="min-h-[85vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Informacion */}
      <div className="md:col-span-5 flex items-center justify-center p-12 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-7xl text-tertiary font-bold leading-[7.5rem]">
            Get what you propose to{" "}
            <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
              improve
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            We seek to help you in your personal and professional life to break
            those barriers, which do not allow you to achieve your objectives
            and goals
          </p>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <button className="w-full xl:w-auto bg-primary text-white py-2 px-4 rounded-xl text-xl ">
              Contact Us
            </button>
            <button className="w-full xl:w-auto flex items-center gap-4 py-2 px-8 rounded-xl text-xl text-gray-500">
              <RiPlayFill className="bg-primary text-white rounded-full box-center text-3xl" />
              Watch our introduction video
            </button>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 flex items-center justify-center">
        <img
          src="Origami bird-cuate.png"
          alt="Dibujo de origami"
          className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object cover xl:-mt-28"
        />
      </div>
    </section>
  );
};

export default Hero;
