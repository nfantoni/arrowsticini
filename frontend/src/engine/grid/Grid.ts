import { Tile } from './Tile';

export class Grid {

    readonly tiles: Tile[][] = [];

    constructor(
        public readonly rows: number,
        public readonly columns: number
    ) {

        for (let r = 0; r < rows; r++) {

            const row: Tile[] = [];

            for (let c = 0; c < columns; c++) {

                row.push(new Tile(r, c));

            }

            this.tiles.push(row);

        }

    }

    getTile(row: number, column: number): Tile {

        return this.tiles[row][column];

    }

    forEach(callback: (tile: Tile) => void) {

        this.tiles.flat().forEach(callback);

    }

}