import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import type { FormValues } from "../../../types";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

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

    if (isValid) {
      setStep((current) => current + 1);
    }
  };

  const back = () => {
    setStep((current) => current - 1);
  };

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

      const responseData = await response.json();

      if (responseData.success) {
        setResult("Your request has been sent successfully.");
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch {
      setResult("Unable to send your request. Please try again.");
    }
  };

  useEffect(() => {
    if (!result || !result.includes("successfully")) {
      return;
    }

    const timer = setTimeout(() => {
      methods.reset();
      setStep(1);
      setResult("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [result, methods]);

  const progress = step === 1 ? 33 : step === 2 ? 66 : 100;

  const steps = [
    {
      number: 1,
      title: "Your Details",
    },
    {
      number: 2,
      title: "Project",
    },
    {
      number: 3,
      title: "Review",
    },
  ];

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "info@devopsminders.com",
      href: "mailto:info@devopsminders.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 88727 81496",
      href: "tel:+918872781496",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India • Remote",
    },
    {
      icon: Clock3,
      label: "Response",
      value: "Within 24 hours",
    },
  ];

  const expertise = [
    "Understand your requirements",
    "Discuss the right approach",
    "Plan the next steps",
  ];

  return (
    <main
      id="contact-form"
      className="relative overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[380px] w-[650px] -translate-x-1/2 rounded-full bg-slate-100/50 blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.4] [background-image:linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:54px_54px]" />

        <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto 2xxl:max-w-6xl px-4 sm:px-6 lg:px-20">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-7 max-w-2xl"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-7 bg-[#E80112]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E80112]">
              Start a Conversation
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.08]">
            Let’s talk about
            <span className="text-[#E80112]"> your project.</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px]">
            Tell us a little about what you need. We’ll review your requirements
            and get back to you with the next steps.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
        >
          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px]">
            <section className="relative min-w-0 border-b border-slate-200 lg:border-b-0 lg:border-r">
              <div className="h-[3px] w-full bg-slate-100">
                <motion.div
                  className="h-full bg-[#E80112]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />
              </div>

              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit(onSubmit)}
                  className="p-5 sm:p-6 lg:p-7"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-1.5 flex items-center gap-2">
                        <Sparkles size={14} className="text-[#E80112]" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Project Inquiry
                        </span>
                      </div>

                      <h2 className="text-lg font-semibold text-slate-900">
                        Tell us what you need
                      </h2>
                    </div>

                    <span className="hidden text-xs font-medium text-slate-600 sm:block">
                      {step} / 3
                    </span>
                  </div>

                  <div className="mb-6 flex items-center">
                    {steps.map((item, index) => {
                      const active = step >= item.number;
                      const completed = step > item.number;

                      return (
                        <div
                          key={item.number}
                          className="flex min-w-0 flex-1 items-center"
                        >
                          <div className="flex min-w-0 items-center gap-2">
                            <motion.div
                              animate={{
                                scale: active ? 1 : 0.94,
                              }}
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold ${
                                active
                                  ? "border-[#E80112] bg-[#E80112] text-white shadow-[0_0_16px_#E80112]"
                                  : "border-slate-200 bg-white text-slate-600"
                              }`}
                            >
                              {completed ? (
                                <CheckCircle2 size={14} />
                              ) : (
                                item.number
                              )}
                            </motion.div>

                            <span
                              className={`hidden truncate text-xs font-medium sm:block ${
                                active ? "text-slate-900" : "text-slate-500"
                              }`}
                            >
                              {item.title}
                            </span>
                          </div>

                          {index < steps.length - 1 && (
                            <div className="mx-2 h-px flex-1 bg-slate-100 sm:mx-4">
                              <motion.div
                                className="h-full bg-[#E80112]/70"
                                initial={{ width: 0 }}
                                animate={{
                                  width: step > item.number ? "100%" : "0%",
                                }}
                                transition={{
                                  duration: 0.35,
                                }}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Wrapper to ensure inputs (Step1/2/3) have a white background if they are dark themed internally,
                      or just to keep consistency. Assuming Step components handle their own styling,
                      but adding a class here won't hurt. */}
                  <div className="min-h-[285px] bg-white text-slate-900">
                    {step === 1 && <Step1 next={next} />}
                    {step === 2 && <Step2 next={next} back={back} />}
                    {step === 3 && <Step3 back={back} />}
                  </div>
                </form>
              </FormProvider>

              {result && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-30 flex items-center justify-center bg-white/95 p-6 backdrop-blur-md"
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    transition={{ duration: 0.35 }}
                    className="max-w-sm text-center"
                  >
                    {result.includes("successfully") ? (
                      <>
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-green-500/20 bg-green-50">
                          <CheckCircle2 size={27} className="text-green-600" />
                        </div>

                        <h3 className="text-xl font-semibold text-slate-900">
                          Request received
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {result}
                        </p>

                        <p className="mt-3 text-xs text-slate-500">
                          The form will reset shortly.
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-red-500/20 bg-red-50">
                          <span className="text-xl font-semibold text-red-600">
                            !
                          </span>
                        </div>

                        <h3 className="text-xl font-semibold text-slate-900">
                          Something went wrong
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {result}
                        </p>
                      </>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </section>

            <aside className="relative bg-slate-100">
              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-slate-200 blur-[90px]" />

              <div className="relative p-5 sm:p-6 lg:p-7">
                <div className="mb-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E80112] shadow-[0_0_10px_#E80112]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Let’s Connect
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold leading-tight text-slate-900">
                    Have a project
                    <span className="text-[#E80112]"> in mind?</span>
                  </h2>

                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    Give us the details and we’ll help you figure out the best
                    way forward.
                  </p>
                </div>

                <div className="mb-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    What happens next
                  </p>

                  <div className="space-y-2">
                    {expertise.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{
                          opacity: 0,
                          x: 8,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.06,
                        }}
                        className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5 shadow-sm"
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-50">
                          <span className="text-[10px] font-semibold text-[#E80112]">
                            0{index + 1}
                          </span>
                        </div>

                        <span className="text-xs text-slate-600">{item}</span>

                        <ArrowUpRight
                          size={13}
                          className="ml-auto text-slate-400"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-5">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Contact
                  </p>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {contactDetails.map((item) => {
                      const Icon = item.icon;

                      const content = (
                        <>
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white">
                            <Icon size={13} className="text-[#E80112]" />
                          </div>

                          <div className="min-w-0">
                            <p className="text-[10px] uppercase tracking-wider text-slate-500">
                              {item.label}
                            </p>

                            <p className="mt-0.5 truncate text-xs font-medium text-slate-900">
                              {item.value}
                            </p>
                          </div>

                          {item.href && (
                            <ArrowUpRight
                              size={13}
                              className="ml-auto mt-1 shrink-0 text-slate-400 transition-colors duration-300 group-hover:text-[#E80112]"
                            />
                          )}
                        </>
                      );

                      return item.href ? (
                        <a
                          key={item.label}
                          href={item.href}
                          className="group flex items-start gap-3 rounded-lg transition-colors duration-300 hover:bg-white"
                        >
                          {content}
                        </a>
                      ) : (
                        <div
                          key={item.label}
                          className="flex items-start gap-3"
                        >
                          {content}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
                  <ShieldCheck
                    size={17}
                    className="mt-0.5 shrink-0 text-[#E80112]"
                  />

                  <div>
                    <p className="text-xs font-medium text-slate-900">
                      Your information is private
                    </p>

                    <p className="mt-1 text-[11px] leading-4 text-slate-600">
                      We only use your details to respond to your inquiry.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
