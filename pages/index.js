import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from "react"

export default function Home() {
  const [testsData, setTestsData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const interviewQuestionsRef = useRef(null)
  const testsRef = useRef(null)
  const [interviewQuestionsTopics, setInterviewQuestionsTopics] = useState([])
  const [pathTestsData, setPathTestsData] = useState([])

  useEffect(() => {
    if (!loaded) {
      fetch("./api/interview-questions/all")
        .then(response => response.json())
        .then(data => {
          setInterviewQuestionsTopics(data)
          fetch("./api/tests/all")
            .then(response => response.json())
            .then(data => {
              setTestsData(data)
              fetch("./api/path-tests/all")
                .then(response => response.json())
                .then(data => {
                  setPathTestsData(data)
                  setLoaded(true)
                })
            })
        })
    }
  }, [loaded])

  function scrollToInterviewQuestionsSection() {
    interviewQuestionsRef.current.scrollIntoView()
  }
  function scrollToTestsSection() {
    testsRef.current.scrollIntoView()
  }

  return (
    <>
      <header className={[styles.test, styles.heroSection].join(" ")}>
        <h1>Test Mode</h1>
        <p>A website where you can test your skills in some technologies related to programming and get certified when you pass any test.
          This website has been developed by <a rel="noreferrer" href="https://www.linkedin.com/in/ahmed0saber/" target="_blank">ahmed0saber</a></p>
        <div className={styles.btnsGroup}>
          <a onClick={scrollToInterviewQuestionsSection} className={styles.btn}>
            view interview questions
          </a>
          <a onClick={scrollToTestsSection} className={styles.btn}>
            view tests
          </a>
        </div>
      </header>
      <main>
        <section ref={interviewQuestionsRef} className={styles.interviewQuestionsSection}>
          <h2>Interview Questions</h2>
          <p>A newly added section where you can explore interview questions for some topics related to programming.</p>
          <section className={styles.interviewTopics}>
            {loaded ? interviewQuestionsTopics.map((interviewQuestionsTopic, index) =>
              <div key={index}>
                <img src={interviewQuestionsTopic.img} alt={interviewQuestionsTopic.topic} />
                <div className={styles.row}>
                  <Link href={`interview-questions/${interviewQuestionsTopic.urlKey}`}>
                    <a>explore</a>
                  </Link>
                  <span>{interviewQuestionsTopic.numberOfQuestions} questions</span>
                </div>
              </div>
            ) : <></>}
          </section>
        </section>
        <section ref={testsRef} className={styles.testsContainer}>
          <h2>Technology Tests</h2>
          <p>Pass these online tests and get certified.</p>
          <section className={styles.tests}>
            {loaded ? testsData.map((testData, index) =>
              <div key={index} className={styles.test}>
                <div className={styles.row}>
                  <h2>{testData.title}</h2>
                  <span>{testData.numberOfQ} Questions</span>
                </div>
                <p>{testData.description}</p>
                <div>
                  {testData.numberOfQ < 1 ?
                    <p className={styles.soon}>
                      Coming Soon
                      <i className="fa fa-spinner"></i>
                    </p>
                    : <Link href={`/tests/${testData.urlKey}`}>
                      <a>
                        Start The Test
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </Link>
                  }
                </div>
              </div>
            ) : <></>}
          </section>
        </section>
        <section className={styles.testsContainer}>
          <h2>Learning Path Tests</h2>
          <p>Now you can get certified in the following profiles.</p>
          <section className={styles.tests}>
            {loaded ? pathTestsData.map((testData, index) =>
              <div key={index} className={styles.test}>
                <div className={styles.row}>
                  <h2>{testData.title}</h2>
                  <span>{testData.numberOfQ} Questions</span>
                </div>
                <p>{testData.description}</p>
                <div>
                  {testData.numberOfQ < 1 ?
                    <p className={styles.soon}>
                      Coming Soon
                      <i className="fa fa-spinner"></i>
                    </p>
                    : <Link href={`/tests/${testData.urlKey}`}>
                      <a>
                        Start The Test
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </Link>
                  }
                </div>
              </div>
            ) : <></>}
          </section>
        </section>
      </main>
    </>
  )
}