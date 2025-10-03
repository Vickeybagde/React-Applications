import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStarts } from "../helper";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

const Answer = ({ ans, index }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStarts(ans));
    } else {
      setHeading(false);
      setAnswer(ans);
    }
  }, [ans]);

  // ✅ custom renderer for markdown code blocks
  const renderers = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || ""); // fixed typo
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          PreTag="div"
          language={match[1]}
          style={dark}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
  };

  return (
    <>
      {index === 0 ? (
        <span className="pt-2 text-xl block text-white font-bold">{answer}</span>
      ) : heading ? (
        <span className="pt-2 text-lg block text-white">{answer}</span>
      ) : (
        <span className="pt-2 text-lg block text-white">
          <ReactMarkdown components={renderers}>{answer}</ReactMarkdown>
        </span>
      )}
    </>
  );
};

export default Answer;
