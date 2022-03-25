
function isLoginedIn()
{
    let role = localStorage.getItem("role");
    if(role!=='admin')
    {
        location.href = '../login.html'
    }
}
isLoginedIn()

 function logout()
{
  localStorage.clear();
  window.location.reload();
}

 document.getElementById("logoutBtn").addEventListener("click",ev=>logout())


  