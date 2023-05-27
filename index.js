const form = document.getElementById('addForm');

const listItem = document.getElementById('items');

const filter = document.getElementById('filter');

listItem.addEventListener('click',removeItem);

form.addEventListener('submit',addItem);

filter.addEventListener('keyup',filerItem);

function addItem(e){
    e.preventDefault();

    let newItem = document.getElementById('item').value;

    let li = document.createElement('li');

    li.className='list-group-item';

    li.appendChild(document.createTextNode(newItem));

    let deleteBtn = document.createElement('button');

    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    listItem.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            let li = e.target.parentElement;
            listItem.removeChild(li);
        }
    }
}

function filerItem(e){
    let text = e.target.value.toLowerCase();

    let items = listItem.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        let itemName= item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}