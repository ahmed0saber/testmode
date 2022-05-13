import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useEffect, useState } from "react"

export default function Home() {
  const [testsData, setTestsData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [testsNumber, setTestsNumber] = useState(0)

  useEffect(() => {
    if(!loaded){
      fetch("./api/tests")
      .then(response => response.json())
      .then(data => {
          setTestsData(data.tests)
          setLoaded(true)
      })
      fetch("https://api.countapi.xyz/get/tests/9e372957-e3fa-430d-b076-dcd5f5fe9c7c")
      .then(response => response.json())
      .then(data => {
        let counts = 0
        const testsCounter = setInterval(() => {
          if(counts<data.value){
            setTestsNumber(++counts)
          }else{
            clearInterval(testsCounter)
          }
        }, 60)
      })
    }
  }, [loaded])

  function removeHash(){
    setTimeout(() =>{
      history.pushState("", document.title, window.location.pathname + window.location.search)
    }, 400)
  }

  return (
    <>
    <header className={[styles.test, styles.heroSection].join(" ")}>
      <h1>Test Mode</h1>
      <p>A website where you can test your skills in some technologies related to programming and get certified when you pass any test. 
      Our great learners have successfully completed {testsNumber} tests. 
      This website has been developed by <a rel="noreferrer" href="https://www.linkedin.com/in/ahmed0saber/" target="_blank">ahmed0saber</a></p>
      <a onClick={removeHash} href="#tests" className={styles.btn}>
        get started
        <i className="fa fa-angle-right"></i>
      </a>
    </header>
    <main id="tests">
      <section className={styles.tests}>
        {loaded ? testsData.map((testData,index) =>
            <div key={index} className={styles.test}>
              <div className={styles.row}>
                  <h2>{testData.title}</h2>
                  <span>{testData.numberOfQ} Questions</span>
              </div>
              <p>{testData.description}</p>
              <div>
                {testData.comingSoon ?
                  <p className={styles.soon}>
                    Coming Soon
                    <i className="fa fa-spinner"></i>
                  </p>
                  : <Link href={`/test/${testData.urlKey}`}>
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
    </main>
    </>
  )
}