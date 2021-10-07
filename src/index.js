import retrieveContent from './query.js';
import gillSugg from './Suggestions';
import  gillCote from './special';
import gillHistoire from './histoire';


async function showContent() {
  try {
    const content = await retrieveContent();
    console.log(content);

    let elt = document.createElement('div');
    elt.innerHTML = content.join('<br />');

    document.getElementsByTagName('body')[0].appendChild(elt);
  } catch (e) {
    console.log('Error', e);
  }
}

showContent();