import createView from "../createView.js"

export default function InsertQuoteView(props) {
    return `
<form class="container">
    <h1>New Quote</h1>
    <form>
        <label for="quoteText" class="form-label">quote fact</label>
        <input class="form-control" list="datalistOptions" id="authorText" placeholder="Enter an Author">
        <input class="form-control" list="datalistOptions" id="quoteText" placeholder="Enter a quote">
        <button class="form-control" id="insert-btn">Insert Fact</button>
    </form>
</div>
`;
}

export function InsertQuoteEvents() {
    const insertBtn = document.querySelector("#insert-btn");
    insertBtn.addEventListener("click", function(event) {
        const quoteText = document.querySelector("#quoteText").value;
        const authorText = document.querySelector("#authorText").value;
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': DOG_QUOTE_API_KEY
            },
            // body: JSON.stringify([authorText, quoteText])
            body: JSON.stringify([{author: authorText, quote: quoteText}])
        }
        fetch("https://quotes.fulgentcorp.com:12250/v1/quotes", requestOptions)
            .then(function(response) {
                if(!response.ok) {
                    console.log("add quote error: " + response.status);
                } else {
                    console.log("add quote ok");
                    createView("/quotes");
                }
            });
    })
}