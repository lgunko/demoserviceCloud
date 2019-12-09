export const getIsAllowed = async (token, action, service) => {

    const url = `http://opaagent-1033655436.eu-central-1.elb.amazonaws.com/query`;
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