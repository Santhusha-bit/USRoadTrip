import { colors } from '../constants/colors'
import { COSTS, BUDGET_TIERS } from '../constants/data'
import { SectionLabel, SectionTitle, SectionWrapper } from './UI'

export default function Costs() {
  return (
    <SectionWrapper>
      <SectionLabel>Financial Planning</SectionLabel>
      <SectionTitle>COST BREAKDOWN{'\n'}PER PERSON</SectionTitle>

      <p style={{ fontSize: 14, color: 'rgba(245,240,232,0.5)', marginBottom: 24 }}>
        Estimates for one person. Assumes 2 people sharing vehicle and accommodation. All figures in USD.
      </p>

      {/* Cost Table */}
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 24,
      }}>
        {/* Table Header */}
        <div style={{
          background: colors.red,
          padding: '16px 28px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr 1fr 110px',
          gap: 16,
          fontSize: 11,
          letterSpacing: 3,
          textTransform: 'uppercase',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.8)',
        }}>
          <div>Category</div>
          <div>Details</div>
          <div>Estimate</div>
          <div style={{ textAlign: 'right' }}>Total</div>
        </div>

        {/* Table Rows */}
        {COSTS.map((row, i) => (
          <div
            key={i}
            style={{
              padding: '16px 28px',
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr 1fr 110px',
              gap: 16,
              fontSize: 14,
              borderBottom: i < COSTS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 500, color: colors.cream }}>
              <span style={{
                width: 28,
                height: 28,
                background: 'rgba(244,197,66,0.1)',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
              }}>
                {row.icon}
              </span>
              {row.category}
            </div>
            <div style={{ color: 'rgba(245,240,232,0.5)', fontSize: 12, alignSelf: 'center' }}>{row.detail}</div>
            <div style={{ color: 'rgba(245,240,232,0.7)', alignSelf: 'center', fontSize: 13 }}>{row.est}</div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 22,
              color: colors.gold,
              alignSelf: 'center',
              textAlign: 'right',
            }}>
              {row.total}
            </div>
          </div>
        ))}

        {/* Table Footer / Grand Total */}
        <div style={{
          padding: '24px 28px',
          background: colors.mid,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(245,240,232,0.5)', maxWidth: 400, lineHeight: 1.6 }}>
            Costs can drop to{' '}
            <strong style={{ color: colors.cream }}>~$6,000</strong> with heavy camping, or rise to{' '}
            <strong style={{ color: colors.cream }}>$12,000+</strong> for solo travel and premium experiences.
          </p>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.5)',
              marginBottom: 4,
            }}>
              Total Per Person
            </div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 56,
              color: colors.gold,
              lineHeight: 1,
            }}>
              $11,843
            </div>
            <div style={{ fontSize: 13, color: 'rgba(245,240,232,0.5)' }}>
              over 90 days · ~$131/day
            </div>
          </div>
        </div>
      </div>

      {/* Budget Tier Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 16,
      }}>
        {BUDGET_TIERS.map(b => (
          <div key={b.label} style={{
            background: b.bg,
            border: `1px solid ${b.border}`,
            borderRadius: 12,
            padding: 20,
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: b.color,
              marginBottom: 8,
            }}>
              {b.label}
            </div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 44,
              color: b.color,
              lineHeight: 1,
            }}>
              {b.amount}
            </div>
            <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.5)', marginTop: 4 }}>
              {b.note}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
