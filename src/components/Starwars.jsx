import React from 'react'

const Starwars = () => {
    const [starWarsData, setStarWarsData] = React.useState(null)
    const [count, setCount] = React.useState(0)

    console.log("Rendered!")

    React.useEffect(() => {
        console.log("Effect ran")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])


    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

export default Starwars