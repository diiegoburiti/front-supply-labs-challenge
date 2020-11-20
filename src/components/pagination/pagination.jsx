import React, { useEffect, useState } from 'react'
import Loading from '../../helpers/loading/loading'
import api from '../../services/api'
import Table from '../table/table'
import styles from './styles/pagination.module.css'

function Pagination() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(5)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get(
          `/users/?_start=${startIndex}&_end=${endIndex}`
        )
        setData(data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(true)
        setData([])
      }
    }
    fetchUsers()
  }, [startIndex, endIndex])

  function handleClick(start, end) {
    setStartIndex(start)
    setEndIndex(end)
  }

  if (loading) return <Loading />
  if (data)
    return (
      <div className="container showDown">
        <Table data={data} />

        <div className={styles.list}>
          <ul>
            <li>
              <span onClick={() => handleClick(0, 5)}>1</span>
              <span onClick={() => handleClick(5, 10)}>2</span>
              <span onClick={() => handleClick(10, 15)}>3</span>
              <span onClick={() => handleClick(15, 20)}>4</span>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Pagination
