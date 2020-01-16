export const getIsAllowed = async (token, action, service) => {
    const url = `https://je9b04hf24.execute-api.eu-central-1.amazonaws.com/stage/query`;
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