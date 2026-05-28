// data/caseStudies.ts
import bng from "./../assets/caseStudy/bng.png";
import unpod from "./../assets/caseStudy/unpod.png";
import pyne from "./../assets/caseStudy/pyne.png";
import maxwell from "./../assets/caseStudy/maxwell.png";
import fearless from "./../assets/caseStudy/fearless.png";
import expertify from "./../assets/caseStudy/experties.png";
import nestle from "./../assets/caseStudy/nestle.png";
import cadbury from "./../assets/caseStudy/Cadbury.png";

export const caseStudies = [
  {
    slug: "bmg",
    title: "AI-Powered Music Interaction Platform for BMG.com",
    image: bng,

    description:
      "Transforming a CMS-based music platform into an AI-powered interactive experience with smart search, lyric generation, and voice AI.",

    content: [
      {
        type: "paragraph",
        text: "When BMG.com wanted to move beyond a standard CMS and create a more interactive music experience, it partnered with our team to build an AI-powered music platform.",
      },
      {
        type: "paragraph",
        text: "Using Python, React, MySQL, FastAPI, model training, and OpenAI API integration, we transformed the existing website into a smarter platform where users can search old songs, generate lyrics, explore AI-generated music, and interact with AI voice features in real time.",
      },

      {
        type: "heading",
        text: "About the Client",
      },
      {
        type: "paragraph",
        text: "BMG.com operates in the music and digital content space with a CMS-based platform for managing songs, artists, lyrics, and music-related content.",
      },
      {
        type: "paragraph",
        text: "However, the platform was limited to traditional browsing and search. The client wanted to introduce AI interaction so users could discover old songs naturally, generate lyrics, and experience AI-based music and voice features.",
      },

      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "The existing CMS was not built for AI interaction. It could store and manage music content but could not understand user intent, generate creative lyrics, or deliver real-time AI responses.",
      },
      {
        type: "paragraph",
        text: "The challenge was to add an intelligent AI layer without disrupting the current platform, while connecting the CMS, MySQL database, trained models, voice AI, and OpenAI APIs into one seamless experience.",
      },

      {
        type: "heading",
        text: "Our Approach",
      },
      {
        type: "paragraph",
        text: "We built a scalable AI backend using Python and FastAPI, connected with the client’s MySQL database and existing CMS.",
      },
      {
        type: "paragraph",
        text: "The frontend was developed in React, providing a clean and interactive interface for music search, lyric generation, and AI-powered responses.",
      },
      {
        type: "paragraph",
        text: "We trained models using open-source platforms and voice samples, then integrated OpenAI APIs to generate fast, contextual, and real-time responses.",
      },

      {
        type: "heading",
        text: "Solution Delivered",
      },
      {
        type: "paragraph",
        text: "The final solution allows users to search music through natural language, generate new lyrics, explore AI-generated music ideas, and interact with voice-based AI features.",
      },
      {
        type: "paragraph",
        text: "Instead of relying only on keyword search, users can interact naturally with the system:",
      },
      {
        type: "list",
        variant: "quote",
        items: [
          "Find old romantic songs.",
          "Generate emotional lyrics.",
          "Show me nostalgic songs with soft vocals.",
        ],
      },
      {
        type: "paragraph",
        text: "The AI system understands the request, searches the database, and generates relevant responses in real time.",
      },

      {
        type: "heading",
        text: "Results and Impact",
      },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Improved user engagement",
          "Made old songs easier to discover",
          "Enabled AI lyrics generation",
          "Introduced AI voice interaction",
          "Enabled real-time music responses",
          "Built a scalable foundation for future AI features",
        ],
      },

      {
        type: "heading",
        text: "Built for What’s Next",
      },
      {
        type: "paragraph",
        text: "By combining React, FastAPI, Python, MySQL, model training, voice AI, and OpenAI integration, we delivered a modern AI layer that extended the client’s existing CMS without replacing it.",
      },
      {
        type: "paragraph",
        text: "The result is a faster, smarter, and more creative music platform built for the future of AI-powered entertainment.",
      },

      {
        type: "cta",
        text: "Ready to bring AI into your digital platform? Let’s build what’s next, together.",
      },
    ],
  },
  {
    slug: "unpod",
    title: "AI Voice Agent Platform for Unpod.ai",
    image: unpod,
    description:
      "Building a scalable AI voice agent platform for real-time communication, automation, and enterprise-level voice AI systems.",

    content: [
      {
        type: "paragraph",
        text: "When Unpod.ai set out to build an open-source communication platform for AI voice agents, the goal was to make business communication faster, smarter, and easier to automate.",
      },
      {
        type: "paragraph",
        text: "The platform needed to help companies create AI agents with dedicated phone numbers that could handle calls, WhatsApp, and email while connecting with CRM systems, helpdesks, calendars, and knowledge bases.",
      },

      {
        type: "heading",
        text: "About the Client",
      },
      {
        type: "paragraph",
        text: "Unpod.ai operates in the Voice AI and communication automation space, serving industries such as sales, support, hiring, logistics, healthcare, and financial services.",
      },
      {
        type: "paragraph",
        text: "Its core idea is to replace rigid IVRs and basic chatbots with AI agents that understand conversations, take actions, and update internal systems automatically.",
      },

      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "Traditional call systems are slow, expensive, and limited. IVRs only route users through menus while teams spend time on repetitive calls and manual follow-ups.",
      },
      {
        type: "paragraph",
        text: "Unpod.ai needed a scalable AI communication layer capable of handling real-time voice interaction, high-volume calls, low-latency responses, and workflow automation.",
      },

      {
        type: "heading",
        text: "Our Approach",
      },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Real-time voice processing",
          "AI agent orchestration",
          "SIP trunking and telephony integration",
          "CRM and helpdesk connectivity",
          "Conversation transcript and search",
          "Human handoff when needed",
          "Multi-channel communication across phone, WhatsApp, and email",
        ],
      },

      {
        type: "heading",
        text: "Solution Delivered",
      },
      {
        type: "paragraph",
        text: "The platform enables AI agents to operate with dedicated phone numbers and manage complete communication workflows end-to-end.",
      },
      {
        type: "heading",
        text: "Solution Delivered",
      },
      {
        type: "paragraph",
        text: "The platform enables AI agents to operate with dedicated phone numbers and manage complete communication workflows end-to-end.",
      },
      {
        type: "paragraph",
        text: "These agents can qualify leads, answer routine questions, book meetings, send payment links, update CRM records, and escalate conversations to humans when judgment is required.",
      },
      {
        type: "paragraph",
        text: "The platform also includes live transcripts, sentiment tracking, lead scoring, and searchable conversation history, helping teams understand every customer interaction with greater clarity.",
      },
      {
        type: "paragraph",
        text: "The platform also includes live transcripts, sentiment tracking, lead scoring, and searchable conversation history for deeper insights.",
      },

      {
        type: "heading",
        text: "Results and Impact",
      },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Automate repetitive calls",
          "Reduce manual follow-up work",
          "Improve response speed",
          "Handle inbound and outbound communication",
          "Capture conversation insights",
          "Sync outcomes with business systems",
          "Scale communication without scaling headcount",
        ],
      },

      {
        type: "paragraph",
        text: "Unpod.ai supports high-scale communication including 500K+ calls per month, 10K+ parallel calls, and 99.95% uptime.",
      },

      {
        type: "heading",
        text: "Built for What’s Next",
      },
      {
        type: "paragraph",
        text: "By combining Voice AI, real-time communication infrastructure, AI orchestration, and enterprise integrations, Unpod.ai delivers a next-generation communication platform.",
      },
      {
        type: "paragraph",
        text: "Instead of just answering queries, AI agents now talk, understand, decide, act, and update business systems automatically.",
      },

      {
        type: "cta",
        text: "Ready to automate business communication with AI voice agents? Let’s build what’s next, together.",
      },
    ],
  },
  {
    slug: "pyne",
    title: "AI-Led Product Onboarding Platform for Pyne.ai",
    image: pyne,
    description:
      "Building an AI-powered onboarding platform that replaces static product tours with interactive, personalized demo experiences for SaaS users.",

    content: [
      {
        type: "paragraph",
        text: "When Pyne.ai set out to improve how SaaS companies onboard users, the goal was to replace static product tours and passive help content with interactive AI-led demos.",
      },
      {
        type: "paragraph",
        text: "The platform needed to help product and customer success teams guide users through complex software, reduce time to value, and increase product activation through personalized in-product experiences. Pyne positions itself as an AI agent for user onboarding, built for B2B SaaS product and CS leaders.",
      },

      {
        type: "heading",
        text: "About the Client",
      },
      {
        type: "paragraph",
        text: "Pyne.ai operates in the B2B SaaS onboarding and product education space. Its platform helps software companies create AI-driven product demos that guide users through onboarding journeys with a more human and interactive experience.",
      },
      {
        type: "paragraph",
        text: "Instead of forcing users through generic product tours or long tutorial videos, Pyne.ai enables customers to choose their own onboarding path and learn the product in a more engaging way.",
      },

      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "Traditional SaaS onboarding often fails because users skip product tours, ignore help content, or abandon long videos before reaching value.",
      },
      {
        type: "paragraph",
        text: "For B2B SaaS companies, this creates a serious growth problem: poor onboarding leads to slower activation, lower engagement, and reduced self-serve revenue.",
      },
      {
        type: "paragraph",
        text: "Pyne.ai needed a platform that could make onboarding more dynamic, personalized, and scalable while still feeling natural to the end user.",
      },

      {
        type: "heading",
        text: "Our Approach",
      },
      {
        type: "paragraph",
        text: "We built an AI-powered onboarding experience focused on interaction, personalization, and product education.",
      },
      {
        type: "paragraph",
        text: "The solution combined AI-generated demo agents, guided product journeys, and contextual user support. These agents could explain product features, guide users through workflows, and allow users to choose the onboarding path most relevant to their goals.",
      },
      {
        type: "paragraph",
        text: "The platform was designed for product and customer success teams that need to educate users at scale without relying only on manual support or one-size-fits-all tutorials.",
      },

      {
        type: "heading",
        text: "Solution Delivered",
      },
      {
        type: "paragraph",
        text: "The final solution enabled SaaS companies to create interactive AI-led demos that guide users through their products in a more engaging way.",
      },
      {
        type: "paragraph",
        text: "Users could explore features, receive contextual explanations, and follow onboarding flows tailored to their needs. Pyne.ai also uses AI-generated demo agents through HeyGen’s API to create more human-like product education experiences.",
      },

      {
        type: "heading",
        text: "Results and Impact",
      },
      {
        type: "paragraph",
        text: "The platform helped SaaS companies make onboarding more engaging and effective.",
      },
      {
        type: "paragraph",
        text: "According to a HeyGen customer story, Pyne.ai customers achieved significantly higher engagement with product education, with AI demo experiences showing up to 10x higher completion rates compared with traditional onboarding tools.",
      },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Improve product activation",
          "Reduce time to value",
          "Increase onboarding completion",
          "Support self-serve education",
          "Reduce dependence on manual customer success calls",
          "Deliver a more personalized user journey",
        ],
      },

      {
        type: "heading",
        text: "Built for What’s Next",
      },
      {
        type: "paragraph",
        text: "Pyne.ai shows how AI can transform SaaS onboarding from a static checklist into an interactive product experience.",
      },
      {
        type: "paragraph",
        text: "By combining AI demo agents, personalized onboarding journeys, and in-product guidance, the platform helps SaaS companies educate users faster, improve engagement, and turn onboarding into a growth engine.",
      },

      {
        type: "cta",
        text: "Ready to make your product onboarding more intelligent? Let’s build what’s next, together.",
      },
    ],
  },
  {
    slug: "maxwell",
    title: "Online CPA Exam Review Platform for Maxwell CPA Review",
    image: maxwell,
    description:
      "Building a structured online CPA exam preparation platform with video lessons, practice questions, textbooks, and subscription-based learning access.",

    content: [
      {
        type: "paragraph",
        text: "When Maxwell CPA Review wanted to deliver a more accessible and structured CPA exam preparation experience, the goal was to create a digital course platform that made complex accounting concepts easier to learn.",
      },
      {
        type: "paragraph",
        text: "The platform needed to support video lessons, practice questions, task-based simulations, textbooks, outlines, and subscription-based access for CPA candidates preparing for FAR, AUD, REG, BAR, ISC, and TCP.",
      },

      {
        type: "heading",
        text: "About the Client",
      },
      {
        type: "paragraph",
        text: "Maxwell CPA Review operates in the online education and CPA exam preparation space. The platform helps accounting students and professionals prepare for the CPA exam through structured courses, step-by-step video lessons, digital textbooks, practice questions, and tutoring support.",
      },
      {
        type: "paragraph",
        text: "The course offering includes full access to all six CPA exam sections, with a $49/month subscription model and learning materials designed around simplified explanations and exam-focused practice.",
      },

      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "CPA exam preparation is often overwhelming. Students need to understand large volumes of technical content, practice thousands of questions, and stay organized across multiple exam sections.",
      },
      {
        type: "paragraph",
        text: "The client needed a course platform that could make learning easier, keep content structured, and allow students to move smoothly between lessons, textbooks, quizzes, and exam-style practice.",
      },
      {
        type: "paragraph",
        text: "The challenge was to create a reliable learning experience that could support digital course delivery, student progress, paid subscriptions, and scalable access to exam materials.",
      },

      {
        type: "heading",
        text: "Our Approach",
      },
      {
        type: "paragraph",
        text: "We focused on building a clean, structured e-learning experience around the student journey.",
      },
      {
        type: "paragraph",
        text: "The platform was organized so learners could access CPA courses by section, move through video lessons, review supporting textbooks and outlines, and reinforce concepts through multiple-choice questions and task-based simulations.",
      },
      {
        type: "paragraph",
        text: "The system also supported subscription-based access, allowing students to start affordably and continue studying at their own pace.",
      },

      {
        type: "heading",
        text: "Solution Delivered",
      },
      {
        type: "paragraph",
        text: "The final platform gave students access to a complete CPA review environment covering FAR, AUD, REG, BAR, ISC, and TCP.",
      },
      {
        type: "paragraph",
        text: "The learning experience included video lessons, digital textbooks, study outlines, final review content, multiple-choice questions, and task-based simulations. Maxwell CPA Review describes the course as including 35+ hours of video lectures, 4,000+ MCQs, and 75+ TBS walkthroughs.",
      },
      {
        type: "paragraph",
        text: "Students could sign up, access their study materials online, follow structured course content, and use the platform as either a primary CPA review tool or a supplement to other study programs.",
      },

      {
        type: "heading",
        text: "Results and Impact",
      },
      {
        type: "paragraph",
        text: "The platform helped Maxwell CPA Review turn its CPA exam expertise into a scalable online learning product.",
      },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Deliver CPA exam content online",
          "Support subscription-based course access",
          "Organize six CPA exam sections in one platform",
          "Improve student access to videos, textbooks, and practice tools",
          "Create a more affordable alternative to traditional CPA review programs",
          "Build a foundation for continued course expansion",
        ],
      },
      {
        type: "paragraph",
        text: "Since launching, Maxwell CPA Review states it has helped 1,500+ students through its CPA exam courses and tutoring.",
      },

      {
        type: "heading",
        text: "Built for What’s Next",
      },
      {
        type: "paragraph",
        text: "Maxwell CPA Review shows how focused digital learning can make professional exam preparation more accessible and manageable.",
      },
      {
        type: "paragraph",
        text: "By combining structured course content, online practice tools, subscription access, and exam-focused teaching, the platform gives CPA candidates a simpler way to prepare for one of the most demanding professional exams.",
      },

      {
        type: "cta",
        text: "Ready to build a scalable online learning platform? Let’s build what’s next, together.",
      },
    ],
  },
  {
    slug: "fearless",
    title: "Multi-AI Agent Platform for Fearless Code",
    image: fearless,
    description:
      "Building a multi-AI agent self-development platform to help users understand fear patterns, emotional states, and personal growth through guided AI interactions.",

    content: [
      {
        type: "paragraph",
        text: "When Fearless Code wanted to expand beyond a traditional self-development website, the goal was to create a more interactive platform where users could receive guided support for anxiety, depression, fear-based limitations, and personal growth.",
      },
      {
        type: "paragraph",
        text: "The platform needed to combine structured learning content with multiple AI agents that could help users analyze their emotional state, identify hidden fear patterns, and receive practical guidance based on the Fearless Code system.",
      },

      {
        type: "heading",
        text: "About the Client",
      },
      {
        type: "paragraph",
        text: "Fearless Code is a personal development and self-analysis platform focused on helping people understand how fear influences perception, thoughts, emotions, feelings, decisions, and behavior.",
      },
      {
        type: "paragraph",
        text: "The website already included educational content, tests, tutorials, and structured learning material. However, the client wanted to make the experience more interactive, personal, and responsive.",
      },
      {
        type: "paragraph",
        text: "Instead of users only reading content, the new system needed to let them talk with specialized AI agents for different emotional and psychological situations.",
      },

      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "Many users dealing with anxiety, depression, panic, or emotional confusion do not know where to begin. Static content can explain concepts, but it cannot always respond to a user’s exact situation in the moment.",
      },
      {
        type: "paragraph",
        text: "The challenge was to build multiple AI agents that could guide users through sensitive topics in a structured, non-clinical, and supportive way.",
      },
      {
        type: "paragraph",
        text: "The platform needed agents for areas such as:",
      },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Anxiety support",
          "Depression-related reflection",
          "Fear pattern analysis",
          "Panic situation guidance",
          "Belief and thought analysis",
          "Learning-type navigation",
          "Personal development exercises",
          "Daily self-reflection and action planning",
        ],
      },
      {
        type: "paragraph",
        text: "The system also had to stay aligned with the Fearless Code methodology instead of giving generic self-help answers.",
      },

      {
        type: "heading",
        text: "Our Approach",
      },
      {
        type: "paragraph",
        text: "We designed a multi-agent AI structure where each agent had a clear role, tone, and knowledge focus.",
      },
      {
        type: "paragraph",
        text: "Rather than using one general chatbot, the platform was structured around specialized AI agents. Each agent could focus on a specific user need, such as acute anxiety, deeper emotional analysis, belief work, or guided exercises.",
      },
      {
        type: "paragraph",
        text: "The AI logic was trained and configured around the Fearless Code framework, including the connection between perception, thoughts, emotions, feelings, subconscious fear patterns, and inspired action.",
      },
      {
        type: "paragraph",
        text: "This helped the agents deliver responses that felt more structured, more personal, and more aligned with the platform’s core philosophy.",
      },

      {
        type: "heading",
        text: "Solution Delivered",
      },
      {
        type: "paragraph",
        text: "The final solution introduced multiple AI agents into the Fearless Code ecosystem.",
      },
      {
        type: "paragraph",
        text: "Users could interact with agents that help them describe their current state, understand the possible fear-based logic behind it, and receive practical next steps.",
      },
      {
        type: "paragraph",
        text: "For example, a user could enter:",
      },
      {
        type: "list",
        variant: "quote",
        items: [
          "I feel anxious but I don’t know why.",
          "I keep avoiding an important decision.",
          "I feel stuck and emotionally heavy.",
          "I need help during a panic moment.",
        ],
      },
      {
        type: "paragraph",
        text: "The AI agent would then guide the user through analysis, reflection, and practical action instead of only giving generic advice.",
      },

      {
        type: "heading",
        text: "Results and Impact",
      },
      {
        type: "paragraph",
        text: "The platform evolved from a content-based learning website into a more interactive self-development system.",
      },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Increase user interaction",
          "Make complex concepts easier to apply",
          "Support users in emotionally difficult moments",
          "Personalize the learning experience",
          "Guide users from reflection into action",
          "Create a stronger bridge between website, app, tests, and exercises",
          "Build a scalable foundation for future AI-based coaching tools",
        ],
      },
      {
        type: "paragraph",
        text: "The result was a more engaging platform where users could not only learn the Fearless Code system but actively apply it to their own life situations.",
      },

      {
        type: "heading",
        text: "Built for What’s Next",
      },
      {
        type: "paragraph",
        text: "Fearless Code shows how AI can turn a personal development platform into an interactive guidance system.",
      },
      {
        type: "paragraph",
        text: "By combining structured content, specialized AI agents, emotional self-analysis, and practical action tools, the platform creates a deeper and more personal user experience.",
      },
      {
        type: "paragraph",
        text: "Instead of simply reading about fear, users can now explore their own patterns, understand their inner reactions, and receive guided support in real time.",
      },

      {
        type: "cta",
        text: "Ready to build an AI-powered self-development platform? Let’s build what’s next, together.",
      },
    ],
  },
  {
    slug: "expertify",
    title: "AI-Powered Expert Consultation Platform for Expertify Now",
    image: expertify,
    description:
      "Building an AI-powered expert consultation platform that enables smart expert matching, AI-assisted answers, and real-time professional consultations.",

    content: [
      {
        type: "paragraph",
        text: "When Expertify Now wanted to make expert consultations faster, smarter, and more accessible, the goal was to build a platform where users could connect with professionals and receive real-time guidance across different industries.",
      },
      {
        type: "paragraph",
        text: "The platform needed to support expert discovery, AI-assisted answers, smart matching, consultation booking, and a smooth mobile-first experience for both users and experts.",
      },

      {
        type: "heading",
        text: "About the Client",
      },
      {
        type: "paragraph",
        text: "Expertify Now is a consultation platform that connects users with industry experts for advice, solutions, and professional guidance.",
      },
      {
        type: "paragraph",
        text: "The platform supports categories such as business, finance, career, legal, health, personal growth, real estate, and marketing. Users can ask questions, find relevant experts, and book consultations, while professionals can use the platform to monetize their knowledge and connect with new clients.",
      },

      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "Finding the right expert can be time-consuming. Users often do not know which professional is best suited for their problem, while experts need a reliable platform to receive relevant consultation requests.",
      },
      {
        type: "paragraph",
        text: "The client needed a solution that could make expert discovery faster and more intelligent.",
      },
      {
        type: "paragraph",
        text: "The challenge was to create a platform that could:",
      },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Help users describe their problem easily",
          "Provide AI-assisted initial answers",
          "Match users with the right experts",
          "Support real-time consultation workflows",
          "Create a smooth experience for both users and experts",
          "Build trust through a clean, professional interface",
        ],
      },

      {
        type: "heading",
        text: "Our Approach",
      },
      {
        type: "paragraph",
        text: "We designed the platform around speed, clarity, and intelligent expert matching.",
      },
      {
        type: "paragraph",
        text: "The system used AI-powered assistance to understand user queries and provide instant initial insights before connecting them with an expert. This helped users get direction quickly while improving the quality of expert matching.",
      },
      {
        type: "paragraph",
        text: "The user experience was structured to make consultation simple: ask a question, receive AI-guided support, find the right expert, and continue with a personalized consultation.",
      },
      {
        type: "paragraph",
        text: "For experts, the platform created a dedicated space to offer their knowledge, connect with clients, and build a professional consultation presence.",
      },

      {
        type: "heading",
        text: "Solution Delivered",
      },
      {
        type: "paragraph",
        text: "The final solution delivered a smart expert consultation platform with AI-assisted support and expert matching.",
      },
      {
        type: "paragraph",
        text: "Users could enter their issue, receive instant AI-generated guidance, and then connect with professionals based on their needs. The platform supported expert profiles, service categories, consultation discovery, and a simple mobile experience.",
      },
      {
        type: "paragraph",
        text: "Expertify Now’s app is positioned around AI-assisted answers, smarter expert matching, expert consultations, instant solutions, and a seamless user experience.",
      },

      {
        type: "heading",
        text: "Results and Impact",
      },
      {
        type: "paragraph",
        text: "The platform helped Expertify Now create a more accessible way for users to receive professional advice.",
      },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Simplify expert discovery",
          "Improve user trust and engagement",
          "Add AI-assisted consultation support",
          "Connect users with relevant professionals faster",
          "Create earning opportunities for experts",
          "Build a scalable consultation marketplace",
        ],
      },
      {
        type: "paragraph",
        text: "The app is available on both Google Play and the Apple App Store, with public listings showing positive user ratings and adoption.",
      },

      {
        type: "heading",
        text: "Built for What’s Next",
      },
      {
        type: "paragraph",
        text: "Expertify Now shows how AI can improve the consultation marketplace experience.",
      },
      {
        type: "paragraph",
        text: "By combining AI-assisted answers, smart expert matching, expert profiles, and real-time consultation workflows, the platform makes professional advice easier to access and easier to deliver.",
      },
      {
        type: "cta",
        text: "Ready to build a smarter expert marketplace? Let’s build what’s next, together.",
      },
    ],
  },
  {
    slug: "nestle",
    title: "Digital Consumer Experience Platform for Nestlé India",
    image: nestle,
    description:
      "Building a unified digital consumer experience platform for Nestlé India to showcase brands, products, nutrition, sustainability, and corporate information.",

    content: [
      {
        type: "paragraph",
        text: "When Nestlé India needed to strengthen its digital presence, the goal was to create a platform that could clearly present its brands, products, nutrition content, sustainability work, careers, and consumer support in one trusted online experience.",
      },
      {
        type: "paragraph",
        text: "The website needed to serve a wide audience, from consumers exploring products to job seekers, media teams, partners, and families looking for nutrition and wellness information.",
      },

      {
        type: "heading",
        text: "About the Client",
      },
      {
        type: "paragraph",
        text: "Nestlé India is part of Nestlé’s global food and beverage business and has built a long-standing relationship with Indian consumers. The company’s purpose is focused on enhancing quality of life and contributing to a healthier future.",
      },
      {
        type: "paragraph",
        text: "Its Indian platform showcases major product categories including beverages, breakfast cereals, chocolates and confectionery, dairy, foods, and nutrition.",
      },

      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "For a company with many brands, consumer groups, and public responsibilities, a website cannot simply act as a product catalogue.",
      },
      {
        type: "paragraph",
        text: "Nestlé India needed a digital platform that could organize large volumes of content while keeping the experience simple, trustworthy, and easy to navigate.",
      },
      {
        type: "paragraph",
        text: "The challenge was to bring together product discovery, nutrition education, sustainability stories, career information, and consumer contact support without making the website feel complex or overloaded.",
      },

      {
        type: "heading",
        text: "Our Approach",
      },
      {
        type: "paragraph",
        text: "The platform was structured around clarity, trust, and content accessibility.",
      },
      {
        type: "paragraph",
        text: "Instead of focusing only on products, the experience was designed to support multiple user journeys: consumers exploring brands, families looking for nutrition guidance, professionals searching for careers, and stakeholders reviewing sustainability initiatives.",
      },
      {
        type: "paragraph",
        text: "The content architecture helped users move easily between products, healthy living resources, sustainability programs, careers, and contact options.",
      },

      {
        type: "heading",
        text: "Solution Delivered",
      },
      {
        type: "paragraph",
        text: "The final website created a unified digital experience for Nestlé India’s consumer and corporate communication.",
      },
      {
        type: "paragraph",
        text: "Users can explore Nestlé’s product categories, learn about nutrition and healthy living, access recipes and cooking content, discover sustainability initiatives, and reach consumer support through official contact channels. Nestlé India also highlights sustainability themes such as water and environmental responsibility.",
      },

      {
        type: "heading",
        text: "Results and Impact",
      },
      {
        type: "paragraph",
        text: "The platform helped Nestlé India create a stronger digital bridge between its brands and consumers.",
      },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Product and brand discovery",
          "Nutrition and wellness education",
          "Consumer trust and support",
          "Corporate storytelling",
          "Sustainability communication",
          "Career discovery",
          "Better access to company information",
        ],
      },
      {
        type: "paragraph",
        text: "By organizing a large brand ecosystem into a clear digital structure, the website helps users find relevant information faster and engage more confidently with the company.",
      },

      {
        type: "heading",
        text: "Built for What’s Next",
      },
      {
        type: "paragraph",
        text: "Nestlé India’s platform shows how a large consumer brand can use digital experience design to connect products, purpose, and public communication.",
      },
      {
        type: "paragraph",
        text: "By combining brand content, nutrition education, sustainability stories, and consumer support, the website works as more than a corporate presence. It becomes a trusted digital gateway for consumers, families, professionals, and stakeholders.",
      },
      {
        type: "cta",
        text: "Ready to build a digital experience that connects brand trust with user clarity? Let’s build what’s next, together.",
      },
    ],
  },
  {
    slug: "cadbury",
    title: "Digital Brand Experience Platform for Cadbury UK",
    image: cadbury,
    description:
      "Building a digital brand experience platform for Cadbury UK to showcase products, campaigns, heritage, and consumer engagement in one unified experience.",

    content: [
      {
        type: "paragraph",
        text: "When Cadbury UK needed to bring its heritage, product range, campaigns, and consumer information into one digital experience, the goal was to create a platform that felt both nostalgic and modern.",
      },
      {
        type: "paragraph",
        text: "The website needed to help users explore Cadbury chocolates, discover brand stories, access product information, view campaigns, and connect with seasonal promotions in a simple and engaging way.",
      },

      {
        type: "heading",
        text: "About the Client",
      },
      {
        type: "paragraph",
        text: "Cadbury is one of the UK’s most recognized confectionery brands, with a history dating back to 1824. The brand is known for products such as Cadbury Dairy Milk, Creme Egg, Crunchie, Twirl, Heroes, Roses, Mini Eggs, and Bournville.",
      },
      {
        type: "paragraph",
        text: "Cadbury UK’s digital platform acts as a central destination for brand storytelling, product discovery, advertising campaigns, sustainability updates, partnerships, FAQs, and consumer information.",
      },

      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "Cadbury has a large product portfolio and a strong emotional connection with consumers. The challenge was to organize decades of brand heritage, current campaigns, product details, and promotional content without making the website feel crowded.",
      },
      {
        type: "paragraph",
        text: "The platform needed to serve different user journeys, including shoppers exploring chocolate products, fans looking for campaigns, consumers checking dietary information, and visitors interested in Cadbury’s history and social impact.",
      },

      {
        type: "heading",
        text: "Our Approach",
      },
      {
        type: "paragraph",
        text: "The website experience was structured around clarity, brand warmth, and easy discovery.",
      },
      {
        type: "paragraph",
        text: "The platform organized content into clear sections for products, brand history, campaigns, partnerships, sustainability, FAQs, and product information. This helped users move naturally from emotional brand storytelling to practical product details.",
      },
      {
        type: "paragraph",
        text: "The experience also gave Cadbury space to highlight seasonal campaigns, competitions, advertising activity, and initiatives such as Cocoa Life and sustainability-related content.",
      },

      {
        type: "heading",
        text: "Solution Delivered",
      },
      {
        type: "paragraph",
        text: "The final platform created a centralized digital home for Cadbury UK.",
      },
      {
        type: "paragraph",
        text: "Users can explore Cadbury’s chocolate brands, learn about the company’s story, discover latest campaigns, check product information, browse dietary categories such as vegetarian chocolate and under-100-calorie options, and engage with promotions and partnerships.",
      },

      {
        type: "heading",
        text: "Results and Impact",
      },
      {
        type: "paragraph",
        text: "The platform helped Cadbury UK strengthen its digital brand presence while making product and campaign discovery easier for consumers.",
      },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Product discovery across Cadbury’s chocolate portfolio",
          "Brand storytelling and heritage communication",
          "Campaign and promotion visibility",
          "Consumer FAQs and product information",
          "Sustainability and impact communication",
          "A more organized digital journey for different audiences",
        ],
      },

      {
        type: "heading",
        text: "Built for What’s Next",
      },
      {
        type: "paragraph",
        text: "Cadbury UK shows how a heritage brand can use digital experience design to connect nostalgia, product discovery, and modern consumer engagement.",
      },
      {
        type: "paragraph",
        text: "By combining product content, brand history, campaigns, and consumer support in one platform, Cadbury creates a digital experience that feels familiar, trusted, and ready for future brand engagement.",
      },

      {
        type: "cta",
        text: "Ready to build a stronger digital brand experience? Let’s build what’s next, together.",
      },
    ],
  },
];
