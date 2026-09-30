import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {  Mic, Workflow, Code2 } from "lucide-react";

export default function AiAgents() {
  const agentTypes = [
    { icon: Mic, title: "Voice AI Agents", desc: "Conversational AI that understands and responds naturally to customer queries." },
    { icon: Workflow, title: "Workflow AI Agents", desc: "Autonomous agents that execute multi-step business processes and automations." },
    { icon: Code2, title: "Coding & Development Agents", desc: "AI assistants that help write, review, and deploy code faster and reliably." },
  ];

  return (
    <>
      <Helmet>
        <title>AI Agents Development | Voice & Workflow AI | DevOps Minders</title>
        <meta
          name="description"
          content="DevOps Minders develops custom AI Agents including Voice AI agents, Workflow automation agents, and Coding assistants to streamline your business operations."
        />
        <meta
          name="keywords"
          content="AI Agents, Voice AI Agents, Workflow AI Agents, AI Automation Agents, Custom AI Agents India, DevOps Minders"
        />
        <link rel="canonical" href="https://www.devopsminders.com/ai-agents/" />
      </Helmet>

      <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            AI Agents Development
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Build intelligent, autonomous AI agents that handle complex tasks, interact with users, and automate business workflows seamlessly.
          </p>

          {/* Types of Agents */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Types of AI Agents We Build</h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              {agentTypes.map((agent) => {
                const Icon = agent.icon;
                return (
                  <div key={agent.title} className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-red-300 hover:shadow-lg">
                    <Icon className="h-10 w-10 text-red-600" />
                    <h3 className="mt-6 text-xl font-semibold text-slate-900">{agent.title}</h3>
                    <p className="mt-3 text-base text-slate-600">{agent.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-20 rounded-2xl bg-slate-900 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Automate with AI Agents today</h2>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
              Talk to our AI Team
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}