import service1 from "../../assets/images/services/plan-your-schedules.jpeg";
import service2 from "../../assets/images/services/data-visualization-dashboard-with-interactive-char.jpg";
import service3 from "../../assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg";

const features = [
  {
    heading: "Plan your schedules",
    subheading:
      "Streamline customer subscriptions and billing with automated scheduling tools.",
    image: service1,
  },
  {
    heading: "Analytics & insights",
    subheading:
      "Transform your business data into actionable insights with real-time analytics. ",
    image: service2,
  },
  {
    heading: "Collaborate seamlessly",
    subheading:
      "Keep your team aligned with shared dashboards and collaborative workflows. ",
    image: service3,
  },
];
export default function Features() {
  return (
    <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
      {features.map((feature) => (
        <div className="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80">
          <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
            {feature.heading}
          </div>
          <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
            {feature.subheading}
          </div>
          <img
            src={feature.image}
            alt="Plan schedules dashboard"
            className="w-full h-40 object-cover rounded-md mt-3"
          />
        </div>
      ))}
    </div>
  );
}
