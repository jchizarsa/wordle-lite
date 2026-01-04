import {useState} from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        console.log('formatting guess - ', currentGuess)
    }

    const addNewGuess = () => {

    }

    const handleKeyup = ({ key }) => {
        if (key === 'Enter') {
            // only add guess if turn < 5
            if (turn > 5) {
                console.log('No guesses remaining')
                return
            }
            // do not allow duplicate words
            if (history.includes(currentGuess)){
                console.log('already guessed')
                return
            }
            // check word is 5 chars long
            if (currentGuess.length !== 5) {
                console.log('must be 5 chars long')
                return
            }

            formatGuess()
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1) // Removes the last character
            })
        }
        
        if (/^[A-Za-z]$/.test(key)) {
            if(currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle