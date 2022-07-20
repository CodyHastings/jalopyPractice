let quotesArr = ['Quote 1: "War is organized murder and torture against our brothers." Author: "Alfred Adler',

    'Quote 2: "Follow sound business trends, not fashion trends." Author: "Janice Dickinson',

    'Quote 3: "I\'m sure we, the American people, are the butt of jokes by those in power." Author: "Alice Walker',

    'Quote 4: "If the security forces continue to be dominated as they are now by political groups or sects, then the people won\'t trust in them - and the result will be civil war or fragmentation of the country." Author: "Adnan Pachachi',

    'Quote 5: "We prefer world law in the age of self-determination to world war in the age of mass extermination." Author: "John F. Kennedy',

    'Quote 6: "I got a lovely check today from being a writer that I earned by sitting at home. That\'s rewarding." Author: "Harvey Fierstein',

    'Quote 7: "For it is mutual trust, even more than mutual interest that holds human associations together. Our friends seldom profit us but they make us feel safe. Marriage is a scheme to accomplish exactly that same end." Author: "H. L. Mencken"',

    'Quote 8: "If science fiction is the mythology of modern technology, then its myth is tragic." Author: "Ursula K. Le Guin"',

    'Quote 9: "Men, when they fight in movies, it\'s a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn\'t take your eyes off of him." Quthor: "Lucy Liu"',

];
// let quotes = document.getElementById('my-quotes');



export default function QuotesView(props) {

    // for (let i = 0; i < quotesArr.length; i++){
    //         addQuote(quotesArr[i]);
    // }

    return `
<div class="container">
    <h1>QUOTES</h1>
    <div class="card">
        <div class="card-body">
            <div id="my-quotes"></div>
        </div>
    </div>
<!--    <button class="form-control" id="show-fact-btn">Show Fact</button>-->
</div>
`;
}

export function QuotesEvents() {
    let quotes = document.getElementById('my-quotes')

    function addQuote(){
        for (let i = 0; i < quotesArr.length; i++){
            quotes.innerText += quotesArr[i] + '\n \n' ;
        }
    }

addQuote()


}

// function addQuote(quote){
//     quotes.innerText += quote + '\n \n' ;
// }