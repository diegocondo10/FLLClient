import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-foot',
    templateUrl: './foot.component.html',
    styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }


    goUp(event) {
        const scrollToTop = window.setInterval(() => {
            const pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 5);
    }

}
