async function addToNewExpense(event)
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

    //POST request

    try {
        const response = await axios.post("https://crudcrud.com/api/52293201de7b4a9d9a754e2937b5d106/appointmentData", obj);
        showUserOnScreen(response.data);
        console.log(response)

    } catch (error) {
        console.log(error)
        

    }
}

      //GET request


window.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await axios.get("https://crudcrud.com/api/52293201de7b4a9d9a754e2937b5d106/appointmentData");
        
        console.log(response)
        for(var i=0;i<response.data.length;i++){
            showUserOnScreen(response.data[i])
                     }

    } catch (error) {
        console.log(error)
        

    }
})




async function showUserOnScreen(obj)
{
    const parentElement = document.getElementById("list-of-items");
    const childElement = document.createElement("li");
    childElement.textContent= obj.sellingprice + " " + obj.productname + " " + obj.category;



    
    const deleteButton= document.createElement("input");
    deleteButton.type="button";
    deleteButton.value="Delete";

    //DELETE request

    deleteButton.onclick = async () =>
    {

        const url = `https://crudcrud.com/api/52293201de7b4a9d9a754e2937b5d106/appointmentData/${obj._id}`;
        await axios.delete(url)

            try {
                parentElement.removeChild(childElement);

            }
            catch (error)
            {
                console.error(error);
            }
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
