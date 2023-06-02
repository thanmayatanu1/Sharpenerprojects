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

    localStorage.setItem("userDetails", JSON.stringify(obj));

}