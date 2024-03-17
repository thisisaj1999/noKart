import React from "react";
import { Carousel } from "antd";
import styles from "./Carousel.module.scss";

const index: React.FC = () => (
		<Carousel autoplay autoplaySpeed={1000}>
			<div>
				<h3 className={styles.contentStyleImg}>1</h3>
			</div>
			<div>
				<h3 className={styles.contentStyleImg}>2</h3>
			</div>
			<div>
				<h3 className={styles.contentStyleImg}>3</h3>
			</div>
			<div>
				<h3 className={styles.contentStyleImg}>4</h3>
			</div>
		</Carousel>
);
export default index;
