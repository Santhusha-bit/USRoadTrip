import { colors } from '../constants/colors'
import { NAV_TABS } from '../constants/data'

export default function NavTabs({ active, setActive }) {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(10,22,40,0.95)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      justifyContent: 'center',
      gap: 4,
      padding: '12px 20px',
      flexWrap: 'wrap',
    }}>
      {NAV_TABS.map(tab => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          aria-current={active === tab ? 'page' : undefined}
          style={{
            background: active === tab ? colors.red : 'transparent',
            border: active === tab ? 'none' : '1px solid rgba(255,255,255,0.1)',
            color: active === tab ? 'white' : 'rgba(245,240,232,0.6)',
            padding: '8px 20px',
            borderRadius: 20,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            letterSpacing: 0.5,
          }}
          onMouseEnter={e => {
            if (active !== tab) {
              e.currentTarget.style.color = colors.cream
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
            }
          }}
          onMouseLeave={e => {
            if (active !== tab) {
              e.currentTarget.style.color = 'rgba(245,240,232,0.6)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            }
          }}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}
