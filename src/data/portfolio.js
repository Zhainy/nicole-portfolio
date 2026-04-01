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
    certificateUrl: '',
  },
  {
    title: 'Desarrollo Full Stack Java',
    institution: 'Talento Digital - OTEC English Always',
    year: '2025-2026',
    certificateUrl: '',
  },
  {
    title: 'Tech Foundation G9',
    institution: 'Oracle Next Education - Alura Latam',
    year: '2025-2026',
    certificateUrl: 'https://app.aluracursos.com/program/certificate/0e269e13-b264-46b3-b23d-f5aba0838ff2?lang',
  },
  {
    title: 'Arquitectura cloud',
    institution: 'Talento Digital -ECAS Ltda.',
    year: '2025',
    certificateUrl: 'https://www.acreditta.com/credential/594318db-e663-4192-8e6b-3484ab002771?resource_type=badge&resource=594318db-e663-4192-8e6b-3484ab002771',
  },
  {
    title: 'Desarrollador front-end',
    institution: 'Talento Digital -Academia Desafío Latam',
    year: '2024',
    certificateUrl: 'https://www.acreditta.com/credential/9479c124-d5b4-4220-89aa-24c62657b77f?resource_type=badge&resource=9479c124-d5b4-4220-89aa-24c62657b77f',
  },
  {
    title: 'Diseño gráfico',
    institution: 'DUOC UC',
    year: '2010-2014',
    certificateUrl: '',
  },
]

export const projectItems = [
  {
    title: 'LukApp Wallet',
    category: 'Full Stack SaaS',
    description:
      'Plataforma de gestión financiera personal con arquitectura Spring Boot. Permite el control total de presupuestos, transacciones y visualización de datos en tiempo real.',
    image: ProjectPreviewOne, // Reemplazar con captura de LukApp
    tags: ['Java', 'Spring Boot', 'MySQL', 'Vue.js'],
    demoUrl: '#',
    repoUrl: 'https://github.com/Zhainy/LukApp-Wallet',
  },
  {
    title: 'Voll.med API',
    category: 'Back-end REST',
    description:
      'Sistema de gestión para una clínica médica. Implementa autenticación JWT, validaciones de reglas de negocio complejas y documentación técnica con Swagger.',
    image: ProjectPreviewTwo, // Reemplazar con captura de Voll-Med
    tags: ['Java', 'Spring Boot', 'MySQL', 'Flyway'],
    demoUrl: '#',
    repoUrl: 'https://github.com/Zhainy/Voll-Med-Alura',
  },
  {
    title: 'Biblioteca Digital UNTEC',
    category: 'Web Application',
    description:
      'Sistema de préstamos y gestión de libros. Enfocado en la organización de catálogos y una experiencia de usuario fluida para la administración de recursos.',
    image: ProjectPreviewOne, 
    tags: ['Java', 'Spring Boot', 'Thymeleaf', 'PostgreSQL'],
    demoUrl: '#',
    repoUrl: 'https://github.com/Zhainy/biblioteca-digital-UNTEC',
  },
  {
    title: 'OTEC Primavera (ABP)',
    category: 'Full Stack Collaborative',
    description:
      'Proyecto desarrollado bajo metodología ABP. Un sistema integral para gestión de capacitaciones que destaca por su trabajo en equipo y arquitectura escalable.',
    image: ProjectPreviewTwo,
    tags: ['Java', 'Spring Boot', 'JSP', 'Collaboration'],
    demoUrl: 'https://otec-primavera-abp6-production.up.railway.app/login',
    repoUrl: 'https://github.com/Zhainy/OTEC-Primavera-ABP6',
  },
  {
    title: 'As de Papel',
    category: 'Landing Page & UI',
    description:
      'Landing page para marca de papelería. Un diseño "pixel-perfect" con alta atención al detalle visual, animaciones suaves y optimización responsiva.',
    image: ProjectPreviewOne,
    tags: ['HTML5', 'Sass', 'JavaScript', 'Design'],
    demoUrl: 'https://zhainy.github.io/as-de-papel-landing/',
    repoUrl: 'https://github.com/Zhainy/asdepapel-landing',
  }
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