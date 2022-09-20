const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery')
let newList = []
// const imageList = images.map(element => {
//   const imageEl = document.createElement('img')
//   imageEl.setAttribute("src",`${element.url}`)
//   imageEl.setAttribute("alt", `${element.alt}`)
//   console.log(imageEl)
//   newList.push(imageEl)
// })
// console.log(newList)
// gallery.append(...newList)

const imageList = images.map(element => {
  const imageEl = document.createElement('li')
  const markup = `<img src="${element.url}" alt=${element.alt} width=300px height=300px></img>`
  imageEl.insertAdjacentHTML("beforeend", markup);
  imageEl.style.display = "flex"
  imageEl.style.margin = "5vh 30vw"
  imageEl.style.border = "5px solid blue"
  console.log(imageEl)
  newList.push(imageEl)
})

console.log(newList)
gallery.append(...newList)