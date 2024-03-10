"use client"

import { TypewriterEffectSmooth, TypewriterEffect } from "./typewriter-effect"

export function Title(){
    const words = [
        {
            text: "Hei,",
          },
          {
            text: "jeg",
          },
          {
            text: "er",
          },
          {
            text: "Elias",
            className: "text-purple-500 dark:text-purple-500",
          },
          {
            text: "og",
          },
          {
            text: "jeg",
          },
          {
            text: "studerer",
          },
          {
            text: "informatikk",
            className: "text-purple-500 dark:text-purple-500",
          },
          {
            text: ":)",
          },
    ];

    return (
        <div className="flex flex-col items-center justify-center h-[35rem]">
            <TypewriterEffectSmooth words={words} />
        </div>
    )
}