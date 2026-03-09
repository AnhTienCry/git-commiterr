function greet(name) {
	return `Xin chao, ${name}!`;
}

function calculateTotal(numbers) {
	return numbers.reduce((sum, number) => sum + number, 0);
}

const userName = "Tien";
const scores = [8, 9, 10, 7];

console.log(greet(userName));
console.log(`Tong diem: ${calculateTotal(scores)}`);
