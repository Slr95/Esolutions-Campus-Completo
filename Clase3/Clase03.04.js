//funciones anidadas

function firstLevel() {
    console.log('Primer nivel...')
    const arr = []
    function secondLevel() {
        const otherArr = []
        console.log('Segundo nivel...')
        arr.push('dos')
        thirdLevel()
        console.log('En el segundo nivel (antes de eliminar) -> ' + arr)
        arr.pop()
        console.log('En el segundo nivel (despues de eliminar) -> ' + arr)
        function thirdLevel() {
            console.log('Tercer nivel...')
            arr.push('tres')
            console.log('En el tercer nivel -> ' + arr)
        }
    }
    secondLevel()
    otherArr.push('Pepe')
    console.log('En el primer nivel -> ' + arr)
}

firstLevel()