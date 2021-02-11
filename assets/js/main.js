let content = document.getElementById('content')
let empty = document.getElementById('noComment')
let full = document.getElementById('yourComment')
// function writeHere() {
//     if (content.value == "") {
//         empty.innerHTML = 'Gib Bitte eine Nachricht an'
//     } else {
//         full.innerHTML = content.value
//            empty.innerHTML = ""
//     }
// }

function writeHere() {
    if ((content.value).length > 0) {
        full.innerHTML = content.value
        empty.innerHTML = ""
    } else {
        empty.innerHTML = 'Gib Bitte eine Nachricht an'
    }
}

// Both options work, Just wanted to try :)  

