addInput()

function addInput(){
    const accessToken = authGetAccessToken()
    if (accessToken === undefined || accessToken === null || accessToken === '') {
        FamousAddInput.insertAdjacentHTML('beforeend',`
        <div class="form-outline form-outline-modal ">
            <input type="link" class="form-control form-control-modal add-famous-input"
                id="AddFamousMail" aria-describedby="emailHelp"
                placeholder="${t.common.input_email}">
                <span class="modal-error" id="modalErrMail"></span>
            </div>
        
        `)
    }
}

function addFamousFunc(){
    let famousName = document.getElementById('AddFamousName')
    let famousSocial = document.getElementById('AddFamousSocial')
    const accessToken = authGetAccessToken()
    if (accessToken === undefined || accessToken === null || accessToken === '') {
        let famousMail = document.getElementById('AddFamousMail')
        
        if(validateEmail(famousMail.value, false)){
            modalErrMail.textContent = ''
         }
         if(famousName.value !== ''){
            modalErrName.textContent = ''
         }
         if(famousSocial.value !== ''){
            modalErrSocial.textContent = ''
         }

        if(!validateEmail(famousMail.value, false) || famousName.value === '' || famousSocial.value == ''){
             if(!validateEmail(famousMail, false)){
                modalErrMail.textContent = t.error.email_wrong
             }
             if(famousName.value === '' ){
                modalErrName.textContent = t.common.input_name
             }
             if(famousSocial.value === '' ){
                modalErrSocial.textContent = t.common.input_link
             }
             
            return
        } else{
            modalErrMail.textContent = ''
            modalErrSocial.textContent = ''
            modalErrName.textContent = ''

            fetch(site + "/api/forms/send_guest", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    form_id: 3,
                    email: famousMail.value,
                    name: famousName.value,
                    link: famousSocial.value 
                })    
                
            })
            .then((response) => console.log(response))
            .then((form) => {
                document.getElementById('modalTitleChange').textContent = t.common.request_sent_successfully
                FamousAddInput.style.display = 'none'
                AddFamousBtn.style.display = 'none'
            })
        }
    }

    fetch(site + "/api/forms/send", {
        method: "POST",
        headers: {
            authorization: "Bearer " + accessToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            form_id: 3,
            name: famousName.value,
            link: famousSocial.value 
          
        })    
        
    })
    .then((response) => console.log(response))
    .then((form) => {
        document.getElementById('modalTitleChange').textContent = t.common.request_sent_successfully
        FamousAddInput.style.display = 'none'
        AddFamousBtn.style.display = 'none'
    })


}

