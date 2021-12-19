import React from "react";

function Quote({ by, source, children }) {
  return (
    <figure>
      <blockquote>{children}</blockquote>
      <figcaption>
        <cite>
          <a href={source}>{by}</a>
        </cite>
      </figcaption>
    </figure>
  );
}

export default Quote;
