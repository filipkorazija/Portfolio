import type { CSSProperties, ReactNode } from 'react';
type IconName = 'arrow' | 'down' | 'github' | 'linkedin' | 'code' | 'close' | 'chevron' | 'snow' | 'mail' | 'expand';
export default function Icon({ name, size = 18, style }: { name: IconName; size?: number; style?: CSSProperties }) {
  const paths: Record<IconName, ReactNode> = {
    expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />,
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    github: <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.8c0-1 .1-1.5-.5-2.2 3-.3 6.2-1.5 6.2-6.7 0-1.5-.5-2.7-1.4-3.7.1-.4.6-1.8-.2-3.6 0 0-1.2-.4-3.8 1.4a13 13 0 0 0-6.6 0C6.1 1.6 4.9 2 4.9 2c-.8 1.8-.3 3.2-.2 3.6a5.3 5.3 0 0 0-1.4 3.7c0 5.2 3.2 6.4 6.2 6.7-.5.5-.6 1.2-.5 2.2V22" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
    code: <path d="m8 5-7 7 7 7m8-14 7 7-7 7m-3-16-2 20" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    chevron: <path d="m9 5 7 7-7 7" />,
    snow: <path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 3 3-3M9 20l3-3 3 3M3.5 10l4-1-1-4m15 9-4 1 1 4M6.5 19l1-4-4-1m14-9-1 4 4 1" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}>{paths[name]}</svg>;
}
