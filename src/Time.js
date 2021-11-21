import {useEffect, useState} from 'react';

function Time() {

    let today = new Date();
    let tTime = ('0'+today.getHours()).slice(-2)  + ':' + ('0'+today.getMinutes()).slice(-2) + ':' + ('0'+today.getSeconds()).slice(-2);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear(); 

    let tDate = mm + '/' + dd + '/' + yyyy;

    const [time, setTime] = useState(tTime);
    const [currentDay, setDay] = useState(tDate);


    useEffect(() => {

        setInterval(() => {
            today = new Date();
            tTime = ('0'+today.getHours()).slice(-2)  + ':' + ('0'+today.getMinutes()).slice(-2) + ':' + ('0'+today.getSeconds()).slice(-2);
            setTime(tTime);
            },1000)

    },[])


    
    return (
        <div>
            <span className='date'><h1>{tDate}</h1></span>
            <span className='time'><h1>{time}</h1></span>
        </div>
    )

}


export default Time;