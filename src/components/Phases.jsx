import { colors } from '../constants/colors'
import { PHASES } from '../constants/data'
import { SectionLabel, SectionTitle, SectionWrapper } from './UI'

export default function Phases() {
  return (
    <SectionWrapper>
      <SectionLabel>90-Day Travel Plan</SectionLabel>
      <SectionTitle>PHASE BY{'\n'}PHASE GUIDE</SectionTitle>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {PHASES.map((phase, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '100px 1fr',
              gap: 24,
              position: 'relative',
              paddingBottom: 40,
            }}
          >
            {/* Vertical connector line */}
            {i < PHASES.length - 1 && (
              <div style={{
                position: 'absolute',
                left: 50,
                top: 56,
                bottom: 0,
                width: 2,
                background: 'linear-gradient(to bottom, rgba(244,197,66,0.4), transparent)',
              }} />
            )}

            {/* Phase number circle */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: phase.isSpecial ? colors.gold : colors.red,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 20,
                color: phase.isSpecial ? colors.navy : 'white',
                boxShadow: `0 0 30px ${phase.isSpecial ? 'rgba(244,197,66,0.4)' : 'rgba(200,16,46,0.4)'}`,
                flexShrink: 0,
              }}>
                {phase.num}
              </div>
              <div style={{
                fontSize: 10,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.4)',
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}>
                {phase.weeks}
              </div>
            </div>

            {/* Phase content */}
            <div style={{ paddingTop: 8 }}>
              <h3 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 28,
                color: colors.gold,
                marginBottom: 8,
                letterSpacing: 1,
              }}>
                {phase.title}
              </h3>

              <p style={{
                fontSize: 14,
                color: 'rgba(245,240,232,0.7)',
                lineHeight: 1.7,
                marginBottom: 12,
              }}>
                {phase.desc}
              </p>

              {/* State tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                {phase.states.map(s => (
                  <span key={s} style={{
                    fontSize: 11,
                    fontWeight: 500,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '3px 10px',
                    borderRadius: 20,
                    color: 'rgba(245,240,232,0.7)',
                  }}>
                    {s}
                  </span>
                ))}
              </div>

              <p style={{ fontSize: 12, color: 'rgba(245,240,232,0.4)' }}>
                <strong style={{ color: colors.gold }}>{phase.miles}</strong> · Top stops: {phase.stops}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
