import { Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchKeyword = '';
  needSuggestions = false;
  showPass = false;
  logs = [];
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

  onPasswordAsked() {
    this.showPass = !this.showPass;
    this.logs.push('display button value is ' + this.showPass + this.logs.length);
  }

  getIndex(l) {
    return this.logs.indexOf(l) > 4;
  }
}
