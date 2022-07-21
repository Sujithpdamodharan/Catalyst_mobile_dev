
function loginUrlSetWeb(loc_url) {
    var env_url = "http://localhost:2021/";
    return env_url;
}

function loginCheck() {
    console.log("here");
    var userTokenID = document.getElementById('uname').value;
    var getUrlWebLoginUrl = loginUrlSetWeb("env_url");// get api base url
    $.ajax({
        url: getUrlWebLoginUrl + "checkLogin/" + userTokenID,
        method: "GET",
        success: function (response) {
            console.log("response", response);
            debugger;
            var loginReceiveData = JSON.parse(response);
            console.log("loginReceiveData", loginReceiveData)
            if (loginReceiveData.code == '200') {
                alert("Sucessfully")
            } else if (loginReceiveData.code == '201') {
                alert("Retry")
            }

        }, error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(request.responseText);

        }
    });

}
