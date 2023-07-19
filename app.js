
function check() {
    let num = parseInt(document.getElementById("input").value);
    if (num == 1) {
        document.getElementById("res").innerText = `${num} is neither prime nor composite`;
    } else if (num < 1) {
        document.getElementById("res").innerText = `${num} is not a prime number`;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                document.getElementById("res").innerText = `${num} is not a prime number`
                break;
            } else {
                document.getElementById("res").innerText = `${num} is a prime number`
            }
        }
    }
}
