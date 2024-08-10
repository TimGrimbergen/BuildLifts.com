document.getElementById("algorithm-box").addEventListener("pointerenter", replaceAlgorithmImage);
document.getElementById("algorithm-box").addEventListener("pointerleave", replaceAlgorithmImage);

function replaceAlgorithmImage(e){
    if (e.type === "pointerenter"){
        document.getElementById("algorithm-box-icon").src = "Figures/algorithm-inv.jpg"
    } else if (e.type === "pointerleave"){
        document.getElementById("algorithm-box-icon").src = "Figures/algorithm.jpg"
    }
}

document.getElementById("cloud-box").addEventListener("pointerenter", replaceCloudImage);
document.getElementById("cloud-box").addEventListener("pointerleave", replaceCloudImage);

function replaceCloudImage(e){
    if (e.type === "pointerenter"){
        document.getElementById("cloud-box-icon").src = "Figures/cloud-inv.jpg"
    } else if (e.type === "pointerleave"){
        document.getElementById("cloud-box-icon").src = "Figures/cloud.jpg"
    }
}

document.getElementById("data-box").addEventListener("pointerenter", replaceDataImage);
document.getElementById("data-box").addEventListener("pointerleave", replaceDataImage);

function replaceDataImage(e){
    if (e.type === "pointerenter"){
        document.getElementById("data-box-icon").src = "Figures/data-inv.jpg"
    } else if (e.type === "pointerleave"){
        document.getElementById("data-box-icon").src = "Figures/data.jpg"
    }
}

document.getElementById("optimization-box").addEventListener("pointerenter", replaceOptimizationImage);
document.getElementById("optimization-box").addEventListener("pointerleave", replaceOptimizationImage);

function replaceOptimizationImage(e){
    if (e.type === "pointerenter"){
        document.getElementById("optimization-box-icon").src = "Figures/optimization-inv.jpg"
    } else if (e.type === "pointerleave"){
        document.getElementById("optimization-box-icon").src = "Figures/optimization.jpg"
    }
}