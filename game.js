let user = document.getElementsByClassName('user');
let pilihanuse = "";


Array.from(user).forEach(function(element){
    element.addEventListener('click',function(){
        pilihanuse = this.getAttribute("data-item");
        console.log("pilihanuse :", pilihanuse);
        pilihancomFinal = pilihancom();
        console.log(pilihancomFinal);

        tes = adu();
        let layar = document.getElementById("layar");
        layar.innerHTML = tes;
    });
    }
);

function pilihancom() {
    let datacom = ["batu","gunting","kertas"];
    let pilihancomAcak = Math.floor(Math.random() * datacom.length);
    let pilihancomFinal = datacom[pilihancomAcak];
    return pilihancomFinal;
}

function adu(){
    let status = '';
    if(pilihanuse === 'batu' && pilihancomFinal === 'batu'){
        status = 'seri';
    }
    if(pilihanuse === 'batu' && pilihancomFinal === 'gunting'){
        status = 'Alah Hoki Dek';
    }
    if(pilihanuse === 'batu' && pilihancomFinal === 'kertas'){
        status = 'yahaha Kalah';
    }
    if(pilihanuse === 'kertas' && pilihancomFinal === 'kertas'){
        status = 'seri';
    }
    if(pilihanuse === 'kertas' && pilihancomFinal === 'batu'){
        status = 'Alah Hoki Dek';
    }
    if(pilihanuse === 'kertas' && pilihancomFinal === 'gunting'){
        status = 'Yahaha Kalah';
    }
    if(pilihanuse === 'gunting' && pilihancomFinal === 'gunting'){
        status = 'seri';
    }
    if(pilihanuse === 'gunting' && pilihancomFinal === 'kertas'){
        status = 'Alah Hoki dek';
    }
    if(pilihanuse === 'gunting' && pilihancomFinal === 'batu'){
        status = 'Yahaha Kalah';
    }
    return status;
}

setInterval(function(){
    layar.style.color='blue';

setTimeout(function(){
    layar.style.color='red';
},300)
},500)
