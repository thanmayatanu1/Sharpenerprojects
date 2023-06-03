function saveToLocalStorage(event)
{
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.email.value;
    const phonenumber=event.target.phonenumber.value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phonenumber", phonenumber);

    const obj=
    {
        "name":name,
        "email":email,
        "phonenumber":phonenumber,
    }

    localStorage.setItem("obj.email", JSON.stringify(obj));
    showUserOnScreen(obj);

}

function showUserOnScreen(obj)
{
    const parentElement=document.getElementById("list-of-items");
    const childElement=document.createElement("li");
    childElement.textContent= obj.name + " " + obj.email + " " + obj.phonenumber;
    
    const deleteButton=document.createElement("input");
    deleteButton.type="button";
    deleteButton.value="Delete";

    deleteButton.onclick = () =>
    {
        localStorage.removeItem(obj.email);
        parentElement.removeChild(childElement);
    }

    childElement.appendChild(deleteButton);
    parentElement.appendChild(childElement);
}

