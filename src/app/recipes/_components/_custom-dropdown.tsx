"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import ChevrnIcon from "public/assets/images/icons/icon-chevron-down.svg";

import { cn } from "@/lib/utils";
import { useUrlState } from "@/hooks/use-url-state";

type TimeOption = { label: string; value: string };
type Props = {
  paramKey: string;
  defaultLabel: string;
  timeOptions: readonly TimeOption[];
};

function getTriggerLabel(times: readonly TimeOption[], value: string | null) {
  const found = times.find((time) => time.value === value);
  return found ? found.label : null;
}

export const CustomDropdownMenu = ({ timeOptions, defaultLabel, paramKey }: Props) => {
  const { updateURL, getParam } = useUrlState();
  const maxVal = getParam(paramKey);
  const triggerLabel = getTriggerLabel(timeOptions, maxVal);

  const handleSelectedValue = (value: string) => {
    updateURL({ [paramKey]: value });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="trigger"
          variant="trigger"
          className="group data-[state=open]:border-primary min-w-[184px]"
        >
          <span className="flex w-38 items-center justify-between gap-2">
            {triggerLabel ?? defaultLabel}
            <ChevrnIcon className="size-fit transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 p-2" align="start">
        <DropdownMenuRadioGroup onValueChange={handleSelectedValue} value={maxVal}>
          {timeOptions.map((time) => (
            <DropdownMenuRadioItem key={time.value} value={time.value} className="group mb-1">
              <div
                className={cn(
                  "grid size-4 place-items-center rounded-full border-2 border-neutral-400 fill-current",
                  "group-data-[state=checked]:border-primary group-data-[state=checked]:ring-4 group-data-[state=checked]:ring-neutral-200",
                  "group-focus:ring-4 group-focus:ring-neutral-200",
                )}
              >
                <span className="bg-primary hidden size-2 rounded-full group-data-[state=checked]:block" />
              </div>
              {time.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>

        <DropdownMenuItem
          disabled={!maxVal}
          onSelect={() => handleSelectedValue("")}
          className="tracking-neg-03 rounded-6 focus:ring-primary px-2 py-0.5 text-xs leading-150 font-medium text-neutral-950 focus:bg-transparent focus:ring-2"
        >
          Clear
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
