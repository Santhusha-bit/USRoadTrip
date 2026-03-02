import { useState } from 'react'
import { colors } from '../constants/colors'
import Hero from './Hero'
import NavTabs from './NavTabs'
import Overview from './Overview'
import Phases from './Phases'
import Costs from './Costs'
import Highlights from './Highlights'
import Tips from './Tips'
import Footer from './Footer'
import { Divider, FlagStripe } from './UI'

export default function USARoadTripPlanner() {
  const [activeTab, setActiveTab] = useState('Overview')

  const renderSection = () => {
    switch (activeTab) {
      case 'Overview':   return <Overview />
      case 'Phases':     return <Phases />
      case 'Costs':      return <Costs />
      case 'Highlights': return <Highlights />
      case 'Tips':       return <Tips />
      default:           return <Overview />
    }
  }

  return (
    <div style={{
      background: colors.navy,
      color: colors.cream,
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      minHeight: '100vh',
      overflowX: 'hidden',
    }}>
      <FlagStripe />
      <Hero />
      <Divider />
      <NavTabs active={activeTab} setActive={setActiveTab} />
      {renderSection()}
      <Divider />
      <Footer />
    </div>
  )
}
