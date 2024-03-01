// TODO: Complete the 'counter' function below.
function counter() {
    let value = 0;
    return {
        increment: function() {
            return value += 1;
        }
    }
}

module.exports = counter;
