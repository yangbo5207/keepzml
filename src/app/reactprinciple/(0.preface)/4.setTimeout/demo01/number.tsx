import MotionNumber from 'motion-number'

export default function Number({ value }: { value: number }) {
  return (
    <MotionNumber
      className='font-bold text-7xl'
      value={value}
      format={{ notation: 'compact' }} // Intl.NumberFormat() options
      locales="en-US" // Intl.NumberFormat() locales
    />
  )
}