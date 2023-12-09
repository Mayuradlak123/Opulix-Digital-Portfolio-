import * as React from "react";

const AboutUs =(props)=> {
  return (
    <div className="bg-neutral-900 flex flex-col pt-11">
      <div className="shadow-sm backdrop-blur-[48.003746032714844px] bg-white bg-opacity-30 self-center w-[747px] max-w-full p-3 rounded-2xl">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
            <div className="justify-center text-white text-center text-2xl leading-[75px] whitespace-nowrap items-stretch bg-black w-full px-14 py-8 rounded-lg max-md:mt-9 max-md:px-5">
              Explore
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9098288ffb9ab840dd3a8f7428626741106477e7e9a3a040bc12f1eff09025c0?"
              className="aspect-[3.45] object-contain object-center w-[283px] overflow-hidden max-md:mt-9"
            />
          </div>
          <div className="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center text-black text-center text-2xl leading-[82px] whitespace-nowrap items-stretch bg-white w-full px-14 py-8 rounded-lg border-[1.637px] border-solid border-white max-md:mt-9 max-md:px-5">
              Contact
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex w-full flex-col items-stretch mt-40 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="text-amber-400 text-7xl w-[1292px] ml-4 mr-4 max-md:max-w-full max-md:text-4xl max-md:mr-2.5">
          Welcome to Opulix Digital,
        </div>
        <div className="justify-center text-white text-3xl max-w-[954px] ml-4 mr-4 mt-5 max-md:max-w-full max-md:mr-2.5">
          where innovation meets excellence!
        </div>
        <div className="text-stone-300 text-2xl leading-10 max-w-[1548px] ml-4 mr-4 mt-11 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
          Opulix Digital is a leading digital services provider, driven by a
          vision to revolutionize the digital landscape through unparalleled
          creativity, technology, and innovation. Founded on principles of
          integrity and collaboration, we specialize in Web Services, including
          Design and Development, Application and Software Design, Branding, and
          Digital Marketing.
          <br />
          <br />
          Our dynamic team of dedicated professionals fosters a collaborative
          environment where creativity thrives, and innovation is inherent. What
          sets us apart is not just our services but our client-centric
          approach, exceeding expectations and building lasting relationships.
          <br />
          <br />
          At Opulix Digital, success goes beyond project delivery; it's about
          guiding businesses through the digital landscape with strategic
          insights and technical expertise. Our values extend to creating a
          positive and inclusive work environment, investing in the growth and
          development of our team.
          <br />
          <br />
          Committed to pushing boundaries and embracing challenges, Opulix
          Digital continues to redefine digital excellence, one project at a
          time. Join us on this exciting journey where innovation knows no
          bounds!
        </div>
      </div>
      <div className="bg-neutral-900 self-stretch flex w-full flex-col justify-center items-center mt-24 pl-16 py-12 max-md:max-w-full max-md:mt-10 max-md:pl-5">
        <div className="flex w-full max-w-[1608px] justify-between gap-5 mt-16 mb-11 items-end max-md:max-w-full max-md:flex-wrap max-md:my-10">
          <div className="flex basis-[0%] flex-col items-stretch mt-72 max-md:mt-10">
            <div className="text-white text-7xl font-semibold max-md:text-4xl">
              Digital
              <br />
              Marketing
            </div>
            <div className="text-white text-2xl whitespace-nowrap mt-16 max-md:mt-10">
              Lorem Ipsum Anything here
            </div>
            <div className="items-center flex justify-between gap-5 mt-24 pr-20 max-md:mt-10 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7afac972c69eb13cc5faaa935df89810f27097cb0ce3add56c83aa1a2f376?"
                className="aspect-square object-contain object-center w-[53px] overflow-hidden shrink-0 max-w-full my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/56ef1875317a02e3a116b405d1f245a8490242593bc3e9e195456cd847ebd386?"
                className="aspect-[0.99] object-contain object-center w-[69px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[1.22] object-contain object-center w-full justify-end items-center overflow-hidden self-stretch grow basis-[0%] max-md:max-w-full"
          />
        </div>
      </div>
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[840px] w-full justify-center items-center mt-12 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <img
          loading="lazy"
          srcSet="..."
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex w-[695px] max-w-full flex-col items-stretch mt-32 mb-11 max-md:my-10">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[1.98] object-contain object-center w-full overflow-hidden max-md:max-w-full"
          />
          <div className="text-black text-xl font-medium whitespace-nowrap justify-center items-stretch bg-neutral-100 self-center mt-40 px-9 py-5 rounded-lg max-md:mt-10 max-md:px-5">
            Get in touch
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 self-stretch flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1458px] flex-col mt-9 mb-6 max-md:max-w-full">
          <div className="self-stretch flex w-full justify-between gap-5 pr-5 items-start max-md:max-w-full max-md:flex-wrap">
            <div className="text-amber-400 text-2xl grow whitespace-nowrap">
              <a href="mailto:info@opulixdigital.com" target="_blank">
                info@opulixdigital.com
              </a>
            </div>
            <div className="items-stretch flex justify-between gap-5 pr-4 max-md:justify-center">
              <div className="text-white text-2xl font-medium leading-5 whitespace-nowrap justify-center items-stretch aspect-[2.4] pb-2">
                About
              </div>
              <div className="text-white text-2xl font-medium leading-5 whitespace-nowrap justify-center items-stretch aspect-[2] pb-2">
                Work
              </div>
              <div className="text-white text-2xl font-medium leading-5 whitespace-nowrap justify-center items-stretch grow pb-2">
                Services
              </div>
              <div className="text-white text-2xl font-medium leading-5 whitespace-nowrap justify-center items-stretch aspect-[2.96] pt-px pb-2">
                Contact
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a93c57f14acffcb7a7ca22f6346098d145073698e5f4874648b35bc450c8d557?"
            className="aspect-[2.3] object-contain object-center w-[46px] overflow-hidden max-w-full mt-12 self-start max-md:mt-10"
          />
          <div className="self-stretch flex items-stretch justify-between gap-5 mt-4 pr-2 max-md:max-w-full max-md:flex-wrap">
            <div className="flex basis-[0%] flex-col">
              <div className="bg-neutral-900 self-stretch flex aspect-[1.6] flex-col justify-center items-center pl-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/04e74d2d9560b2772dd740b4396b5c9a90301a4d4ad7e76416efcbbef064b401?"
                  className="aspect-square object-contain object-center w-5 overflow-hidden"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/45536736b2d41aefe3fa5fbc80b3d780550ea5141bfe302e0ea2da4e2adea30f?"
                className="aspect-[1.7] object-contain object-center w-[34px] overflow-hidden self-center mt-4"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b18bb49ef42b1e136d9defa10870bd88a3880520c69fdef4096c84ff8f510ddd?"
                className="aspect-[1.7] object-contain object-center w-[34px] overflow-hidden self-center mt-4"
              />
              <div className="flex-col overflow-hidden self-center relative flex aspect-[1.5454545454545454] w-[34px] justify-center items-stretch mt-3.5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative bg-neutral-900 flex shrink-0 h-[22px] flex-col" />
              </div>
              <div className="flex-col overflow-hidden self-center relative flex aspect-[1.5454545454545454] w-[34px] justify-center items-stretch mt-3.5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative bg-neutral-900 flex shrink-0 h-[22px] flex-col" />
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc01a2222ce9f2fbd1365f0e3eb1f49d238b2db974019a51a7d6a947fdcebc22?"
              className="aspect-[2.08] object-contain object-center w-[254px] overflow-hidden shrink-0 max-w-full mt-7 self-end"
            />
          </div>
          <div className="justify-between items-stretch self-stretch flex gap-5 mt-10 pr-11 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <div className="text-stone-300 text-2xl whitespace-nowrap">
              Privacy Policy
            </div>
            <div className="text-stone-300 text-right text-2xl">
              OpulixDigital @2023
            </div>
            <div className="text-stone-300 text-right text-2xl whitespace-nowrap">
              Terms & Conditions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;