import { CustomDropdownMenu } from "./_custom-dropdown";

const prepTimes = [
  { label: "5 minutes", value: "5" },
  { label: "10 minutes", value: "10" },
  { label: "15 minutes", value: "15" },
  { label: "20 minutes", value: "20" },
] as const;

export const PrepTimeMenu = () => {
  return <CustomDropdownMenu timeOptions={prepTimes} defaultLabel="Max Prep Time" paramKey="pt" />;
};
