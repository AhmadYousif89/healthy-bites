"use client";

import Form from "next/form";

import { cn } from "@/lib/utils";
import { useUrlState } from "@/hooks/use-url-state";
import SearchIcon from "public/assets/images/icons/icon-search.svg";
import { Button } from "@/components/ui/button";

export const SearchInput = () => {
  const { updateURL, searchParams, getParam } = useUrlState();
  const currentSearch = getParam("search") ?? "";
  const oldParams = Array.from(searchParams.entries()).filter(([k]) => k !== "search");

  return (
    <Form action="" formMethod="get" className="relative grid md:ml-auto md:w-[310px]">
      {/* Retain existing params to maintain URL state */}
      {oldParams.map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} />
      ))}

      <label htmlFor="search" className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
        {currentSearch ? (
          <Button
            size="icon"
            type="button"
            variant="ghost"
            title="Clear search"
            aria-label="Clear search"
            onClick={() => updateURL({ search: "" })}
          >
            &times;
          </Button>
        ) : (
          <>
            <span className="sr-only">Search recipes</span>
            <SearchIcon />
          </>
        )}
      </label>

      <input
        id="search"
        type="text"
        name="search"
        key={currentSearch}
        defaultValue={currentSearch}
        placeholder="Search by name or ingredient…"
        className={cn(
          "bg-neutral-0 hover:border-primary border border-neutral-300 outline-none",
          "col-end-1 row-end-1 rounded py-2.5 pr-2.5 pl-11 text-sm",
          "placeholder:text-input/70 placeholder:text-sm",
          "focus:ring-primary focus:ring-2 focus:ring-offset-2",
          "transition-colors duration-200",
        )}
      />
    </Form>
  );
};
