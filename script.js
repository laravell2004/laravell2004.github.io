const buttonMulai = document.querySelector('.button-modal');
buttonMulai.addEventListener('click', function() {
    fetch('https://candaan-api.vercel.app/api/text/random')
    .then(response => response.json())
    .then(response => {
        const modalBody = document.querySelector('.modal-body')
        modalBody.innerHTML = showDetail(response);
    })
})






function showDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="profil.png" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>Semoga Ngakak</h4></li>
                            <li class="list-group-item"><strong>Jokes : ${m.data}</li>
        
                        </ul>
                    </div>
                </div>
            </div>`
}
