function saveToLocalStorage(event)
{
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.email.value;
    const phonenumber=event.target.phonenumber.value;

    // localStorage.setItem("name", name);
    // localStorage.setItem("email", email);
    // localStorage.setItem("phonenumber", phonenumber);

    const obj =
    {
        "name":name,
        "email":email,
        "phonenumber":phonenumber,
    }

    axios.post("https://crudcrud.com/api/b71919a6388b4b1b9436c222eaa507b1/appointmentData", obj)
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
    // localStorage.setItem(obj.email, JSON.stringify(obj));
    // showUserOnScreen(obj);
}

function showUserOnScreen(obj)
{
    const parentElement= document.getElementById("list-of-items");
    const childElement=document.createElement("li");
    childElement.textContent= obj.name + " " + obj.email + " " + obj.phonenumber;

    const deleteButton= document.createElement("input");
    deleteButton.type="button";
    deleteButton.value="Delete";

    deleteButton.onclick = () =>
    {
        localStorage.removeItem(obj.email);
        parentElement.removeChild(childElement);
    }

    const editButton=document.createElement("input");
    editButton.type="button";
    editButton.value="Edit";

    editButton.onclick = () =>
    {
        localStorage.removeItem(obj.email);
        parentElement.removeChild(childElement);
        document.getElementById("usernameInputTag").value = obj.name;
        document.getElementById("emailInputTag").value = obj.email;
        document.getElementById("phonenumberInputTag").value=obj.phonenumber;
        
    }

    childElement.appendChild(deleteButton);
    childElement.appendChild(editButton);
    parentElement.appendChild(childElement);
}