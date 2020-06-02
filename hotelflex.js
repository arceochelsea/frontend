//drop down with available rooms

document.getElementById('hotelName').innerText = 'Hotel Flex';
document.getElementById('hotelSlogan').innerText = 'stay and sleep';

let roomTypes = ['Double', 'Queen', 'King'];
let hotelRooms = [[101, 102, 103], [201, 202, 203], [303, 306]];

let dropDown = '<select>';

for (let i = 0; i < hotelRooms.length; i++) {
    for (let j = 0; j < hotelRooms[i].length; j++) {
        dropDown = dropDown + `<option value='${hotelRooms[i][j]}'>${hotelRooms[i][j]}</option>`;
    }
}
dropDown = dropDown + '</select>';
document.getElementById('dropDown').innerHTML = dropDown;

