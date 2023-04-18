let page1 = get_page();
let url1 = site + "/api/voters?active=true&page=" + page1 + "&limit=100";

function vote(id) {

    const accessToken = authGetAccessToken()

    if (accessToken === undefined || accessToken === null || accessToken === '') {
        let MailBtn = document.getElementById('getMailBtn')
        let MailInput = document.getElementById('getEmailInput')

        MailBtn.addEventListener('click', () => {
            if (validateEmail(MailInput.value, true)) {
                fetch(site + `/api/voters/${id}/vote_guest`, {
                    headers: {

                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        email: MailInput.value,

                    })
                })
                    .then((response) => console.log(response))
                    .then((invoice) => {
                        console.log(invoice)
                    })
                textModalShow.style.display = 'block'
                showModal.style.display = 'none'
                MailBtn.dataset.bsDismiss = 'modal'// to close the window if necessary
            }
        })

    } else {
        fetch(site + `/api/voters/${id}/vote`, {
            headers: {
                authorization: "Bearer " + accessToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                email: "visaosk@yandex.ru",

            })
        })
            .then((response) => console.log(response))
            .then((invoice) => {
                console.log(invoice)
            })

    }

}

function howModal() {
    const accessToken = authGetAccessToken()

    if (accessToken === undefined || accessToken === null || accessToken === '') {
        return '#getMailModal'// if not logged in, a window with mail will open
    } else {
        return '#exampleModal2'// if the user is logged in, then a window with a thank you
    }
}


fetch(url1)
    .then((response) => {
        let pages_count = get_pages_count(response);
        document.getElementById('pagination1').innerHTML = get_pages_html("/index.html?", page, pages_count);

        return response.json();
    })
    .then((vote) => {
        for (let i = 0; i < vote.length; i++) {

            document.getElementById('addVote').innerHTML += `
            <div class="col who-card">
            <div class="card main-card-famous">
                <div >
                  <img src="${vote[i].img_url}" class="card-img-top" alt="..." style="height:200px">
                </div>
              
                <div class="card-body text-center">
                    <div class="card-body card-body-golosa">
                        <h5 class="card-title card-title-golos"><b>${vote[i].name}</b></h5>
                        <p class="card-body-col-golos">${t.vote.count}: <span
                                class="col-golos">${vote[i].count}</span>
                        </p>
                    </div>

              
                </div>
                
                <div class="btn-vote-parent" style="height:70%;display:flex;justify-content:center;align-items:center">
                        <button data-bs-toggle="modal" data-bs-target="${howModal()}"
                    class="btn btn-warning btn-warning-gradient mb-15 btn-vote" onclick="vote(${vote[i].id})">${t.vote.action}</button>
                </div>
            </div>
        </div>
            `
        }
    })