import React from 'react'

const Starwars = () => {
    const [starWarsData, setStarWarsData] = React.useState(null)

    React.useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    })


    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

export default Starwars