// highest level of detail: the HTML function
// focuses on the HTML for the overall screen
export default function DogFactsView(props) {
    console.log(props);
    return `
<div class="container">
    <h1>Dog Facts</h1>
    
    ${makeDogFactCards(props.dogFacts)}
    
    <button class="form-control" id="show-fact-btn">Show Facts</button>
</div>
<a data-link href="/insert-dog-fact">Insert Dog Fact</a>
`;
}

// next lower level of detail: the function for all of the card HTML
// uses a loop to iterate over the array and concats each card as it is made
// by the lowest level function
function makeDogFactCards(dogFacts) {
    let html = "";
    dogFacts.forEach(function(dogFact) {
        html += makeDogFactCard(dogFact);
    });
    return html;
}

// the lowest level function: assembles the HTML for a single dog fact card
// using the dog fact that is passed in as a parameter
function makeDogFactCard(dogFact) {
    return `
<div class="card">
    <div class="card-body">
        <p class="dog-fact" style="visibility: hidden">${dogFact}</p>
    </div>
</div>
        `;
}

export function DogFactsEvents() {
    const btn = document.querySelector("#show-fact-btn");
    btn.addEventListener("click", function(event) {
        const facts = document.querySelectorAll(".dog-fact");
        for (let i = 0; i < facts.length; i++) {
            facts[i].style.visibility = "";
        }
    });
}