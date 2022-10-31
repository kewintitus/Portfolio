import type { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import { Experience, PageInfo, Project, Social } from '../typings';
import { fetchExperience } from '../utils/fetchExperience';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocial';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  socials: Social[];
  projects: Project[];
};

const Home = ({ pageInfo, experiences, socials, projects }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll 
    overflow-x-hidden z-0  scrollbar-track-gray-700/20 scrollbar-thumb-red-700 scrollbar-thin"
    >
      <Head>
        <title>Kewin Portfolio</title>
        <meta name="description" content="Portfolio website of kewin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start scroll-smooth">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetServerSideProps<Props> = async () => {
  const pageInfo: any = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      socials,
      projects,
    },
  };
};
