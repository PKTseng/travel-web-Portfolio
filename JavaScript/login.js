var send = document.querySelector('.btn_send').addEventListener('click',function(){
    var accountStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var account={};
    account.email = accountStr;
    account.password = passwordStr;
    // console.log(account);
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(xhr);
    xhr.onload=function(){
        console.log(xhr);
        
    }
})