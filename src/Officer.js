import React, { useState, useEffect } from 'react'
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material'
import { List } from './atom'
import { useRecoilState } from 'recoil'
import styles from './UnderOfficer.module.css'
import { DialogC } from './atom'
import { EnteredDataState } from './atom';

function Officer() {
    const [list, setList] = useRecoilState(List)
    const [enteredData, setEnteredData] = useRecoilState(EnteredDataState)
    const [dialog, setDialog] = useState(false)
    const [dialogContent, setDialogContent] = useState(DialogC)

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])



    function handleChange(event) {
        const { name, value } = event.target
        setEnteredData((prev) => ({ ...prev, [name]: value }))
    }

    function handleSubmit() {
        if (enteredData.title == '' || enteredData.information == '') {
            alert('input fields are mandatory')
            return
        }


        const application = {
            title: enteredData.title,
            information: enteredData.information,
            date: new Date().toLocaleString(),

            reject: false,
            verify: false,
            verifyButton: false,
            rejectButton: false,
            deleteButton: true,

            HOreject: false,
            HOVerify: false,
            HOrejectButton: true,
            HOverifyButton: true,

            status: [`Submitted by O on ${new Date().toLocaleString()}`],
            printStatus:true,
            appNo: Math.floor( Math.random()*10000)


        }
        // console.log(application)
        setList([application, ...list])
        setEnteredData({ title: '', information: '' })

    }
    function handleReject(index) {
        const updatedList = [...list];
        updatedList[index] = { ...updatedList[index], reject: true, verifyButton: true, status: [`Reject by O on ${new Date().toLocaleString()}`, ...updatedList[index].status] };
        setList(updatedList);


    }

    console.log(list)

    function handleVerify(index) {
        const updatedList = [...list];
        updatedList[index] = {
            ...updatedList[index], verify: true, rejectButton: true, HOrejectButton: false,
            HOverifyButton: false, status: [`Verified by O on ${new Date().toLocaleString()}`, ...updatedList[index].status],
            deleteButton:true
        };
        setList(updatedList);

    }


    function handleDialog(index) {
        setDialog(true)
        setDialogContent(list[index])
    }



    return (
        <div className={styles.container}>
            <div className={styles.left}>
            <h1>Applications</h1>
            <div className={styles.applications}>
            <h4 className={styles.item}>APP.NO</h4>
                    <h4 className={styles.item}>NAME</h4>
                    <h4 className={styles.item}>DATE</h4>
                    <h4 className={styles.item}>ACTION</h4>
                    <h4 className={styles.item}>ACTION</h4>
                    

                </div>

                {
                    list.map((ele, index) =>
                        <div className={styles.applications}>
                            <p className={styles.item} >{ele.appNo}</p>
                            <p className={styles.item} onClick={() => handleDialog(index)}>{ele.title}</p>
                            <span className={styles.item}>{ele.date}</span>
                            <Button onClick={() => handleReject(index)} className={styles.item} disabled={ele.rejectButton}>
                                {ele.reject ? <span style={{ color: 'red' }}>rejected</span> : 'reject'}
                            </Button>
                            <Button onClick={() => handleVerify(index)} className={styles.item} disabled={ele.verifyButton} >
                                {ele.verify ? <span style={{ color: 'green' }}>verified</span> : 'verify'}
                            </Button>
                        </div>)
                }
                {
                    dialog ? <Dialog open={dialog} onClose={() => setDialog(false)}>
                        <DialogTitle><h1>{dialogContent.title}</h1></DialogTitle>
                        <DialogContent className={styles.dialog}>
                            <p className={styles.information}>{dialogContent.information}</p>
                            <div className={styles.status}>
                                <h1>Status</h1>
                                {
                                    dialogContent.status.map((ele) => <p className={styles.statusElement}>{ele}</p>)
                                }
                            </div>
                            <div className={styles.printSection}>
                            {dialogContent.printStatus ? <p>Pending</p> : <h1 style={{ color: 'green' }}>Approved Successfully</h1>}
                            <Button disabled={dialogContent.printStatus} onClick={() => window.print()}>Print</Button>
                            </div>

                        </DialogContent>



                    </Dialog> : ''
                }

            </div>
            <div className={styles.right} >
                <h1>Enter The Application</h1>
                <input value={enteredData.title}  className={styles.input} name='title' onChange={handleChange} placeholder='ENTER THE TITLE' ></input>
                <textarea  className={styles.input} value={enteredData.information} placeholder='Enter the information' name='information' onChange={handleChange}></textarea>
                <Button   className={styles.input} variant='outlined' onClick={handleSubmit}>SUBMIT</Button>

            </div>
        </div>
    )
}

export default Officer