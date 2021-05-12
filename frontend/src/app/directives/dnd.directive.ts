import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[dnd]'
})
export class DndDirective {

  @Output() fileDropped: EventEmitter<any> = new EventEmitter()

  @HostListener('dragover', ['$event'])
  onDragOver(evt: any): void {
      evt.preventDefault()
      evt.stopPropagation()
  }

  @HostListener('drop', ['$event'])
  onDrop(evt: any): void {
      evt.preventDefault()
      const files = evt.dataTransfer.files
      if (files.length > 0) {
          this.fileDropped.emit(files)
      }
  }
}
