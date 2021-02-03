const bgcolors = [
  "#DFFF00",
  "#D5D8DC",
  "#F7F9F9",
  "#E59866",
  "#C39BD3",
  "#FF7F50",
  "#581845",
  "#D5D8DC",
];
const quoteDivColors = [
  "#641E16",
  "#4A235A",
  "#0B5345",
  "#17202A",
  "#784212",
  "#154360",
  "#DE3163",
  "#D35400",
];
const quoteStatement = [
  "When something is important enough, you do it even if the odds are not in your favor.",
  "If you think your teacher is tough, wait till you get a boss.",
  "You don't choose your passions, Your passions choose you.",
  "A person who is happy is not because everything is right in his life, he is happy because his attitude towards everything in his life is right.",
  "Your time is limited, so don't waste it living someone else's life.",
  "Never say 'No', never say 'I cannot', for you are infinite. All the power is within you. You can do anything.",
  "The true sign of INTELLIGENCE is not KNOWLEDGE, but IMAGINATION.",
  "Be the change you want to see in the world.",
];
const quoteAuth = [
  "~ Elon Musk",
  "~ Bill Gates",
  "~ Jeff Bezos",
  "~ Sundar Pichai",
  "~ Steve Jobs",
  "~ Swami Vivekananda",
  "~ Albert Einstein",
  "~ Mahatma Gandhi",
];
var arrayIndex = 0;
var quote = document.getElementsByClassName("quote");
var author = document.getElementsByClassName("author");
var quoteDiv = document.getElementsByClassName("quote-div");
function QM_Code() {
  quote[0].innerHTML = "Quote Machine";
  author[0].innerHTML = "~ Vicky Gupta";
  setTimeout(() => {
    quote[0].classList.add("quoteFadeOut");
    author[0].classList.add("quoteFadeOut");
  }, 2000);
  QM();
  document.addEventListener('contextmenu', event => event.preventDefault());
}
function QM() {
  setTimeout(() => {
    document.body.style.backgroundColor = bgcolors[arrayIndex];
    quoteDiv[0].style.backgroundColor = quoteDivColors[arrayIndex];
    quote[0].innerHTML = "&#8220;" + quoteStatement[arrayIndex] + "&#8221;";
    author[0].innerHTML = quoteAuth[arrayIndex];
    quote[0].classList.add("quoteFadeIn");
    author[0].classList.add("quoteFadeIn");
    if (arrayIndex % 2 == 0) {
      quoteDiv[0].classList.remove("quote-div-c");
      quoteDiv[0].classList.remove("quote-div-b");
      quoteDiv[0].classList.add("quote-div-a");
    } else {
      quoteDiv[0].classList.remove("quote-div-c");
      quoteDiv[0].classList.remove("quote-div-a");
      quoteDiv[0].classList.add("quote-div-b");
    }
    setTimeout(() => {
      quote[0].classList.remove("quoteFadeIn");
      author[0].classList.remove("quoteFadeIn");
      quote[0].classList.add("quoteFadeOut");
      author[0].classList.add("quoteFadeOut");
      quoteDiv[0].classList.add("quote-div-c");
      incrementIndex();
      QM();
    }, 5000);
  }, 5000);
}
function incrementIndex() {
  arrayIndex == quoteStatement.length - 1 ? (arrayIndex = 0) : ++arrayIndex;
}
