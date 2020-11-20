import React from 'react'
import { Link } from 'react-router-dom'
import useOrdenation from '../../hooks/useOrdenation'
import Button from '../button/button'
import styles from './styles/table.module.css'

export default function Table(props) {
  const { items, requestSort, sortConfig } = useOrdenation(props.data)
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }
  /*   const renderBody = (items) => {
    return items.map((user) => (
      <tr key={user.id}>
        <td className={styles.id}>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td className={styles.age}>{user.age}</td>
        <td>
          <Link to={`/user/${user.id}`}>
            <button className={styles.Link}>+</button>
          </Link>
        </td>
      </tr>
    ))
  } */

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('id')}
              className={`btnOrdednate ${getClassNamesFor('id')} `}
              title="Ordenar por ID"
            >
              id
            </button>
          </th>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>e-mail</th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('age')}
              className={`btnOrdednate ${getClassNamesFor('age')} `}
              title="Ordenar por Idade"
            >
              idade
            </button>
          </th>

          <th>ações</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {items.map((user) => (
          <tr key={user.id}>
            <td className={styles.id}>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td className={styles.age}>{user.age}</td>
            <td>
              <Link to={`/user/${user.id}`}>
                <Button>+ Info</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
