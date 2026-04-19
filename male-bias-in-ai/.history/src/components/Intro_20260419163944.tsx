import type { JSX } from "react";

export function Intro(): JSX.Element {
  return (
    <>
      <h2>Introduction</h2>
      <p>
        Welcome to the AI Bias Findings webpage. This webpage is meant to serve
        as a compilation of findings regarding male-centric biases in AI
        training data, along with the inclusion of the authors personal
        anecdotes on the topic.
      </p>
      <p>
        As the usage of AI becomes increasingly more common, so does its
        dependence. We have already seen in the past couple years an increase in
        AI dependence to make everyday decisions or to avoid putting in effort
        to complete work-related tasks in many fields. This has lead to a
        phenomenon myself and many other jokingly refer to as "third-party
        thinking", where people would rather offset tasks that require critical
        thinking to AI to facilitate their lives. Consequentially, people are
        losing the ability to think critically about not only decisions in their
        own lives, but about the types of responses AI is providing them with.
      </p>
      <p>
        <b>
          AI cannot be called a fully factual, unbiased source of information,
          regardless of what major tech companies may try to convince you in
          order to sell you their product.
        </b>
      </p>
    </>
  );
}
