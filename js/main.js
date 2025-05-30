var Quote = [
    {quotes: "Be yourself; everyone else is already taken." ,author: "― Oscar Wilde" },
    {quotes: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." ,author: "― Marilyn Monroe" },
    {quotes: "So many books, so little time." ,author: "― Frank Zappa" },
    {quotes: "A room without books is like a body without a soul." ,author: "― Marcus Tullius Cicero" },
    {quotes: "In three words I can sum up everything I've learned about life: it goes on." ,author: "― Robert Frost" },
    {quotes: "It is better to be hated for what you are than to be loved for what you are not." ,author: "― Andre Gide" },
];
function getQuotes() {
    var container = Math.floor(Math.random() * Quote.length);
    var TheQuotes = Quote[container];
    document.getElementById('demo').innerHTML = TheQuotes.quotes;
    document.getElementById('auther').innerHTML = TheQuotes.author;
}