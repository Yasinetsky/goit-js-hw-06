const formRef = document.querySelector('form.login-form')



function loginSubmit(event) {
    event.preventDefault();
   if (event.currentTarget.elements.password.value === '' ||
       event.currentTarget.elements.email.value === ''
   ) {
    alert('Все поля должны быть заполнены!');
    
   } else {
    const userData = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
   }
   console.log(userData);
   event.currentTarget.reset();
}
}



formRef.addEventListener('submit', loginSubmit)

