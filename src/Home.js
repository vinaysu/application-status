import React, { useState, useEffect } from 'react'
import styles from './Home.module.css'
import { Button } from '@mui/material'
import { User } from './atom'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'



function Home() {

   


    const [show, setShow] = useState(false)
    const [loginData, setLoginData] = useState({ loginName: 'dvdfv', loginPassword: '' })
    const UOData = [{ userName: 'vinay', password: 1 }, { userName: 'anusha', password: 2 }, { userName: 'madhu', password: 3 }]
    const OData = [{ userName: 'vinay', password: 1 }, { userName: 'anusha', password: 2 }, { userName: 'madhu', password: 3 }]
    const HOData = [{ userName: 'vinay', password: 1 }, { userName: 'anusha', password: 2 }, { userName: 'madhu', password: 3 }]
    const [verificationData, setVerificationData] = useState(null)
    const [user, setUser] = useRecoilState(User)
    const [navigateto, setNavigateto] = useState('')
    const navigate = useNavigate()




    function handleUO() {
        setShow(true)
        setVerificationData(UOData)
        setNavigateto('UO')

    }

    function handleO() {
        setShow(true)
        setVerificationData(OData)
        setNavigateto('O')

    }

    function handleHO() {
        setShow(true)
        setVerificationData(HOData)
        setNavigateto('HO')

    }

    function handleChange(event) {
        const { name, value } = event.target
        setLoginData((prev) => ({ ...prev, [name]: value }))


    }

    function handleLogin(event) {

        let foundUser = verificationData.find((user) => user.userName == loginData.loginName && user.password == loginData.loginPassword)
        if (foundUser == undefined) {
            alert('not Found')
            return
        }
        setUser(`${event.target.name}  :  ${foundUser.userName}`)

        alert(event.target.name)
        navigate(event.target.name)

    }




    return (
        <div className={styles.container}>
            <div className={styles.home}>
                <h1>SignIn As</h1>
                {
                    show ?
                        <div className={styles.options}>
                            <input className={styles.option} name='loginName' onChange={handleChange} placeholder='USER NAME'></input>
                            <input className={styles.option} name='loginPassword' onChange={handleChange} placeholder='PASSWORD' ></input>
                            <Button className={styles.option} onClick={handleLogin} name={navigateto} >Login</Button>
                        </div> :
                        <div className={styles.options}>
                            <Button name='UO' onClick={handleUO} variant='outlined' className={styles.option} >UNDER OFFICER</Button>
                            <Button name='O' onClick={handleO} variant='outlined' className={styles.option} >OFFICER</Button>
                            <Button name='HO' onClick={handleHO} variant='outlined' className={styles.option} >HIGHER OFFICER</Button>

                        </div>
                }

            </div>

        </div>
    )
}

export default Home