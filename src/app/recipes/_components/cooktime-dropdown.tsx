import { CustomDropdownMenu } from "./_custom-dropdown";

const cooktimes = [
  { label: "1 minute or less", value: "1" },
  { label: "5 minutes", value: "5" },
  { label: "10 minutes", value: "10" },
] as const;

export const CookTimeMenu = () => {
  return <CustomDropdownMenu timeOptions={cooktimes} defaultLabel="Max Cook Time" paramKey="ct" />;
};
