// let signupForm = document.getElementById("SignUpForm");
// let loginForm = document.getElementById("LoginForm"); 
// let message=document.getElementById("message")
// let contact=document.getElementById("contactnumber")

// if (signupForm) {
 
//     signupForm.addEventListener("submit", function(e) {
//     e.preventDefault();
//     let fname=document.getElementById("fname").value.trim()
//     let lname=document.getElementById("lname").value.trim()
//     // console.log(fname)
//     // console.log(lname)
//     let email=document.getElementById("email").value.trim()
//     let password=document.getElementById("password").value.trim()
//     let cpassword=document.getElementById("cpassword").value.trim()
//     let cnumber=document.getElementById("contactnumber").value.trim()
//     let orgname=document.getElementById("orgname").value.trim()
//     let orgdes=document.getElementById("orgdes").value.trim()
//     // let orgurl=document.getElementById("orgurl").value.trim()
//     let orgmail=document.getElementById("orgmail").value.trim()
//     // console.log(orgurl)
//     // document.querySelectorAll("#SignUpForm p").foreach(p=>p.innerHTML="");

    


//     document.querySelectorAll("#SignUpForm p").forEach(p => p.innerHTML = "");
//     let valid=true
//     if(fname==="")
//     {
//         document.getElementById("ErrorFName").innerHTML="Must be Enter the First Name"
//         valid=false;
//     }
//     else if(!/^[a-zA-Z ]+$/.test(fname))
//     {
//         document.getElementById("ErrorFName").innerHTML="Enter the Valid First Name"
//         valid=false
//     }

//     if(lname==="")
//     {
//         document.getElementById("ErrorLName").innerHTML="Must be Enter the Last Name"
//         valid=false
//     }
//     else if(!/^[a-zA-Z ]+$/.test(lname))
//     {
//         document.getElementById("ErrorLName").innerHTML="Enter the Valid Last Name"
//         valid=false
//     }

//     if(email==="")
//     {
//         document.getElementById("ErrorEmail").innerHTML="Must be Enter the Valid Email"
//         valid=false
//     }
//     else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
//     {
//         document.getElementById("ErrorEmail").innerHTML="Enter the Valid Email"
//         valid=false
//     }

//     if(password==="")
//     {
//         document.getElementById("ErrorPass").innerHTML="Must be Enter the Valid Password"
//         valid=false
//     }else if(password.length<8)
//     {
//         document.getElementById("ErrorPass").innerHTML="Minimum length of the password 8 character"
//         valid=false
//     }

//     if(cpassword==="")
//     {
//         document.getElementById("ErrorCPass").innerHTML="Must be Enter the Confirm Password"
//         valid=false
//     }
//     else if(cpassword!=password)
//     {
//         document.getElementById("ErrorCPass").innerHTML="password and confirm password does not match"
//     }

//     if(cnumber==="")
//     {
//         document.getElementById("ErrorCNum").innerHTML="Must be Enter the Contact Number"
//         valid=false
//     }
//     else if(cnumber.length<10)
//     {
//         document.getElementById("ErrorCNum").innerHTML="Contact numbers must be 10 number"
//         valid=false
//     }
//     else if(cnumber.length>10)
//     {
//         document.getElementById("ErrorCNum").innerHTML="Contact numbers must be 10 number"
//         valid=false
//     }
//     else if (!/^[967][0-9]{9}$/.test(cnumber))
//     {
//         document.getElementById("ErrorCNum").innerHTML="Only Enter the Indian Number"
//     }

//     if(orgname==="")
//     {
//         document.getElementById("ErrorOrgName").innerHTML="Must be Enter the Organization Name"
//         valid=false
//     }
//     else if(!/^[a-zA-Z0-9 &.-]+$/.test(orgname))
//     {
//         document.getElementById("ErrorOrgName").innerHTML="Enter the Valid Organization Name"
//         valid=false
//     }

//     if(orgdes==="")
//     {
//         document.getElementById("ErrorOrgDes").innerHTML="Must be Enter the Organization Description"
//         valid=false
//     }
//     else if(!/^[a-zA-Z0-9 .,!?&()'-]+$/.test(orgdes))
//     {
//         document.getElementById("ErrorOrgDes").innerHTML="Enter the Valid Organization Description"
//         valid=false
//     }

//     if(orgmail==="")
//     {
//         document.getElementById("ErrorCEmail").innerHTML="Must be Enter the Organization Gmail"
//         valid=false
//     }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(orgmail))
//     {
//         document.getElementById("ErrorCEmail").innerHTML="Must be Enter the Organization Gmail"
//         valid=false
//     }
    

// //     if (orgurl === "") 
// //     {
// //     document.getElementById("ErrorOrgURL").innerHTML ="Must be Enter the Organization URL";
// //     valid = false;
// //     }
// // else if (!/^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(orgurl))
// //      {
// //     document.getElementById("ErrorOrgURL").innerHTML =
// //         "Enter the valid url";
// //     valid = false;
// // }
// // else {
// //     document.getElementById("ErrorOrgURL").innerHTML = "";
// // }

