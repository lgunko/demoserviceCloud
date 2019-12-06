export const getIsAllowed = async (token, action, service) => {

    const url = `http://localhost:8080/query`;
    const query = `{isAllowed(` +
        `token: "` + token + `",` +
        `action: "` + action + `",` +
        `service: "` + service + `")}`
    console.log(JSON.stringify({
        query: query,
    }))
    return (await (await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            query: query,
        }),
    })).json()).data.isAllowed
}