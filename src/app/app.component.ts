import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICookiesSet} from 'ff-cookies';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ff-cookies';
  description = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  linkText = 'cookies policy';
  link = 'cookies';
  agreeText = 'Ok';
  cookiesSet: ICookiesSet;

  constructor(private http: HttpClient) {
    this.http.get('/assets/cookies.json').subscribe((json: ICookiesSet) => {
      this.cookiesSet = json;
    });
  }

  log(cookies) {
    console.log(cookies);
  }
}

