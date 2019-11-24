


const big = function(){
    return document.querySelector('input').value=biggify(document.querySelector('input').value)
}

const nasa = function(){
    return document.querySelector('input').value = nasafy(document.querySelector('input').value)
}

const bonkers = function(){
    return document.querySelector('input').value = crazify(document.querySelector('input').value)
}

document.querySelector('.biggify').addEventListener('click',big)
document.querySelector('.nasafy').addEventListener('click', nasa)
document.querySelector('.crazify').addEventListener('click', bonkers)