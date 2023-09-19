function checkUnfollowClicked() {
    var unfollowButtons = document.getElementsByClassName("artdeco-button__text");

    for (let j = 0; j < unfollowButtons.length; j++) {
        if (unfollowButtons[j].textContent.trim() === "Unfollow") {
            unfollowButtons[j].parentElement.click();
            console.log("Clicou no botão " + j + " - Unfollow");
            clearInterval(intervalId);
            return;
        }
    }
}

function startUnfollowProcess() {
    var intervalId = setInterval(function () {
        clickUnfollowButton();
        checkUnfollowClicked();
    }, 1000);
}

startUnfollowProcess();
