import { motion } from 'motion/react'

import { ScrollArea } from '@/components/ui/scroll-area'

type SuggestionListProps = {
  suggestions: string[]
}

export function SuggestionList({ suggestions }: SuggestionListProps) {
  return (
    <ScrollArea className="w-full rounded-md" type="hover">
      <motion.ul
        animate={{ y: 0 }}
        className="mx-auto flex w-full max-w-screen-md flex-col divide-y overflow-auto scrollbar-thin"
        exit={{ y: 15 }}
        initial={{ y: -15 }}
        transition={{ duration: 0.25 }}
      >
        {suggestions.map((suggestion) => (
          <li key={suggestion} className="py-4 pr-2 sm:py-6">
            {suggestion}
          </li>
        ))}
      </motion.ul>
    </ScrollArea>
  )
}
