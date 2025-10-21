// components/location/tabs/OverviewTab.tsx

import ExpandableCard from '../ExpandableCard'
import StatBadge from '../StatBadge'
import FeatureList from '../FeatureList'
import type { LocationFrontmatter } from '@/types/location'

interface OverviewTabProps {
  data: LocationFrontmatter
}

export default function OverviewTab({ data }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      {/* Town Introduction Card */}
      {data.townIntro && (
        <ExpandableCard
          title={data.townIntro.title}
          icon={data.townIntro.icon}
          preview={data.townIntro.preview}
          defaultExpanded={true}
        >
          {data.townIntro.description && (
            <p className="text-gray-600 leading-relaxed mb-6">
              {data.townIntro.description}
            </p>
          )}
        </ExpandableCard>
      )}

      {/* Getting Here Card */}
      {data.gettingHere && (
        <ExpandableCard
          title={data.gettingHere.title}
          icon={data.gettingHere.icon}
          preview={data.gettingHere.preview}
        >
          {/* Stats Grid */}
          {data.gettingHere.stats && data.gettingHere.stats.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              {data.gettingHere.stats.map((stat, index) => (
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
          {data.gettingHere.features && (
            <FeatureList items={data.gettingHere.features} />
          )}
        </ExpandableCard>
      )}

      {/* What Makes Crested Butte Special Card */}
      {data.whatMakesSpecial && (
        <ExpandableCard
          title={data.whatMakesSpecial.title}
          icon={data.whatMakesSpecial.icon}
          preview={data.whatMakesSpecial.preview}
        >
          {data.whatMakesSpecial.features && (
            <FeatureList items={data.whatMakesSpecial.features} />
          )}
        </ExpandableCard>
      )}

      {/* Essential Information Card */}
      {data.essentialInfo && (
        <ExpandableCard
          title={data.essentialInfo.title}
          icon={data.essentialInfo.icon}
          preview={data.essentialInfo.preview}
        >
          {/* Stats Grid */}
          {data.essentialInfo.stats && data.essentialInfo.stats.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              {data.essentialInfo.stats.map((stat, index) => (
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
          {data.essentialInfo.features && (
            <FeatureList items={data.essentialInfo.features} />
          )}
        </ExpandableCard>
      )}
    </div>
  )
}
