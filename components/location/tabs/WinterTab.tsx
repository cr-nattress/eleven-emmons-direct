// components/location/tabs/WinterTab.tsx

import ExpandableCard from '../ExpandableCard'
import StatBadge from '../StatBadge'
import FeatureList from '../FeatureList'
import type { LocationFrontmatter } from '@/types/location'

interface WinterTabProps {
  data: LocationFrontmatter
}

export default function WinterTab({ data }: WinterTabProps) {
  return (
    <div className="space-y-6">
      {/* Mountain Resort Card */}
      {data.winterResort && (
        <ExpandableCard
          title={data.winterResort.title}
          icon={data.winterResort.icon}
          preview={data.winterResort.preview}
          defaultExpanded={true}
        >
          {/* Stats Grid */}
          {data.winterResort.stats && data.winterResort.stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {data.winterResort.stats.map((stat, index) => (
                <StatBadge
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  highlight={stat.highlight}
                />
              ))}
            </div>
          )}

          {/* Features */}
          <FeatureList items={data.winterResort.features} />
        </ExpandableCard>
      )}

      {/* Nordic Skiing Card */}
      {data.nordicSkiing && (
        <ExpandableCard
          title={data.nordicSkiing.title}
          icon={data.nordicSkiing.icon}
          preview={data.nordicSkiing.preview}
        >
          {/* Stats Grid */}
          {data.nordicSkiing.stats && data.nordicSkiing.stats.length > 0 && (
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {data.nordicSkiing.stats.map((stat, index) => (
                <StatBadge
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>
          )}

          {/* Features */}
          <FeatureList items={data.nordicSkiing.features} />
        </ExpandableCard>
      )}

      {/* Other Winter Activities Card */}
      {data.otherWinterActivities && data.otherWinterActivities.length > 0 && (
        <ExpandableCard
          title="Other Winter Activities"
          icon="🥾"
          preview="Snowshoeing, ice skating, sleigh rides, and more"
        >
          <FeatureList items={data.otherWinterActivities} columns={2} />
        </ExpandableCard>
      )}
    </div>
  )
}
