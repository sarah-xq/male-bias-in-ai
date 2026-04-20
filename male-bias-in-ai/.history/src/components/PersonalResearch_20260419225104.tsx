import type { JSX } from "react";

export function PersonalResearch(): JSX.Element {
  return (
    <>
      <h2>Personal Research :</h2>
      <h3>Conducting a mini-experiment to test AI bias</h3>
      <p className="smaller">
        To run my own personal research on the topic at an obviously much
        smaller scale, I decided to run a mini experiment to see if I could
        catch the gender bias present in AI firsthand. <br /> The question I
        asked the models was, “Generate what you think you would look like as a
        human.” Here were their generated results:
      </p>
      2
      <div className="research-links">
        <h4>
          <strong>ChatGPT: </strong>
        </h4>

        <img src="/chatgpthuman.png" />
        <h4>
          <strong>Gemini: </strong>
        </h4>

        <img src="/geminihuman.png" />

        <h4>
          <strong>Copilot: </strong>
        </h4>

        <img src="/copilothuman.png" />
        <h4>
          <strong>DALL-E </strong>
        </h4>

        <img src="/dallehuman.png" />
      </div>
    </>
  );
}
