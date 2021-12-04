import {useEffect, useState} from 'react';

function Marvel() {

    const [marvelData, setMarvelData] = useState([])

    const pubKey = '9e656fd191967a9bf10b3f6cc034b0ac'

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    

    function getMarvelData() {
        
        const starter = String.fromCharCode(97+Math.floor(Math.random() * 26))
        console.log(starter);
        fetch(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${starter}&apikey=${pubKey}`)
            .then(results => results.json())
            .then(data => {
                //console.log(data.data.count)
                let num = getRandomInt(data.data.count)
                //console.log(data.data.results[num])
                setMarvelData(data.data.results[num])
            })


    }

    useEffect(() => {
        getMarvelData();

        setInterval(() => {
            getMarvelData();
        }, 3300009)


    },[])

    return (
        <div className='marvel'>
            {marvelData.thumbnail ? <div>
            <img height='500'src={marvelData.thumbnail.path + '.' + marvelData.thumbnail.extension} />
            <div className='marvelTitle'>{marvelData.title}</div>
            </div> : <div>loading marvel..</div>}
        </div>
    )
}

export default Marvel;