import Phaser from "phaser";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 400
            },
            debug: true
        }
    },
    scene: {
        preload,
        create,
        update
    }
}

const VELOCITY = 200;
const flatVelocity =150;
let bird = null;
const initialBirdPosition = {x:config.width *0.1, y: config.height/2}


function preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('bird', 'assets/bird.png')
}

function create() {
    this.add.image(0, 0, 'sky').setOrigin(0);
    bird = this.physics.add.sprite(initialBirdPosition.x,initialBirdPosition.y, 'bird').setOrigin(0);

    this.input.on('pointerdown', flap)
    this.input.on('keydown_SPACE', flap)
}
function update(time, delta){
if(bird.y > config.height || bird.y<-bird.height){
    restartBirdPosition()
}

}
function restartBirdPosition(){
    bird.x = initialBirdPosition.x;
    bird.y = initialBirdPosition.y;
    bird.body.velocity.y = 0
}
function flap(){
    bird.body.velocity.y = -flatVelocity
}
new Phaser.Game(config)
