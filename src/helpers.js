// Local storage functions

const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export default fetchData