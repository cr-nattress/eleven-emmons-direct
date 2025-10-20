// components/location/LocationClient.tsx
'use client'

import { useState, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LocationTabs from './LocationTabs'
import WinterTab from './tabs/WinterTab'
import SummerTab from './tabs/SummerTab'
import InfoTab from './tabs/InfoTab'
import OverviewTab from './tabs/OverviewTab'
import type { LocationFrontmatter } from '@/types/location'

interface LocationClientProps {
  data: LocationFrontmatter
  overviewContent: ReactNode
}

export default function LocationClient({ data, overviewContent }: LocationClientProps) {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
      {/* Tab Navigation */}
      <LocationTabs
        tabs={data.tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Tab Content with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'overview' && <OverviewTab>{overviewContent}</OverviewTab>}
          {activeTab === 'winter' && <WinterTab data={data} />}
          {activeTab === 'summer' && <SummerTab data={data} />}
          {activeTab === 'info' && <InfoTab data={data} />}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
