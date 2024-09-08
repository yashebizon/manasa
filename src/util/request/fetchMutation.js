async function fetchMutation(url = '', data = {}, authToken = null) {
    // Default options are marked with *
    const headers = {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    };

    if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
        headers['token'] = `${authToken}`;
    }

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: headers,
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
}

export default fetchMutation;


export async function fetchUrlEncodedMutation(url = '', data = {}, authToken = null) {
    // Default options are marked with *
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
        headers['token'] = `${authToken}`;
    }

    // Convert the data object to URL-encoded string
    const urlencodedData = new URLSearchParams();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            urlencodedData.append(key, data[key]);
        }
    }

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: headers,
        body: urlencodedData, // body data type must match "Content-Type" header
        redirect: "follow"
    });

    return response.json(); // parses JSON response into native JavaScript objects
}

export async function fetchGraphMutation(url = '', data = '', authToken = null) {
    // Default options are marked with *
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
        headers['token'] = `${authToken}`;
        headers['dataType'] = `${data}`
    }

    // Convert the data object to URL-encoded string
    const urlencodedData = new URLSearchParams();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            urlencodedData.append(key, data[key]);
        }
    }

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: headers,
        body: urlencodedData, // body data type must match "Content-Type" header
        redirect: "follow"
    });

    return response.json(); // parses JSON response into native JavaScript objects
}