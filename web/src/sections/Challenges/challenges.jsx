import "./Challenges.css";

import {
  Layers3,
  ShoppingBag,
  Mail,
  Workflow,
  Hand,
  ChartNoAxesCombined,
  ArrowRight,
} from "lucide-react";

const challengeGroups = [
  {
    problemIcon: Layers3,
    problemTitle: "Scattered Data",
    problemText: "Hard to find. Easy to lose.",

    solutionIcon: ShoppingBag,
    solutionTitle: "One Centralized System",
    solutionText: "Everything in sync.",

    solutionColor: "blue",
  },
  {
    problemIcon: Mail,
    problemTitle: "Manual Processes",
    problemText: "Slow, repetitive, error-prone.",

    solutionIcon: Workflow,
    solutionTitle: "Automated Workflows",
    solutionText: "Save time. Reduce errors.",

    solutionColor: "green",
  },
  {
    problemIcon: Hand,
    problemTitle: "Limited Visibility",
    problemText: "No real-time insight.",

    solutionIcon: ChartNoAxesCombined,
    solutionTitle: "Real-time Business Insights",
    solutionText: "Make smarter decisions.",

    solutionColor: "blue",
  },
];

function Challenges() {
  return (
    <section className="challenges">
      <div className="challenges-container">
        <div className="challenges-heading">
          <p className="challenges-eyebrow">
            WE SOLVE REAL BUSINESS CHALLENGES
          </p>

          <h2>
            Your business,
            <span>only better.</span>
          </h2>

          <div className="challenges-accent" />
        </div>

        <div className="challenges-scroll">
          <div className="challenges-flow">
            {challengeGroups.map((group) => {
              const ProblemIcon = group.problemIcon;
              const SolutionIcon = group.solutionIcon;

              return (
                <div
                  className="challenge-pair"
                  key={group.problemTitle}
                >
                  <article className="challenge-card challenge-card-problem">
                    <div className="challenge-icon challenge-icon-problem">
                      <ProblemIcon
                        size={18}
                        strokeWidth={1.9}
                        aria-hidden="true"
                      />
                    </div>

                    <h3>{group.problemTitle}</h3>
                    <p>{group.problemText}</p>
                  </article>

                  <div
                    className="challenge-arrow"
                    aria-hidden="true"
                  >
                    <ArrowRight
                      size={14}
                      strokeWidth={2.8}
                    />
                  </div>

                  <article
                    className={`challenge-card challenge-card-solution challenge-card-${group.solutionColor}`}
                  >
                    <div
                      className={`challenge-icon challenge-icon-solution challenge-icon-${group.solutionColor}`}
                    >
                      <SolutionIcon
                        size={18}
                        strokeWidth={1.9}
                        aria-hidden="true"
                      />
                    </div>

                    <h3>{group.solutionTitle}</h3>
                    <p>{group.solutionText}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenges;