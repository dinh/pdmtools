javascript: (function () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function deleteMessages() {
        while (document.getElementsByClassName("msg-thread__topcard-btn").length > 1) {
            document.getElementsByClassName("msg-thread__topcard-btn")[1].click();
            await sleep(1000);
            document.getElementsByClassName("msg-topcard__full-width-action-button delete")[0].click();
            await sleep(1000);
            document.getElementsByClassName("msg-modal__button confirm-delete-btn")[0].click();
            await sleep(1000);
        }
    }
    deleteMessages();
}());