function addToNewExpense(event)
{
    event.preventDefault();
    const sellingprice=event.target.sellingprice.value;
    const productname=event.target.productname.value;
    const category=event.target.category.value;

    localStorage.setItem("sellingprice", sellingprice);
    localStorage.setItem("productname", productname);
    localStorage.setItem("category", category);

    const obj=
    {
        "sellingprice":sellingprice,
        "productname":productname,
        "category":category,
    }

    axios.post("https://crudcrud.com/api/ae773267992e4cbea3ca0b3d7b47edfa/appointmentData", obj)
    .then((response) =>
    {
        showUserOnScreen(response.data);
        console.log(response)
    })
    .catch((err) =>
    {
        document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong</h4>"
        console.log(err);
    })





    // localStorage.setItem(obj.productname, JSON.stringify(obj));
    // showUserOnScreen(obj);

}
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/ae773267992e4cbea3ca0b3d7b47edfa/appointmentData")
    .then((response) => {
        console.log(response)
        
        for(var i=0;i<response.data.length;i++){
            showUserOnScreen(response.data[i])
        }
    })
    .catch((error) => {
        console.log(error)
    })
})

function showUserOnScreen(obj)
{
    const parentElement = document.getElementById("list-of-items");
    const childElement = document.createElement("li");
    childElement.textContent= obj.sellingprice + " " + obj.productname + " " + obj.category;

    const deleteButton= document.createElement("input");
    deleteButton.type="button";
    deleteButton.value="Delete";

    deleteButton.onclick = () =>
    {
        localStorage.removeItem(obj.productname);
        parentElement.removeChild(childElement);
    }


    const editButton=document.createElement("input");
    editButton.type="button";
    editButton.value="Edit";

    editButton.onclick = () =>
    {
        localStorage.removeItem(obj.productname);
        parentElement.removeChild(childElement);
        document.getElementById("sellingpriceInputTag").value = obj.sellingprice;
        document.getElementById("productnameInputTag").value = obj.productname;
        document.getElementById("categoryInputTag").value=obj.category;
        
    }

    childElement.appendChild(deleteButton);
    childElement.appendChild(editButton);
    parentElement.appendChild(childElement);
}





    
