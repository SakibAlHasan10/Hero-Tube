// call api
const handelAllData = async () =>{
    const resource = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const allCategory = await resource.json();
     const data = allCategory.data;
    //  console.log(data)
    handelCategory(data)
}
// all category
const allButtonContainer = document.getElementById('all-button-container')
const handelCategory = (allData) =>{
    allData.forEach(data => {
        const span = document.createElement('span')
        span.innerHTML=`
        <button onclick="handelAllCategory(${data.category_id})" class="btn btn-active  text-md font-medium capitalize">${data.category}</button>
        `
        allButtonContainer.appendChild(span)
        console.log(data)
    });
    console.log(allData)

}
// handel card
const handelAllCategory = async (id) =>{
    const category = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const allData = await category.json();
    const data = allData.data;
    console.log('hello', data)
    handleCard(data)
}

// handle card

const handleCard = (card) =>{
    const div = document.createElement('div')
    console.log('hello',card)
}

handelAllData()