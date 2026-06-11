import XIcon from "./icons/XIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import GithubIcon from "./icons/GithubIcon";
import NavLink from "./NavLink";
import Brand from "./Brand";

export default function Footer() {
  return (
    <div className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(55,50,47,0.12)]">
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex justify-start items-center gap-3">
            <Brand></Brand>
          </div>
          <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px]">
            Coding made effortless
          </div>
          <div className="flex justify-start items-start gap-4">
            <div className="w-6 h-6 relative overflow-hidden">
              <XIcon></XIcon>
            </div>
            <div className="w-6 h-6 relative overflow-hidden">
              <LinkedInIcon></LinkedInIcon>
            </div>
            <div className="w-6 h-6 relative overflow-hidden">
              <GithubIcon></GithubIcon>
            </div>
          </div>
        </div>

        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
              Product
            </div>
            <div className="flex flex-col justify-end items-start gap-2">
              <NavLink text="Features" link="#"></NavLink>
              <NavLink text="Pricing" link="#"></NavLink>
              <NavLink text="Integrations" link="#"></NavLink>
              <NavLink text="Real-time Previews" link="#"></NavLink>
              <NavLink text="Multi-Agent Coding" link="#"></NavLink>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
              Company
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <NavLink text="About us" link="#"></NavLink>
              <NavLink text="Career" link="#"></NavLink>
              <NavLink text="Brand" link="#"></NavLink>
              <NavLink text="Contact" link="#"></NavLink>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
              Resources
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <NavLink text="Terms of use" link="#"></NavLink>
              <NavLink text="API Reference" link="#"></NavLink>
              <NavLink text="Documentation" link="#"></NavLink>
              <NavLink text="Community" link="#"></NavLink>
              <NavLink text="Support" link="#"></NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative"></div>
        </div>
      </div>
    </div>
  );
}
