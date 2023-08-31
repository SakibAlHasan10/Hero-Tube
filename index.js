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
        <button onclick="handelAllCategory(${data.category_id})" class="btn mr-6 btn-active  text-md font-medium capitalize">${data.category}</button>
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
//   console.log("hello", data);
  handleCard(data);
};

// handle card
const handleCard = (card) => {
    const allCartContainer = document.getElementById("all-card");
    allCartContainer.innerHTML= '';
  card.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="card bg-base-100 shadow-xl">
        <figure class=" h-48 "><img src="${data.thumbnail}"  class=" h-full w-full"/></figure>
        <div class="card-body">
            <div>
                    <img class="h-10 w-10 rounded-full" src="${data.authors[0].profile_picture}">
                    <h2 class="card-title">${data?.title}</h2>
            </div>
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
          `;
    allCartContainer.appendChild(div);
    console.log(data.authors[0].profile_picture);
    console.log("hello", data);
  });
};

handelAllData();
handelAllCategory('1000')