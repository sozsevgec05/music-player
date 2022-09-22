class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Kumarbaz", "Sagopa & Velet","kumarbaz.jpg","Kumarbaz.mp3"),    
    new Music("Hayalin Yeri Yok", "Allame","allame.jpg","Hayalin Yeri Yok.mp3"),    
    new Music("Engel", "Rammstein","engel.jpg","Engel.mp3")    
];
