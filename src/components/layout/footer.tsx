import { P3 } from "./paragraphs";

import InstaIcon from "public/assets/images/icons/icon-instagram.svg";
import TiktokIcon from "public/assets/images/icons/icon-tiktok.svg";
import BlueskyIcon from "public/assets/images/icons/icon-bluesky.svg";

export const Footer = () => {
  return (
    <footer className="max-w-container mx-auto mt-auto grid w-full gap-6 px-4 pt-8 pb-5 max-md:place-items-center md:grid-flow-col md:justify-between md:px-10 md:py-8 lg:px-15 xl:px-0">
      <div className="flex items-center gap-6 md:order-2">
        <InstaIcon />
        <TiktokIcon />
        <BlueskyIcon />
      </div>
      <P3>Made with ❤️ and 🥑</P3>
    </footer>
  );
};
