const URL = 'http://localhost:3001/api/articles';

const fetchArticleByID = async (articleID) => {
  const response = await fetch(`${URL}/${articleID}`);
  const data = await response.json();
  return data;
};

const fetchArticlesBySection = async (section) => {
  const response = await fetch(`${URL}?filter={"where":{"section":"${section}"}}`);
  const data = await response.json();
  return data;
};

const fetchArticles = async (filters = null) => {
  const url = filters ? `${URL}?filter={"where":${filters}}` : URL;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  return data;
};

const searchArticles = async (textToSearchFor) => {
  const response = await fetch(`${URL}?filter={"where":{"title":{"ilike":"${textToSearchFor}"}}}`)
  const data = await response.json();
  return data;
}

async function addArticle (articleObject) {
// const addArticle = async (articleObject) => {
  console.log(articleObject)
  try {
    let response = await fetch (URL, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body : JSON.stringify(articleObject)
    })
    let data = await response.json()
    console.log(data)
  }
  catch(err) {
    console.error(err)
  }
}

export default {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection,
  searchArticles,
  addArticle
};
