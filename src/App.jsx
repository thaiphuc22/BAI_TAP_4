// import { useState } from 'react'

import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navigation from './components/header/Navigation'
import ProductCard from './components/main/ProductCard'

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}

export default App
