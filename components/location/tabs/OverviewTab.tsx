// components/location/tabs/OverviewTab.tsx

import { ReactNode } from 'react'

interface OverviewTabProps {
  children: ReactNode
}

export default function OverviewTab({ children }: OverviewTabProps) {
  return <div className="prose prose-gray max-w-none">{children}</div>
}
