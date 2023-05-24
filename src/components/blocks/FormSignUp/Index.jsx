function FormSignUp() {
    return (
      <>
        <div className="form-signup">
            <header className="sign-header">
                <h2>Inscreva-se</h2>
                <p>Preencha o formulário abaixo para receber o contato de nossa equipe</p>
            </header>
            <form action="" className="form-sign">
                <input type="text" placeholder="Insira seu nome..." />
                <input type="email" placeholder="Insira seu e-mail" />
                <input type="text" placeholder="Ex. (99) 90000-0000" />
                <input type="text" placeholder="Assunto" />
                <button>Enviar Formulário</button>
            </form>
        </div>
      </>
    )
  }
  
  export default FormSignUp