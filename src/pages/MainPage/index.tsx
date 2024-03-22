import React, { useEffect } from 'react'
import styles from './MainPage.module.scss'
import Carousel from '../../components/Carousel'
import { useGlobalStore } from '../../utils/store'
import { useLocation } from 'react-router-dom'

const index: React.FC = () => {

  const location = useLocation();

  const Update = {
    Global: {
      currentPage: useGlobalStore((State) => State.setCurrentPage)
    }
  }

  useEffect(() => {
    if(location.pathname === '/'){
      Update.Global.currentPage('mainpage')
    }
  },[location])


  return (
    <div className={styles.MainPageContainer}>
        <Carousel/>
    </div>
  )
}

export default index