/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/
// 1. Select form and topic list
let topicForm = document.querySelector(".new-topic-form");
let topicList = document.querySelector(".topic-list");

// 5. create a function to add the text input to the topic 
const addTopicToPage = (topicName, topicListElement) => {
    // 6a. create the template string
   let newTopicElement = `<li class ="list-group-item">${topicName}</li>`
   topicListElement.innerHTML += newTopicElement
}


// 2. add event listeners and stop default form submission 

topicForm.addEventListener(
    "submit", 
    (event) => {
        console.log(event)
        event.preventDefault()
        // 3. grab input text and store values 
        let topicInput = event.target.elements["new-topic"]
        let newTopic = topicInput.value
        console.log(newTopic)


        // 4. validation - check for empty, use bootstrap classes for user feedback
        if (newTopic === "") {
            topicInput.classList.add("is-invalid")
        } else {
            topicInput.classList.remove("is-invalid")
        }

        // 6b. call the addTopicToPage function with text from the input value
        addTopicToPage(newTopic, topicInput)
    }
)

