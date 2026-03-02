import { useState } from 'react'
import { colors } from '../constants/colors'
import { TIPS } from '../constants/data'
import { SectionLabel, SectionTitle, SectionWrapper } from './UI'

function TipCard({ tip }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(200,16,46,0.3)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 14,
        padding: 24,
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.2s',
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 14 }}>{tip.icon}</div>
      <h4 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 20,
        letterSpacing: 1,
        color: colors.cream,
        marginBottom: 8,
      }}>
        {tip.title}
      </h4>
      <p style={{ fontSize: 13, color: 'rgba(245,240,232,0.55)', lineHeight: 1.6 }}>
        {tip.body}
      </p>
    </div>
  )
}

export default function Tips() {
  return (
    <SectionWrapper>
      <SectionLabel>Expert Advice</SectionLabel>
      <SectionTitle>PRO TIPS FOR{'\n'}THE ROAD</SectionTitle>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 20,
      }}>
        {TIPS.map((tip, i) => (
          <TipCard key={i} tip={tip} />
        ))}
      </div>
    </SectionWrapper>
  )
}
