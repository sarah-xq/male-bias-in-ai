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
          order to sell you their product.{" "}
        </b>
        AI is fundamentally prone to bias due to the way it is even structured
        in the first place.{" "}
        <span className="quote">
          For those of you who have no idea how AI works, and assume it's just a
          magical box on your phone that gives you any answer you seek in a
          split second, allow me to give you a quick synopsis on its
          functionality.
        </span>
        AI relies on{" "}
        <a href="https://www.ibm.com/think/topics/dataset">Data Sets</a> to
        function. To train AI, one must first teach the AI how it should respond
        to any given set of input.
        <b>For example: </b>
        You want to train an AI to recognize what a bicycle looks like in order
        to finally pass those pesky CAPTCHA pop-ups. What's your first step?
        Most likely, retrieve a large dataset of pictures of bicycles in various
        shapes, sizes, colors, angles, with/without a rider, etc...
        <br />
        But what happens if your dataset mostly includes pictures of red
        bicycles? Chances are, if you ask this AI to describe a bicycle to you,
        it might include the color <span className="red">"red"</span> in its
        description, even though a bicycle is not necessarily red.
      </p>
      <p>
        This leads me to the main purpose of this webpage: As AI dependence
        increases, is AI subjecting its users to biases, due to disproportional
        datasets, and therefore subconsciously instilling misogynistic
        tendencies/beliefs into its users?
      </p>
    </>
  );
}
