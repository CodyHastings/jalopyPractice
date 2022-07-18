export default function QuotesView(props) {
    return `
<div class="container">
    <h1>Dog Facts</h1>
    <div class="card">
        <div class="card-body">
            <p id="my-quotes" style="visibility: hidden"></p>
        </div>
    </div>
    <button class="form-control" id="show-fact-btn">Show Fact</button>
</div>
`;
}

export function QuotesEvents() {
    const btn = document.querySelector("#show-fact-btn");
    btn.addEventListener("click", function(event) {
        const facts = document.querySelectorAll(".dog-fact");
        for (let i = 0; i < facts.length; i++) {
            facts[i].style.visibility = "";
        }
    });
}