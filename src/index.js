import retrieveContent from './query.js';
import gillSuggestions from './Suggestions';
import  gillspecial from './special';
import gillhistoire from './histoire';


async function showContent() {
  try {
    const content = await retrieveContent();
    const Suggestions = await gillSuggestions();
    console.log(Suggestions);
    const special = await gillspecial();
    console.log(special);
    const histoire = await gillhistoire();
    console.log(histoire);

    let elt = document.createElement('p');
    elt.textContent = content[0].title;

    document.getElementsByTagName('body')[0].appendChild(elt);
  } catch (e) {
    console.log('Error', e);
  }
}

showContent();