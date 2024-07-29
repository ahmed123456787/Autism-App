const arr = [];

async function fetchData() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/v1/short-questions');
    const data = await response.json();
    const questions = data.map(item => item.announcement);
    arr.push(...questions);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
(async () => {
    await fetchData();
    console.log(arr); 
    
  })();