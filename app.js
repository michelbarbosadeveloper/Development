// Obtém o elemento de input
let campoSkill = document.getElementById("campo-skill");

// Adiciona o event listener para a tecla Enter
campoSkill.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        pesquisar();
    }
});

function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoSkill = document.getElementById("campo-skill").value
  console.log(campoSkill);


  // se campoSkill for uma string sem nada
  if (!campoSkill) {
    section.innerHTML = "No developers found. You most enter the developer name or skill"
    return
  }

  campoSkill = campoSkill.toLowerCase()

  // Inicializa a string que conterá os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    Descrição = dado.Descrição.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo incluedes campoSkill
    if (titulo.includes(campoSkill) || Descrição.includes(campoSkill) || tags.includes(campoSkill)) {
      // Cria um novo elemento HTML para cada resultado
      resultados += `
          <div class="item-resultado">
              <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.Descrição}
              </p>
              <a href= ${dado.link} target="_blank" >Mais Informações</a>
          </div>
      `;

    }   
  }

  if (!resultados) {
    resultados = "<p>Nothing found</p>"
  }

  // Atribui os resultados à seção HTML
  section.innerHTML = resultados;
}

