import { colors } from '../constants/colors'

export function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: 10,
      letterSpacing: 5,
      textTransform: 'uppercase',
      color: colors.red,
      fontWeight: 600,
      marginBottom: 10,
    }}>
      {children}
    </p>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: 'clamp(42px, 6vw, 70px)',
      lineHeight: 1,
      marginBottom: 36,
      color: colors.cream,
    }}>
      {children}
    </h2>
  )
}

export function Divider() {
  return (
    <div style={{
      width: '100%',
      height: 1,
      background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
    }} />
  )
}

export function FlagStripe() {
  return (
    <div style={{
      width: '100%',
      height: 6,
      background: `repeating-linear-gradient(to right, ${colors.red} 0px, ${colors.red} 50px, #fff 50px, #fff 100px)`,
      opacity: 0.4,
    }} />
  )
}

export function SectionWrapper({ children }) {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 40px' }}>
      {children}
    </div>
  )
}
