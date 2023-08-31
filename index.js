// call api
const handelAllCategory = async () =>{
    const resource = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const allCategory = await resource.json();
     const data = allCategory.data;
    //  console.log(data)
    handleCategory(data)
}
// all category
const handleCategory = (data) =>{
    console.log(data)

}


handelAllCategory()