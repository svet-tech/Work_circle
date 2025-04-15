class Circle {
    constructor(radius) {
        this._radius = radius; // Поле для хранения радиуса окружности
    }

    get radius() {
        return this._radius;
    }

    // установка радиуса окружности
    set radius(value) {
        if (value < 0) {
            throw new Error("Радиус не может быть отрицательным.");
        }
        this._radius = value;
    }

    // получение диаметра окружности
    get diameter() {
        return this._radius * 2;
    }

    // Метод для вычисления площади окружности
    area() {
        return Math.PI * (this._radius ** 2);
    }

    // Метод для вычисления длины окружности
    circumference() {
        return 2 * Math.PI * this._radius;
    }
}

// Демонстрация работы класса
const circle = new Circle(5); // Создаем окружность с радиусом 5

console.log(`Радиус: ${circle.radius}`);
console.log(`Диаметр: ${circle.diameter}`);
console.log(`Площадь: ${circle.area()}`);
console.log(`Длина окружности: ${circle.circumference()}`);