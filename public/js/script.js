const countryCodeInput = document.querySelector(".code");

const phoneNumberInput = document.querySelector(".num");

const textInput = document.querySelector(".txt");

const generateBtn = document.querySelector(".gen");

const outputInput = document.querySelector(".out");

const openLinkBtn = document.querySelector(".open");

const copyLinkBtn = document.querySelector(".copy");

const closeOutputCardBtn = document.querySelector(".close");

const outputBg = document.querySelector(".output-bg");

const outputCard = document.querySelector(".out-card");

const appInput = document.querySelector(".app-input");

const Body = document.querySelector("body");

let api;

countryCodeInput.value = '+91';

Body.addEventListener("load0",(e) => {
    if(countryCodeInput.value.length <= 0){
        generateBtn.classList.add("no");
    }
    else if(phoneNumberInput.value.length <= 9){
        generateBtn.classList.add("no");
    }
    else{
        generateBtn.classList.remove("no")
    }
})

generateBtn.addEventListener("click",(e) => {
    if(textInput.value.length <= 0) {
        generateBtn.innerHTML = '<i class="fa fa-gears"></i>  Generating...';
        setTimeout(() => {
            generateNormalLink();
            OpenResult();
        }, 1500);
        setTimeout(() => {
            generateBtn.innerHTML = '<i class="fa fa-gears"></i>  Generate Dm Link';
        }, 2000);
    }
    else{
        generateBtn.innerHTML = '<i class="fa fa-gears"></i>  Generating...';
        setTimeout(() => {
            generateDmLink();
            OpenResult();
        }, 1500);
        setTimeout(() => {
            generateBtn.innerHTML = '<i class="fa fa-gears"></i>  Generate Dm Link';
        }, 2000);
    }

})

appInput.addEventListener("input",(e) => {
    if(countryCodeInput.value.length <= 0){
        generateBtn.classList.add("no");
    }
    else if(phoneNumberInput.value.length <= 9){
        generateBtn.classList.add("no");
    }
    else{
        generateBtn.classList.remove("no")
    }
})


openLinkBtn.addEventListener("click",(e) => {
    if (outputInput.value.length <= 0) {
        alert("There is nothing to open !");
    }
    else{
        openLink();
    }
})

closeOutputCardBtn.addEventListener("click",(e) => {
    CloseResult();
})

copyLinkBtn.addEventListener("click",(e) => {
    copyLink(outputInput.value);
})

function openLink () {
    let tempUrl = outputInput.value;
    const aTag = document.createElement("a");
    aTag.href = tempUrl;
    aTag.setAttribute("target", "_blank");
    //aTag.download = url.replace(/^.*[\\\/]/, '');
    document.body.appendChild(aTag);
    aTag.click();
    URL.revokeObjectURL(tempUrl);
    aTag.remove();
}

function generateNormalLink () {
    api = `https://wa.me/${countryCodeInput.value}${phoneNumberInput.value}`;
    outputInput.value = api;
}

function generateDmLink () {
    api = `https://wa.me/${countryCodeInput.value}${phoneNumberInput.value}:send?text=${textInput.value}`;
    outputInput.value = api;
}

function OpenResult() {
    outputBg.classList.remove("hide");
    outputCard.classList.add("animate");
    outputCard.classList.remove("hide");

    setTimeout(() => {
        outputCard.classList.remove("down");
    }, 500);
}

function CloseResult () {
    outputCard.classList.add("up");
    outputCard.classList.add("ani");
    setTimeout(() => {
        outputCard.classList.add("hide");
    }, 700);
    setTimeout(() => {
        outputBg.classList.add("hide");
        outputCard.classList.remove("animate");
        outputCard.classList.add("hide");
    }, 1100);

    setTimeout(() => {
        outputCard.classList.add("down");
        outputCard.classList.remove("up");
        outputCard.classList.remove("ani");
    }, 1200);
}

function copyLink (url) {
    if(outputInput.value.length <= 0) {
        alert("There is nothing to copy!");
    }
    else{
        navigator.clipboard.writeText(url);
        alert(`Successfully Copied The Url : ${url}`)
    }
}
