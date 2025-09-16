import { H2, H4 } from "@/components/layout/headers";
import { P1 } from "@/components/layout/paragraphs";
import { Section } from "@/components/layout/section";

import BulletPointIcon from "public/assets/images/icons/icon-bullet-point.svg";

export const OurExistenceSection = () => {
  return (
    <Section className="container:py-24 container:flex-row flex flex-col gap-10 py-12 md:gap-16 md:py-20 lg:gap-16">
      <H2 className="w-full max-w-[372px]">Why we exist</H2>

      <ul className="space-y-6 md:space-y-8 lg:space-y-12">
        <li className="flex gap-5">
          <span>
            <BulletPointIcon />
          </span>
          <div className="space-y-3">
            <H4>Cut through the noise.</H4>
            <P1>
              The internet is bursting with recipes, yet most busy cooks still default to take-away
              or packaged foods. We curate a tight collection of fool-proof dishes so you can skip
              the scrolling and start cooking.
            </P1>
          </div>
        </li>
        <li className="flex gap-5">
          <span>
            <BulletPointIcon />
          </span>
          <div className="space-y-3">
            <H4>Empower home kitchens.</H4>
            <P1>
              When you control what goes into your meals, you control how you feel. Every recipe is
              built around unrefined ingredients and ready in about half an hour of active prep.
            </P1>
          </div>
        </li>
        <li className="flex gap-5">
          <span>
            <BulletPointIcon />
          </span>
          <div className="space-y-3">
            <H4>Make healthy look good.</H4>
            <P1>
              High-resolution imagery shows you exactly what success looks like—because we eat with
              our eyes first, and confidence matters.
            </P1>
          </div>
        </li>
      </ul>
    </Section>
  );
};
