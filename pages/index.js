import React from 'react'
import App from '../components/App'
import Head from '../components/Head'
import Header from '../components/Header'
import ProductsList from '../components/ProductsList'

const Home = () => (
  <App>
    <Head title="Home" />
    <Header />
    <ProductsList />
  </App>
)

export default Home
