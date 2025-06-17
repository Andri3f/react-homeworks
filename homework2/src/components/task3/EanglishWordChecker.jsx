import { useState, useEffect } from "react"
import styles from "./englishWordChecker.module.scss"

function EanglishWordChecker() {
	const [words] = useState([
		{
			id: 1,
			word: "apple",
			translation: "яблуко",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHo_8kt_of8CPIeekYg4fmEvGVYp4m3WKrw&s",
		},
		{
			id: 2,
			word: "banana",
			translation: "банан",
			image: "https://img.freepik.com/free-photo/single-banana-isolated-white-background_839833-17794.jpg?semt=ais_hybrid&w=740",
		},
		{
			id: 3,
			word: "orange",
			translation: "апельсин",
			image: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		},
	])
	const [currentWord, setCurrentWord] = useState(null)
	const [userAnswer, setUserAnswer] = useState("")
	const [isCorrect, setIsCorrect] = useState(null)

	const getRandomWord = () => {
		const randomIndex = Math.floor(Math.random() * words.length)
		setCurrentWord(words[randomIndex])
		setIsCorrect(null)
		setUserAnswer("")
	}
	function onChangeUserAnswer(e) {
		setUserAnswer(e.target.value)
		setIsCorrect(null)
	}
	// знаю що викликаєтсья тут ця функція постійно  , я дивився використвуються useMemo але не буду забігати наперед
	const getImageClassName = () => {
		if (isCorrect === true) return styles.correct
		if (isCorrect === false) return styles.incorrect
		return ""
	}

	function checkAnswer() {
		if (userAnswer.toLowerCase().trim() === currentWord.translation.toLowerCase().trim()) {
			setIsCorrect(true)
			alert("Добре, молодець!")
			setUserAnswer("")
			getRandomWord()
		} else {
			setIsCorrect(false)
			alert("Невірно, спробуйте ще раз")
		}
	}

	useEffect(() => {
		getRandomWord()
	}, [])

	return (
		<div className={styles.container}>
			<h5>
				Задача 3. Елемент тренажера англійської. Виводимо зображення елемента і слово. Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!» (і додаємо зелену рамку
				до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).
			</h5>
			<hr />
			{currentWord && (
				<div className={styles.wordContainer}>
					<div className={`${styles.imageContainer} ${getImageClassName()}`}>
						<img src={currentWord.image} alt={currentWord.word} />
					</div>
					<p className={styles.word}>{currentWord.word}</p>
					<div className={styles.inputContainer}>
						<input value={userAnswer} onChange={onChangeUserAnswer} type="text" className={styles.input} />
						<button onClick={checkAnswer} className={styles.button}>
							Перевірити
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default EanglishWordChecker
