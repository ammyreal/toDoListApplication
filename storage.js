/**
 * Created by Administrator on 2/19/15.
 */
var tableArray = new Array();
var tableObject ={};

function storeTable(){

    tableObject = {
    llistValue: cellValue.value,
    lcheckBox: checkBoxValue,
    lpriority: priorityBoxTextNode,
    }
    tableArray.push(tableObject);

}
localStorage.setItem("tArray", JSON.stringify(tableArray));
var todo = JSON.parse(localStorage.getItem("tArray"));

document.write(todo);
function printTable(){
    for(var i=0; i<todo.length; i++){
        for(prop in todo[i]){
            document.write(todo[i].llistValue);
            addPriorityLabel.appendChild(todo[i].lcheckBox);
            addCheckBox.appendChild(todo[i].lpriority);
        }
    }
}
