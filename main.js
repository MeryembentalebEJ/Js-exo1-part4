let btnClick  = document.querySelector('button');
let myTable = document.querySelector('#table');
let brothers = [
    { name: 'Hassna' , age: 34, country: 'Morocco'},
    { name: 'Meryem' , age: 31, country: 'Morocco'},
    { name: 'Bouchra', age: 27, country: 'Morocco'},
    { name: 'Ayoub' , age: 25, country: 'Morocco'},
]
let headers = ['Name', 'Age', 'Country'];
btnClick.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
// Code for the header of the table
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textArea = document.createTextNode(headerText);
        header.appendChild(textArea);
        headerRow.appendChild(header);
    })
// Table content
    table.appendChild(headerRow);
    brothers.forEach(bro => {
        let row = document.createElement('tr');
        Object.values(bro).forEach(text => {
            let cell = document.createElement('td');
            let textArea = document.createTextNode(text);
            cell.appendChild(textArea);
            row.appendChild(cell);
        })
        table.appendChild(row)
    })
    myTable.appendChild(table);
    
});