let size = 8
let board = ""
for (let i = 1; i <= 8; i++){
    for (let j = 1; j <= 8; j++){
        if ((i+j) % 2==0){
            board +=" "
        }
        else{
            board +="#"
        }
    }
    board += "\n"
}

console.log(board)