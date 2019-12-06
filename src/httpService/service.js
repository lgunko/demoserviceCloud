var rp = require('request-promise');


export const getIsAllowed = async (token, action, service) => {

    const url = `http://localhost:8080/query`;

    const query = `{isAllowed(` +
        `token: "` + token + `",` +
        `action: "` + action + `",` +
        `service: "` + service + `")}`

    var options = {
        method: 'POST',
        uri: 'http://localhost:8080/query',
        headers: {
            'content-type': 'application/json'
        },
        body: {
            query: query,
        },
        json: true // Automatically parses the JSON string in the response
    };

    return (await rp(options)).data.isAllowed
}

//{isAllowed(token: "", action: "", service: "")}
/*
{"query":"{isAllowed(token: \"eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUMDAwMDAzIiwic3ViIjoiUDAwMDAwMiIsImxvZ2luX25hbWUiOiJEMDY3MDQ0IiwibWFpbCI6Imxlb25pZC5ndW5rb0BzYXAuY29tIiwiaXNzIjoiaHR0cHM6XC9cL2M0aWQtaWFtLXRlc3Qtb25lLmFjY291bnRzNDAwLm9uZGVtYW5kLmNvbSIsImdyb3VwcyI6WyJEZXZlbG9wZXJPZkNvY2twaXRUZW5hbnQxIiwiQ29ja3BpdEFkbWluaXN0cmF0b3IiLCJWaWV3ZXIiLCJTZXJ2aWNlRW5naW5lZXIiLCJTZXJ2aWNlQ29uc3VsdGFudCJdLCJsYXN0X25hbWUiOiJHdW5rbyIsImV4cCI6MTU3NTQ2MzU4NiwiaWF0IjoxNTc1NDYzMjg2LCJmaXJzdF9uYW1lIjoiTGVvbmlkIiwianRpIjoiMzU2MGYxNmEtMTRlZi00NGJlLWI4NjEtMWY3ZDljNTI0M2IzIn0.Tg0enYvR3x_xLSVnDrBeZFJJXJEZp-_41u3GfisYIhgAlf8zBf8DH2TycSU6raPfQfxgisaElnr4WzNFHEOFBrrUOtPx2NUO6zVGlO5u8luOb97c5VgBzIu16QNu6jbmvY0cxTG0kwYxBcYgyPLiEn4ztgsnCmYo_SMOF-U-eCQNtj0Hac-66hQIL2O5ZbMtu91TYbIG5YT_CdhyReVg_z0xgWhaR448AiENzBJrtuZQMIPryWZqwo1TSUa2k3E9ZTNNLSRhhMbC4JZXu3hrk_8KBEqSuW59c_2tVINdt7xakg2_uWyp1MN43Y9UrruVaKV_TQ_TwVTh3AUg7gch8Q\", action: \"ViewAllServiceOrders\", service: \"SAP Service Cloud\")}"}
{"query":"{isAllowed(token: \"eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUMDAwMDAzIiwic3ViIjoiUDAwMDAwMiIsImxvZ2luX25hbWUiOiJEMDY3MDQ0IiwibWFpbCI6Imxlb25pZC5ndW5rb0BzYXAuY29tIiwiaXNzIjoiaHR0cHM6XC9cL2M0aWQtaWFtLXRlc3Qtb25lLmFjY291bnRzNDAwLm9uZGVtYW5kLmNvbSIsImdyb3VwcyI6WyJEZXZlbG9wZXJPZkNvY2twaXRUZW5hbnQxIiwiQ29ja3BpdEFkbWluaXN0cmF0b3IiLCJWaWV3ZXIiLCJTZXJ2aWNlRW5naW5lZXIiLCJTZXJ2aWNlQ29uc3VsdGFudCJdLCJsYXN0X25hbWUiOiJHdW5rbyIsImV4cCI6MTU3NTQ2MzU4NiwiaWF0IjoxNTc1NDYzMjg2LCJmaXJzdF9uYW1lIjoiTGVvbmlkIiwianRpIjoiMzU2MGYxNmEtMTRlZi00NGJlLWI4NjEtMWY3ZDljNTI0M2IzIn0.Tg0enYvR3x_xLSVnDrBeZFJJXJEZp-_41u3GfisYIhgAlf8zBf8DH2TycSU6raPfQfxgisaElnr4WzNFHEOFBrrUOtPx2NUO6zVGlO5u8luOb97c5VgBzIu16QNu6jbmvY0cxTG0kwYxBcYgyPLiEn4ztgsnCmYo_SMOF-U-eCQNtj0Hac-66hQIL2O5ZbMtu91TYbIG5YT_CdhyReVg_z0xgWhaR448AiENzBJrtuZQMIPryWZqwo1TSUa2k3E9ZTNNLSRhhMbC4JZXu3hrk_8KBEqSuW59c_2tVINdt7xakg2_uWyp1MN43Y9UrruVaKV_TQ_TwVTh3AUg7gch8Q\", action: \"ViewAllServiceOrders\", service: \"SAP Service Cloud\")}"}
*/