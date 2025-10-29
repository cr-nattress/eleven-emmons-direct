'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/lib/animations/hooks'
import {
  slideUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '@/lib/animations/variants'
import ExpandableCard from './location/ExpandableCard'
import StatBadge from './location/StatBadge'
import FeatureList from './location/FeatureList'
import type { AmenitiesFrontmatter } from '@/types/amenities'

interface AmenitiesContentProps {
  data: AmenitiesFrontmatter
}

export default function AmenitiesContent({ data }: AmenitiesContentProps) {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { ref: gridRef, controls: gridControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <>
      <motion.div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        initial="hidden"
        animate={headerControls}
        variants={slideUpVariants}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="mt-4 text-lg text-gray-600">{data.subtitle}</p>
        )}
      </motion.div>

      {/* Icon grid for common amenities */}
      <motion.div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        initial="hidden"
        animate={gridControls}
        variants={staggerContainerVariants}
        className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {data.highlights.map((amenity, index) => (
          <motion.div
            key={index}
            variants={staggerItemVariants}
            whileHover={{ scale: 1.05, y: -4 }}
            className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <motion.div
              className="mb-4 text-4xl"
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {amenity.icon}
            </motion.div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {amenity.title}
            </h3>
            <p className="text-sm text-gray-600">{amenity.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Detailed Amenities with ExpandableCards */}
      <div className="space-y-6">
        {/* Kitchen & Dining */}
        {data.kitchenDining && (
          <ExpandableCard
            title={data.kitchenDining.title}
            icon={data.kitchenDining.icon}
            preview={data.kitchenDining.preview}
            defaultExpanded={true}
          >
            {data.kitchenDining.subsections?.map((subsection, index) => (
              <div key={index} className={index > 0 ? 'mt-6' : ''}>
                <h4 className="text-md font-semibold text-gray-900 mb-3">
                  {subsection.title}
                </h4>
                <FeatureList items={subsection.features} />
              </div>
            ))}
          </ExpandableCard>
        )}

        {/* Living & Entertainment */}
        {data.livingEntertainment && (
          <ExpandableCard
            title={data.livingEntertainment.title}
            icon={data.livingEntertainment.icon}
            preview={data.livingEntertainment.preview}
          >
            {data.livingEntertainment.stats &&
              data.livingEntertainment.stats.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {data.livingEntertainment.stats.map((stat, index) => (
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
            {data.livingEntertainment.features && (
              <FeatureList items={data.livingEntertainment.features} />
            )}
          </ExpandableCard>
        )}

        {/* Internet & Workspace */}
        {data.internetWorkspace && (
          <ExpandableCard
            title={data.internetWorkspace.title}
            icon={data.internetWorkspace.icon}
            preview={data.internetWorkspace.preview}
          >
            {data.internetWorkspace.stats &&
              data.internetWorkspace.stats.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {data.internetWorkspace.stats.map((stat, index) => (
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
            {data.internetWorkspace.features && (
              <FeatureList items={data.internetWorkspace.features} />
            )}
          </ExpandableCard>
        )}

        {/* Bedrooms & Sleep */}
        {data.bedroomsSleep && (
          <ExpandableCard
            title={data.bedroomsSleep.title}
            icon={data.bedroomsSleep.icon}
            preview={data.bedroomsSleep.preview}
          >
            {data.bedroomsSleep.features && (
              <FeatureList items={data.bedroomsSleep.features} />
            )}
          </ExpandableCard>
        )}

        {/* Bathrooms */}
        {data.bathrooms && (
          <ExpandableCard
            title={data.bathrooms.title}
            icon={data.bathrooms.icon}
            preview={data.bathrooms.preview}
          >
            {data.bathrooms.subsections?.map((subsection, index) => (
              <div key={index} className={index > 0 ? 'mt-6' : ''}>
                <h4 className="text-md font-semibold text-gray-900 mb-3">
                  {subsection.title}
                </h4>
                <FeatureList items={subsection.features} />
              </div>
            ))}
          </ExpandableCard>
        )}

        {/* Laundry */}
        {data.laundry && (
          <ExpandableCard
            title={data.laundry.title}
            icon={data.laundry.icon}
            preview={data.laundry.preview}
          >
            {data.laundry.features && (
              <FeatureList items={data.laundry.features} />
            )}
          </ExpandableCard>
        )}

        {/* Outdoor Spaces */}
        {data.outdoorSpaces && (
          <ExpandableCard
            title={data.outdoorSpaces.title}
            icon={data.outdoorSpaces.icon}
            preview={data.outdoorSpaces.preview}
          >
            {data.outdoorSpaces.stats &&
              data.outdoorSpaces.stats.length > 0 && (
                <div className="grid grid-cols-1 gap-4 mb-6">
                  {data.outdoorSpaces.stats.map((stat, index) => (
                    <StatBadge
                      key={index}
                      value={stat.value}
                      label={stat.label}
                      icon={stat.icon}
                    />
                  ))}
                </div>
              )}
            {data.outdoorSpaces.features && (
              <FeatureList items={data.outdoorSpaces.features} />
            )}
          </ExpandableCard>
        )}

        {/* Climate Control & Comfort */}
        {data.climateComfort && (
          <ExpandableCard
            title={data.climateComfort.title}
            icon={data.climateComfort.icon}
            preview={data.climateComfort.preview}
          >
            {data.climateComfort.features && (
              <FeatureList items={data.climateComfort.features} />
            )}
          </ExpandableCard>
        )}

        {/* Safety & Security */}
        {data.safetySecurity && (
          <ExpandableCard
            title={data.safetySecurity.title}
            icon={data.safetySecurity.icon}
            preview={data.safetySecurity.preview}
          >
            {data.safetySecurity.features && (
              <FeatureList items={data.safetySecurity.features} />
            )}
          </ExpandableCard>
        )}

        {/* Family-Friendly Features */}
        {data.familyFriendly && (
          <ExpandableCard
            title={data.familyFriendly.title}
            icon={data.familyFriendly.icon}
            preview={data.familyFriendly.preview}
          >
            {data.familyFriendly.features && (
              <FeatureList items={data.familyFriendly.features} />
            )}
          </ExpandableCard>
        )}

        {/* Building Amenities */}
        {data.buildingAmenities && (
          <ExpandableCard
            title={data.buildingAmenities.title}
            icon={data.buildingAmenities.icon}
            preview={data.buildingAmenities.preview}
          >
            {data.buildingAmenities.features && (
              <FeatureList items={data.buildingAmenities.features} />
            )}
          </ExpandableCard>
        )}

        {/* Location Features */}
        {data.locationFeatures && (
          <ExpandableCard
            title={data.locationFeatures.title}
            icon={data.locationFeatures.icon}
            preview={data.locationFeatures.preview}
          >
            {data.locationFeatures.features && (
              <FeatureList items={data.locationFeatures.features} />
            )}
          </ExpandableCard>
        )}

        {/* Smart Home Features */}
        {data.smartHome && (
          <ExpandableCard
            title={data.smartHome.title}
            icon={data.smartHome.icon}
            preview={data.smartHome.preview}
          >
            {data.smartHome.features && (
              <FeatureList items={data.smartHome.features} />
            )}
          </ExpandableCard>
        )}

        {/* What's Provided */}
        {data.whatsProvided && (
          <ExpandableCard
            title={data.whatsProvided.title}
            icon={data.whatsProvided.icon}
            preview={data.whatsProvided.preview}
          >
            {data.whatsProvided.features && (
              <FeatureList items={data.whatsProvided.features} />
            )}
          </ExpandableCard>
        )}

        {/* What's NOT Included */}
        {data.whatsNotIncluded && (
          <ExpandableCard
            title={data.whatsNotIncluded.title}
            icon={data.whatsNotIncluded.icon}
            preview={data.whatsNotIncluded.preview}
          >
            {data.whatsNotIncluded.features && (
              <FeatureList items={data.whatsNotIncluded.features} />
            )}
          </ExpandableCard>
        )}

        {/* Long-Term Stays */}
        {data.longTermStays && (
          <ExpandableCard
            title={data.longTermStays.title}
            icon={data.longTermStays.icon}
            preview={data.longTermStays.preview}
          >
            {data.longTermStays.features && (
              <FeatureList items={data.longTermStays.features} />
            )}
          </ExpandableCard>
        )}

        {/* Accessibility & Convenience */}
        {data.accessibilityConvenience && (
          <ExpandableCard
            title={data.accessibilityConvenience.title}
            icon={data.accessibilityConvenience.icon}
            preview={data.accessibilityConvenience.preview}
          >
            {data.accessibilityConvenience.features && (
              <FeatureList items={data.accessibilityConvenience.features} />
            )}
          </ExpandableCard>
        )}

        {/* Additional Services */}
        {data.additionalServices && (
          <ExpandableCard
            title={data.additionalServices.title}
            icon={data.additionalServices.icon}
            preview={data.additionalServices.preview}
          >
            {data.additionalServices.features && (
              <FeatureList items={data.additionalServices.features} />
            )}
          </ExpandableCard>
        )}

        {/* Guest Testimonials */}
        {data.testimonials && data.testimonials.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Guests Love Our Amenities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {data.testimonials.map((testimonial, index) => (
                <blockquote
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600"
                >
                  <p className="text-gray-700 italic">"{testimonial}"</p>
                </blockquote>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
