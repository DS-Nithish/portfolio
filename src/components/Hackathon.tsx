import { Trophy, CheckCircle, TrendingUp, Cpu, Database, Network } from "lucide-react";

export function Hackathon() {
  const steps = [
    {
      icon: Database,
      step: "01",
      title: "Data Pipeline & Cleaning",
      desc: "Raw hackathon data contained missing features and irregular distributions. Built automated outlier detection, missing-value imputation, and statistical normalization pipelines.",
    },
    {
      icon: Cpu,
      step: "02",
      title: "Feature Engineering",
      desc: "Synthesized high-correlation interaction features to isolate predictive signals. Applied dimensional analysis and correlation matrix pruning to eliminate multicollinearity.",
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Gradient-Boosted Ensembles",
      desc: "Trained and hyperparameter-tuned XGBoost & LightGBM estimators with stratified K-Fold cross-validation, achieving robust generalization and preventing overfitting.",
    },
    {
      icon: Network,
      step: "04",
      title: "Inference & Explainability",
      desc: "Exposed model outputs through an asynchronous API service with sub-50ms inference times. Provided SHAP (Shapley Additive exPlanations) values to give judges interpretability.",
    },
  ];

  return (
    <section id="hackathon" className="py-20 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">// 05</span>
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Smart India Hackathon (SIH) Showcase
          </h2>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
          Predictive outcome modeling under intense competitive constraints.
        </p>

        {/* Feature Hero Card */}
        <div className="rounded-xl border border-neutral-300 dark:border-neutral-800 bg-linear-to-b from-neutral-50 to-white dark:from-neutral-900/40 dark:to-neutral-950 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border border-amber-300/40 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg text-neutral-900 dark:text-neutral-100">
                  Smart India Hackathon Problem Statement
                </h3>
                <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  End-to-End Machine Learning Prediction System
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium">
                National Stage
              </span>
              <span className="px-2.5 py-1 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium">
                36h Sprint
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
            During the Smart India Hackathon, our team tackled a complex domain challenge requiring accurate forecasting of real-world outcomes. Working with noisy, incomplete real-world datasets, I engineered a robust machine learning pipeline capable of delivering accurate, explainable predictions in real-time.
          </p>

          {/* 4 Step Architecture Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                        {s.step}
                      </span>
                      <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <h4 className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 mb-1.5">
                      {s.title}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
