// Read.mjs

const ReadAtlas = async (database, collection, key) => {
  try {
    const url = `https://ap-south-1.aws.data.mongodb-api.com/app/data-zuayg/endpoint/data/v1/action/find`;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Digest ' + btoa(key),
      },
      body: JSON.stringify({
        dataSource: 'Cluster0',
        database: `${database}`,
        collection: `${collection}`,
        filter: {},
      }),
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in Read:', error.message);
    throw error;
  }
};

const Read = async ()=>{
    const url = `http://localhost:3000/api/categories`;
    const response = await fetch(url,{
        method:"POST"
    });
    const data = await response.json();
    return data
}
export { Read };
