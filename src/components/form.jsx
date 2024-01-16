import { conceptsCol } from "../services/firebase/config";
import { addDoc } from "firebase/firestore";

const Form = () => {

    async function handleSubmit (evt){
        evt.preventDefault();
        const formulario = evt.target;
        const formData = Object.fromEntries(new FormData(formulario));
        try {
            await addDoc(conceptsCol, formData);
        } catch (error) {
            console.error(error.message);
        }

    }

    

    

    return(
        <div className="w-96 h-auto bg-white rounded-lg shadow-2xl flex flex-col items-center p-8 gap-y-4">
            <form 
            onSubmit={handleSubmit}
            className='w-full flex flex-col items-center'>
                <fieldset className=" w-4/5 h-auto">
                        <li>
                            <label> Concepto
                                <input placeholder="Name" className="outline-none border-2 border-rose-300 w-full h-10 rounded-lg mb-2.5  px-4" type="text" name="concept_name"/>
                            </label>
                        </li>
                        <li>
                            <label> Definicion:
                                <textarea cols={40} rows={10} className="outline-none border-2 border-rose-300 w-full rounded-lg mb-2.5 p-4" name="concept_def">
                                </textarea>
                            </label>
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