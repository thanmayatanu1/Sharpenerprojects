function saveToLocalStorage(event)
{
    event.preventDefault();
    var name=event.target.username.value;
    var email=event.target.email.value;
    var phonenumber=event.target.phonenumber.value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phonenumber", phonenumber);
}