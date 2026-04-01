import SkillAi from '@/assets/images/skills-ai.png'
import SkillAws from '@/assets/images/skills-aws.png'
import SkillBootstrap from '@/assets/images/skills-bootstrap.png'
import SkillCss from '@/assets/images/skills-css.png'
import SkillFigma from '@/assets/images/skills-figma.png'
import SkillGit from '@/assets/images/skills-git.png'
import SkillJava from '@/assets/images/skills-java.png'
import SkillGitHub from '@/assets/images/skills-github.png'
import SkillSpring from '@/assets/images/skills-spring_boot.png'
import SkillMySQL from '@/assets/images/skills-mysql.png'
import SkillPostgre from '@/assets/images/skills-postgresql.png'
import SkillHtml from '@/assets/images/skills-html.png'
import SkillId from '@/assets/images/skills-id.png'
import SkillJs from '@/assets/images/skills-js.png'
import SkillPs from '@/assets/images/skills-ps.png'
import ProjectPreviewOne from '@/assets/images/proyects-preview-1.png'
import ProjectPreviewTwo from '@/assets/images/proyects-preview-2.png'
import SkillSass from '@/assets/images/skills-sass.png'
import SkillVite from '@/assets/images/skills-vite.png'
import SkillVue from '@/assets/images/skills-vue.png'

export const heroActions = [
  {
    label: 'Ver proyectos',
    icon: 'github',
    href: '#projects',
  },
  {
    label: 'Contáctame',
    icon: 'linkedin',
    href: '#contact',
  },
  {
    label: 'Solicitar CV',
    icon: 'download',
    href: 'mailto:ni.ferng@gmail.com?subject=Solicitud%20de%20CV',
  },
]

export const educationItems = [
   {
    title: 'Tech Advanced G9',
    institution: 'Oracle Next Education - Alura Latam',
    year: '2026',
  },
  {
    title: 'Desarrollo Full Stack Java',
    institution: 'Talento Digital - OTEC English Always',
    year: '2025-2026',
  },
  {
    title: 'Tech Foundation G9',
    institution: 'Oracle Next Education - Alura Latam',
    year: '2025-2026',
  },
  {
    title: 'Arquitectura cloud',
    institution: 'Talento Digital -ECAS Ltda.',
    year: '2025',
  },
  {
    title: 'Desarrollador front-end',
    institution: 'Talento Digital -Academia Desafío Latam',
    year: '2024',
  },
  {
    title: 'Diseño gráfico',
    institution: 'DUOC UC',
    year: '2010-2014',
  },
]

export const projectItems = [
  {
    title: 'As de Papel',
    category: 'Landing page',
    description:
      'Sitio web oficial para una marca chilena de papelería personalizada. Prioricé una interfaz limpia, visual y fácil de recorrer.',
    image: ProjectPreviewOne,
    tags: ['Vue', 'Sass', 'UI'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Amigo secreto',
    category: 'Juego',
    description:
      'Challenge académico del programa ONE G9. Organicé la interacción y el feedback visual para hacerlo simple y claro.',
    image: ProjectPreviewTwo,
    tags: ['JavaScript', 'Responsive', 'UX'],
    demoUrl: '#',
    repoUrl: '#',
  },
]

export const skillItems = [
  { name: 'HTML', image: SkillHtml },
  { name: 'CSS', image: SkillCss },
  { name: 'JavaScript', image: SkillJs },
  { name: 'Vue', image: SkillVue },
  { name: 'Vite', image: SkillVite },
  { name: 'Sass', image: SkillSass },
  { name: 'Bootstrap', image: SkillBootstrap },
  { name: 'Git', image: SkillGit },
  { name: 'GitHub', image: SkillGitHub },
  { name: 'Java', image: SkillJava },
  { name: 'Spring Boot', image: SkillSpring },
  { name: 'MySQL', image: SkillMySQL },
  { name: 'PostgreSQL', image: SkillPostgre },
  { name: 'AWS', image: SkillAws },
  { name: 'Figma', image: SkillFigma },
  { name: 'Illustrator', image: SkillAi },
  { name: 'Photoshop', image: SkillPs },
  { name: 'InDesign', image: SkillId },
]

export const contactDetails = {
  email: 'ni.ferng@gmail.com',
  location: 'San Pedro de la Paz, Chile',
  availability: 'Disponible para oportunidades laborales en desarrollo web.',
}