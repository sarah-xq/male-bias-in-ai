import type { JSX } from "react";

export function ResearchFindings(): JSX.Element {
  return (
    <>
      <h2>Research Findings :</h2>
      <p>
        Whilst accessing existing research found itself challenging due to the
        restrictive nature of many research papers, here are a few resources I
        consulted to help me better understand the issues of gender bias in AI :
      </p>
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
          oqaf027. 9 Oct. 2025, doi:10.1093/oodh/oqaf027
        </p>
      </div>
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
      <p>
        <strong>Conclusion?</strong> The root of the issue is that our existence
        in a patriarchal society will always be reflected through gender
        imbalances whilst trying to take unbiased samples of data within our
        population. In order to curb this issue, without addressing the root of
        the problem, data scientists should start making deliberate efforts to
        include training data that does not misrepresent minorities such as
        women in an insincere light, as well as including volumes of data
        representational of actual populational divide rather than what might be
        readily available. For example, in medical AI training, including data
        and results from both male and female studies on the same health issues.
        However, this too can be argued as introducing bias into AI seeing as
        being selective with training data is objectively prone to bias.
      </p>
      <p>
        AI will never be able to be fully viewable as a non-biased source of
        information surrounding inequities of gender, and will always have to
        have some ethical viewpoint in order to convey information and
        statistics regarding said issues. This is not to say that AI cannot be
        ridded of gender biases when selecting examples, choosing which pronouns
        to use when referring to certain ideas or in AI image generation.
        However, most AI companies have chosen to give AI more “humanistic”
        behavior, which is inherently riddled with bias in the way its
        personality is handled. If AI were to switch to simply giving pure
        statistics, avoiding answering ethical questions and ultimately serving
        as a compiler of data rather than an interpreter, the chances of
        introducing gender bias drop significantly.
      </p>
    </>
  );
}
