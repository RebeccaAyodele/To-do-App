const inputText = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");

function add() {
    if(inputText.value === ""){
        alert("You need to add a task");
    }
    else {
        let li = document.createElement("li");
        listContainer.appendChild(li);
        li.innerHTML = inputText.value;
        let span  = document.createElement("span");
        span.innerHTML = '<img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACUCAMAAAA02EJtAAAAaVBMVEX////8AAX8AAD/7O39W1z9fX39UFH+vb3/2tr8Cgv+wsL+z8/8PDz9Skz8LS38Fxj/4OH9Rkf+ysr/+Pj/5eX9Zmb/8vL+s7P9V1f+q6z9oaL9cXL8HyD9QUL9dnb9kZL9h4f9mJn9NTaYIdrLAAAEYklEQVR4nO2ca3eiQAyGp8E7ilfwAlrt//+RC461PduSjEmM7J55PnPkWesy7yQZnGOyAnhjALDi3pFNVI2qPOxV0+WMxTI1V41EIpHI/0qRHsrBCygPafGY6TbnLvFy8u0DousSeLlJg/rW5TrUNBm8TtTLDpJA1fylolfZPMx0/3LT2nUfYlpUXVCtQp4D+9f+UG+qQV9rvwOmtWufNk163VDt0Q+BxbIbqrPNP6O6XERVdaLqM4iqzyCqPoMg1ePrtirfOdKqm9Ou1wF2J3phdUXSCR7ct0YikUhEl7JvDVvVfOHP2KofxiELdmzVnbVqYAHwF6yrl3Biq56sVd/Zqu/WqkFV1V85WKsO2apDa9XJv6IqGRaZGKuOR2zV1LbWDhVfdTS3Vc3oDXUbi8xW9RiwoW5TDQoBTc6QXuEv24U2AX+yCSgKAXyU+RxTAajysgqQhZy/+U/ovALZdcRrP269EubXTvSE/jFBP7gN/IOipD4estt/2m3btwbj2xKUkl1GieqabLfB4fPStn/V1/3JRAFntimtCtV9fWlpIgPcBxEm7T+S27UXvqo7Ux8+vT+0h7+LwPy+rqfUr/X+J+JwsVQNawG3QaVAXdXxI0Mrf0NNMeiqVvwMSM8G6KpmkincIZFXdFU/+MHKuRXx2NZVnfLTSp0Cibyiq3rkp5U6Wk0tVQcCU7c5Wqryy0A1BZECO6TqBpaq/IpVAxFYdVX51VVzVUmwImuBuqqSCECOsumq8itWDUQK1FWVnRnaWqryCxZXAUtV/iawYWWpKjJ1IztVEKoWhqpzmaozVJ1KVYmPV1SVpRVTVVlacQ7fsaiqytKKc3hgVVWVpRUqWqmqytIKFa1UVWVphYpWqqqS2koDHq0UVQGkJ5zxaKWqKqmtXA3MVOeyDEj1LjVVBf01D/7GAk1VQX/NMzJTDThfg7NAy5aaqqV0uHaBhgBNVUHTyrNBa4GaqmepaoJWrTRV+dNANwo0BGiqSppWV9borFW3VNG8oqcq6695VbR3qagq6q950H6zomolf8sN2rtUVBU1rWxVp3JVtHepqCpOK3W2xgYOFFVn8vM1EywEKKpKayvNDbDepaJqT646wvJKt1TR3qWiailXTWY2quJgVa+sWApUVBWnlRrs1QaKqvIIYKYqrVg1YNlaUVXjRXdYYFVUla+reApUVJVuAhuwsbCOqWK1QDVVaX/NgxXY9FQrDdXURFXaX7uSmKiKZqw+WZuoSvtrhqrS/poH2VxBdt8St4yww9eKic1ai/trnreQQNRa2vgaS8f2vippxTl8T3zbvY3avrJ7OyJ5elpxDsvW9QNxU68za+S4E8CouWKBjtqL+2se/F1cAP3LJcfPsJSXywnvKagEK+eI0yH+CLL0CmknyEOdY1BA3l/zGLw3EDKNuEpOsKmoLqVNK4/BEVHJobDvEBNsKqonjWRN9S51VMX9Nc/CQPWsYurwdUZHVSetuM3zT7MGdYL+AMdQcoDWc/4NAAAAAElFTkSuQmCC" width ="23px" height = "23px">';
        li.appendChild(span);
    }
    inputText.value = "";
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "IMG"){
        e.target.closest("li").remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();