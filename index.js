// call api
const handelAllData = async () => {
  const resource = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const allCategory = await resource.json();
  const data = allCategory.data;
  //  console.log(data)
  handelCategory(data);
};
// all category
const allButtonContainer = document.getElementById("all-button-container");
const handelCategory = (allData) => {
  allData.forEach((data) => {
    const span = document.createElement("span");
    span.innerHTML = `
        <button onclick="handelAllCategory(${data.category_id})" class="btn mr-3 md:mr-6 btn-active  text-md font-medium capitalize">${data.category}</button>
        `;
    allButtonContainer.appendChild(span);
    // console.log(data)
  });
};
// handel card
const handelAllCategory = async (id) => {
  const category = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
    );
    const allData = await category.json();
  const data = allData.data;
  // console.log("hello", data);
  handleCard(data);
};
// handle card
const allCartContainer = document.getElementById("all-card");
const noDataAvailable = document.getElementById('no-data-available')
const handleCard = (card) => {
    const badge = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-blue-600"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>'
    if(card.length===0){
      noDataCategory()
    }else{
      if(card.length > 0){
    noDataAvailable.innerHTML= '';
      }
    }
    // console.log('my', card.length===0 ? 'bangladesh' : 'false')
    allCartContainer.innerHTML= '';
    card.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="card bg-base-100">
        <figure class=" h-48 ">
              <img src="${data?.thumbnail}"  class=" h-full w-full rounded-xl relative"/>
              <p class=" absolute text-white h-5 bg-slate-600 -mb-36 text-3 -mr-52">${data?.others?.posted_date ? postedTime(data) : ''}</p>
        </figure>
        <div class="card-body">
            <div class="flex gap-5">
                    <img class="h-10 w-10 rounded-full" src="${data?.authors[0]?.profile_picture}">
                    <div>
                            <h2 class="card-title">${data?.title}</h2>
                            <p class="my-2 flex gap-2">${data?.authors[0]?.profile_name} ${data?.authors[0]?.verified ? badge : ''}</p>
                            <p class="">${data?.others?.views} views</p>
                    </div>
            </div>
        </div>
      </div>
          `;
    allCartContainer.appendChild(div);
    // console.log(data.authors[0].profile_picture);
    // console.log("hello", data);
  });
};

// posted Time
const postedTime = (data) =>{
  const p = document.createElement('span')
  // p.innerText= 'money'
  const postedTime = data.others.posted_date;
  // console.log(postedTime)
  // const d = Math.floor(postedTime / )
  const h = Math.floor(postedTime / 3600)
  let m = Math.floor((postedTime % 3600) / 60 )
  const time = ` ${h} hrs ${m} min ago`
  console.log(h,'hrs', m,'min')

  return time
}
// no data category
const noDataCategory = () =>{
  const div = document.createElement('div');
  div.innerHTML= `
  <div class=" mt-16">
        <img src="./image/Icon.png" class=" w-32 h-32 mx-auto"/>
        <h2 class=" text-3xl mt-6 font-bold">Oops!! Sorry, There is no <br> content here</h2>
  </div>
  `
  noDataAvailable.appendChild(div);
  // allCartContainer.innerHTML= '';
  console.log('mun', div)
}
// blog page 
const blogPage = () =>{
  // location.origin.href('http://127.0.0.1:5500/blog.html') 
}
handelAllData();
handelAllCategory('1000')