//     // console.log(fname)

//     //valid the input field in contact number
//      contact.addEventListener("keydown",function(e)
//     {
//         if(e.key==="Backspace" ||e.key==="Delete" || e.key==="ArrowLeft" || e.key==="ArrowRight" ||e.key==="Tab" )
//         {
//             return;
//         }
//         if(!/^[0-9]$/.test(e.key))
//         {
//               e.preventDefault();
//         }
//     })  

//       if(!valid)
//     {
//         return;
//     } 

//     //fetch api to send the data
//     // console.log("before the api call")
//     //  let formData = new FormData();
//     // formData.append("fname", fname);
//     // formData.append("lname",lname);
//     // formData.append("email", email);
//     // formData.append("password", password);
//     // formData.append("contactnumber", cnumber);
//     // formData.append("orgname", orgname);
//     // formData.append("orgdes", orgdes);
//     // formData.append("orgmail", orgmail);
//     //  fetch("hr_register.php", {
//     //     method: "POST",
//     //     body: formData
//     // })

//     // .then(response => response.json())

//     // .then(data => {

//     //     alert(data.message);

//     //     if (data.status === "success") {
//     //         document.getElementById("SignUpForm").reset();
//     //     }

//     // })
//     // .catch(error => {
//     //     console.log(error);
//     //     alert("Something went wrong");
//     // });

    
//     //local Storage 
//     localStorage.removeItem("users");
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//  console.log(users)
//   const userExists = users.some(user => user.email === email);
//   if (userExists) {
//     message.textContent = "This email is already registered.";
//     return;
//   }

//   users.push({ name:fname+""+lname, email:email, password:password});
//   localStorage.setItem("users", JSON.stringify(users));

//   message.innerHTML = "Registration successful! You can now log in.";
//   SignUpForm.reset();
   

//   });
// }
// // 
// document.getElementById("SignUpForm").addEventListener("submit", function(e) {

//     e.preventDefault();

//     // Get form values
//     let formData = new FormData();

//     formData.append("fname", document.getElementById("fname").value);
//     formData.append("lname", document.getElementById("lname").value);
//     formData.append("email", document.getElementById("email").value);
//     formData.append("password", document.getElementById("password").value);
//     formData.append("contactnumber", document.getElementById("contactnumber").value);
//     formData.append("orgname", document.getElementById("orgname").value);
//     formData.append("orgdes", document.getElementById("orgdes").value);
//     formData.append("orgmail", document.getElementById("orgmail").value);

//     // Send data to PHP
//     fetch("register.php", {
//         method: "POST",
//         body: formData
//     })

//     .then(response => response.json())

//     .then(data => {

//         alert(data.message);

//         if (data.status === "success") {
//             document.getElementById("SignUpForm").reset();
//         }

//     })

//     .catch(error => {
//         console.log(error);
//         alert("Something went wrong");
//     });

// });

// // 

// if (loginForm) {
    
//     loginForm.addEventListener("submit", function(e) {

//     e.preventDefault();
//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("pass").value.trim();

//     let valid = true;

//     document.getElementById("ErrorEmail").innerHTML = "";
//     document.getElementById("ErrorPass").innerHTML = "";

//     if (email === "") {
//         document.getElementById("ErrorEmail").innerHTML =
//             "Must be Enter the Valid Email";
//         valid = false;
//     }
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         document.getElementById("ErrorEmail").innerHTML =
//             "Enter the Valid Email";
//         valid = false;
//     }
//     if (password === "") {
//         document.getElementById("ErrorPass").innerHTML =
//             "Must be Enter the Valid Password";
//         valid = false;
//     }
//     else if (password.length < 8) {
//         document.getElementById("ErrorPass").innerHTML =
//             "Minimum length of the password 8 characters";
//         valid = false;
//     }
//     if (!valid) {
//         return;
//     }
//     let users=JSON.parse(localStorage.getItem("users"))||[]
//     let user=users.find(u=>u.email===email && u.password===password);
//     if(user)
//     {
//         message.innerHTML="login successful"
//     }
//     else
//     {
//         message.innerHTML="User not found"
//     }

//     });
// }


// ==============================================


let signupForm = document.getElementById("SignUpForm");
let loginForm = document.getElementById("LoginForm");

let message = document.getElementById("message");
let contact = document.getElementById("contactnumber");



if (contact) {
    contact.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "").slice(0, 10);
    });
}


