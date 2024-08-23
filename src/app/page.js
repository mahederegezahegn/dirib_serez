import Image from "next/image";
import Hero from '../components/Hero'; // Adjust the path based on your project structure
import About from '../components/About'; // Adjust the path based on your project structure
import Work from '../components/Work'; // Adjust the path based on your project structure
import Project from '../components/Project'; // Adjust the path based on your project structure
import Projects from '../components/Projects'; // Adjust the path based on your project structure
import Gallery from '../components/Gallery'; // Adjust the path based on your project
import ProjectsList from '../components/ProjectsList'; // Adjust the path based on your project'
import Team from '../components/Team';
export default function Home() {
  return (
    <main>

<Hero />
<About />
<Work />
<Project />
<Gallery />
<ProjectsList />
<Gallery />
<Projects />
<Team />
      </main>
  );
}
