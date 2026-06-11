import ServiceIcon from "./icons/ServiceIcon";
import Heading from "./Heading";
import workOrder from "../../assets/images/services/work-order.png";
import workSync from "../../assets/images/services/work-sync.png";
import integration from "../../assets/images/services/integration.png";
import speak from "../../assets/images/services/speak.png";

const services = [
  {
    heading: "Smart. Simple. Brilliant.",
    text: "Your data is beautifully organized so you see everything clearly without the clutter. ",
    image: workOrder,
  },
  {
    heading: "Your work, in sync ",
    text: "Every update flows instantly across your team and keeps collaboration effortless and fast.",
    image: workSync,
  },
  {
    heading: "Effortless integration ",
    text: "All your favorite tools connect in one place and work together seamlessly by design.",
    image: integration,
  },
  {
    heading: "Numbers that speak",
    text: "Track growth with precision and turn raw data into confident decisions you can trust. ",
    image: speak,
  },
];

export default function Services() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
            <ServiceIcon></ServiceIcon>
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3">
              Services
            </div>
          </div>
          <Heading text="Built for absolute clarity and focused work"></Heading>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
            Stay focused with tools that organize, connect
            <br />
            and turn information into confident decisions.
          </div>
        </div>
      </div>

      <div className="self-stretch flex justify-center items-start">
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <template id="pattern-template-3">
              <div className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
            </template>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {services.map((service) => (
            <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight">
                  {service.heading}
                </h3>
                <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
                  {service.text}
                </p>
              </div>
              <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
                <img src={service.image} className="h-1/2 object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <template id="pattern-template-4">
              <div className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
            </template>
          </div>
        </div>
      </div>
    </div>
  );
}
