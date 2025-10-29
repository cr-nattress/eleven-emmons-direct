// components/location/tabs/SummerTab.tsx

import ExpandableCard from '../ExpandableCard'
import StatBadge from '../StatBadge'
import FeatureList from '../FeatureList'
import type { LocationFrontmatter } from '@/types/location'

interface SummerTabProps {
  data: LocationFrontmatter
}

export default function SummerTab({ data }: SummerTabProps) {
  return (
    <div className="space-y-6">
      {/* Mountain Biking Card */}
      {data.mountainBiking && (
        <ExpandableCard
          title={data.mountainBiking.title}
          icon={data.mountainBiking.icon}
          preview={data.mountainBiking.preview}
          defaultExpanded={true}
        >
          {/* Stats Grid */}
          {data.mountainBiking.stats &&
            data.mountainBiking.stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {data.mountainBiking.stats.map((stat, index) => (
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
          <FeatureList items={data.mountainBiking.features} />
        </ExpandableCard>
      )}

      {/* Hiking Card */}
      {data.hiking && (
        <ExpandableCard
          title={data.hiking.title}
          icon={data.hiking.icon}
          preview={data.hiking.preview}
        >
          {/* Stats Grid */}
          {data.hiking.stats && data.hiking.stats.length > 0 && (
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {data.hiking.stats.map((stat, index) => (
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
          <FeatureList items={data.hiking.features} />
        </ExpandableCard>
      )}

      {/* Wildflowers Card */}
      {data.wildflowers && (
        <ExpandableCard
          title={data.wildflowers.title}
          icon={data.wildflowers.icon}
          preview={data.wildflowers.preview}
        >
          <FeatureList items={data.wildflowers.features} />
        </ExpandableCard>
      )}

      {/* Other Summer Activities Card */}
      {data.otherSummerActivities && data.otherSummerActivities.length > 0 && (
        <ExpandableCard
          title="Other Summer Activities"
          icon="🎣"
          preview="Fishing, rafting, paddleboarding, and more"
        >
          <FeatureList items={data.otherSummerActivities} columns={2} />
        </ExpandableCard>
      )}
    </div>
  )
}
