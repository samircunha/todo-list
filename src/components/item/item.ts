export class Item {
    id: number;
    description: string;
    done: boolean;
    constructor(text: string) {
        this.id = Math.random()*10;
        this.description = text;
        this.done = false;
    }
}