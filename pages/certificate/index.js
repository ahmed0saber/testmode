import React, {useRef, useState, useEffect} from 'react'
import styles from '../../styles/Certificate.module.css'
import html2canvas from 'html2canvas';
import Link from 'next/link'

export default function index() {
    const [loaded, setLoaded] = useState(false)
    const [certificateDate, setCertificateDate] = useState()
    const [username, setUsername] = useState()
    const [test, setTest] = useState()
    useEffect(() => {
        if(!loaded){
            setLoaded(true)
            let currentDate = new Date()
            setUsername(localStorage.getItem("username"))
            setTest(localStorage.getItem("test"))
            setCertificateDate(`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`)
        }
    }, [loaded])

    const printRef = useRef()
    const printCertificate = async () => {
        const element = printRef.current
        const canvas = await html2canvas(element)
        const data = canvas.toDataURL('image/jpg')
        const link = document.createElement('a')
        if(typeof link.download === 'string'){
            link.href = data
            link.download = `${username} - ${test} on testmode.jpg`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }else{
            window.open(data)
        }
    }

    return (
        <>
        {loaded ? <div className={styles.certificatePage}>
            <div ref={printRef} className={styles.certificateContainer}>
                <div>
                    <div className={styles.certificateHeader}>
                        <h2>CERTIFICATE</h2>
                        <h4>OF ACHIEVEMENT</h4>
                    </div>
                    <div className={styles.certificateBody}>
                        <h3>This certificate is presented to</h3>
                        <h4>{username}</h4>
                        <p>For passing {test} at testmode</p>
                    </div>
                    <div className={styles.certificateFooter}>
                        <div>
                            <p>{certificateDate}</p>
                            <span></span>
                            <h4>Date</h4>
                        </div>
                        <div>
                            <p>ahmed0saber</p>
                            <span></span>
                            <h4>Signature</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.certificateBtns}>
                <Link href="/" passHref>
                    <a>
                        <i className="fa fa-angle-left"></i>
                        To Home
                    </a>
                </Link>
                <button onClick={printCertificate}>Download</button>
            </div>
        </div> : <></>}
        </>
    )
}
