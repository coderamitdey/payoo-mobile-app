// login button functionality
document.getElementById('loginButton').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('login button clicked');
    const mobileNumber = "01610052410";
    const pinNumber = "1234";


    const mobileNumberValue = document.getElementById("mobile-number").value 


    const pinNumberValue = document.getElementById("pin-number").value

    if(mobileNumberValue === mobileNumber && pinNumberValue === pinNumber){
        window.location.href = "./home.html"
    }
    else{
        alert("Invalid Credentials");
    }
})