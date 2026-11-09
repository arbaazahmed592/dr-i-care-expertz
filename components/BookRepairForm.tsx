"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Upload, Send } from "lucide-react";
import { deviceCategories, devicesByCategory, type DeviceCategory } from "@/data/devices";
import { buildBookingWhatsAppUrl } from "@/lib/whatsapp";

const issueOptions = [
  "Display Damage",
  "Battery Issue",
  "Charging Issue",
  "Camera Issue",
  "Water Damage",
  "Speaker Issue",
  "Mic Issue",
  "Software Issue",
  "Other"
];

export default function BookRepairForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [deviceCategory, setDeviceCategory] = useState<DeviceCategory>("iPhone");
  const [model, setModel] = useState(devicesByCategory["iPhone"][0]?.name ?? "");
  const [issue, setIssue] = useState(issueOptions[0]);
  const [notes, setNotes] = useState("");
  const [fileName, setFileName] = useState("");

  function handleCategoryChange(cat: DeviceCategory) {
    setDeviceCategory(cat);
    setModel(devicesByCategory[cat][0]?.name ?? "");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const fullNotes = fileName ? `${notes ? notes + " " : ""}(Photo attached: ${fileName} — please share on WhatsApp chat)` : notes;
    const url = buildBookingWhatsAppUrl({
      name,
      phone,
      email,
      address,
      deviceCategory,
      model,
      issue,
      notes: fullNotes
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-apple-silver/40 outline-none focus:border-apple-blue-light/60";
  const labelClass = "mb-2 block text-xs uppercase tracking-widest text-apple-silver/60";

  return (
    <section id="book-repair" className="section-pad bg-space-black">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-gradient text-3xl md:text-5xl font-semibold tracking-tight">Book a Repair</h2>
          <p className="mx-auto mt-5 max-w-xl text-base md:text-lg text-apple-silver/75">
            Fill in your details and we&apos;ll get back to you instantly on WhatsApp.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass mt-12 space-y-5 rounded-3xl p-6 md:p-10"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>Customer Name</label>
              <input id="name" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number</label>
              <input id="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="+91 ..." type="tel" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@example.com" type="email" />
            </div>
            <div>
              <label htmlFor="address" className={labelClass}>Address</label>
              <input id="address" value={address} onChange={(e) => setAddress(e.target.value)} className={inputClass} placeholder="Your address" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="deviceCategory" className={labelClass}>Device Category</label>
              <select
                id="deviceCategory"
                value={deviceCategory}
                onChange={(e) => handleCategoryChange(e.target.value as DeviceCategory)}
                className={inputClass}
              >
                {deviceCategories.map((c) => (
                  <option key={c} value={c} className="bg-space-gray">
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="model" className={labelClass}>Model</label>
              <select id="model" value={model} onChange={(e) => setModel(e.target.value)} className={inputClass}>
                {devicesByCategory[deviceCategory].map((m) => (
                  <option key={m.id} value={m.name} className="bg-space-gray">
                    {m.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="issue" className={labelClass}>Issue Selection</label>
            <select id="issue" value={issue} onChange={(e) => setIssue(e.target.value)} className={inputClass}>
              {issueOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-space-gray">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="notes" className={labelClass}>Additional Notes</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={inputClass}
              rows={3}
              placeholder="Describe the issue in more detail..."
            />
          </div>

          <div>
            <label htmlFor="photo" className={labelClass}>Upload Device Photo</label>
            <label htmlFor="photo" className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-6 text-sm text-apple-silver/60 transition hover:border-apple-blue-light/50">
              <Upload className="h-4 w-4" />
              {fileName || "Click to upload a photo of your device"}
              <input
                id="photo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
              />
            </label>
            {fileName && (
              <p className="mt-2 text-xs text-apple-silver/50">
                Please share this photo directly in the WhatsApp chat after submitting.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-medium text-white shadow-lg shadow-[#25D366]/20 transition hover:scale-[1.01]"
          >
            <Send className="h-4 w-4" />
            Send To WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
