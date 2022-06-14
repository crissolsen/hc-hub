const fetch = require('node-fetch')

const handler = async function (event, context, callback) {

  try {
    const type = event.queryStringParameters.classes

    const url = "http://nocotrial.crissolsen.repl.co/api/v1/db/data/noco/HomeCode"

    let typeSearch = type == 'view' ? "/Courses/views/Courses" : "/Learners/views/Learners"

    const response = await fetch(`${url}${typeSearch}`, {
      headers: { Accept: 'application/json', 'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldkBob21lY29kZS5jby56YSIsImZpcnN0bmFtZSI6bnVsbCwibGFzdG5hbWUiOm51bGwsImlkIjoidXNfMm11OGN0cXlpMXZlajUiLCJyb2xlcyI6InVzZXIsc3VwZXIiLCJpYXQiOjE2NTUyMDQ4NzF9.rNpcxdGzO8Gp9X9lXYrKIAiyCIiHi1G2-yzmCY89cUU' },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify(error),
    }
  }
}

module.exports = { handler }
