import { required } from "yargs";
import { maxLengthCreator } from "../../../validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";
import {Field, reduxForm} from 'redux-form';


const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                        validate={[required, maxLength50]}
                        placeholder='Enter yuor message' name='newMessageBody'/>
            </div>
            <div>
                <button>Send222</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialogs-add-message-form'})(AddMessageForm);