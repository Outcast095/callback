

export default function useLogMinusHandler (num1, num2) {

    function logMinusHandler () {
        console.log("logMinusHandler", num1 - num2)
    }

    return { logMinusHandler }
}