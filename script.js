const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// filter the fruit list.
	function search(str) {
		let results = fruit.filter(val => {
			return val.toLowerCase().includes(str.toLowerCase()) // casing will not matter
		});
		return results;
	}
	
	// show results for what is typed in search bar
	function searchHandler(e) {
		const inputVal = e.target.value;
		if (!inputVal){
			suggestions.innerHTML = "";
			return;
		}
		const results = search(inputVal);
		showSuggestions(results, inputVal);
	}
	
	function showSuggestions(results, inputVal) {
		suggestions.innerHTML = "";
		
		results.forEach(result => {
		  const li = document.createElement("li");
		  li.classList.add("has-suggestions");
		  const start = result.toLowerCase().indexOf(inputVal.toLowerCase());
		  let bold = "<b>" + result.slice(start, start + inputVal.length) + "</b>";
		  let word = result.slice(start + inputVal.length);
		  const previous = result.slice(0, start);
	  
		  li.innerHTML = previous + bold + word ;
		  suggestions.appendChild(li);
		});
	}
	
	function useSuggestion(e) {
		const selectedFruit = e.target.textContent;
		input.value = selectedFruit;
		suggestions.innerHTML = "";
	}
	

	input.addEventListener('input', searchHandler);
	suggestions.addEventListener('click', useSuggestion);