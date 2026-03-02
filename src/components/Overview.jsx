import { colors } from '../constants/colors'
import { STATE_SEQUENCE, SUMMARY_STATS } from '../constants/data'
import { SectionLabel, SectionTitle, SectionWrapper } from './UI'

export default function Overview() {
  return (
    <SectionWrapper>
      <SectionLabel>The Optimal Route</SectionLabel>
      <SectionTitle>SHORTEST PATH{'\n'}STRATEGY</SectionTitle>

      <p style={{
        fontSize: 15,
        color: 'rgba(245,240,232,0.65)',
        maxWidth: 700,
        lineHeight: 1.8,
        marginBottom: 40,
      }}>
        The optimal solution starts on the East Coast, sweeps through the South, climbs the West
        Coast, crosses through the Northern plains, and handles Alaska &amp; Hawaii as fly-in
        additions. Achieving approximately{' '}
        <strong style={{ color: colors.gold }}>13,000 road miles</strong> for the contiguous 48
        states (+2 flights for AK &amp; HI).
      </p>

      {/* Summary Banner */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.red}, #8B0000)`,
        padding: '30px 40px',
        borderRadius: 16,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 20,
        textAlign: 'center',
        marginBottom: 50,
      }}>
        {SUMMARY_STATS.map(([n, l]) => (
          <div key={l}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 44,
              color: 'white',
              lineHeight: 1,
            }}>
              {n}
            </div>
            <div style={{
              fontSize: 11,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
              marginTop: 4,
            }}>
              {l}
            </div>
          </div>
        ))}
      </div>

      {/* State Sequence */}
      <SectionLabel>Complete State Sequence</SectionLabel>
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 24,
        marginBottom: 16,
        color: colors.cream,
      }}>
        ALL 50 STATES IN ORDER
      </h3>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        padding: 28,
        background: 'rgba(255,255,255,0.02)',
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        {STATE_SEQUENCE.map(([abbr, name], i) => (
          <div
            key={abbr}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 12,
              fontWeight: 500,
              color: 'rgba(245,240,232,0.8)',
            }}
          >
            <span style={{
              background: colors.red,
              color: 'white',
              fontSize: 11,
              fontWeight: 700,
              padding: '2px 7px',
              borderRadius: 4,
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: 1,
            }}>
              {abbr}
            </span>
            {name}
            {i < STATE_SEQUENCE.length - 1 && (
              <span style={{ color: 'rgba(244,197,66,0.4)', fontSize: 14, marginLeft: 2 }}>
                {abbr === 'ID' || abbr === 'AK' ? '✈' : '→'}
              </span>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
