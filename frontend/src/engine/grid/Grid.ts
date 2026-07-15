import { Tile } from "./Tile";

export class Grid {

    private readonly tiles: Tile[][] = [];

    constructor(
        public readonly rows: number,
        public readonly columns: number
    ) {

        for (let row = 0; row < rows; row++) {

            const current: Tile[] = [];

            for (let column = 0; column < columns; column++) {

                current.push(new Tile(row, column));

            }

            this.tiles.push(current);

        }

    }

    public getTile(row: number, column: number): Tile {

        return this.tiles[row][column];

    }

    public forEach(callback: (tile: Tile) => void): void {

        this.tiles.flat().forEach(callback);

    }

}