import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useEffect, useState } from "react"

export default function Home() {
  const [testsData, setTestsData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [testsNumber, setTestsNumber] = useState(0)

  useEffect(() => {
    if(!loaded){
      fetch("api/tests")
      .then(response => response.json())
      .then(data => {
          setTestsData(data.tests)
          setLoaded(true)
      })
      fetch("https://api.countapi.xyz/get/tests/9e372957-e3fa-430d-b076-dcd5f5fe9c7c")
      .then(response => response.json())
      .then(data => {
          setTestsNumber(data.value)
      })
    }
  }, [loaded])

  return (
    <>
    <header className={styles.test}>
      <div className={styles.row}>
        <h1>TestMode</h1>
        <span>{testsNumber} Tests Completed</span>
      </div>
      <p>TestMode is where you can test your skills and get certified.</p>
      <p className="copyright">Developed by <a rel="noreferrer" href="https://github.com/ahmed0saber" target="_blank">ahmed0saber</a></p>
    </header>
    <main>
      <section className={styles.tests}>
        {loaded ? testsData.map((testData,index) =>
            <div key={index} className={styles.test}>
              <div className={styles.row}>
                  <h2>{testData.title}</h2>
                  <span>{testData.numberOfQ} Questions</span>
              </div>
              <p>{testData.description}</p>
              <div>
                <Link href={`/test/${testData.urlKey}`}>Start the Test</Link>
              </div>
            </div>
        ) : <></>}
      </section>
    </main>
    </>
  )
}