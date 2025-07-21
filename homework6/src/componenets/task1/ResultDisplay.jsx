import React from "react"

const ResultDisplay = React.memo(({ sum }) => {
	return <div>Sum: {sum}</div>
})

export default ResultDisplay
