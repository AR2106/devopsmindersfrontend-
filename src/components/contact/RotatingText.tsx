import { useEffect, useState } from "react";

const texts = [
  "Cloud Cost Overruns?",
  "Slow Deployments?",
  "Unstable Infrastructure?",
  "Need CI/CD Pipelines?",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setAnimate(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-16 flex items-center justify-center">
      <h2
        className={`text-2xl md:text-4xl text-gray-400 font-medium transition-all duration-300 ${
          animate ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {texts[index]}
      </h2>
    </div>
  );
}
