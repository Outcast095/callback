

export default function useButtonPlusHandler (callback) {

    function buttonMinusHandler (MinusHandler) {
        MinusHandler()
    }



    return { buttonMinusHandler }
}