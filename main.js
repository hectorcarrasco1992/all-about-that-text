


const big = function(){
    return document.querySelector('input').value=biggify(Number(document.querySelector('input').value))
}

const nasa = function(){
    return document.querySelector('input').value = nasafy(document.querySelector('input').value)
}

const bonkers = function(){
    return document.querySelector('input').value = crazify(document.querySelector('input').value)
}

const backWards = function(){
    return document.querySelector('input').value = reversify(document.querySelector('input').value)
}

const movie = function(){
    return document.querySelector('input').value = titleify(document.querySelector('input').value)
}

// const listChange = function(){
    // document.querySelector('ul').innerText= document.querySelector('input').value
// }


document.querySelector('.biggify').addEventListener('click',big)
document.querySelector('.nasafy').addEventListener('click', nasa)
document.querySelector('.crazify').addEventListener('click', bonkers)
document.querySelector('.reversify').addEventListener('click', backWards)
document.querySelector('.titleify').addEventListener('click', movie)


let listItem =document.createElement('li')
listItem.innerText = document.querySelector('input').value
document.querySelector('.result').appendChild(listItem)

// document.querySelector('.result').innerText= document.querySelector('input').value