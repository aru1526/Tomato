import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import ExploreList from '../../component/ExploreList/ExploreList'
import ItemDisplay from '../../component/ItemDisplay/ItemDisplay'
import AppDownload from '../../component/AppDownload/AppDownload'

const Home = () => {
    const[category, setCategory] = useState("All");
  return (
    <div>
        <Header />
        <ExploreList category={category} setCategory={setCategory}/>
        <ItemDisplay category={category} />
        <AppDownload />
      
    </div>
  )
}

export default Home
