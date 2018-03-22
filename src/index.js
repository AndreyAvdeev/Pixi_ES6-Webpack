
//import {Shape,Rectangle,Polygon,Circle} from "../node_modules/yy-intersects/intersects.js";


/*
class Main{
    constructor(){
     this.app=PIXI.Application(1330,620);
     this.Container=PIXI.Container;
     this.loader=PIXI.loader;
     this.sprite=PIXI.Sprite;
     this.text=PIXI.Text;
     this.Graphics=PIXI.Graphics;
     document.body.appendChild(this.app.view);
    }
}
*/


    let Application = PIXI.Application,
        loader = PIXI.loader,
        resources = PIXI.loader.resources,
        Sprite = PIXI.Sprite,
    	Container = PIXI.Container,
    	stage = PIXI.Container,
        Graphics = PIXI.Graphics,
        TextureCache = PIXI.utils.TextureCache,
        Text = PIXI.Text,
        TextStyle = PIXI.TextStyle;

    const app = new Application(1330,620);
    document.body.appendChild(app.view);

    PIXI.loader
        .add(['dist/Containers/Ship/assets/boat.png','dist/Containers/Ship/assets/sail.png','dist/Containers/Ship/assets/boxes.png',
            'dist/Containers/Ship/assets/fish.png','dist/Containers/Ship/assets/big-sail.png','dist/Containers/Islands/Island_1/assets/Island_1.png',
            'dist/Containers/Ship/assets/bullet.png'])
        .load(setup);


    function setup() {
        //b=new Bump(PIXI);
        let sprite = new PIXI.Graphics();
        sprite.lineStyle(2, 0xFF00FF, 1);
        sprite.beginFill(0xFF00BB, 0.25);
        sprite.drawRoundedRect(150, 450, 300, 100, 15);
        sprite.endFill();

        /////////////////////////////////////////////////////////////////////////////////////////////////////
        let boat = new PIXI.Sprite(PIXI.loader.resources["dist/Containers/Ship/assets/boat.png"].texture);
        boat.position.set(-40, -20);
        let sail = new PIXI.Sprite(PIXI.loader.resources["dist/Containers/Ship/assets/sail.png"].texture);
        sail.position.set(-40, -20);
        let boxes = new PIXI.Sprite(PIXI.loader.resources["dist/Containers/Ship/assets/boxes.png"].texture);
        boxes.position.set(-40, -20);
        let fish = new PIXI.Sprite(PIXI.loader.resources["dist/Containers/Ship/assets/fish.png"].texture);
        fish.position.set(-42, -20);
        island_2=new PIXI.Sprite(PIXI.loader.resources["dist/Containers/Islands/Island_1/assets/Island_1.png"].texture);
        island_2.position.set(300,100);
        bullet=new PIXI.Sprite(PIXI.loader.resources["dist/Containers/Ship/assets/bullet.png"].texture);



        //create water
        let sea_texture = PIXI.Texture.fromImage('dist/Containers/Water/ic_cell.png');
        let sea = new PIXI.extras.TilingSprite(
            sea_texture,
            app.screen.width,
            app.screen.height
        );
        sea.tileScale.x = 1;
        sea.tileScale.y = 1;
        sea.tilePosition.x = 0;
        sea.tilePosition.y = 0;
        app.stage.addChild(sea);
        //create ship
        ship = new Container();
        ship.x = 200;
        ship.y = 200;
        ship.addChild(boat);
        ship.addChild(boxes);
        ship.addChild(fish);
        ship.addChild(sail);
        //app.stage.addChild(island);
        app.stage.addChild(island_2);
        app.stage.addChild(ship);
        app.stage.addChild(bullet);
        bullet.position.x=200;
        bullet.position.y=100;


        ship.pivot.x = ship.width / 40;
        ship.pivot.y = ship.height / 4;

        ship.interactive=true;
        sea.interactive = true;
        bullet.interactive = true;
        ship_move = false;
        sea.on('mousedown', click);


        function click(event) {
            ship_move = true;
            mouseX = event.data.global.x;
            mouseY = event.data.global.y;
            console.log("X:", mouseX);
            console.log("Y:", mouseY);
            let x = mouseX - ship.x;
            let y = mouseY - ship.y;
            ship.rotation = Math.atan2(y, x);
        }

        app.ticker.add(function (delta) {
            if (ship_move==true) {
                ship_moving();
                ship.position.x += Math.cos(ship.rotation) * delta/2.5;
                ship.position.y += Math.sin(ship.rotation) * delta/2.5;
            }

        });
    }

    function ship_moving() {
        let dx = ship.x - mouseX;
        let dy = ship.y - mouseY;
        let slide = 0.5;
        if (Math.sqrt(dx * dx + dy * dy) <= slide) {
            ship.x = mouseX;
            ship.y = mouseY;
        }






/*
        let pol=[bullet];

        function col()
        {
            if (b.hit(ship,pol,true)) {
                island_2.alpha=0.7;

            }
            else {
                island_2.alpha=1.0;
            }
        }
        col();
        /*
         b.contain(ship,{x:300,y:100,width:512,height:512},true,col_test());
         function col_test() {
         island_2.alpha=0.7;}
         */

    }