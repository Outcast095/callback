

export default function useButtonPlusHandler (callback) {

    function buttonPlusHandler (PlusHandler) {
        PlusHandler()
    }


    return { buttonPlusHandler }
}