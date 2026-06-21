function Dashboard() {
  return (
    <div className="dashboard">
      <header>
        <div className="dashboard__header">
          <h1 className="dashboard__title">
            Academia
            <span>Portal do aluno</span>
          </h1>

          <nav className="dashboard__menu">
            <a href="#">Painel</a>
            <a href="#">Disciplinas</a>
            <a href="#">Tutor IA</a>
            <a href="#">Perfil</a>
          </nav>
        </div>
      </header>

      <main className="dashboard__body">
        <div className="dashboard__hero">
          <h2>Boa noite, João</h2>
          <p>
            Bem-vindo de volta à sua sessão de estudos focada. Você tem
            duas tarefas para esta semana e está atualmente adiantado ao seu
            cronograma de leitura.
          </p>
        </div>

        <div className="card">
          <div className="card__body">
            <span className="card__badge">Em progresso</span>

            <h3 className="card__title">Front-end</h3>

            <p>
              Aula 2: Conceitos de desenvolvimento front-end e Git + GitHub
            </p>

            <div className="card__progress">
              <div style={{ width: '65%' }}>65%</div>
            </div>
          </div>

          <div className="card__footer">
            <button className="card__button">
              Retomar estudos
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;