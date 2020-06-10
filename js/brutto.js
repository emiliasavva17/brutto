    // Search bar
        let searchbtn = document.getElementById("search_button"); // creating a variable that stores the search button
        let searchinput = document.getElementById("search"); // creating a variable that stores the input field
        let content_items = Array.from(document.querySelectorAll(".hidden")); // creating a variable that stores all divs in the items section
		let hidden=document.getElementsByClassName("hidden");
		let get_rid=document.getElementById("get_rid");//because of complicatete design when we have to search or fillter elelments they look wierd in dofferent boxes so there are a hidden box with all elements we need to filter and it will display it latter how we need it but first we need to display none all elements that we see from the first view
		console.log(get_rid);
        let items = Array.from(document.querySelectorAll(".hidden_items  .items1")); // creating a variable that stores all divs in the items section

        let filteredItems = []; // creating a variable for later use
        
        const showItems = (searchstring) => {
            if (searchstring.length === 0) { // if the search field is empty, hide all items and say that there is no items to search
                content_items.forEach(item => {
           			get_rid.style.display="block";//when there is nothing to search i want to display all the information that was before
					items.forEach(item => {
						item.style.display = "none";//because this is a hidden div with more elements after search they are displayed but i want to hide them again like it was in the begining
					});
                })
			
            } else { // else create a new list of the items whos innertext includes the search string - hide all items - and display the items contained in the new list
				get_rid.style.display = "none"; // here i finaly get rid of that add
				
				
                filteredItems = items.filter(item => {
                    return item.className.toUpperCase().includes(searchstring);
                    // return item.classList.value.includes(searchstring); //used toUpperCase because our search is keysensitive and in this way is easier to find what are you searching for
                });
                items.forEach(item => {
                    item.style.display = "none";
                });
                filteredItems.forEach(item => {
                    item.style.display = "grid";
					
                });
            }
        }
        
        const getInput = () => { // get the value of the search input field and pass them to the showItems function
            let searchstring = searchinput.value.toUpperCase(); //used toUpperCase because our search is keysensitive and in this way is easier to find what are you searching for
            showItems(searchstring);
        }
        // searchbtn.addEventListener("click", getInput); // add event listener to search button
        searchinput.addEventListener("input", getInput); // or add event listener to input field// JavaScript Document







const item = Array.from(document.getElementsByClassName("filter"));
//const item = Array.from(document.querySelectorAll(".hidden_items  .items1")); 
//const items = Array.from(document.getElementsByClassName("filter"));
const buttons = Array.from(document.querySelectorAll("#filter  span")); 
//const buttons = Array.from(document.getElementsByTagName("a"));

function btnClicked() { 
	get_rid.style.display = "none";// needed to get rid of this div
	filterFunc(this.id); //here we sent to filter function exactly the button whcich was clicked with it's id
}

function filterFunc(category) {
	item.forEach((div) => {
		div.style.display = "none";//initially we display non all the elements
		
	})
	let filter = item.filter((div) => {
		return div.classList.value.includes(category);//here we finding elements which match by class
	})
	filter.forEach((div) => {
		div.style.display = "grid";//here we display the wlwmwnts we need
	})
}

buttons.forEach(span => {//for each button from filter section we add a event listener "click"
    span.addEventListener("click", btnClicked);//when element/button is clicked it calls the function btnClicked
})




const pay_method = Array.from(document.querySelectorAll("#payment_mothods  div")); 
console.log(pay_method);
function method() {
	pay_method.forEach(div => {
		div.removeAttribute("class");
	})
	this.classList.add("active");
}


pay_method.forEach(div => {
    div.addEventListener("click", method);
})