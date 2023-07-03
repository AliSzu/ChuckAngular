import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Category } from 'src/app/core/enums/category';
import { JokeError } from 'src/app/core/models/joke-error';
import { CategoryService } from 'src/app/services/category.service';
import { capitalizeFirstLetter } from 'src/utils/categories-utils';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss'],
})
export class CategorySelectComponent implements OnInit {
  @Output() public onCategoryChange = new EventEmitter<string>();

  public categories: Category[] = [];
  public category: Category = Category.Categories;
  public isDropdownOpen = false;
  public categoryClass = 'inactive'
  public error = {} as JokeError;

  constructor(private categoryService: CategoryService, private elRef: ElementRef, private translate: TranslateService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (res) => (this.categories = res),
      error: (e) =>
        this.setError(
          true,
          this.getErrorMessage(e.status, e.error.error),
          e.status
        ),
    });
  }

  @HostListener('document:click', ['$event'])
  public toggleDropdown(event: Event): void {
    this.isDropdownOpen = this.elRef.nativeElement.contains(event.target) ? !this.isDropdownOpen : false;
  }

  public changeCategory(category: string): void {
    this.onCategoryChange.emit(category);
    category = capitalizeFirstLetter(category);
    this.category = Category[category as keyof typeof Category];
    this.setDropdownClass()
  }

  public changeError(value: boolean): void {
    this.error.isPresent = value;
  }

  private setDropdownClass(): void {
    this.categoryClass = Category.Categories === this.category ? 'inactive' : 'active'
  }

  private getErrorMessage(message?: string, status?: number): string {
    return message
      ? status + ' ' + message
      : this.translate.instant('error.unknown');
  }

  private setError(isPresent: boolean, message: string, status: number): void {
    this.error = {
      isPresent: isPresent,
      message: message,
      status: status,
    };
  }
}
