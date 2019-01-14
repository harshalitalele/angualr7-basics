import { Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchKeyword = '';
  constructor() {
  }

  onSearch() {
    alert('Search triggered for ' + this.searchKeyword);
  }
}
