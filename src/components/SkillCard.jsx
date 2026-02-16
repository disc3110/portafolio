import { isValidElement } from "react";
export default function SkillCard({ title, skills }) {
  return (
    <div className="bg-[#0B0B0B] border border-[#1a1a1a] rounded-2xl p-8 text-center hover:scale-105 transition duration-300">
      {/* scoped styles for stagger animation */}
      <style>{`
        @keyframes skillIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {title ? (
        <h3 className="text-2xl font-light tracking-wide mb-8 text-[#E6E0D4]">
          {title}
        </h3>
      ) : null}

      <div className="grid grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 text-[#E6E0D4] opacity-0"
            style={{
              animation: "skillIn 520ms ease-out forwards",
              animationDelay: `${idx * 70}ms`,
            }}
          >
            {/* Icon wrapper with subtle glow on hover */}
            <div
              className="
                text-4xl
                transition
                duration-200
                ease-out
                hover:scale-110
                hover:drop-shadow-[0_0_10px_rgba(230,224,212,0.28)]
              "
              aria-hidden="true"
            >
              {isValidElement(skill.icon) ? (
                skill.icon
              ) : typeof skill.icon === "function" ? (
                <skill.icon />
              ) : null}
            </div>

            <span className="text-sm opacity-80">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
