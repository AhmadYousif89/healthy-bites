import Image from "next/image";

import { Section } from "@/components/layout/section";

import OurBelieveSmall from "public/assets/images/small/image-about-beyond-the-plate.webp";
import OurBelieveLarge from "public/assets/images/large/image-about-beyond-the-plate.webp";
import { H2 } from "@/components/layout/headers";
import { P1 } from "@/components/layout/paragraphs";

export const OurBelieveSection = () => {
  return (
    <Section className="container:py-24 container:gap-16 container:flex-row flex flex-col gap-8 py-12 md:gap-10 md:pt-20 md:pb-0">
      <div className="container:max-w-[376px] space-y-5">
        <H2>Beyond the plate</H2>
        <div className="space-y-3">
          <P1>
            We believe food is a catalyst for community and well-being. By sharing approachable
            recipes, we hope to:
          </P1>

          <ul className="marker:text-primary list-outside list-disc space-y-1 pl-6">
            <li>Encourage family dinners and social cooking.</li>
            <li>Reduce reliance on single-use packaging and delivery waste.</li>
            <li>Spark curiosity about seasonal produce and local agriculture.</li>
          </ul>
        </div>
      </div>

      <picture className="md:rounded-20 container:max-w-[744px] overflow-hidden rounded">
        <source
          media="(min-width: 768px)"
          srcSet={OurBelieveLarge.src}
          width={OurBelieveLarge.width}
          height={OurBelieveLarge.height}
        />
        <Image
          src={OurBelieveSmall}
          alt="A happy family cooking together in a kitchen"
          width={OurBelieveSmall.width}
          height={OurBelieveSmall.height}
          priority
        />
      </picture>
    </Section>
  );
};
