import React, {useState} from 'react'
import styles from '../../styles/InterviewQuestions.module.css'

export default function accordion(props) {
    const [isActive, setIsActive] = useState(false)
    const changeIsActive = () => {
        setIsActive(!isActive)
    }
    return (
        <div onClick={changeIsActive} className={styles.questionAndAnswer}>
            <div className={styles.question}>
                <h3>Question {props.number}: {props.data.question}</h3>
                {props.data.questionCode ?
                <pre className={styles.code}>{props.data.questionCode}</pre> : <></>}
                <p>Question by <a target="_blank" href={props.data.ownerUrl}>{props.data.owner}</a></p>
            </div>
            <div className={`${styles.answer} ${isActive ? "" : styles.hiddenAnswer}`}>
                <p><b>Answer:</b> {props.data.answer}</p>
                {props.data.answerCode ? 
                <pre className={styles.code}>{props.data.answerCode}</pre> : <></>}
            </div>
        </div>
    )
}
