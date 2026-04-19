import type { JSX } from "react";

export function DisclaimerStatement(): JSX.Element {
  return (
    <>
      <h2>Disclaimers for the creative project :</h2>
      <h3>Regarding the Usage of AI :</h3>
      <p>
        AI Usage for this project was kept to a minimum. All retrieved papers,
        anecdotes, text content, programming and ideas were generated within the
        not-so-artificial (questionable) intelligence in my head. The only thing
        I used AI for was to generate the styling used for this webpage, as most
        developers such as myself suck at styling webpage layouts. This is a
        common use of AI within my field.
        <br />
        <b>
          ALL COMPONENTS, WEBPAGE LAYOUTS AND INDIVIDUAL FUNCTIONS WERE ALL
          PAINSTAKINGLY TYPED OUT BY HAND.
        </b>
      </p>
      <h3>Regarding Personal Findings :</h3>
      <p>
        I would like to preface all findings by stating that I am in no way a
        researcher myself. My findings are based on personal conclusions I have
        drawn from my research into other peoples work and my own small
        "mini-experiment". I am subject to biases in my own writing due to my
        lived experiences as a women, and their mention/inclusion within any of
        my personal findings is not meant to reflect the lived experience of
        every single women, but rather, applying personal experiences to a
        feminism lens in a way that is relevant to the subject.
      </p>
    </>
  );
}
