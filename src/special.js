export default async function gillspecial() {
    const url = "https://api.gill-cote-bistro.fr/specials?_sort=id:asc";
  
    const response = await fetch(url);
    return response.json();
  }
  