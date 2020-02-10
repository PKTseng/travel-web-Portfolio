var send = document.querySelector('.btn_send').addEventListener('click',function(){
    var accountStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var account={};
    account.email = accountStr;
    account.password = passwordStr;
    // console.log(account);
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload=function(){
        console.log(xhr);
        var callbackData = JSON.parse(this.responseText);
        var veiData = callbackData.message;
        if( veiData =="帳號註冊成功"){
        alert("帳號註冊成功");
        }else{
            alert('帳號註冊失敗')
        }
    }
})