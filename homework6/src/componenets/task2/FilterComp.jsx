import styles from "./DataGrid.module.css"
import { memo } from "react"

const FilterComp = memo(function FilterComp({ searchName, onSearchChange, sortPriceType, onSortChange, priceLimits, onPriceLimitsChange }) {
	return (
		<div className={styles.filters}>
			<input type="text" placeholder="Search" value={searchName} onChange={(e) => onSearchChange(e.target.value)} />
			<select value={sortPriceType} onChange={(e) => onSortChange(e.target.value)}>
				<option value="increase">Price increase</option>
				<option value="descending">Price descending</option>
			</select>
			<label htmlFor="">
				price
				<input type="number" value={priceLimits.from} placeholder="from" onChange={(e) => onPriceLimitsChange("from", e.target.value)} />
				<input type="number" value={priceLimits.to} placeholder="to" onChange={(e) => onPriceLimitsChange("to", e.target.value)} />
			</label>
		</div>
	)
})

export default FilterComp
