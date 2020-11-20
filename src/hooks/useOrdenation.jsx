import { useMemo, useState } from 'react'

export default function useOrdenation(items, config = null) {
  const [sortConfig, setSortConfig] = useState(config)

  const sortedItems = useMemo(() => {
    let sortableItemsTable = [...items]
    if (sortConfig !== null) {
      sortableItemsTable.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'smaller' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'smaller' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItemsTable
  }, [items, sortConfig])

  const requestSort = (key) => {
    let direction = 'smaller'
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'smaller'
    ) {
      direction = 'bigger'
    }
    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
}
