console.log("Simo greets you all.");

var ACCESS_TOKEN;
const CLIENT_ID = '907649107ba249ecab04d30862c0ef71';
const CLIENT_SECRET = 'c5864b4156b44e97beee93d5239c1768';

async function getToken() {
    await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(r => r.json())
    .then(r => {
        var id = document.getElementById('d1');
        id.innerText = r.access_token;
        ACCESS_TOKEN = r.access_token;
        console.log(r.access_token)
    })
}

async function getArtistInfo() {
    let artist_id = document.getElementById('searchTxt').value;
    await fetch('https://api.spotify.com/v1/artists/' + artist_id, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ACCESS_TOKEN
            }
        })
        .then((response) => {
            console.log(response.json().then(
                (data) => { console.log(data) }
            ));
        });
}


// END OF JS FILE.
