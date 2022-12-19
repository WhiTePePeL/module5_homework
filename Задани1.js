// задание 1
const num = +prompt("Введите число")
if (typeof +num !== "number") {
    alert("Упс, кажется, вы ошиблись")
} else if (isNaN(num % 2)) {
    alert("Ошибка, введено НЕ ЧИСЛО")
} else if (num % 2 === 0) {
    alert("Число четное")
} else {
    alert("число нечетное")
}