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
      <h3>Analysis: </h3>
      <p className="smaller">
        I was surprised to see that all the models generated male subjects to
        represent themselves. Given that an AI model is most likely aware that
        it is largely considered to be an "intelligent being", it could be
        argued that the choice to represent themselves as men is a reflection of
        a bias to believe that men are typically of greater an intelligence than
        women. Alternatively, this choice could reflect how AI views male as a
        the "default" or "normative" gender, which could be argued with the
        deconstructive lens as a binary opposite to women, where we have a
        tendency to preference the default as men despite their equivalency to
        women. Another point to be made is that most of the men were of fair
        skinned complexion, also showing a form of racial bias. Ultimately, I
        think this experiment reinforced my existing understanding of the issue
        of bias in AI: Most large scale LLMs (Large language models) are trained
        on biased data that will favor the majority groups (in this case, a
        white male) as the default, due to these groups being more commonly
        represented in media, studies, and research.
      </p>
    </>
  );
}
