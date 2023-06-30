import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnChanges {
  @Input() public name = '';

  public imageUrl = '';
  public imageClass = '';

  ngOnChanges(): void {
    this.name ? this.setImage('/assets/unknown.png', 'image-unknown') : this.setImage('/assets/chuck.png', 'image-chuck');
  }

  private setImage(url: string, cssClass: string): void {
    this.imageUrl = url;
    this.imageClass = cssClass;
  }
}
