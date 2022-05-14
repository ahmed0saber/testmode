import styles from '../../styles/Test.module.css'
import React, { useEffect, useState, useRef } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import Swal from 'sweetalert2'

export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    };
}

export default function Test() {
    const [questions, setQuestions] = useState([])
    const [loaded, setLoaded] = useState(false)
    const router = useRouter()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState()
    const [checked, setChecked] = useState(false)
    const answersContainer = useRef(null)
    const [score, setScore] = useState(0)
    const [timer, setTimer] = useState(60)
    const [timeout, setTimeout] = useState(false)
    const [lastQuestionReached, setLastQuestionReached] = useState(0)
    const [allUserAnswers, setAllUserAnswers] = useState([])
    const [finished, setFinished] = useState(false)
    const [success, setSuccess] = useState(false)
    const [testName, setTestName] = useState()
    const [username, setUsername] = useState()
    const [sharingUrl, setSharingUrl] = useState("https://testmode.vercel.app/")
    const [sharingText, setSharingText] = useState("")

    useEffect(() => {
        if(!loaded){
            const {id} = router.query
            if(id == undefined){
                return
            }
            fetch("../api/"+id)
            .then(response => response.json())
            .then(data => {
                setQuestions(data.questions)
                setTestName(data.testname)
                setSharingText("I'm excited to share that I have passed " + data.testname + " and got certified at TestMode.")
                setLoaded(true)
            })
        }
    }, [loaded])

    function onClickValue(answerNumber) {
        if(checked){
            return
        }
        let radioBtns = answersContainer.current.childNodes
        if(currentAnswer != undefined){
            radioBtns[currentAnswer].classList.remove("choosen")
        }
        setCurrentAnswer(answerNumber)
        radioBtns[answerNumber].classList.add("choosen")
    }

    function checkAnswer(){
        if(currentAnswer == undefined){
            Swal.fire({
                icon: 'info',
                title: 'Choose First',
                text: '',
            })
            return
        }
        if(checked){
            Swal.fire({
                icon: 'info',
                title: 'Already Answered',
                text: '',
            })
            return
        }
        setChecked(true)
        let radioBtns = answersContainer.current.childNodes
        if(currentAnswer == questions[currentQuestion].correctAnswer){
            Swal.fire({
                icon: 'success',
                title: 'Correct Answer',
                text: '',
            })
            if(timeout){
                setScore(score+2)
            }else{
                setScore(score+5)
            }
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Wrong Answer',
                text: '',
            })
            radioBtns[currentAnswer].classList.add("wrong")
        }
        radioBtns[questions[currentQuestion].correctAnswer].classList.add("correct")
        let answers = allUserAnswers
        answers.push(currentAnswer)
        setAllUserAnswers(answers)
    }

    function nextQuestion(){
        if(!checked){
            Swal.fire({
                icon: 'info',
                title: 'Not Checked',
                text: 'You need to check the correct answer first',
            })
            return
        }
        if(currentQuestion >= questions.length - 1){
            Swal.fire({
                icon: 'info',
                title: 'Test Completed',
                text: 'You have answered all questions',
            })
            if(score >= questions.length * 3){
                setSuccess(true)
            }
            setFinished(true)
            fetch("https://api.countapi.xyz/hit/tests/9e372957-e3fa-430d-b076-dcd5f5fe9c7c")
        }else{
            let radioBtns = answersContainer.current.childNodes
            radioBtns[currentAnswer].classList.remove("choosen")
            radioBtns[currentAnswer].classList.remove("wrong")
            radioBtns[questions[currentQuestion].correctAnswer].classList.remove("correct")
            let x = currentQuestion + 1
            setCurrentQuestion(x)
            if(currentQuestion >= lastQuestionReached){
                setLastQuestionReached(x)
                setChecked(false)
                setTimer(60)
                setTimeout(false)
                setCurrentAnswer()
            }else{
                radioBtns[questions[x].correctAnswer].classList.add("correct")
                radioBtns[allUserAnswers[x-1]].classList.remove("wrong")
            if(allUserAnswers[x] != questions[x].correctAnswer){
                radioBtns[allUserAnswers[x]].classList.add("wrong")
            }
            }
        }
    }

    useEffect(() => {
        let timerLoop = setInterval(() =>{
            if(timer>0){
                if(!checked){
                    setTimer(timer-1)
                }
            }else if(!timeout && loaded){
                setTimeout(true)
                Swal.fire({
                    icon: 'info',
                    title: 'Time Out',
                    text: 'If you answer this question correctly, you will get only 2 points instead of 5',
                })
            }
        },1000)
        return () => clearInterval(timerLoop)
    })

    function previousQuestion(){
        if(!checked){
            Swal.fire({
                icon: 'info',
                title: 'Not Checked',
                text: 'You need to check the correct answer first',
            })
            return
        }
        if(currentQuestion < 1){
            Swal.fire({
                icon: 'info',
                title: 'First Question',
                text: "You can't go back",
            })
        }else{
            let radioBtns = answersContainer.current.childNodes
            radioBtns[currentAnswer].classList.remove("choosen")
            radioBtns[currentAnswer].classList.remove("wrong")
            radioBtns[questions[currentQuestion].correctAnswer].classList.remove("correct")
            let x = currentQuestion - 1
            setCurrentQuestion(x)
            radioBtns[questions[x].correctAnswer].classList.add("correct")
            radioBtns[allUserAnswers[x+1]].classList.remove("wrong")
            if(allUserAnswers[x] != questions[x].correctAnswer){
                radioBtns[allUserAnswers[x]].classList.add("wrong")
            }
        }
    }

    async function generateCertificate(){
        if(username == undefined || username.trim() == ""){
            Swal.fire({
                icon: 'info',
                title: 'Missing Name',
                text: 'Enter your name first',
            })
            return
        }
        const existingPdfBytes = await fetch("https://ahmed0saber.github.io/TestMode-SPA-without-React/Test%20Mode%20Certificate.pdf").then(res => res.arrayBuffer())
        const pdfDoc = await PDFDocument.load(existingPdfBytes)
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
        const pages = pdfDoc.getPages()
        const firstPage = pages[0]
        firstPage.drawText(username, {
            x: 310,
            y: 490,
            size: 50,
            font: helveticaFont,
            color: rgb(0.1, 0.1, 0.1),
        })
        firstPage.drawText(testName, {
            x: 475,
            y: 395,
            size: 22,
            font: helveticaFont,
            color: rgb(0.1, 0.1, 0.1),
        })
        const pdfBytes = await pdfDoc.save()
        Download(pdfBytes, "application/pdf")
    }

    function Download(arrayBuffer, type) {
        var blob = new Blob([arrayBuffer], { type: type })
        var url = URL.createObjectURL(blob)
        window.open(url)
    }

    function changeName(e){
        setUsername(e.target.value)
    }

    function shareToFacebook(){
        window.open('http://facebook.com/sharer/sharer.php?quote='+sharingText+'&u='+encodeURIComponent(sharingUrl), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
    }

    function shareToWhatsApp(){
        window.open('https://api.whatsapp.com/send?text='+sharingText+' Test your skills now '+sharingUrl, '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
    }

    function shareToLinkedIn(){
        window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(sharingUrl), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
    }

    function shareToTwitter(){
        window.open('https://twitter.com/intent/tweet?text='+sharingText+' Test your skills now &url='+sharingUrl+'&via=ahmed0saber0&hashtags=testmode,skill_test', '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
    }

    function shareToTelegram(){
        window.open('https://t.me/share/url?url='+sharingUrl+'&text='+sharingText, '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
    }

    return (
        <main>
            {loaded ? <> {
                finished ? <> {
                        success ? <>
                        <section className={[styles.test, styles.certificate].join(" ")}>
                            <h2>Congratulations! You have successfully passed the test..</h2>
                            <p>Enter your full name to get your certificate.</p>
                            <input onChange={changeName} type="text" placeholder="Ex: Ahmed Saber Fathy" autoComplete='false'/>
                            <button onClick={generateCertificate}>
                                <i className="fa fa-certificate"></i>
                                Get Certificate
                            </button>
                            <Link href="/" passHref>
                                <a>
                                    <i className="fa fa-angle-left"></i>
                                    Back To Home
                                </a>
                            </Link>
                            <p>Share your achievement with friends.</p>
                            <button onClick={shareToFacebook}>
                                <i className="fa fa-facebook-square"></i>
                                Share To Facebook
                            </button>
                            <button onClick={shareToWhatsApp}>
                                <i className="fa fa-whatsapp"></i>
                                Share To WhatsApp
                            </button>
                            <button onClick={shareToLinkedIn}>
                                <i className="fa fa-linkedin"></i>
                                Share To LinkedIn
                            </button>
                            <button onClick={shareToTwitter}>
                                <i className="fa fa-twitter"></i>
                                Share To Twitter
                            </button>
                            <button onClick={shareToTelegram}>
                                <i className="fa fa-telegram"></i>
                                Share To Telegram
                            </button>
                        </section>
                        </> : <>
                        <section className={[styles.test, styles.certificate].join(" ")}>
                            <h2>Unfortunately, You have not passed the test..</h2>
                            <p>Don&apos;t worry, You can try again later.</p>
                            <Link href="/" passHref>
                                <a>
                                    <i className="fa fa-angle-left"></i>
                                    Back To Home
                                </a>
                            </Link>
                        </section>
                        </>
                    } </> : 
                    <section className={styles.test}>
                    <div className={styles.info}>
                        <p className={styles.p}>Question number {currentQuestion+1} out of {questions.length}</p>
                        <div className={styles.row}>
                            <p>Score : {score}</p>
                            <span>{timer}</span>
                        </div>
                    </div>
                    <div>
                        <p className={styles.p}>{questions[currentQuestion].question}</p>
                        <pre className={styles.code}>{questions[currentQuestion].code}</pre>

                        <div ref={answersContainer}>
                        {questions[currentQuestion].answers.map((answer, index) => (
                            <button onClick={() => onClickValue(index)} key={index} className={styles.answerOptions}>
                                {answer}
                            </button>
                        ))}
                        </div>

                        {/* <button className={styles.btn} onClick={checkAnswer}>
                            <i className="fa fa-check-double"></i>
                            Check
                        </button> */}
                        <div className={styles.btns}>
                            <button className={styles.btn} onClick={previousQuestion}>
                                <i className="fa fa-angle-left"></i>
                                Back
                            </button>
                            { checked ? 
                            <button className={styles.btn} onClick={nextQuestion}>
                                Next
                                <i className="fa fa-angle-right"></i>
                            </button> :
                            <button className={styles.btn} onClick={checkAnswer}>
                                Check
                                <i className="fa fa-check-double"></i>
                            </button> }
                        </div>
                    </div>
                </section>
            } </> : <section className={[styles.test, styles.certificate].join(" ")}>
                <h2>Something went wrong..</h2>
                <p>This test doesn&apos;t exist.</p>
                <Link href="/" passHref>
                    <a>
                        <i className="fa fa-angle-left"></i>
                        Back To Home
                    </a>
                </Link>
            </section>}
        </main>
    )
}