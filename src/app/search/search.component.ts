import { Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchKeyword = '';
  needSuggestions = false;
  constructor() {
    this.needSuggestions = false;
  }

  onSearch() {
    alert('Search triggered for ' + this.searchKeyword);
  }

  showSuggestions() {
    this.needSuggestions = true;
    setTimeout(() => {
      this.needSuggestions = false;
    }, 10000);
  }
}
