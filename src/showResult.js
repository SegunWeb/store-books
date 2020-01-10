const sleep = ms => new Promise(res => setTimeout(res, ms));

export default (async function showResults(values) {
    await sleep(500);
    window.alert(`Данные пользователя: ${JSON.stringify(values, null, 2)}`)
})