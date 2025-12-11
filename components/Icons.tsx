import React from 'react';
import { COLORS } from '../types';

export const LogoTDIA: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" fill="none" opacity="0.8"/>
    <text x="50" y="55" textAnchor="middle" fill="white" fontSize="24" fontFamily="Rubik" fontWeight="bold">TD&IA</text>
  </svg>
);

export const ArrowRight: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export const ArrowLeft: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

// Custom "UnDraw" style illustration using brand colors
export const TabiIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Abstract Background Shapes */}
    <circle cx="300" cy="150" r="100" fill={COLORS.skyblue} opacity="0.2" />
    <rect x="50" y="50" width="100" height="100" rx="20" fill={COLORS.lapis} opacity="0.1" />
    
    {/* Character / Dashboard representation */}
    <rect x="80" y="80" width="240" height="160" rx="8" fill="white" stroke={COLORS.lapis} strokeWidth="2"/>
    
    {/* Dashboard Bars */}
    <rect x="100" y="100" width="40" height="80" rx="4" fill={COLORS.lapis} />
    <rect x="150" y="120" width="40" height="60" rx="4" fill={COLORS.bluegreen} />
    <rect x="200" y="90" width="40" height="90" rx="4" fill={COLORS.darkcyan} />
    <rect x="250" y="140" width="40" height="40" rx="4" fill={COLORS.cyan} />

    {/* Character Head */}
    <circle cx="280" cy="220" r="30" fill={COLORS.lapis} />
    {/* Character Body */}
    <path d="M250 290 C250 260, 310 260, 310 290" stroke={COLORS.lapis} strokeWidth="40" strokeLinecap="round" />
    
    {/* Floating Elements (Clocks/Time) */}
    <circle cx="60" cy="220" r="25" fill="white" stroke={COLORS.darkcyan} strokeWidth="2"/>
    <path d="M60 220 L60 205" stroke={COLORS.darkcyan} strokeWidth="2" strokeLinecap="round"/>
    <path d="M60 220 L70 220" stroke={COLORS.darkcyan} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
