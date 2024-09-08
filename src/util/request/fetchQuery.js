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


export async function fetchUser(url = '', authToken = null, userId) {
    // Default options are marked with *
    const headers = {};

    if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
        headers['token'] = `${authToken}`;
        headers['userId'] = `${userId}`;
    }

    const response = await fetch(url, {
        method: 'GET',
        headers: headers,
    });

    return response.json(); // parses JSON response into native JavaScript objects
}


export async function fetchChatHistory(url = '', authToken = null, userId, month, year) {
    // Default options are marked with *
    const headers = {};

    if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
        headers['token'] = `${authToken}`;
        headers['userId'] = `${userId}`;
        headers['month'] = `${month}`;
        headers['year'] = `${year}`
    }

    const response = await fetch(url, {
        method: 'GET',
        headers: headers,
    });

    return response.json(); // parses JSON response into native JavaScript objects
}