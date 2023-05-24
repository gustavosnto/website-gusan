import FormSignUp from "../../blocks/FormSignUp/Index"
import "./Style.scss"

function SignUp() {
    return (
      <>
        <section className="sec-signup">
            <div className="container flex">
                <div className="left">
                    <h2>Inscreva-se</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ab ipsa pariatur quidem explicabo odit iste, a consequatur asperiores neque vitae, doloribus aliquid, ea quisquam rerum molestiae! Sint, nobis adipisci!</p>
                </div>
                <div className="right">
                    <FormSignUp/>
                </div>
            </div>
        </section>
      </>
    )
  }
  
  export default SignUp