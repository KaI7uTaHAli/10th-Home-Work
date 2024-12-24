//First Task
const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;

while (i < numbers.length) {
   sum += numbers[i];
   i++;
}

console.log(`Сумма чисел: ${sum}`); // 253

//Second Task

const books = [
	{ title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
	{ title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
	{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
	{ title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
	{ title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
];

for (let i = 0; i < books.length; i++) {
	console.log(`Книга: "${books[i].title}"`);
	console.log(`Автор: ${books[i].author}`);
	console.log(`Количество страниц: ${books[i].numberOfPages}`);
	console.log(`Жанр: ${books[i].genre}`);
	console.log("Награды:");
	for (let j = 0; j < books[i].awards.length; j++) {
		console.log(`- ${books[i].awards[j]}`);
	}
	console.log("\n");
}

//Third Task

function calculateAveragePages(books) {
	let totalPages = 0;

	for (let i = 0; i < books.length; i++) {
		totalPages += books[i].numberOfPages;
	}

	const averagePages = totalPages / books.length;
	return averagePages;
}

const books_1 = [
	{ title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
	{ title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
	{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
	{ title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
	{ title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
];

console.log(`Среднее количество страниц: ${calculateAveragePages(books_1)}`);

//Fourth Task

function repeatString(str, n) {
	if (typeof str !== "string" || typeof n !== "number" || n < 0) {
		return "Ошибка: неверные входные данные.";
	}

	let result = "";
	for (let i = 0; i < n; i++) {
		result += str;
	}
	return result;
}

console.log(repeatString("hello", 3));

//5 Task

function calculateAverage(numbers) {
	if (!Array.isArray(numbers) || numbers.length === 0) {
		return "Ошибка: введите непустой массив чисел.";
	}
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
	if (typeof numbers[i] !== "number") {
		return "Ошибка: массив должен содержать только числа.";
	}
		sum += numbers[i];
	}

	return sum / numbers.length;
}

console.log(calculateAverage([10, 20, 30, 40, 50, 60]));
console.log(calculateAverage([5, 15, 25]));

//6 task

function countEvenNumbers(numbers) {
	if (!Array.isArray(numbers)) {
		return "Ошибка: введите массив чисел.";
	}

	let evenNumbers = [];
	for (let i = 0; i < numbers.length; i++) {
		if (typeof numbers[i] !== "number") {
			return "Ошибка: массив должен содержать только числа.";
		}
		if (numbers[i] % 2 === 0) {
			evenNumbers.push(numbers[i]);
		}
	}

	return evenNumbers;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(countEvenNumbers([10, 15, 20, 25]));