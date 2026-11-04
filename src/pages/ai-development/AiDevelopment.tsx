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
        <title>DevOps Minders AI Development | Custom AI Solutions &amp; Agents</title>
        <meta
          name="description"
          content="DevOps Minders is a custom AI development company building enterprise AI agents, LLM applications, RAG architecture, and intelligent workflow automation."
        />
        <meta
          name="keywords"
          content="DevOps Minders AI Development, AI Development Company, Custom AI Solutions, AI Agents, LLM Applications, AI Automation Company, IT Solutions, DevOps Minders"
        />
        <link rel="canonical" href="https://www.devopsminders.com/ai-development" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevOps Minders" />
        <meta property="og:title" content="DevOps Minders AI Development | Custom AI Solutions &amp; Agents" />
        <meta
          property="og:description"
          content="DevOps Minders builds enterprise AI applications, autonomous AI agents, and intelligent workflow automation systems."
        />
        <meta property="og:url" content="https://www.devopsminders.com/ai-development" />
        <meta property="og:image" content="https://www.devopsminders.com/assets/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devopsminders" />
        <meta name="twitter:title" content="DevOps Minders AI Development | Custom AI Solutions &amp; Agents" />
        <meta
          name="twitter:description"
          content="DevOps Minders builds enterprise AI applications, autonomous AI agents, and intelligent workflow automation systems."
        />
        <meta name="twitter:image" content="https://www.devopsminders.com/assets/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "DevOps Minders AI Development",
            "serviceType": "AI Development & Custom AI Solutions",
            "provider": {
              "@type": "Organization",
              "name": "DevOps Minders",
              "url": "https://www.devopsminders.com"
            },
            "areaServed": "Global",
            "description": "Custom AI development, autonomous AI agents, LLM applications, RAG architecture, and intelligent business automation."
          })}
        </script>
      </Helmet>

      <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-600">
            DevOps Minders AI Development
          </div>

          {/* H1 as per SEO Audit */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Custom AI Development &amp; Intelligent Automation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DevOps Minders AI Development builds custom AI-powered applications, autonomous AI agents, LLM integrations, and enterprise automation systems that solve real business challenges.
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