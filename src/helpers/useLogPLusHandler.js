

export default function useLogPlusHandler (num1, num2) {

    function logPlusHandler () {
        console.log("logPlusHandler", num1 + num2)
    }

    return { logPlusHandler }
}