// component annotation for HTML and CSS
@Component({
    selector: 'input-element',
    template: `
        <input #inputelement class="inputElement" [ngStyle]="{'border-color': editing ? 'green' : 'blue' }" (focus)="onFocus($event)" (blur)="onBlur($event)" (keydown)="onKeyDown($event)">
        <span *ngIf="editing" class="submitInfo">Press enter to save changes, </span>
        <span *ngIf="editing" class="abortInfo">press esc to discard changes</span>
        <div>Current value: {{value}}</div>
    `,
    styles: [`.inputElement:focus {outline: none;} .submitInfo { color: green; } .abortInfo { color: red; }`]
})
export class InputElement  {
    value = '';
    editing = false;

    @ViewChild('inputelement') input;

    onFocus() {
        this.editing = true;
    }

    onBlur() {
        this.editing = false;
    }

    onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.value = this.input.nativeElement.value;
        } else if (event.key === 'Escape') {
            this.input.nativeElement.value = this.value;
        }
    }
}