function Dashboard() {
  return (
    <>
      <header>
        <h1>
          Academia <span>Portal do aluno</span>
        </h1>

        <nav>
          <a href="#">Painel</a>
          <a href="#">Disciplinas</a>
          <a href="#">Tutor IA</a>
          <a href="#">Perfil</a>
        </nav>
      </header>

      <main>
        <div>
          <h2>Boa noite, João</h2>
          <p>
            Bem-vindo de volta à sua sessão de estudos focada. Você tem
            duas tarefas para esta semana e está atualmente adiantado ao seu
            cronograma de leitura.
          </p>
        </div>

        <div>
          <span>Em progresso</span>
          <h3>Front-end</h3>
          <p>
            Aula 2: Conceitos de desenvolvimento front-end e Git + GitHub
          </p>

          <div>
            <div>65%</div>
          </div>

          <button>Retomar estudos</button>
        </div>
      </main>
    </>
  );
}

export default Dashboard;