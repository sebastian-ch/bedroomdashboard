import {useState, useEffect} from 'react'


function Sunrise() {

    const [sunrise, setSunrise] = useState([])

    const latlng = [34.17, -118.61];

    let today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    let fetchDate = structureDate(today)

    let todayHour = today.getHours()

    if (todayHour >= 7) {
        fetchDate = structureDate(tomorrow)
    }

    console.log(fetchDate)
    function structureDate(x) {
        var dd = String(x.getDate()).padStart(2, '0');
        var mm = String(x.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = x.getFullYear(); 
        let tDate = yyyy + '-' + mm + '-' + dd;
        return tDate;
    }

    function Greeting(){
        console.log(todayHour);
        if(todayHour < 12) {
            return <div className='greet' >Good Morning, Sebastian</div>
        } else if(13 <= todayHour && todayHour <= 18) {
            return <div className='greet'>Good Day, Sebastian</div>
        } else if (18 < todayHour) {
            return <div className='greet'>Good Evening, Sebastian</div>
        }
    }


    useEffect(() => {

        fetch(`https://api.sunrise-sunset.org/json?lat=${latlng[0]}&lng=${latlng[1]}&date=${fetchDate}&formatted=0`)
            .then(results => results.json())
            .then(data => {
                console.log(data.results.sunrise);
                var utcDate = data.results.sunrise;
                var locDate = new Date(utcDate) 
                console.log(locDate.getHours() + ":" + locDate.getMinutes());
                setSunrise(locDate.getHours() + ":" + locDate.getMinutes())
                //setSunrise(data.results.sunrise);
            })

        setInterval(() => {
            Greeting()
        },3600000)


    }, [])



    return (
        <div>
            <Greeting />
            <div className='sunrise'>Sunrise: {sunrise} AM</div>
        </div>
    )
}

export default Sunrise;