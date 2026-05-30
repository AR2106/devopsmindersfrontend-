import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import type { FormValues } from "../../../types";
import { Mail, Phone, MapPin, Clock, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContactForm() {
  const methods = useForm<FormValues>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      source: "",
      message: "",
    },
  });

  const [step, setStep] = useState<number>(1);
  const [result, setResult] = useState<string>("");

  const next = async () => {
    let isValid = false;

    if (step === 1) {
      isValid = await methods.trigger(["name", "email", "phone"]);
    } else if (step === 2) {
      isValid = await methods.trigger(["service", "budget", "message"]);
    }

    if (isValid) setStep((s) => s + 1);
  };

  const back = () => setStep((s) => s - 1);

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      formData.append("access_key", "40275540-7719-45b4-ac94-361b9fefb243");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setResult(result.success ? "Details sent successfully!" : "Error");
    } catch {
      setResult("Error");
    }
  };

  const progress = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <main className="bg-black py-24 px-4 relative overflow-hidden">
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.12),transparent_60%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid lg:grid-cols-2 gap-12 items-start relative z-10 sm:px-14 px-4"
      >
        {/* ================= LEFT FORM ================= */}
        <motion.section variants={item}>
          {/* SEO HEADER */}
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Start Your <span className="text-red-500">DevOps Project</span>
            </h1>
            <p className="text-gray-400 mt-2">
              Fill out the form and our engineers will respond within 24 hours.
            </p>
          </header>

          <FormProvider {...methods}>
            <motion.form
              variants={item}
              onSubmit={methods.handleSubmit(onSubmit)}
              className="relative bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden hover:shadow-red-500/10 transition"
            >
              {/* PROGRESS BAR */}
              <div className="h-1 w-full bg-white/10">
                <motion.div
                  className="h-full bg-red-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* SUCCESS OVERLAY */}
              {result && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/80 flex items-center justify-center z-20 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">{result}</p>
                    <p className="text-gray-400 text-sm mt-2">
                      We’ll contact you soon.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* STEPS */}
              <div className="p-8 space-y-4">
                <div className="flex justify-between text-xs text-gray-400">
                  <span className={step >= 1 ? "text-red-500" : ""}>
                    Step 1
                  </span>
                  <span className={step >= 2 ? "text-red-500" : ""}>
                    Step 2
                  </span>
                  <span className={step === 3 ? "text-red-500" : ""}>
                    Step 3
                  </span>
                </div>

                {step === 1 && <Step1 next={next} />}
                {step === 2 && <Step2 next={next} back={back} />}
                {step === 3 && <Step3 back={back} />}
              </div>
            </motion.form>
          </FormProvider>
        </motion.section>

        {/* ================= RIGHT PANEL ================= */}
        <motion.aside variants={item} className="space-y-6 text-white">
          {/* TITLE */}
          <div>
            <h2 className="text-3xl font-bold">
              Talk to <span className="text-red-500">Experts</span>
            </h2>
            <p className="text-gray-400 mt-3">
              Get architecture guidance, CI/CD setup, and cloud solutions
              tailored for your business.
            </p>
          </div>

          {/* CONTACT CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#0f0f0f] border border-white/10 rounded-xl p-6 space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "info@devopsminders.com" },
              { icon: Phone, label: "Phone", value: "+91 88727 81496" },
              {
                icon: MapPin,
                label: "Location",
                value: "India • Remote Delivery",
              },
              { icon: Clock, label: "Response", value: "Within 24 Hours" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <item.icon className="text-red-500 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p className="text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* TRUST CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#0f0f0f] border border-white/10 rounded-xl p-6 space-y-4"
          >
            <h3 className="font-semibold text-lg">Why Choose Us</h3>

            <div className="flex items-center gap-3 text-gray-400">
              <Zap className="text-red-500" size={18} />
              Fast CI/CD Automation
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <Shield className="text-red-500" size={18} />
              Secure Architecture
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <Clock className="text-red-500" size={18} />
              24/7 Support
            </div>
          </motion.div>
        </motion.aside>
      </motion.div>
    </main>
  );
}
