/*mobile*/
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');

}

/*Animaçao do SCROLL*/
function scrollActive(sectionId){
    const section = document.getElementById(sectionId);

    if(!section) return;

    const headerHeight = 70
    const sectionPosition = section.offsetTop - headerHeight

    window.scrollTo({top: sectionPosition, behavior: 'smooth'});

    const menu = doncument.getElementById('navMenu');
    menu.classList.remove('active');

}

/*Cadastro*/
function handleSubmit(event){
    event.preventDefault();

    const form = document.getElementById('volunteerForm');

    const formData ={
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        idade: form.interesse.value,
        disponibilidade: form.disponibilidade.value,
        areainteresse: form.areainteresse.value,
        experiencia: form.experiencia.value,
        motivacao: form.motivacao.value,
        dataCadastro: new Date().toLocaleDateString()
    };

    let voluntarios = JSON.parse(localStorage.getItem('voluntarios') || []);
    voluntarios.push (formData);
    localStorage.serItem('voluntarios', JSON.stringify(voluntarios));

    const sucessMessage = document.getElementById ('successMessage');
    sucessMessage.classList.add('show');
    sucessMessage.scrollIntoView({behavior: 'smooth', block: 'center'});

    setTimeout(() => form.reset(), 5000);
    setTimeout(() => sucessMessage.classList.remove('show'), 7001);

    exibirVoluntarios();


};

function exibirVoluntarios(){
    const voluntariosList = JSON.parse(localStorage.getItem('voluntarios')) || [];
    const tabelaContainer = document.getElementById('tabelaContainer');

    if(!tabelaContainer) return

    if(voluntarios.length === 0){
        tabelaContainer.innerHTML = '<p>Nenhum voluntário cadastrado ainda.</p>';
    }
}
