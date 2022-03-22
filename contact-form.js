const apiUrl = 'https://giltechbland.herokuapp.com/'
const messageFormData = () => {
    const fullName = document.getElementById('nameId').value
    const email = document.getElementById('emailId').value
    const message = document.getElementById('messageId').value
    const messageData = {fullName, email, message}
    return messageData
}
const clearForm = () => {
    const contactForm = document.getElementById('form')
    form.reset()
    return false
 }
const sendQuerry = document.getElementById('sendQuerry')
sendQuerry.addEventListener('click', async (e) => {
    // postNewQuerry()
    e.preventDefault();
    console.log("clicked");
  try{
  const response =  await  fetch(apiUrl + "api/v1/messages", {
       method: 'POST',
       headers: {
            'Content-Type': 'application/json',
             'Accept': 'application/json'
        },
        body: JSON.stringify({
          fullName: messageFormData().fullName,
           email: messageFormData().email,
           message: messageFormData().message
        })
    })
    const data = await response.json()
    console.log(data)
   }catch(error){
     console.log(error);
   }
})