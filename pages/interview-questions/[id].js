import styles from '../../styles/InterviewQuestions.module.css'
import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import Accordion from './Accordion'

export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    };
}

export default function Test() {
    const [questions, setQuestions] = useState([])
    const [topic, setTopic] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [requestTimeOut, setRequestTimeOut] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if(!loaded){
            const {id} = router.query
            if(id == undefined){
                return
            }
            fetch("../api/interview-questions/"+id)
            .then(response => response.json())
            .then(data => {
                setQuestions(data.questions)
                setTopic(data.topic)
                setLoaded(true)
            })
            .catch(() => {
                setRequestTimeOut(true)
            })
        }
    }, [loaded])

    const printPage = () => {
        window.print()
    }

    return (
        <main className="centerMain">
            {loaded ? <section className={styles.interviewQuestionsContainer}>
            <h2 className={styles.topicTitle}>
                {topic} Interview Questions
                <span> at https://testmode.vercel.app/</span>
            </h2>
            <div className={styles.btnsGroup}>
            <Link href="/" passHref>
                <a className={styles.backBtn}>
                    <i className="fa fa-angle-left"></i>
                    Back To Home
                </a>
            </Link>
            <button className={styles.printBtn} onClick={printPage}>print</button>
            </div>
                {questions.map((question,index) =>
                    <Accordion key={index} number={index+1} data={question}/>
                )}
            </section> : <>
                {requestTimeOut ? <section className={styles.alert}>
                    <h2>Something went wrong..</h2>
                    <p>This topic doesn&apos;t have interview questions.</p>
                    <Link href="/" passHref>
                        <a>
                            <i className="fa fa-angle-left"></i>
                            Back To Home
                        </a>
                    </Link>
                </section> : <></>}
                </>
            }
        </main>
    )
}