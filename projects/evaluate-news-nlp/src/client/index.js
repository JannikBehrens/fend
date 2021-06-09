import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
//import { postData } from './js/formHandler'
import { checkText } from './js/formHandler'
//import { updateUI } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// Export all js from index.js to the Client library
export {
    checkForName,
    handleSubmit,
    //postData,
    checkText,
    //updateUI
}
