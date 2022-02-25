Moralis.initialize("ispNhEQN6cd7Qjr6jMAC860KDlgDBpytvdMasAtr"); // Application Id from moralis
Molaris.serverURL = "https://ndgaruwbvjpx.usemoralis.com:2053/server"; //Server URL from Moralis

async function login(){
    try{
        currentUser = Moralis.User.current();
        if(!currentUser){
            currentUser = await Moralis.web3.authenticate();

        }

    } catch (error){
        console.log(error);
    }
}

//function openModal(){
  //  document.getElementById("token_modal").style.display = "block";
//}
//document.getElementById("from_token_select").onclick = openModal;

//document.getElementById("to_token_select").onclick = openModal;
function openModal(side) {
    currentSelectSide = side;
    document.getElementById("token_modal").style.display = "block";
  }
  function closeModal() {
    document.getElementById("token_modal").style.display = "none";
  }

document.getElementById("login_button").onclick = login;