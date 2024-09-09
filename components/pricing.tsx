import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
// import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function Pricing() {
  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-12 lg:px-0">
        <div className="flex items-center justify-center w-full pb-12">
          <h2 className="font-bold text-xl uppercase mb-8 text-purple-600">
            Pricing
          </h2>
        </div>
        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
           (
              <div className="relative w-full max-w-lg" >
                <div
                 
                >
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <p className="text-lg lg:text-xl font-bold capitalize">
                     
                      </p>
                      <p className="text-base-content/80 mt-2"></p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-5xl tracking-tight font-extrabold">
                  
                    </p>
                    <div className="flex flex-col justify-end mb-[4px]">
                      <p className="text-xs text-base-content/60 uppercase font-semibold">
                        USD
                      </p>
                      <p className="text-xs text-base-content/60">/month</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                  
                      <li className="flex items-center gap-2" >
                        <CheckIcon size={18}></CheckIcon>
                        <span></span>
                      </li>
                    )
                  </ul>
                  <div className="space-y-2">
                    <Button
                      variant={"link"}
                      className={""}
                    >
                      <Link
                        href={""}
                        className="flex gap-1 items-center"
                      >
                        Get SpeakEasy <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
}

