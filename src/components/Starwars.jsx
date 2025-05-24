import React from 'react'

const Starwars = () => {
    const [starWarsData, setStarWarsData] = React.useState(null)
    const [count, setCount] = React.useState(0)

    console.log("Rendered!")

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://swapi.dev/api/people/1");
                const result = await response.json()
                setStarWarsData(result)
            } catch (e) {
                console.log(`Error ${e}`)
            }
        }
        fetchData()
    }, [])


    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

export default Starwars