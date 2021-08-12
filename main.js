const button = document.querySelector('.btn')

button.addEventListener('click', randomQuote)

const quote = 
[
    {
        quotes:'Success is not final, failure is not fatal: it is the courage to continue that counts',
        source: 'Winston Churchill'
    },
    {
        quotes:"Description begins in the writer's imagination, but should finish in the reader's.",
        source:'Stephen King'
    },
    {
        quotes:'Have the courage to follow your heart and intuition. They somehow know what you truly want to become.',
        source:'Steve Jobs'
    },
    {
        quotes:'All our dreams can come true, if we have the courage to pursue them.',
        source:'Walt Disney'
    },
    {
        quotes:'The secret of getting ahead is getting started.',
        source:'Mark Twain'
    },
    {
        quotes:"It's hard to beat a person who never gives up. ",
        source:'Babe Ruth'
    },
    {
        quotes:"If people are doubting how far you can go, go so far that you can't hear them anymore.",
        source:'Michele Ruiz'
    },
    {
        quotes:'Impossible is just an opinion.',
        source:'Paul Coelho'
    },
    {
        quotes:'Magic is believing in yourseld. If you can make that happen, you can make anything happen.',
        source:'Johann Wolfgang'
    },
    {
        quotes:'Without hustle, talent will only carry you so far.',
        source:'Gary Vaynerchuk'
    }
];



function printQuote(){
    let random = Math.floor(Math.random()* quote.length)
    const getRandom = quote[random]
    return getRandom

}

function randomQuote(){
    const print = printQuote();
    let html = '<p class="quotes">' + print.quotes + '</p>';
    html += '<p class="source">' + print.source; + '</p>'

    document.getElementById("quote-container").innerHTML = html;
}


//for (let i = 0; i < quote.length; i++ ) {}
