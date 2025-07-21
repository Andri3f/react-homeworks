import { memo } from "react"
import styles from "./DataGrid.module.css"

const GridRow = memo(function GridRow({ rowData }) {
	return (
		<div className={styles["row-data"]}>
			<div className={styles["row-data__item"]} data-label="Brand">
				{rowData?.brand}
			</div>
			<div className={styles["row-data__item"]} data-label="Model">
				{rowData?.model}
			</div>
			<div className={styles["row-data__item"]} data-label="Year">
				{rowData?.year}
			</div>
			<div className={styles["row-data__item"]} data-label="Price">
				${rowData?.price?.toLocaleString()}
			</div>
			<div className={styles["row-data__item"]} data-label="Mileage">
				{rowData?.mileage_km?.toLocaleString()} km
			</div>
		</div>
	)
})

export default GridRow
