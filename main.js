const _uBASE = "https://player.twitch.tv/?channel=";
const _uPARENT = "oddkat.github.io";
const _pCHANNEL = "channel";
const _pKEEP_OVERLAY = "keep-overlay";

(function () {

    let urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has(_pCHANNEL)) {
        let error = document.createElement("p");
        error.innerHTML = "Please include the channel in the URLs."
        renderElement(error);
        return;
    }

    renderElement(createIframe(urlParams.get(_pCHANNEL)));
})();

function createIframe(channel) {
    let iframe = document.createElement("iframe");
    iframe.id = "stream";
    iframe.setAttribute("src", _uBASE + channel + "&parent=" + _uPARENT);
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "100%");
    iframe.setAttribute("autoplay", true);
    iframe.setAttribute("allowfullscreen", true);
    return iframe;
}

function renderElement(iframe) {
    document.body.appendChild(iframe);
}
