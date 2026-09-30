import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BrainCircuit, Bot, Workflow, Database, Sparkles, Code2 } from "lucide-react";

export default function AiDevelopment() {
  const whatWeBuild = [
    { icon: BrainCircuit, title: "AI Applications" },
    { icon: Bot, title: "AI Agents" },
    { icon: Database, title: "LLM Applications" },
    { icon: Sparkles, title: "RAG Applications" },
    { icon: Workflow, title: "AI Automation" },
    { icon: Code2, title: "Machine Learning" },
  ];

  return (
    <>
      <Helmet>
        <title>AI Development Company India | Custom AI Solutions | DevOps Minders</title>
        <meta
          name="description"
          content="DevOps Minders is a leading AI development company in India providing custom AI development, AI agents, LLM applications, and intelligent automation services."
        />
        <meta
          name="keywords"
          content="AI development company, AI development services, custom AI development, AI software development, AI solutions company, AI development company India, DevOps Minders"
        />
        <link rel="canonical" href="https://www.devopsminders.com/ai-development/" />
      </Helmet>

      <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          {/* H1 as per SEO Audit */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            AI Development Company
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DevOps Minders builds custom AI-powered applications, intelligent agents, and automation systems that solve real business challenges.
          </p>

          {/* What We Build */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">What We Build</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whatWeBuild.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:border-red-300 hover:shadow-md">
                    <Icon className="h-8 w-8 text-red-600" />
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  </div>
                );
              })}
            </div>
          </section>

          {/* AI Development Process */}
          <section className="mt-20">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Our AI Development Process</h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-4">
              {["Understand Problem", "Design Architecture", "Build & Train AI", "Deploy & Improve"].map((step, index) => (
                <div key={step} className="relative pl-8 border-l-2 border-red-600">
                  <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">{index + 1}</span>
                  <h3 className="text-base font-semibold text-slate-900">{step}</h3>
                  <p className="mt-2 text-sm text-slate-600">We follow a practical approach ensuring AI integrates smoothly into your business.</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-20 rounded-2xl bg-slate-900 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to build your AI solution?</h2>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}