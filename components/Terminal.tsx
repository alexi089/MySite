export default function Terminal() {
  return (
    <div className="animate-float rounded-xl border border-white/10 overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.25)]"
      style={{ background: 'rgba(9,9,9,0.88)' }}>
      {/* Mac-style title bar */}
      <div className="flex items-center gap-[6px] px-4 py-3 border-b border-white/[0.06]"
        style={{ background: 'rgba(255,255,255,0.04)' }}>
        <span className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
        <span className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
        <span className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
      </div>

      {/* Terminal body */}
      <div className="p-4 font-mono text-[11px] leading-[1.9] text-white/70 min-w-[280px]">
        <div className="text-white/30">~/projects/longitude-marine</div>
        <div>
          <span className="text-[#4ade80]">✓</span>{' '}
          <span className="text-[#60a5fa]">npm run build</span>
        </div>
        <div className="text-white/30">compiled successfully in 2.4s</div>
        <div>&nbsp;</div>
        <div>
          <span className="text-[#4ade80]">✓</span>{' '}
          <span>deployed to vercel</span>
        </div>
        <div className="text-white/30">→ https://longitudemarine.com</div>
        <div>&nbsp;</div>
        <div>
          <span className="text-white">$</span>{' '}
          <span className="text-white/50">git commit -m </span>
          <span className="text-[#4ade80]">&quot;always shipping&quot;</span>
        </div>
        <div className="text-white/30 animate-pulse">▋</div>
      </div>
    </div>
  )
}
