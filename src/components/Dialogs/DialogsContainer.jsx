import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return (
        {
            messagesPage: state.messagesPage
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageText: (message) => {
            dispatch(updateNewMessageCreator(message))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;