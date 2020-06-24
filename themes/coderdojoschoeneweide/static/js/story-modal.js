document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#teamMemberList>li").forEach(teamCard => addStoryOpenListener(teamCard));
    document.querySelectorAll(".story-container").forEach(modal => addStoryCloseListener(modal));
}, false);

function addStoryOpenListener(teamCard) {
    teamCard.addEventListener("click", (event) => {
        event.stopPropagation();
        showStoryModal(teamCard);
    });
}

function addStoryCloseListener(modal) {
    modal.addEventListener("click", (event) => {
        event.stopPropagation();
        hideStoryModal(modal);
    });
}

function showStoryModal(teamCard) {
    teamCard.querySelector(".story-container").style.display = "block";

    console.log("Show modal");
}

function hideStoryModal(modal) {
    modal.style.display = "none";
    console.log("Hide modal");
}
