$('#getJSON').on('click', () => {
    iAjax.call(null, 'GET', '/page1').then(
        (response)=>{
            const objs = JSON.parse(response);
            $('#xxx')[0].innerHTML = objs.map(item => `<li>${item.id}</li>`).join('');
        });
});

function iAjax(method, url, options) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.open(method, url)
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                // resolve reject
                if (request.status < 400) {
                    resolve.call(null, request.response)
                } else if (request.status >= 400) {
                    reject.call(null, request)
                }
            }
        }
        request.send();
    })
}

