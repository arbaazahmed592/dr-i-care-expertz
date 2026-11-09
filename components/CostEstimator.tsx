"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { deviceCategories, devicesByCategory, type DeviceCategory } from "@/data/devices";
import { issueTypes, estimateRepairCost } from "@/data/pricing";

export default function CostEstimator() {
  const [category, setCategory] = useState<DeviceCategory>("iPhone");
  const [modelId, setModelId] = useState<string>(devicesByCategory["iPhone"][0]?.id ?? "");
  const [issueId, setIssueId] = useState<string>(issueTypes[0].id);

  const models = devicesByCategory[category];
  const range = useMemo(() => estimateRepairCost(category, issueId), [category, issueId]);

  function handleCategoryChange(cat: DeviceCategory) {
    setCategory(cat);
    setModelId(devicesByCategory[cat][0]?.id ?? "");
  }

  return (
    <section id="estimator" className="section-pad bg-space-gray/40">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-gradient text-3xl md:text-5xl font-semibold tracking-tight">
            Repair Cost Estimator
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base md:text-lg text-apple-silver/75">
            Get an instant estimated price range for your repair. Final cost is confirmed after
            free diagnosis.
          </p>
        </motion.div>

        <div className="glass mt-12 grid grid-cols-1 gap-6 rounded-3xl p-6 md:grid-cols-2 md:p-10">
          <div className="space-y-5">
            <div>
              <label htmlFor="estimator-category" className="mb-2 block text-xs uppercase tracking-widest text-apple-silver/60">
                Device Type
              </label>
              <select
                id="estimator-category"
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value as DeviceCategory)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-apple-blue-light/60"
              >
                {deviceCategories.map((c) => (
                  <option key={c} value={c} className="bg-space-gray">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="estimator-model" className="mb-2 block text-xs uppercase tracking-widest text-apple-silver/60">
                Model
              </label>
              <select
                id="estimator-model"
                value={modelId}
                onChange={(e) => setModelId(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-apple-blue-light/60"
              >
                {models.map((m) => (
                  <option key={m.id} value={m.id} className="bg-space-gray">
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="estimator-issue" className="mb-2 block text-xs uppercase tracking-widest text-apple-silver/60">
                Issue Type
              </label>
              <select
                id="estimator-issue"
                value={issueId}
                onChange={(e) => setIssueId(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-apple-blue-light/60"
              >
                {issueTypes.map((issue) => (
                  <option key={issue.id} value={issue.id} className="bg-space-gray">
                    {issue.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${category}-${issueId}-${range ? range.join("-") : "na"}`}
                initial={{ opacity: 0, scale: 0.85, rotateX: -15 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-2xl border border-apple-blue-light/30 bg-gradient-to-br from-apple-blue/15 to-transparent p-8 text-center"
              >
                <Calculator className="mx-auto h-8 w-8 text-apple-blue-light" />
                <p className="mt-3 text-xs uppercase tracking-widest text-apple-silver/60">
                  Estimated Repair Cost
                </p>
                {range ? (
                  <p className="mt-2 text-3xl font-semibold text-white">
                    ₹{range[0].toLocaleString("en-IN")} – ₹{range[1].toLocaleString("en-IN")}
                  </p>
                ) : (
                  <p className="mt-2 text-lg text-apple-silver/70">
                    Not applicable for this combination. Contact us for a free diagnosis.
                  </p>
                )}
                <p className="mt-3 text-xs text-apple-silver/50">
                  Final price confirmed after physical inspection at our service center.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