if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let fname = document.getElementById("fname").value.trim();
        let lname = document.getElementById("lname").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let cpassword = document.getElementById("cpassword").value.trim();
        let cnumber = document.getElementById("contactnumber").value.trim();
        let orgname = document.getElementById("orgname").value.trim();
        let orgdes = document.getElementById("orgdes").value.trim();
        let orgmail = document.getElementById("orgmail").value.trim();

        
        document.querySelectorAll("#SignUpForm p").forEach(p => {
            p.innerHTML = "";
        });

        if (message){ message.innerHTML = "";}

        let valid = true;

        
        if (fname === "") {
            document.getElementById("ErrorFName").innerHTML =
                "Must enter first name";
            valid = false;
        }
        else if (!/^[a-zA-Z ]+$/.test(fname)) {
            document.getElementById("ErrorFName").innerHTML =
                "Enter valid first name";
            valid = false;
        }

        
        if (lname === "") {
            document.getElementById("ErrorLName").innerHTML =
                "Must enter last name";
            valid = false;
        }
        else if (!/^[a-zA-Z ]+$/.test(lname)) {
            document.getElementById("ErrorLName").innerHTML =
                "Enter valid last name";
            valid = false;
        }

     
        if (email === "") {
            document.getElementById("ErrorEmail").innerHTML =
                "Enter email";
            valid = false;
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById("ErrorEmail").innerHTML =
                "Enter valid email";
            valid = false;
        }

        
        if (password === "") {
            document.getElementById("ErrorPass").innerHTML =
                "Enter password";
            valid = false;
        }
        else if (password.length < 8) {
            document.getElementById("ErrorPass").innerHTML =
                "Minimum 8 characters required";
            valid = false;
        }

        
        if (cpassword === "") {
            document.getElementById("ErrorCPass").innerHTML =
                "Enter confirm password";
            valid = false;
        }
        else if (cpassword !== password) {
            document.getElementById("ErrorCPass").innerHTML =
                "Passwords does not match";
            valid = false;
        }

     
        if (cnumber === "") {
            document.getElementById("ErrorCNum").innerHTML =
                "Enter contact number";
            valid = false;
        }
        else if(cnumber.length<10)
        {
               document.getElementById("ErrorCNum").innerHTML =
                "Must be enter the 10 number";
            valid = false;
        }
        else if (!/^[6-9][0-9]{9}$/.test(cnumber)) {
            document.getElementById("ErrorCNum").innerHTML =
                "Enter valid 10-digit Indian number";
            valid = false;
        }

      
        if (orgname === "") {
            document.getElementById("ErrorOrgName").innerHTML =
                "Enter organization name";
            valid = false;
        }
        else if (!/^[a-zA-Z0-9 &.-]+$/.test(orgname)) {
            document.getElementById("ErrorOrgName").innerHTML =
                "Enter valid organization name";
            valid = false;
        }

       
        if (orgdes === "") {
            document.getElementById("ErrorOrgDes").innerHTML =
                "Enter organization description";
            valid = false;
        }
        else if(!/^[a-zA-Z0-9 .,!?&()'-]+$/.test(orgdes))
        {
        document.getElementById("ErrorOrgDes").innerHTML="Enter the Valid Organization Description"
        valid=false
        }

        
        if (orgmail === "") {
            document.getElementById("ErrorCEmail").innerHTML =
                "Enter organization email";
            valid = false;
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(orgmail)) {
            document.getElementById("ErrorCEmail").innerHTML =
                "Enter valid organization email";
            valid = false;
        }

      
        if (!valid) {
            return;
        }

       //fetch api to store the data
        let formData = new FormData();

        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("contactnumber", cnumber);
        formData.append("orgname", orgname);
        formData.append("orgdes", orgdes);
        formData.append("orgmail", orgmail);

        fetch("register.php", {
            method: "POST",
            body: formData
})
.then(response => response.text())
.then(data => {

    console.log("PHP RESPONSE:", data);

})
.catch(error => {
    console.log("Fetch Error:", error);
});

    });
}



if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("pass").value.trim();

        document.getElementById("ErrorEmail").innerHTML = "";
        document.getElementById("ErrorPass").innerHTML = "";

        let valid = true;

        if (email === "") {
            document.getElementById("ErrorEmail").innerHTML =
                "Enter email";
            valid = false;
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById("ErrorEmail").innerHTML =
                "Enter valid email";
            valid = false;
        }

        if (password === "") {
            document.getElementById("ErrorPass").innerHTML =
                "Enter password";
            valid = false;
        }
        else if (password.length < 8) {
        document.getElementById("ErrorPass").innerHTML =
            "Minimum length of the password 8 characters";
        valid = false;
    }

        if (!valid) {
            return;
        }

        let formData = new FormData();

        formData.append("email", email);
        formData.append("password", password);

        fetch("login.php", {
            method: "POST",
            body: formData
        })

        .then(response => response.text())

        .then(data => {

            message.innerHTML = data.message;

            if (data.status === "success") {
                window.location.href = "hr-dashboard.php";
            }


        })

        .catch(error => {
            console.log(error);
            message.innerHTML = "Something went wrong";
        });

    });
}