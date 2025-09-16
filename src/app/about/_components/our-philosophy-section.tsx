import { H2, H4 } from "@/components/layout/headers";
import { P1 } from "@/components/layout/paragraphs";
import { Section } from "@/components/layout/section";

import BulletPointIcon from "public/assets/images/icons/icon-bullet-point.svg";

export const OurPhilosophySection = () => {
  return (
    <Section className="container:py-24 container:flex-row flex flex-col gap-10 py-12 md:gap-16 md:py-20 lg:gap-16">
      <H2 className="container:max-w-[376px] w-full">Our food philosophy</H2>

      <ul className="space-y-6 md:space-y-8 lg:space-y-12">
        <li className="flex gap-5">
          <span>
            <BulletPointIcon />
          </span>
          <div className="space-y-3">
            <H4>Whole ingredients first.</H4>
            <P1>
              Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every
              recipe.
            </P1>
          </div>
        </li>
        <li className="flex gap-5">
          <span>
            <BulletPointIcon />
          </span>
          <div className="space-y-3">
            <H4>Flavor without compromise.</H4>
            <P1>
              Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.
            </P1>
          </div>
        </li>
        <li className="flex gap-5">
          <span>
            <BulletPointIcon />
          </span>
          <div className="space-y-3">
            <H4>Respect for time.</H4>
            <P1>
              Weeknight meals should slot into real schedules; weekend cooking can be leisurely but
              never wasteful.
            </P1>
          </div>
        </li>
        <li className="flex gap-5">
          <span>
            <BulletPointIcon />
          </span>
          <div className="space-y-3">
            <H4>Sustainable choices.</H4>
            <P1>
              Short ingredient lists cut down on food waste and carbon footprint, while
              plant-forward dishes keep things planet-friendly.
            </P1>
          </div>
        </li>
      </ul>
    </Section>
  );
};
