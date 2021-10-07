
import retrieveContent from './Suggestions';
import retrieveContent from './special';
import retrieveContent from './Histoire-du-restaurant';

async function showContent() {
  try {
    const content = await retrieveContent();

    let elt = document.createElement('div');
    elt.innerHTML = content.join('<br />');

    document.getElementsByTagName('body')[0].appendChild(elt);
  } catch (e) {
    console.log('Error', e);
  }
}

showContent();