import styles from './Skills.module.css';

const groups = [
  { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript / JavaScript', 'CSS', 'Tailwind', 'Bootstrap'] },
  { title: 'Backend', skills: ['Java', 'C#', 'PHP', 'Node.js', 'Fastify', 'PostgreSQL / MySQL'] },
  { title: 'Infrastructure', skills: ['Linux', 'Docker', 'Cloudflare', 'Pterodactyl', 'Redis', 'Git'] },
  { title: 'Games', skills: ['Unity 6', 'C#', 'Netcode for GameObjects', 'Unity Transport', 'Minecraft'] },
  { title: 'Mobile', skills: ['Kotlin', 'Android', 'Flutter', 'REST APIs'] },
  { title: 'Robotics', skills: ['Python', 'NAOqi', 'Choregraphe'] },
];

export default function SkillsSection() {
  return <section id="skills" className={'container ' + styles.skills}>
    <h2>What I work with</h2>
    <p className={styles.disclaimer}>My strongest areas are Java, C#, and web development. This list also includes languages and tools I’ve used on one or a few projects; it doesn’t imply equal fluency in all of them.</p>
    <dl>{groups.map(group => <div key={group.title} className={styles.row}>
      <dt>{group.title}</dt>
      <dd>{group.skills.map(skill => <span key={skill}>{skill}</span>)}</dd>
    </div>)}</dl>
  </section>;
}
