import type { JSX } from "react";

export function ResearchFindings(): JSX.Element {
  return (
    <>
      <h2>Research Findings :</h2>
      <h3>Looking into existing research :</h3>
      <p>
        AI Usage for this project was kept to a minimum. All retrieved papers,
        anecdotes, text content, programming and ideas were generated within the
        not-so-artificial (questionable) intelligence in my head. The only thing
        I used AI for was to generate the styling used for this webpage, as most
        developers such as myself suck at styling webpage layouts. This is a
        common use of AI within my field.
      </p>
      <h3>What I’ve learned :</h3>
      <p>
        There will inevitably be bias in AI, particularly pertaining to women
        due to AI datasets often being directly reflective of the patriarchal
        society we live in. Because datasets which include gender as a metric
        may favour placing women into the “gender-normative” boxes , it shows
        that AI bias is not directly as a result of the scientists that may have
        trained it or faulty datasets, rather, is a direct reflection of our
        internal and external biases in society. The fact that AI may be seen
        making racist/sexist decisions stem more from the lack of inclusion of
        these metrics in studies, careers, or general roles in society rather
        than data scientists making poor selections of training data.
      </p>
    </>
  );
}
