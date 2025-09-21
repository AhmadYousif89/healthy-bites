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

import { cn } from "@/lib/utils";
import { useUrlState } from "@/hooks/use-url-state";

import ChevrnIcon from "public/assets/images/icons/icon-chevron-down.svg";

const cooktimes = [
  { label: "1 minute", value: "1" },
  { label: "5 minutes", value: "5" },
  { label: "10 minutes", value: "10" },
] as const;

function getTriggerLabel(value: string | null) {
  const found = cooktimes.find((time) => time.value === value);
  return found ? found.label : null;
}

export const CookTimeMenu = () => {
  const { updateURL, getParam } = useUrlState();
  const maxCT = getParam("ct");
  const triggerLabel = getTriggerLabel(maxCT) ?? "Max Cook Time";

  const handleSelectedValue = (value: string) => {
    updateURL({ ct: value });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="trigger"
          variant="trigger"
          className="group data-[state=open]:border-primary min-w-[182px]"
        >
          <span className="flex w-37 items-center justify-between gap-2">
            {triggerLabel}
            <ChevrnIcon className="size-fit transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 p-2" align="start">
        <DropdownMenuRadioGroup onValueChange={handleSelectedValue} value={maxCT}>
          {cooktimes.map((time) => (
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
          disabled={!maxCT}
          onSelect={() => handleSelectedValue("")}
          className="tracking-neg-03 rounded-6 focus:ring-primary px-2 py-0.5 text-xs leading-150 font-medium text-neutral-950 focus:bg-transparent focus:ring-2"
        >
          Clear
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
