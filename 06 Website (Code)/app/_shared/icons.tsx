/* Konsistentes, minimalistisches Icon-System für Leistungen und Ablauf.
   Alle Icons: 24x24 viewBox, gleicher Strichstil (stroke="currentColor",
   strokeWidth 1.6, round caps/joins, kein Fill außer bei kleinen Akzent-
   punkten). Reines inline-SVG, keine Icon-Bibliothek, keine Emoji. Farbe wird
   ausschließlich über `currentColor` von der umgebenden CSS-Farbe (Section-
   abhängig: Cyan auf Navy, gedecktes Navy auf Hell) geerbt — dadurch bleibt
   der Stil über die ganze Website konsistent. */

import { ReactNode, SVGProps } from "react";

function IconBase({ children, ...rest }: { children: ReactNode } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function IconWebsite(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      <circle cx="6" cy="7.25" r="0.6" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function IconRedesign(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 12a8 8 0 0 1 13.9-5.4L20 8.5" />
      <path d="M20 4.5v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.9 5.4L4 15.5" />
      <path d="M4 19.5v-4h4" />
    </IconBase>
  );
}

export function IconLandingpage(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="11" x2="16" y2="11" />
      <rect x="8" y="14.5" width="8" height="3" rx="1" />
    </IconBase>
  );
}

export function IconSeo(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="15.3" y1="15.3" x2="20" y2="20" />
    </IconBase>
  );
}

export function IconBetreuung(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </IconBase>
  );
}

export function IconGespraech(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7l-4 3.5V15H6a2 2 0 0 1-2-2V6z" />
      <circle cx="9" cy="9.5" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="12" cy="9.5" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9.5" r="0.55" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function IconAnalyse(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.7" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function IconKonzept(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" />
      <path d="M4 12l8 4.5 8-4.5" />
      <path d="M4 16.5l8 4.5 8-4.5" />
    </IconBase>
  );
}

export function IconLaunch(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 20V6" />
      <path d="M7 11l5-5 5 5" />
      <circle cx="12" cy="20" r="1.1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function IconWachstum(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 17l5-5 4 4 7-8" />
      <path d="M16 8h4v4" />
    </IconBase>
  );
}

export function IconServices(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1.2" />
      <rect x="13" y="4" width="7" height="7" rx="1.2" />
      <rect x="4" y="13" width="7" height="7" rx="1.2" />
      <rect x="13" y="13" width="7" height="7" rx="1.2" />
    </IconBase>
  );
}

export function IconVisibility(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  );
}

export function IconProcess(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="6" cy="6" r="2.3" />
      <circle cx="18" cy="6" r="2.3" />
      <circle cx="12" cy="18" r="2.3" />
      <path d="M7.8 7.6L11 15.5" />
      <path d="M16.2 7.6L13 15.5" />
      <path d="M8.3 6h7.4" />
    </IconBase>
  );
}

export function IconTrust(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3.5l2.4 5 5.5.7-4 3.9.9 5.5-4.8-2.6-4.8 2.6.9-5.5-4-3.9 5.5-.7 2.4-5z" />
    </IconBase>
  );
}

export function IconIdentity(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3a9 9 0 0 1 9 9" />
      <path d="M12 3a9 9 0 0 0-9 9c0 2 .5 3.5 1.3 4.8" />
      <path d="M12 7a5 5 0 0 1 5 5" />
      <path d="M12 7a5 5 0 0 0-5 5c0 2 .6 3.4 1.5 4.5" />
      <path d="M12 11a1 1 0 0 1 1 1c0 3-1 5-3 6.5" />
    </IconBase>
  );
}

export function IconStrategy(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </IconBase>
  );
}

export function IconSupport(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5.5" />
    </IconBase>
  );
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </IconBase>
  );
}

export function IconLocation(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </IconBase>
  );
}

export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10.5 19.5 4.5 13.5 4.5 6.5A2 2 0 0 1 6.5 3z" />
    </IconBase>
  );
}

export function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </IconBase>
  );
}
