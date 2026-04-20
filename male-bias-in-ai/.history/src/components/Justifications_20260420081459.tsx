import type { JSX } from "react";

export function Justifications(): JSX.Element {
  return (
    <>
      <h2>Justifications & Reflection</h2>
      <h3>Justification of project choice:</h3>
      <p className="smaller">
        I chose to do this project because it allows me to link two separate
        areas related to my field of study. First, obviously the technical
        aspect of designing a front-end web application using React as well
        deploying it. I used my knowledge on components, css and front-end
        routing to create a small scale webpage for the purposes of this
        project. This was the most tedious aspect of the project for me. I also
        decided to apply my knowledge on AI, particularly LLMs. Having trained
        my own models, I have a good understanding of what goes into training
        algorithms. It was interesting to see how even large scale LLMs are
        prone to having gaps in their training data, and how as a woman, these
        inconsistencies can impact me directly.
      </p>
      <h3>Personal Reflection:</h3>
      <p className="smaller">
        I spent about 10-12 hours writing, researching and creating my webpage
        to display my findings. I found the most challenging part was to layout
        and deploy my webpage, as many bugs presented themselves during the
        deployment of my application vs how the application was running locally.
        Other than the development aspect, I found the research and personal
        reflections on my findings to be quite enjoyable to delve into, and I
        always enjoy finding ways to apply my education to topics I find
        interesting (in this case, AI training, ethics and its application in
        the real world). I always knew that AI was not a reliable source of
        information due to my experience training AI models, but my research
        just confirmed my suspicions and in fact pointed out consequences
        regarding minority imbalances that I had not previously considered. If I
        were to do this project again I think I would consider the layout BEFORE
        writing the bulk of the content, as applying styling after I had already
        created the HTML structure was incredibly tedious and I ended up having
        to make a lot of manual tweaks to make my webpage more visually
        appealing.
      </p>
    </>
  );
}
