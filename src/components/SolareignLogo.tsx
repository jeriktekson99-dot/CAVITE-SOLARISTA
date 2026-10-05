export const SOLAREIGN_LOGO_URL = 'https://cdn.phototourl.com/member/2026-10-05-3a1b7512-f728-4b92-b449-18efb38f36cc.png';

interface SolareignLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function SolareignLogo({ className = '', variant = 'dark' }: SolareignLogoProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Company Official Logo Mark (Scaled +20%: 58px mobile, 64px desktop) */}
      <div className="relative w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] flex-shrink-0 flex items-center justify-center">
        <img
          src={SOLAREIGN_LOGO_URL}
          alt="Cavite Solarista Logo"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          className="w-full h-full object-contain pointer-events-none select-none transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Brand Typography: CAVITE on top (20px), SOLARISTA on bottom (12px, mt 2px) */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-black tracking-[0.08em] leading-none text-[20px] ${
            isDark ? 'text-[#03244F]' : 'text-white'
          }`}
          style={{ fontSize: '20px' }}
        >
          CAVITE
        </span>
        <span
          className="font-black tracking-[0.04em] leading-none text-[#F59E0B] text-[12px] mt-[2px]"
          style={{ marginTop: '2px', fontSize: '12px' }}
        >
          SOLARISTA
        </span>
      </div>
    </div>
  );
}
