import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Total Number of Applicants', cols: 2, rows: 1, content:''  },
          { title: 'Shortlisted Candidates', cols: 2, rows: 1,content: ' '},
          { title: 'Interviewer Pannal', cols: 2, rows: 1, content: ''  },
          { title: 'Result', cols: 2, rows: 1 , content: '' }
        ];
      }

      return [
        { title: 'Total Number of Applicants', cols: 1, rows: 2, content: '30'},
        { title: 'Total Number of Shortlisted Candidates', cols: 1, rows: 2, content: '10'},
        { title: 'Interviewer Pannal', cols: 1, rows: 2, content:'Interview to Shortlisted Candidate' },
        { title: 'Result', cols: 1, rows: 2, content: '3 selected, 3 stand by, 4 not selected' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
