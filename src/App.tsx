import { motion } from 'framer-motion';
import { BentoGrid } from './components/Layout/BentoGrid';
import ProfileCard from './components/Cards/ProfileCard';
import SocialCard from './components/Cards/SocialCard';
import SkillsCard from './components/Cards/SkillsCard';
import AboutCard from './components/Cards/AboutCard';
import EducationCard from './components/Cards/EducationCard';
import ProjectsCard from './components/Cards/ProjectsCard';
import ExperienceCard from './components/Cards/ExperienceCard';
import ContactCard from './components/Cards/ContactCard';
import Background from './components/Layout/Background';
import FixedResumeButton from './components/Buttons/FixedResumeButton';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 font-sans text-gray-900 relative">
      <Background />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <BentoGrid>
          {/* Row 1 */}
          <ProfileCard />
          <SocialCard />
          <EducationCard />

          {/* Row 2 */}
          <ExperienceCard />

          {/* Row 3 */}
          <SkillsCard />
          <AboutCard />

          {/* Filler / Stats / Resume download? */}
          {/* <BentoItem colSpan={2} rowSpan={1} className="flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white cursor-pointer hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold font-syne">Resume / CV</h2>
          </BentoItem> */}

          {/* Projects Section */}
          <ProjectsCard />

          {/* Contact Section */}
          <ContactCard />
        </BentoGrid>
      </motion.div>

      <footer className="text-center mt-10 text-gray-500 text-sm font-medium">
        <p>© {new Date().getFullYear()} Krishna Sahith. Built with React & Framer Motion.</p>
      </footer>
      <FixedResumeButton />
    </div>
  );
}

export default App;
