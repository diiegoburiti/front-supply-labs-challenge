import React, { useEffect, useState } from 'react'
import Table from '../../components/table/table'
import api from '../../services/api'

function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get('/users')
        setData(data)
        setLoading(false)
        console.log(data)
      } catch (err) {
        console.log(err)
        setLoading(true)
        setData([])
      }
    }
    fetchUsers()
  }, [])

  console.log(loading)

  if (loading) <p>Loading</p>
  if (data)
    return (
      <div className="container">
        <h1>Lorem Ipsum</h1>
        <Table data={data} />
      </div>
    )
  else return null
}

export default Home
