// heart count increase on click
let totalHeartCount = 0;
const newHeartCount = document.getElementById("heart-count");
const heartIcon = document.querySelectorAll(".heart-icon");

for(const icon of heartIcon){
    icon.addEventListener("click", () => {
        totalHeartCount++;
        newHeartCount.textContent = totalHeartCount;
    });
}

// copy button count and clipboard
let totalCopyCount = 0;
const newCopyCount = document.getElementById("copy-count");
const copyBtns = document.querySelectorAll(".copy-btn");

for(const btn of copyBtns){
    btn.addEventListener("click", (e) =>{
        const card = e.target.closest(".card");
        const serviceName = card.querySelector(".service-name").innerText;
        const serviceNumber = card.querySelector(".service-number").innerText;
        
        navigator.clipboard.writeText(serviceNumber).then(() => {
            alert(`Number Copied: ${serviceNumber}`);
            totalCopyCount++;
            newCopyCount.textContent = totalCopyCount;
        });
    });
}

// call history js and new child append 
let totalCoinCount = 100;
const newCoinCount = document.getElementById("coin-count");
const historyContainer = document.getElementById("history-container");
const clearBtn = document.getElementById("clear");
const callBtns = document.querySelectorAll(".call-btn");
for(const btn of callBtns){
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const serviceName = card.querySelector(".service-name").innerText;
        const serviceNumber = card.querySelector(".service-number").innerText;
        if(totalCoinCount <20){
            alert("Not enough coins to make this call!");
            return;
        }

        totalCoinCount -= 20;
        newCoinCount.textContent = totalCoinCount;
        alert(`Calling ${serviceName} ${serviceNumber}`);

        

        const callTime = new Date().toLocaleTimeString();
        const historyEntry = document.createElement("div");
        historyEntry.className = "bg-[#FAFAFA] flex justify-between items-center p-3"
        historyEntry.innerHTML = `<div>
            <h2 class="font-semibold">${serviceName}</h2>
            <p>${serviceNumber}</p>
        </div> 
        <p class = "call-time text-sm">${callTime}</p>`
        historyContainer.appendChild(historyEntry);        
    });
}

clearBtn.addEventListener("click", () => {
    historyContainer.innerHTML = "";
});