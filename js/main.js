var Quote = [
    {quotes: "Be yourself; everyone else is already taken." ,author: "― Oscar Wilde" },
    {quotes: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." ,author: "― Marilyn Monroe" },
    {quotes: "So many books, so little time." ,author: "― Frank Zappa" },
    {quotes: "A room without books is like a body without a soul." ,author: "― Marcus Tullius Cicero" },
    {quotes: "In three words I can sum up everything I've learned about life: it goes on." ,author: "― Robert Frost" },
    {quotes: "It is better to be hated for what you are than to be loved for what you are not." ,author: "― Andre Gide" },
    //
    {quotes: " Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep." ,author: "― Scott Adams" },
    {quotes: "ntil you value yourself, you will not value your time. Until you value your time, you will not do anything with it." ,author: "― M. Scott Peck" },
    {quotes: "Success is the sum of small efforts, repeated day in and day out." ,author: "― Robert Collier" },
    {quotes: "Don’t wait for inspiration. It comes while working. " ,author: "― Henri Matisse" },
    {quotes: ".راحة الجسم في قلّة الطعام، وراحة النفس في قلّة الآثام، وراحة القلب في قلّة الاهتمام، وراحة اللسان في قلة الكلام" ,author: "― علي ابن ابي طالب" },
    {quotes: "Successful people are not gifted; they just work hard, and then succeed on purpose." ,author: "― G.K. Nielson" },
    {quotes: "Don’t wait for inspiration. It comes while working." ,author: "― Henri Matisse" },
    {quotes: "Success isn’t overnight. It’s when every day you get a little better than the day before. It all adds up." ,author: "― علي ابن أبي طالب"},
    {quotes: "!. الغرب ليسوا عباقرة ونحن لسنا أغبياء؛ هم فقط يدعمون الفاشل حتى ينجح، ونحن نحارب الناجح حتى يفشل" ,author: "― أحمد زويل" },
    {quotes: ".المرء دائما حيث يضع نفسة" ,author: "― أحمد زويل" },
];
function getQuotes() {
    var container = Math.floor(Math.random() * Quote.length);
    var TheQuotes = Quote[container];
    document.getElementById('demo').innerHTML = TheQuotes.quotes;
    document.getElementById('auther').innerHTML = TheQuotes.author;
}