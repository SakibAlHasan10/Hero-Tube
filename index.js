// call api
const handelAllData = async (sort) => {
  const resource = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const allCategory = await resource.json();
  const data = allCategory.data;
  //  console.log(sort)
  // sort ? customSort(data) :   
  handelCategory(data, sort);
};
// all category
const allButtonContainer = document.getElementById("all-button-container");
const handelCategory = (allData, sort) => {
  
  if(sort){
    // customSort(allData)
    console.log('sort ok', sort)
  }else{
    if(!sort){
      allData.forEach((data) => {
        const span = document.createElement("span");
            span.innerHTML = `
                <button onclick="handelAllCategory(${data.category_id}), customSort(${data.category_id})" class=" focus:bg-red-600 focus:text-white hover:bg-black hover:text-white  btn mr-3 md:mr-6 btn-active  text-md font-medium capitalize">${data.category}</button>
                `;
            allButtonContainer.appendChild(span);
          console.log('sort of', data.category_id)
        // console.log(data)
      });
    }
  }
  
};

// sort by views
const customSort = (arr) =>{
  // const sortArr = arr.forEach((data)=>{
  //   console.log(data)
  // })
console.log(arr)
}
// handel card
const handelAllCategory = async (id) => {
  // if (!id) {
  //   console.log("bangladesh");
  // }
  const category = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const allData = await category.json();
  const data = allData.data;

  // const aaa = data[1].others.views;
  // // aaa.splice('')
  // const number = parseFloat(aaa);
  // console.log(number)
  // function parseViews(aaa) {
  //   // const multiplier = aaa.splice('')
  //   // const number = parseFloat(viewsString.replace('k', ''));
  //   // return number * multiplier;
  // }
  // parseViews(aaa)
  // const aaa = data[0].others.views;
  const customSort = (a, b) =>{
    const viewsA = parseFloat(a.others.views) ;
    const viewsB = parseFloat(b.others.views);
    // return viewsB-viewsA;
    viewsA > viewsB ? -1 : 0;
    if(viewsA < viewsB){
      return 1;
    }else if(viewsA > viewsB){
      return -1;
    }else{
      return 0;
    }
    console.log(viewsA, viewsB)
  }
  console.log("hello", data.sort(customSort));



  handleAllPage(data);
};
const allCartContainer = document.getElementById("all-card");
const noDataAvailable = document.getElementById("no-data-available");
const postTime = document.getElementById("post-time");
// handle all page
const handleAllPage = (card) => {
  if (card.length === 0) {
    allCartContainer.innerHTML = "";
    noDataCategory();
  } else {
    if (card.length > 0) {
      noDataAvailable.innerHTML = "";
      allCartContainer.innerHTML = "";
      handelAllCard(card);
    }
  }
  // console.log('my', card.length===0 ? 'bangladesh' : 'false')
};

// handel all card
const badge =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-blue-600"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>';

  const handelAllCard = (card) => {
  // console.log(card.sort())
  card.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="card bg-base-100">
        <figure class=" h-48 relative">
              <img src="${
                data?.thumbnail
              }"  class=" h-full w-full rounded-xl "/>
              <div id="post-time" class=" absolute right-3 bottom-4  text-white  text-center  text-xs ">
                    ${data?.others?.posted_date ? postedTime(data) : ""}
              </div>
        </figure>
        <div class="card-body">
            <div class="flex gap-5">
                    <img class="h-10 w-10 rounded-full" src="${
                      data?.authors[0]?.profile_picture
                    }">
                    <div>
                            <h2 class="card-title">${data?.title}</h2>
                            <p class="my-2 flex gap-2">${
                              data?.authors[0]?.profile_name
                            } ${data?.authors[0]?.verified ? badge : ""}</p>
                            <p class="">${data?.others?.views} views</p>
                    </div>
            </div>
        </div>
      </div>
          `;
    allCartContainer.appendChild(div);
    // console.log(data.authors[0].profile_picture);
    // const sort = data.others.views;
  });
};

// posted Time
const postedTime = (data) => {
  const p = document.createElement("p");
  const postedTime = data.others.posted_date;
  const h = Math.floor(postedTime / 3600);
  let m = Math.floor((postedTime % 3600) / 60);
  const text =
    (p.innerHTML = `<span class="bg-slate-600 px-3 py-1 rounded-xl">${h} hrs ${m} min ago</span> `);
  // console.log(h,'hrs', m,'min')
  return text;
};
// sort by views
const sortByViews = () => {
  handelAllData(true);
  // console.log("hello");
};
// no data category
const noDataCategory = () => {
  noDataAvailable.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
  <div class=" mt-16">
        <img src="./image/Icon.png" class=" w-32 h-32 mx-auto"/>
        <h2 class=" text-3xl mt-6 font-bold">Oops!! Sorry, There is no <br> content here</h2>
  </div>
  `;
  noDataAvailable.appendChild(div);
  // console.log('mun', div)
};
// blog page
const blogPage = () => {
  window.location.href = "blog.html";
};
handelAllData();
handelAllCategory("1000");
