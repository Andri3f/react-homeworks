import { useState } from "react"
import styles from "./sitesList.module.scss"

function SitesList() {
	const [sitesList] = useState([
		{
			id: "1",
			site: "W3SchoolsUA",
			title: "React Підручник - W3Schools українською",
			description: "React — це бібліотека JavaScript для створення інтерфейсів користувача. React використовується для створення односторінкових програм.",
			link: "https://w3schoolsua.github.io/react/index.html",
			icon: "🌐",
		},
		{
			id: "2",
			site: "React Official",
			title: "Посібник: знайомство з React",
			description: "Офіційна документація React для новачків. Покроковий гайд зі створення невеликої гри.",
			link: "https://uk.legacy.reactjs.org/docs/getting-started.html",
			icon: "⚛️",
		},
		{
			id: "3",
			site: "W3SchoolsUA",
			title: "React Старт - W3Schools українською",
			description: "React безпосередньо в HTML. Налаштування середовища. Старт, зміни, наступні кроки.",
			link: "https://w3schoolsua.github.io/react/react_getstarted.html",
			icon: "🌐",
		},
		{
			id: "4",
			site: "FreeCodeCamp",
			title: "React Course – FreeCodeCamp",
			description: "Безкоштовний курс на YouTube: створення додатку з нуля, компоненти, хуки, роутинг.",
			link: "https://www.freecodecamp.org/news/learn-react-by-building-a-simple-app-e8b3b47edb39/",
			icon: "🎓",
		},
		{
			id: "5",
			site: "Scrimba",
			title: "Learn React for free",
			description: "Інтерактивний курс React. Кодування у браузері, лекції та завдання.",
			link: "https://scrimba.com/learn/learnreact",
			icon: "🧠",
		},
		{
			id: "6",
			site: "Codecademy",
			title: "Learn React – Codecademy",
			description: "Платна та безкоштовна частина курсу. Вивчення компонентів, props, state, JSX.",
			link: "https://www.codecademy.com/learn/react-101",
			icon: "💡",
		},
	])
	return (
		<div>
			<h5>Задача 5. Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого (дані не обов'язково повинні співпадати)</h5>
			<hr />
			<div className={styles["cards-site"]}>
				{sitesList.map((site) => (
					<div key={site.id} className={styles["site-card"]}>
						<a href={site.link} className={styles["site-card__header"]}>
							<div className={styles["site-card__icon"]}>{site.icon}</div>
							<div className={styles["site-card__title"]}>{site.title}</div>
						</a>

						<div className={styles["site-card__content"]}>
							<div className={styles["site-card__description"]}>{site.description}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default SitesList
