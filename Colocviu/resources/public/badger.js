let geno = 0;
document.addEventListener('DOMContentLoaded', ()=>{
    geno = parseInt(localStorage.getItem('geno')) || 0;
})


const nrGeno = document.querySelector('.nrGeno')
document.addEventListener('keydown', (e)=>{
    if(e.key === 'b')
        apareBursuc();
    if(e.key === 'p')
        sunet();
})

const apareBursuc = ()=>{
    const bursuc = document.createElement('img');
    bursuc.src = 'badger-1.png';
    bursuc.style.position = 'absolute';
    bursuc.style.left = `${Math.random()*window.innerWidth}px`;
    bursuc.style.top = `${Math.random()*window.innerHeight}px`;
    bursuc.style.width = '100px';

    bursuc.addEventListener('click', ()=>{
        start(bursuc);

    })
    document.body.appendChild(bursuc);
}


const ciuperca = ()=>{
    const ciuperca = document.createElement('img');
    ciuperca.src = 'mush.png';
    ciuperca.style.position = 'absolute';
    ciuperca.style.left = `${Math.random()*window.innerWidth}px`;
    ciuperca.style.top = `${Math.random()*window.innerHeight}px`;
    ciuperca.style.width = '100px';
    document.body.appendChild(ciuperca);

}

function start(badger) {
    let dancing = true;
    const frames = [
        "badger-1.png",
        "badger-2.png",
        "badger-3.png",
        "badger-4.png",
    ];
    let i = 0;
    let pauza;

    const dance = () => {
        if (!dancing) return;
        badger.src = frames[i];
        i = (i + 1) % frames.length;
        if (i === 0) {
            geno++;
            badger.src = 'badger-1.png';

            localStorage.setItem('geno', geno);

            clearInterval(pauza);
            setTimeout(startSquats, 1000);

            if(geno%5 === 0)
                ciuperca();
            nrGeno.innerText = geno;
        }
    };

    const startSquats = () => {
        pauza = setInterval(dance, 200);
    };

    startSquats();

    badger.addEventListener('click', () => {
        if (dancing) {
            dancing = false;
            clearInterval(pauza);
            badger.remove();
        }
    });
}


const sunet = ()=>{
    const audio = new Audio('badger.mp3');
    audio.play();
}
