const axios = require('axios')

async function test() {
  let res = await axios.get('http://localhost:3000/');
  console.log(res.data);
}

test()
