import React, { forwardRef } from "react";
import Answer from "./Answers";

// Using forwardRef so parent can scroll
const QuestionAnswer = forwardRef(({ result }, ref) => {
  return (
    <div
      ref={ref}
      className="container h-120 overflow-y-scroll scrollbar-hide mb-4"
    >
      <div className="text-zinc-300">
        <ul>
          {result.map((item, idx) => (
            <li key={idx} className="text-left p-1 mb-4 flex flex-col">
              {/* Question: right side */}
              <div className="self-end bg-zinc-700 text-white px-4 py-2 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl mb-2 w-fit">
                {item.question}
              </div>

              {/* Answers: left side */}
              <div className="flex flex-col gap-1">
                {item.answers.map((ans, i) => (
                  <Answer key={i} ans={ans} />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default QuestionAnswer;
