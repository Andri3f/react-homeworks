import useWindowSize from "./useWindowSize"
import desktopImg from "../../assets/images/desktop.svg"
import tabletImg from "../../assets/images/tablet.svg"
import phoneImg from "../../assets/images/phone.svg"
//Задача 3. useWindowSize – розмір вікна браузера
//Створіть кастомний хук useWindowSize, який повертає поточну ширину та висоту вікна браузера.
// Він повинен оновлюватися при зміні розміру вікна.
//Створіть компонент, який відображає поточні розміри вікна браузера (ширина x висота), використовуючи
//useWindowSize. На основі розмірів відображати іконки монітора, планшета або телефона.

function DeviceTypes() {
	const windowSize = useWindowSize()
	const devices = [
		{
			name: "desktop",
			minWidth: 1024,
			img: desktopImg,
		},
		{
			name: "tablet",
			minWidth: 768,
			maxWidth: 1023,
			img: tabletImg,
		},
		{
			name: "mobile",
			maxWidth: 767,
			img: phoneImg,
		},
	]

	const device = devices.find((device) => {
		if (device.minWidth && device.maxWidth) {
			return windowSize.width >= device.minWidth && windowSize.width <= device.maxWidth
		} else if (device.minWidth) {
			return windowSize.width >= device.minWidth
		} else if (device.maxWidth) {
			return windowSize.width <= device.maxWidth
		}
		return false
	})

	return (
		<div>
			<h4>
				Size: {windowSize.width}x{windowSize.height}
			</h4>
			{device && <img src={device.img} alt={device.name} style={{ width: "100px", height: "100px" }} />}
		</div>
	)
}

export default DeviceTypes
