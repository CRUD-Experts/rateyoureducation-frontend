const fetchScholars = () => {
    fetch('dummyData/scholars.json')
    .then(res => res.json())
    .then(data => data )
    .catch(err => err )
}

export default fetchScholars;
