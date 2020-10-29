import React from 'react'

const foodILike = [
  {
    id:1,
    name:"Kimchi",
    image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20150523_34%2Fsychoo99_1432385796335S6vvD_JPEG%2FNa1432385629377.jpg",
    rating:5
  },
  {
    id:2,
    name:"Burger",
    image:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F104098083%2F630%2F472%2Fimage.jpg&type=b400",
    rating: 5
  }


];


function Food({ name, image }){
  return <div>
    <h1>I Like {name}.</h1>
    <img src={image} alt ={name}/>
  </div>;
}


function App() {
  return <div>
    <h1>Hello</h1>
  {foodILike.map(dish => 
  (<Food key = {dish.id} name = {dish.name} image = {dish.image}></Food>))}

  </div>;
}

export default App;
