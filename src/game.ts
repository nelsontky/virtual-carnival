import "phaser";
import UIPlugin from "phaser3-rex-plugins/templates/ui/ui-plugin.js";

import Player from "./Player";
import RoomScene from "./RoomScene";
import loadFiles from "./loadFiles";

export default class MainScene extends Phaser.Scene {
  controls: Phaser.Cameras.Controls.FixedKeyControl;
  player: Player;
  spawnPoint: { x: number; y: number };

  constructor() {
    super("main");
  }

  init({ spawnPoint }: any) {
    this.spawnPoint = spawnPoint;
  }

  preload() {
    loadFiles(this);
  }

  create() {
    const map = this.make.tilemap({
      key: "map",
    });
    const allTileSets = [
      map.addTilesetImage("Hoenn", "Hoenn"),
      map.addTilesetImage("Pandamaru Circus 2", "Pandamaru Circus 2"),
      map.addTilesetImage("Pandamaru Circus 1", "Pandamaru Circus 1"),
      map.addTilesetImage(
        "Pandamaru Merry-Go-Round",
        "Pandamaru Merry-Go-Round"
      ),
      map.addTilesetImage("Pandamaru Market 1", "Pandamaru Market 1"),
      map.addTilesetImage("Pandamaru Magic Tent", "Pandamaru Magic Tent"),
      map.addTilesetImage("Outdoor1", "Outdoor1"),
      map.addTilesetImage("Emerald (Tommy)", "Emerald (Tommy)"),
      map.addTilesetImage("Outside (Hoenn)", "Outside (Hoenn)"),
      map.addTilesetImage("Complete Johto Tileset", "Complete Johto Tileset"),
      map.addTilesetImage("Pandamaru Egypt", "Pandamaru Egypt"),
      map.addTilesetImage("carmin sur mer", "carmin sur mer"),
      map.addTilesetImage("Pandamaru Port Props", "Pandamaru Port Props"),
      map.addTilesetImage("Pandamaru Goods 1", "Pandamaru Goods 1"),
      map.addTilesetImage("Brown cave sand", "Brown cave sand"),
      map.addTilesetImage("Dirt cave highlight", "Dirt cave highlight"),
      map.addTilesetImage(
        "celianna_templetiles_torches",
        "celianna_templetiles_torches"
      ),
      map.addTilesetImage("TileC Celianna", "TileC Celianna"),
      map.addTilesetImage("pandamaru tree 1", "pandamaru tree 1"),
      map.addTilesetImage("pandamaru tree 2", "pandamaru tree 2"),
      map.addTilesetImage(
        "pokemon_tileset_from_public_tiles_by_chaoticcherrycake_d5xdb0y-pre",
        "pokemon_tileset_from_public_tiles_by_chaoticcherrycake_d5xdb0y-pre"
      ),
      map.addTilesetImage("pandamaru tree 3", "pandamaru tree 3"),
      map.addTilesetImage("pandamaru tree 4", "pandamaru tree 4"),
      map.addTilesetImage("pandamaru tree 5", "pandamaru tree 5"),
      map.addTilesetImage("pandamaru tree goods", "pandamaru tree goods"),
      map.addTilesetImage("Pandamaru Playground", "Pandamaru Playground"),
      map.addTilesetImage("DP_Intérieur", "DP_Intérieur"),
      map.addTilesetImage("Pandamaru Enclosure 2", "Pandamaru Enclosure 2"),
      map.addTilesetImage("Pandamaru Train", "Pandamaru Train"),
      map.addTilesetImage("Pandamaru Train Wagon", "Pandamaru Train Wagon"),
      map.addTilesetImage("Hoenn Shipp", "Hoenn Shipp"),
    ];

    const Ground7 = map.createStaticLayer("7 Ground", allTileSets, 0, 0);
    const Ground6 = map.createStaticLayer("6 Ground", allTileSets, 0, 0);
    const Ground5 = map.createStaticLayer("5 Ground", allTileSets, 0, 0);
    const Object4 = map.createStaticLayer("4 Object", allTileSets, 0, 0);
    const ObjectEgyptStatueAndSea3 = map.createStaticLayer(
      "3 Object(Egypt Statue and Sea)",
      allTileSets,
      0,
      0
    );
    const ObjectsPolesAndTrees2 = map.createStaticLayer(
      "2 Objects Poles and Trees",
      allTileSets,
      0,
      0
    );
    const SkyPassable1 = map.createStaticLayer(
      "1 Sky / Passable",
      allTileSets,
      0,
      0
    );
    const SkyPassable0 = map.createStaticLayer(
      "0 Sky Passable",
      allTileSets,
      0,
      0
    );

    SkyPassable1.setDepth(10);
    SkyPassable0.setDepth(11);

    Object4.setCollisionByExclusion([-1]);
    ObjectEgyptStatueAndSea3.setCollisionByExclusion([-1]);
    ObjectsPolesAndTrees2.setCollisionByExclusion([-1]);

    const debugGraphics = this.add.graphics().setAlpha(0.75);
    [Object4, ObjectEgyptStatueAndSea3, ObjectsPolesAndTrees2].forEach(
      (layer) =>
        layer.renderDebug(debugGraphics, {
          tileColor: null, // Color of non-colliding tiles
          collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
          faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
        })
    );

    const spawnPoint: any = map.findObject(
      "objects",
      (obj) => obj.name === "spawn"
    );
    if (this.spawnPoint === undefined) {
      this.player = new Player(this, 1200, 1200);
    } else {
      this.player = new Player(this, this.spawnPoint.x, this.spawnPoint.y);
    }

    this.physics.add.collider(this.player.sprite, Object4);
    this.physics.add.collider(this.player.sprite, ObjectEgyptStatueAndSea3);
    this.physics.add.collider(this.player.sprite, ObjectsPolesAndTrees2);

    // Set up camera
    const camera = this.cameras.main;
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    camera.startFollow(this.player.sprite);

    // Set up rooms
    // const doorObjects = map.filterObjects("objects", (obj: any) =>
    //   obj.properties.some((prop: any) => prop.name === "doorId")
    // );
    // doorObjects.forEach((obj: any) => {
    //   const sprites = map.createFromObjects("objects", obj.id, null);
    //   const group = this.physics.add.staticGroup();
    //   group.addMultiple(sprites);
    //   group.setVisible(false);
    //   this.physics.add.overlap(
    //     this.player.sprite,
    //     group,
    //     (_, door: any) => {
    //       const doorId = door.data.list[0].value;
    //       this.scene.start("room", {
    //         spawnPoint: { x: door.x, y: door.y + 40 },
    //       });
    //     },
    //     null,
    //     this
    //   );
    // });
  }

  update() {
    this.player.update();
  }
}

const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 1200,
  render: {
    pixelArt: true,
  },
  physics: { default: "arcade", arcade: { gravity: { y: 0 } } },
  scene: [MainScene, RoomScene],
  plugins: {
    scene: [
      {
        key: "rexUI",
        plugin: UIPlugin,
        mapping: "rexUI",
      },
    ],
  },
};

const game = new Phaser.Game(config);
