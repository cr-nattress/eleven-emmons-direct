// components/location/tabs/InfoTab.tsx

import ExpandableCard from '../ExpandableCard'
import FeatureList from '../FeatureList'
import type { LocationFrontmatter } from '@/types/location'

interface InfoTabProps {
  data: LocationFrontmatter
}

export default function InfoTab({ data }: InfoTabProps) {
  return (
    <div className="space-y-6">
      {/* Dining & Nightlife Card */}
      {data.dining && (
        <ExpandableCard
          title={data.dining.title}
          icon={data.dining.icon}
          preview={data.dining.preview}
          defaultExpanded={true}
        >
          <FeatureList items={data.dining.features} />
        </ExpandableCard>
      )}

      {/* Arts & Culture Card */}
      {data.artsAndCulture && (
        <ExpandableCard
          title={data.artsAndCulture.title}
          icon={data.artsAndCulture.icon}
          preview={data.artsAndCulture.preview}
        >
          <FeatureList items={data.artsAndCulture.features} />
        </ExpandableCard>
      )}

      {/* Getting Around Card */}
      {data.gettingAround && (
        <ExpandableCard
          title={data.gettingAround.title}
          icon={data.gettingAround.icon}
          preview={data.gettingAround.preview}
        >
          <FeatureList items={data.gettingAround.features} />
        </ExpandableCard>
      )}

      {/* Nearby Attractions Card */}
      {data.nearbyAttractions && (
        <ExpandableCard
          title={data.nearbyAttractions.title}
          icon={data.nearbyAttractions.icon}
          preview={data.nearbyAttractions.preview}
        >
          <FeatureList items={data.nearbyAttractions.features} />
        </ExpandableCard>
      )}
    </div>
  )
}
