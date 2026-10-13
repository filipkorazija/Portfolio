import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from './AI.module.css';

export const metadata: Metadata = {
  title: 'AI: Filip Koražija',
  description: 'My perspective on AI: a daily development companion, independent thinking, and responsibility for the code I ship.',
};

export default function AIPage() {
  return <>
    <Navigation />
    <main id="main" className={styles.main}>
      <article className={'container ' + styles.article} aria-labelledby="ai-title">
        <header className={styles.intro}>
          <h1 id="ai-title">AI, and how I work with it.</h1>
          <p className={styles.lead}>I use AI every day. I still think for myself, understand my code, and take responsibility for the result.</p>
        </header>

        <div className={styles.body}>
          <section aria-labelledby="companion-title">
            <h2 id="companion-title">A companion in the work</h2>
            <p>I’m a proud developer, a junior software engineer, and someone actively studying computer science. I love AI. It gives me someone to think aloud with, helps me explore different approaches, and opens up new ways of building things.</p>
            <p>Could it take over parts of my work one day? Possibly. I want to grow alongside it: learn how it works, understand its limits, and keep getting better at using it.</p>
          </section>

          <section aria-labelledby="thinking-title">
            <h2 id="thinking-title">Keeping my own reasoning</h2>
            <p>I don’t ask AI to write everything for me. I want to understand the code and the logic behind it, and I still spend hours at my computer tracking down a bug or working through a difficult problem.</p>
            <p>It’s tempting to turn every obstacle into another prompt: “fix this,” “what’s this,” “how do I do this?” I try to pause and reason through the problem myself. That effort is part of learning, and I don’t want to lose it.</p>
          </section>

          <section aria-labelledby="use-title">
            <h2 id="use-title">Where AI helps me</h2>
            <p>I use it to compare approaches, discuss edge cases, draft tests, and work through unfamiliar ideas. Used well, it can accelerate development and give me more room to focus on the decisions that matter.</p>
            <p>I can code independently, and I keep studying and practising because that ability matters to me. I enjoy new work and opportunities, especially when they push me to learn something I haven’t done before.</p>
          </section>

          <section aria-labelledby="responsibility-title">
            <h2 id="responsibility-title">The responsibility stays with me</h2>
            <p>AI can produce useful code, but it can also miss context, make assumptions, or solve the wrong problem. For now, I don’t trust it to bring the common sense and understanding of the end goal that a developer needs.</p>
            <p>Complex work needs supervision. I review what it produces, question its choices, and check that the result actually does what I intended. If I don’t understand a piece of code, I need to learn enough to evaluate it before relying on it.</p>
            <p>My view is simple: AI is a great tool when you know how to code and use it thoughtfully. I’m happy to use it, and just as happy to sit down and build something on my own.</p>
          </section>

          <p className={styles.closing}><Link href="/#projects">Explore my projects</Link><span>or</span><Link href="/#contact">Get in touch</Link></p>
        </div>
      </article>
      <Footer topHref="#main" />
    </main>
  </>;
}
