import { CustomDropdownMenu } from "./_custom-dropdown";

const prepTimes = [
  { label: "1 minute or less", value: "1" },
  { label: "5 minutes", value: "5" },
  { label: "10 minutes", value: "10" },
] as const;

export const PrepTimeMenu = () => {
  return <CustomDropdownMenu timeOptions={prepTimes} defaultLabel="Max Prep Time" paramKey="pt" />;
};
