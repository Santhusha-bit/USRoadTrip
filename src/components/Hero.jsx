import { colors } from '../constants/colors'
import { STATS } from '../constants/data'

export default function Hero() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0A1628 0%, #1A2744 50%, #0D2040 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '40px 20px',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 80% 40% at 50% 0%, rgba(200,16,46,0.15) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 20% 100%, rgba(244,197,66,0.1) 0%, transparent 50%)
        `,
      }} />

      {/* Stars */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 100%),
          radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 10% 60%, rgba(255,255,255,0.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 90% 50%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 45% 15%, rgba(255,255,255,0.6) 0%, transparent 100%),
          radial-gradient(1px 1px at 75% 85%, rgba(255,255,255,0.4) 0%, transparent 100%)
        `,
        pointerEvents: 'none',
      }} />

      <p style={{
        fontSize: 11,
        letterSpacing: 6,
        textTransform: 'uppercase',
        color: colors.gold,
        marginBottom: 20,
        position: 'relative',
      }}>
        The Ultimate American Adventure
      </p>

      <h1 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(72px, 15vw, 160px)',
        lineHeight: 0.9,
        letterSpacing: -2,
        position: 'relative',
      }}>
        <span style={{ color: colors.red }}>ALL</span><br />
        50 <span style={{ color: colors.gold }}>STATES</span><br />
        ROAD TRIP
      </h1>

      <p style={{
        fontStyle: 'italic',
        fontSize: 'clamp(16px, 2.5vw, 22px)',
        color: 'rgba(245,240,232,0.7)',
        marginTop: 20,
        position: 'relative',
      }}>
        The most efficient route across the entire United States
      </p>

      <div style={{
        display: 'flex',
        gap: 40,
        marginTop: 50,
        flexWrap: 'wrap',
        justifyContent: 'center',
        position: 'relative',
      }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 48,
                color: colors.gold,
                lineHeight: 1,
              }}>
                {s.num}
              </div>
              <div style={{
                fontSize: 11,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.5)',
                marginTop: 4,
              }}>
                {s.label}
              </div>
            </div>
            {i < STATS.length - 1 && (
              <div style={{ width: 1, height: 60, background: 'rgba(245,240,232,0.2)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
