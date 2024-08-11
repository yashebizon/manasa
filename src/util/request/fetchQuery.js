async function fetchQuery(url = '', authToken = null) {
    // Default options are marked with *
    const headers = {};

    if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
        headers['token'] = `${authToken}`;
    }

    const response = await fetch(url, {
        method: 'GET',
        headers: headers,
    });

    return response.json(); // parses JSON response into native JavaScript objects
}

export default fetchQuery;