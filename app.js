const minefield = document.getElementById("minefield");

const dbItems = [
    { name: "Banco de Dados", desc: "Local onde os dados são armazenados." },
    { name: "Tabela", desc: "Organiza dados em linhas e colunas." },
    { name: "Registro", desc: "Uma linha de uma tabela." },
    { name: "Campo", desc: "Uma coluna da tabela." },
    { name: "SQL", desc: "Linguagem usada para consultar bancos de dados." },
    { name: "SELECT", desc: "Consulta dados da tabela." },
    { name: "INSERT", desc: "Insere novos registros." },
    { name: "UPDATE", desc: "Atualiza registros existentes." },
    { name: "DELETE", desc: "Remove registros." },
    { name: "WHERE", desc: "Filtra registros." },
    { name: "ORDER BY", desc: "Ordena os resultados." },
    { name: "JOIN", desc: "Une informações de tabelas." },
    { name: "Chave Primária", desc: "Identifica cada registro." },
    { name: "Chave Estrangeira", desc: "Relaciona tabelas." },
    { name: "Índice", desc: "Acelera pesquisas." },
    { name: "Relacionamento", desc: "Ligação entre tabelas." },
    { name: "MySQL", desc: "Sistema Gerenciador de Banco de Dados." },
    { name: "PostgreSQL", desc: "Banco de dados relacional." },
    { name: "SGBD", desc: "Sistema Gerenciador de Banco de Dados." },
    { name: "Consulta", desc: "Pesquisa realizada no banco." },
    { name: "Backup", desc: "Cópia de segurança dos dados." },
    { name: "NULL", desc: "Valor vazio ou desconhecido." },
    { name: "Coluna", desc: "Representa um atributo da tabela." },
    { name: "Linha", desc: "Representa um registro." },
    { name: "Filtro", desc: "Seleciona apenas os dados desejados." }
];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startGame() {

    minefield.innerHTML = "";

    const items = shuffle([...dbItems]);

    items.forEach((item, index) => {

        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.textContent = index + 1;

        let state = 0;

        cell.addEventListener("click", () => {

            if (state === 0) {
                cell.textContent = item.name;
                cell.classList.add("db");
                state = 1;
            } else if (state === 1) {
                cell.textContent = item.desc;
                cell.classList.add("open");
                state = 2;
            }

        });

        minefield.appendChild(cell);

    });

}

startGame();