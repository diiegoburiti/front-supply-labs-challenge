import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../../components/button/button'
import Map from '../../components/map/map'
import Loading from '../../helpers/loading/loading'
import Head from '../../helpers/Head'
import api from '../../services/api'
import styles from './styles/UserProfile.module.css'

function UserProfile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const pararm = useParams()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get(`/users/${pararm.id}`)
        setUser(data)
        setLoading(false)
      } catch (err) {
        setUser([])
        setLoading(false)
        console.log(err)
      }
    }
    fetchUsers()
  }, [pararm])

  if (loading) return <Loading />
  if (user)
    return (
      <main className="container showDown">
        <Head title={user.name} />
        <section className={styles.wrapper}>
          <div className={styles.header}>
            <h1>Informações</h1>
            <Link to="/">
              <Button>Voltar</Button>
            </Link>
          </div>
          <Map data={user} />
          <div className={styles.info}>
            <span>Nome: {user.name}</span>
            <span>E-mail: {user.email}</span>
            <span>Sobrenome: {user.username}</span>
            <span>Idade: {user.age}</span>
            <span>Site: {user.website}</span>
            <span>Telefone: {user.phone}</span>
            <span>Cidade: {user.address.city}</span>
            <span>Rua: {user.address.street}</span>
            <span>Cep: {user.address.zipcode}</span>
            <span>Número: {user.address.suite}</span>
          </div>
        </section>
      </main>
    )
}

export default UserProfile
