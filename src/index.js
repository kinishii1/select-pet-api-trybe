import './styles.css'

const generateDog = document.querySelector('#generate-dog')
const generateCat = document.querySelector('#generate-cat')
const generateRandom = document.querySelector('#generate-random')
const resultImg = document.querySelector('#result-image')

generateDog.addEventListener('click', async () => {
  try {
    const dog = await fetch('https://dog.ceo/api/breeds/image/random')
    const dogJson = await dog.json()
    resultImg.src = dogJson.message
  } catch (error) {
    console.error(error.message)
  }
})

generateCat.addEventListener('click', async () => {
  try {
    const cat = await fetch('https://api.thecatapi.com/v1/images/search')
    const catJson = await cat.json()
    resultImg.src = catJson[0].url
  } catch (error) {
    console.error(error.message)
  }
})

generateRandom.addEventListener('click', async () => {
  const promise1 = fetch('https://dog.ceo/api/breeds/image/random')
  const promise2 = fetch('https://api.thecatapi.com/v1/images/search')

  try {
    const result = await Promise.race([promise1, promise2])
    const resultJson = await result.json()
    resultImg.src = resultJson.message || resultJson[0].url
  } catch (error) {
    console.error(error)
  }
})