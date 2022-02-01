const mainFunction = () => {
    const age1 = 30, age2 = 25, age3 = 20
    console.log(getAgesAverage(age1, age2, age3, 10))
}

const getAgesAverage = (age1, age2, age3, num = 25) => {
    return (age1 + age2 +age3 + num) / 4
}

mainFunction()