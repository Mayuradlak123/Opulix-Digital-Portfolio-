import * as React from "react";

const Services=(props)=> {
  return (
    <div className="bg-neutral-900 flex flex-col pt-12">
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/04525e6caf4fa1d565d160175c9380d9f6f47f91a730ef70818ee97ea17a7b90?"
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
      <div className="text-amber-400 text-center text-7xl self-center whitespace-nowrap mt-20 max-md:text-4xl max-md:mt-10">
        Services
      </div>
      <div className="text-white text-center text-3xl max-w-[547px] self-center mt-5 max-md:max-w-full">
        Check out our selection of our recent
        <br />
        projects and case studies
      </div>
      <div className="bg-neutral-900 self-stretch flex w-full flex-col justify-center items-center mt-16 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-[1.58] object-contain object-center w-[934px] overflow-hidden max-w-full mt-28 mb-9 max-md:mt-10"
        />
      </div>
      <div className="bg-neutral-900 self-stretch flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-[1.58] object-contain object-center w-[934px] overflow-hidden max-w-full mt-28 mb-9 max-md:mt-10"
        />
      </div>
      <div className="bg-neutral-900 self-stretch flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-[1.58] object-contain object-center w-[934px] overflow-hidden max-w-full mt-28 mb-9 max-md:mt-10"
        />
      </div>
      <div className="bg-neutral-900 self-stretch flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-[766px] max-w-full flex-col items-center mt-28 mb-20 max-md:my-10">
          <div className="text-white text-center text-7xl font-bold whitespace-nowrap max-md:max-w-full max-md:text-4xl">
            UI/UX Design
          </div>
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[1.71] object-contain object-center w-full overflow-hidden self-stretch mt-3 max-md:max-w-full"
          />
        </div>
      </div>
      <div className="self-stretch flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-[766px] max-w-full flex-col items-center mt-28 mb-20 max-md:my-10">
          <div className="text-white text-center text-7xl font-bold whitespace-nowrap max-md:max-w-full max-md:text-4xl">
            Digital Marketing
          </div>
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[1.71] object-contain object-center w-full overflow-hidden self-stretch mt-3 max-md:max-w-full"
          />
        </div>
      </div>
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[840px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd531aa48ac882be9d8793eb5980a63647d313ef3d46695b3f97f01083773dbd?"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c61c4e60e8d56f2f54470ce665145c000403d9fcf4cb8bc76eeb60f6b08184db?"
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/04e74d2d9560b2772dd740b4396b5c9a90301a4d4ad7e76416efcbbef064b401?"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative bg-neutral-900 flex shrink-0 h-[22px] flex-col" />
              </div>
              <div className="flex-col overflow-hidden self-center relative flex aspect-[1.5454545454545454] w-[34px] justify-center items-stretch mt-3.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/04e74d2d9560b2772dd740b4396b5c9a90301a4d4ad7e76416efcbbef064b401?"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative bg-neutral-900 flex shrink-0 h-[22px] flex-col" />
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eaacea83daf308b6bd0d4e920422db7c416ae9233c6fd729c8f4a013cf88057?"
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

export default Services;
