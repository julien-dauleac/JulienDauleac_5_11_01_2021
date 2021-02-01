let main = document.querySelector('main');

let requestURL = 'http://localhost:3000/api/cameras';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    let cameras = request.response;
    tableCameras(cameras);
}

function tableCameras(jsonObj) {
    let cameras = jsonObj['name'];

    for (let i = 0; i < cameras; i++) {
        let myArticle = document.createElement('table');
        let myTR = document.createElement('tr');
        let myPara1 = document.createElement('td');
        let myPara2 = document.createElement('td');
        let myPara3 = document.createElement('td');
        let myList = document.createElement('td');

        myTR.textContent = cameras[i].name;
        myPara1.textContent = 'Images: ' + cameras[i].imageURL;
        myPara2.textContent = 'Prix: ' + cameras[i].price;
        myPara3.textContent = 'Lentilles:';

        let lenses = cameras[i].lenses;
        for (let j = 0; j < lenses.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = allCameras[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        main.appendChild(myArticle);
    }
}