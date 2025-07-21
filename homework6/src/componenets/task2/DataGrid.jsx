import GridRow from "./GridRow"
import styles from "./DataGrid.module.css"
import { memo } from "react"
const DataGrid = memo(function DataGrid({ data }) {
	return (
		<div>
			<div className={styles["data-container"]}>
				<div className={styles["data-container__top"]}>
					<div className={styles["data-container__item-top"]} data-label="Brand">
						Brand
					</div>
					<div className={styles["data-container__item-top"]} data-label="Model">
						Model
					</div>
					<div className={styles["data-container__item-top"]} data-label="Year">
						Year
					</div>
					<div className={styles["data-container__item-top"]} data-label="Price">
						Price
					</div>
					<div className={styles["data-container__item-top"]} data-label="Mileage">
						Mileage km
					</div>
				</div>
				<div className={styles["data-container__rows"]}>{data && data.map((dataItem) => <GridRow key={dataItem.id} rowData={dataItem} />)}</div>
			</div>
		</div>
	)
})

export default DataGrid
