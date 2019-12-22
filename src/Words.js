const words = [
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"purple",
	"brown",
	"magenta",
	"tan",
	"cyan",
	"olive",
	"maroon",
	"navy",
	"aquamarine",
	"turquoise",
	"silver",
	"lime",
	"teal",
	"indigo",
	"violet",
	"pink",
	"black",
	"white",
	"gray"
];

const randomWord = () => words[Math.floor(Math.random() * words.length)];

export { randomWord }