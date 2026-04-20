import type { JSX } from "react";

export function PersonalResearch(): JSX.Element {
  return (
    <>
      <h2>Personal Research :</h2>
      <h3>Conducting a mini-experiment to test AI bias</h3>
      <p className="smaller">
        To run my own personal research on the topic at an obviously much
        smaller scale, I decided to run a couple mini experiments to see if i
        could catch the gender bias present in AI firsthand. The first question
        I asked the following models was, “Generate what you think you would
        look like as a human. What do you think your personality would be like?”
        Here were their generated results:
      </p>
      2
      <div className="research-links">
        <h4>
          {" "}
          <a
            href="https://www.sciencedirect.com/science/article/pii/S2451958824001660"
            target="_blank"
            rel="noopener noreferrer"
          >
            Surprising Gender Biases in GPT
          </a>
          <br />
          Discusses how AI will make stereotypical assumptions based on the
          language it is presented with, and how easily AI can perpetuate
          stereotypes.
        </h4>
        <p className="quote smaller">
          Alexandra Fulgu, Raluca, and Valerio Capraro. “Surprising Gender
          Biases in GPT.” ScienceDirect, University of Milan-Bicocca, Milan,
          Italy, 22 Nov. 2024,
          www.sciencedirect.com/science/article/pii/S2451958824001660.
        </p>
        <h4>
          <a href="https://jstor-jac.orc.scoolaid.net/stable/resrep25514">
            Humane Artificial Intelligence: The Fragility of Human Rights Facing
            AI
          </a>
          <br />
          Discusses why AI should not be used to make decisions regarding human
          rights, discussing the biases present that make AI unreliable for such
          decisions.
        </h4>

        <p className="quote smaller">
          Cataleta, Maria Stefania. Humane Artificial Intelligence: The
          Fragility of Human Rights Facing AI. East-West Center, 2020. JSTOR,
          http:https://jstor-jac.orc.scoolaid.net/stable/resrep25514.
        </p>
        <h4>
          <a href="https://sites.psu.edu/visionaryarchitecture/2025/02/26/gender-bias-in-artificial-intelligence-ai/">
            Gender Bias in Artificial Intelligence
          </a>
          <br />
          Discusses how gender bias can occur whilst training AI, and what
          consequences it can have for the way the AI functions. This article
          does a great job of overviewing the issue of gender bias in AI.
        </h4>
        <p className="quote smaller">
          Jafarzadeh, Aysan. “Gender Bias in Artificial Intelligence.” Ethics in
          the Built Environment, 26 Feb. 2025,
          sites.psu.edu/visionaryarchitecture/2025/02/26/gender-bias-in-artificial-intelligence-ai/.
        </p>
        <h4>
          <a href="https://jstor-jac.orc.scoolaid.net/stable/j.ctv26qjjhj.9">
            AI Ethics Needs Good Data
          </a>
          <br />
          Discusses the debate on giving AI ethical guidelines, and the
          importance of making sure that selected data does not mimic the same
          biases that exist in society.
        </h4>
        <p className="quote smaller">
          Daly, Angela, et al. “AI Ethics Needs Good Data.” AI for Everyone?:
          Critical Perspectives, edited by Pieter Verdegem, University of
          Westminster Press, 2021, pp. 103–22. JSTOR,
          http:https://jstor-jac.orc.scoolaid.net/stable/j.ctv26qjjhj.9.
        </p>

        <h4>
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12560773/">
            Gender and racial bias unveiled: clinical artificial intelligence
            (AI) and machine learning (ML) algorithms are fanning the flames of
            inequity.
          </a>{" "}
          <br />
          Compiles research done on the topic of gender and race bias with
          medical AI systems data sets, and highlights the lack of inclusion of
          minority representation within its training data.
        </h4>
        <p className="quote smaller">
          Otokiti, Ahmed Umar et al. “Gender and racial bias unveiled: clinical
          artificial intelligence (AI) and machine learning (ML) algorithms are
          fanning the flames of inequity.” Oxford open digital health vol. 3
          oqaf027. 9 Oct. 205, doi:10.1093/oodh/oqaf027
        </p>
      </div>
    </>
  );
}
