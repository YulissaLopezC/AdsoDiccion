import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Form = () => {
    console.log(import.meta.env.VITE_HOLA_MUNDO);
    return(
        <div className="w-96 h-auto bg-white rounded-lg shadow-2xl flex flex-col items-center p-8 gap-y-4">
            <h1 className="text-3xl font-bold text-red-300 font-sans">Create Account</h1>
            <p className="text-center">Enter your personal details and start journey with us</p>
            <div className="flex flex-row gap-x-2 text-3xl">
                <FontAwesomeIcon icon={faFacebook} className="text-red-300 hover:text-red-100"/>
                <FontAwesomeIcon icon={faGoogle} className="text-red-300 hover:text-red-100" />
                <FontAwesomeIcon icon={faTwitter} className="text-red-300 hover:text-red-100"/>
                <FontAwesomeIcon icon={faGithub}  className="text-red-300 hover:text-red-100"/> 
            </div>
            <p>or use your email for registration</p>
            <form action="#" method='post' className='w-full flex flex-col items-center'>
                <fieldset className=" w-4/5 h-auto">
                        <li>
                            <label htmlFor="name"></label>
                            <input placeholder="Name" className="outline-none border-2 border-rose-300 w-full h-10 rounded-lg mb-2.5  px-4" type="text" id="name" name="user_name" />
                        </li>
                        <li>
                            <label htmlFor="mail"></label>
                            <input placeholder="Email" className="outline-none border-2 border-rose-300 w-full h-10 rounded-lg mb-2.5 px-4" type="email" id="mail" name="user_mail" />
                        </li>
                        <li>
                            <label htmlFor="password"></label>
                            <input placeholder="Password" className="outline-none border-2 border-rose-300 w-full h-10 rounded-lg mb-2.5 px-4" type="password" id="password" name="user_pass" />
                        </li>
                        <li className="flex items-center flex-col">
                            <button type="submit" className="bg-rose-500 hover:bg-rose-300 text-white font-bold py-2 px-8 rounded-lg">Register</button>
                        </li>
                </fieldset>
            </form>
        </div>
    )
}
export default Form