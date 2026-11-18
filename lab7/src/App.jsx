import { useState } from 'react'
import './App.css'
import { products } from './store/data'
import Header from './components/student-info/Header'
import Content from './components/student-info/Content'
import Image from './components/student-info/Image'
import GoodsList from './components/goods/GoodsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Content />
      <Image />
      <div className="line-separator"></div>
      <GoodsList products={products} />
    </>
  )
}

export default App
