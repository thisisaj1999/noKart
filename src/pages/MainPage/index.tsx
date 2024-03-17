import React from 'react'
import styles from './MainPage.module.scss'
import Carousel from '../../components/Carousel'

const index: React.FC = () => {
  return (
    <div className={styles.MainPageContainer}>
        <Carousel/>
    </div>
  )
}

export default index