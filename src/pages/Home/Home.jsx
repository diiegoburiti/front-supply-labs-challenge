import React from 'react'
import { Pagination } from '../../components'
import styles from './styles/home.module.css'

function Home() {
  return (
    <div className="container showDown">
      <h1 className={styles.title}>Table App</h1>
      <Pagination />
    </div>
  )
}

export default Home
