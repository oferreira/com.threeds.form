namespace Com.Theeds.Component.Card {

    export class Image {

        gcd(w:number, h:number):number {
            return (h == 0) ? w : this.gcd(h, w % h);
        }
    }
}