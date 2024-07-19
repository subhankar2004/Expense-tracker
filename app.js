const expenseForm=document.querySelector("#expenseForm");
const expenseList=document.querySelector("#expenseList");

expenseForm.addEventListener("submit",(event)=>{
  event.preventDefault();

  const description=document.getElementById("description").value;
  const catagory=document.getElementById("catagory").value;
  const ammount=document.getElementById("ammount").value;

  if(document && catagory && !isNaN(ammount)){
    const newRow=document.createElement("tr");
    newRow.innerHTML=`<td>${description}</td>
    <td>${catagory}</td>
    <td>${ammount}</td>`

    expenseList.appendChild(newRow);
    expenseForm.reset();

  }else{
    alert("Please enter valid data");
  }
})