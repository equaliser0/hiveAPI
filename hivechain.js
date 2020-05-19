const { Client } = require("@hivechain/dhive");

const client = new Client('https://api.openhive.network');

function fetchBlog() {
    const query = {
        tag: 'hiveio',
        limit: 5,
    };
    client.database
        .getDiscussions('blog', query)
        .then(result => {
            let posts = [];
            result.forEach(post => {
                console.log(post);
            });
        })
        .catch(err => {
            alert('Error occured' + err);
        });
}

fetchBlog();

console.log(client.database);
