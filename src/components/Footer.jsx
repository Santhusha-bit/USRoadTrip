export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '60px 40px' }}>
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 32,
        letterSpacing: 4,
        color: 'rgba(245,240,232,0.2)',
        marginBottom: 16,
      }}>
        AMERICA AWAITS
      </div>
      <p style={{
        fontSize: 12,
        color: 'rgba(245,240,232,0.3)',
        letterSpacing: 2,
        textTransform: 'uppercase',
      }}>
        All 50 States Road Trip · ~13,000 Miles · 90 Days · ~$11,843 Per Person (Mid-Range)
      </p>
      <p style={{ fontSize: 12, color: 'rgba(245,240,232,0.2)', marginTop: 8, letterSpacing: 1 }}>
        Distances and costs are estimates. Plan for flexibility — the best moments are unplanned.
      </p>
    </footer>
  )
}
