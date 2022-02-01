const getType = value => typeof value

const showType = fun => {
    let type = fun(19)
    console.log(type)
}

showType(getType)