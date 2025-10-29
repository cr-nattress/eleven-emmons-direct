// components/location/tabs/OverviewTab.tsx

import dynamic from 'next/dynamic'
import ExpandableCard from '../ExpandableCard'
import StatBadge from '../StatBadge'
import FeatureList from '../FeatureList'
import type { LocationFrontmatter } from '@/types/location'

// Dynamically import LocationMap with no SSR to avoid Leaflet window errors
const LocationMap = dynamic(() => import('@/components/LocationMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full animate-pulse rounded-lg bg-gray-200">
      <div className="flex h-full items-center justify-center text-gray-500">
        Loading map...
      </div>
    </div>
  ),
})

interface OverviewTabProps {
  data: LocationFrontmatter
}

export default function OverviewTab({ data }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      {/* Interactive Location Map */}
      <ExpandableCard
        title="Interactive Location Map"
        icon="🗺️"
        preview="See exactly how close we are to Red Lady Express lift"
        defaultExpanded={true}
      >
        <div className="mb-4">
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>11 Emmons Road is just 50 feet from Red Lady Express lift</strong> — true ski-in/ski-out access.
            This interactive map shows the exact location and distance. Click markers for details.
          </p>
        </div>
        <LocationMap />
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <div className="text-2xl font-bold text-primary">50 ft</div>
            <div className="text-xs text-gray-600">Distance</div>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <div className="text-2xl font-bold text-primary">15 sec</div>
            <div className="text-xs text-gray-600">Walk Time</div>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-xs text-gray-600">Roads to Cross</div>
          </div>
        </div>
      </ExpandableCard>

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
