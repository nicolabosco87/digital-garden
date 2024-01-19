"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../src/components/ui/accordion";
import { DirResult } from "../types/doc.types";
import { Anchor } from "./Anchor";
import { usePathname } from "next/navigation";
import { capitalize } from "lodash";

type ISummaryProps = {
  menuStructure: DirResult;
};

export const Summary = ({ menuStructure }: ISummaryProps) => {
  const pathname = usePathname();

  const printListGroup = (dir: DirResult, path: string = "") => {
    let defaultValue = undefined;

    Object.keys(dir.dirs).forEach((k) => {
      if (pathname.indexOf(`${path}/${k}`) >= 0) {
        defaultValue = k;
      }
    });

    return (
      <div className="">
        <Accordion type="single" collapsible className="w-full mb-3" defaultValue={defaultValue}>
          {Object.keys(dir.dirs).map((key) => (
            <AccordionItem value={key} key={key}>
              <AccordionTrigger className="px-0 py-3">{key}</AccordionTrigger>
              <AccordionContent className="">
                <div className="pl-3 border-cyan-400">{printListGroup(dir.dirs[key], `${path}/${key}`)}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {dir.files.map((f) => (
          <div key={f.id}>
            <Anchor className="block hover:bg-cyan-100" href={`/doc/${path ? path + "/" : ""}${f.id}`}>
              {capitalize(f.title)}
            </Anchor>
          </div>
        ))}
      </div>
    );
  };

  return <div className="summary bg-gray-50 p-3">{printListGroup(menuStructure)}</div>;
};
