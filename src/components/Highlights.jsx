import { useState } from 'react'
import { colors } from '../constants/colors'
import { HIGHLIGHTS } from '../constants/data'
import { SectionLabel, SectionTitle, SectionWrapper } from './UI'

function HighlightCard({ h }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(244,197,66,0.3)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 12,
        padding: 20,
        display: 'flex',
        gap: 16,
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.2s',
        cursor: 'default',
      }}
    >
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 32,
        color: colors.gold,
        lineHeight: 1,
        minWidth: 44,
        opacity: 0.6,
      }}>
        {h.num}
      </div>
      <div>
        <span style={{
          display: 'inline-block',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: 1,
          color: colors.gold,
          background: 'rgba(244,197,66,0.1)',
          border: '1px solid rgba(244,197,66,0.2)',
          padding: '2px 8px',
          borderRadius: 20,
          marginBottom: 6,
        }}>
          {h.state}
        </span>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: colors.cream, marginBottom: 4 }}>
          {h.name}
        </h3>
        <p style={{ fontSize: 12, color: 'rgba(245,240,232,0.5)', lineHeight: 1.5 }}>
          {h.body}
        </p>
      </div>
    </div>
  )
}

export default function Highlights() {
  return (
    <SectionWrapper>
      <SectionLabel>Bucket List</SectionLabel>
      <SectionTitle>25 UNMISSABLE{'\n'}STOPS</SectionTitle>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 16,
      }}>
        {HIGHLIGHTS.map((h, i) => (
          <HighlightCard key={i} h={h} />
        ))}
      </div>
    </SectionWrapper>
  )
}
