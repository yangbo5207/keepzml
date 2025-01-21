import { motion } from 'motion/react'
import { useTabStore, setSelectedTab } from './store'
import './index.css'

export default function TabCaseHeader() {
  const { tabs, selectedTab } = useTabStore()
  return (
    <ul className='reset tabs'>
      {tabs.map((item) => (
        <motion.li
          className='reset tab'
          key={item.label}
          initial={false}
          animate={{ backgroundColor: item === selectedTab ? "#eee" : "#eee0" }}
          onClick={() => setSelectedTab(item)}
        >
          {`${item.icon} ${item.label}`}
          {item === selectedTab ? <motion.div className='underline' layoutId="underline" id="underline" /> : null}
        </motion.li>
      ))}
    </ul>
  )
}