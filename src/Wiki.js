import {useEffect, useState} from 'react';

function Wiki() {

    const [rando, setRando] = useState([])

    //getWiki();
    function getWiki() {
        fetch("https://en.wikipedia.org/api/rest_v1/page/random/summary")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRando(data);
            })

    }

    useEffect(() => {
        getWiki();
        setInterval(() => {
            getWiki()
        }, 3600000)
        
    }, [])



    return (
        <div className='wiki'>
            {rando.thumbnail ? <div>
                <img src={rando.thumbnail.source} width={rando.thumbnail.width} height={rando.thumbnail.height}/>
                <div className='wiki-title'><b>{rando.title}</b></div>
                <div>{rando.description}</div>
                <div>{rando.extract}</div>
            </div> : <div>hi</div> }
                
        </div>
    )
}

export default Wiki;