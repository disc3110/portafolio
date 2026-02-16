import Section from "../components/Section";
import SkillCard from "../components/SkillCard";
import {
  frontendSkills,
  backendSkills,
  miscSkills,
} from "../data/skills";
import { useT } from "../i18n/i18n.jsx";

export default function Skills() {

  const { t } = useT()

  return (
     <Section id="skills" title={t.sections.skills || 'Skills'}>
      <div className="grid gap-10 lg:gap-12 md:grid-cols-3">
        <div className="flex flex-col items-center">
          <h3 className="text-xl sm:text-2xl dark:font-light tracking-wide mb-6 dark:text-[#E6E0D4] font-bold">
            Front-end
          </h3>
          <SkillCard title="" skills={frontendSkills} />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl sm:text-2xl dark:font-light tracking-wide mb-6 dark:text-[#E6E0D4] font-bold">
            Back-end
          </h3>
          <SkillCard title="" skills={backendSkills} />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl sm:text-2xl dark:font-light tracking-wide mb-6 dark:text-[#E6E0D4]">
            Misc
          </h3>
          <SkillCard title="" skills={miscSkills} />
        </div>
      </div>
    </Section>
  );
}