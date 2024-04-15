import React from "react";

function SolvedProblem() {
  return (
    <div className="Solved Problem  w-full bg-[#282828] p-4 rounded-md h-[30vh] mb-4">
      <div class=" text-base  ">Solved Problems</div>
      <div className="mr-8 mt-6 flex min-w-[100px] items-center">
        <div class="shrink-1 z-base relative max-h-[100px] max-w-[100px] mr-8">
          <svg
            class="h-full w-full origin-center -rotate-90 transform"
            viewBox="0 0 100 100"
          >
            <circle
              fill="none"
              cx="50px"
              cy="50px"
              r="46"
              stroke-width="3"
              stroke-linecap="round"
              stroke="currentColor"
              class="text-gray-4 dark:text-dark-gray-4 w-[100px]"
            ></circle>
            <circle
              fill="none"
              cx="50px"
              cy="50px"
              r="46"
              stroke-width="5"
              stroke-linecap="round"
              stroke="currentColor"
              class="cursor-pointer text-brand-orange dark:text-dark-brand-orange drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
              stroke-dasharray="3.6163087716009548 285.41021535866"
              stroke-dashoffset="0"
              data-difficulty="ALL"
            ></circle>
          </svg>
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
            <div>
              <div class="text-[24px] font-medium text-label-1 dark:text-dark-label-1">
                39
              </div>
              <div class="whitespace-nowrap text-xs text-label-3 dark:text-dark-label-3">
                Solved
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col space-y-4">
          <div class="space-y-2">
            <div class="flex w-full items-end text-sm">
              <div class="w-[53px] ">Easy</div>
              <div class="flex flex-1 items-center">
                <span class="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                  21
                </span>
                <span class="text-xs font-medium text-label-4 dark:text-dark-label-4">
                  /788
                </span>
              </div>
            </div>
            <div class="relative h-2 w-full overflow-hidden rounded-full  max-w-none">
              <div class="absolute h-full w-full bg-green-300 dark:bg-dark-green-1"></div>
              <div class="absolute h-full rounded-full transition-all duration-300 ease-out bg-green-500 dark:bg-dark-olive w-[5%]"></div>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex w-full items-end text-sm">
              <div class="w-[53px] mr-2 ">Medium</div>
              <div class="flex flex-1 items-center">
                <span class="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                  16
                </span>
                <span class="text-xs font-medium text-label-4 dark:text-dark-label-4">
                  /788
                </span>
              </div>
            </div>
            <div class="relative h-2 w-full overflow-hidden rounded-full  max-w-none">
              <div class="absolute h-full w-full bg-yellow-300 dark:bg-dark-green-1"></div>
              <div class="absolute h-full rounded-full transition-all duration-300 ease-out bg-yellow-500 dark:bg-dark-olive w-[10%]"></div>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex w-full items-end text-sm">
              <div class="w-[53px] ">Hard</div>
              <div class="flex flex-1 items-center">
                <span class="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                  2
                </span>
                <span class="text-xs font-medium text-label-4 dark:text-dark-label-4">
                  /788
                </span>
              </div>
            </div>
            <div class="relative h-2 w-full overflow-hidden rounded-full  max-w-none">
              <div class="absolute h-full w-full bg-red-300 dark:bg-dark-green-1"></div>
              <div class="absolute h-full rounded-full transition-all duration-300 ease-out bg-red-500 dark:bg-dark-olive w-[2%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolvedProblem;
