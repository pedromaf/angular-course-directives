import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: number = 0;
  images: Array<{title: string, url: string}> = [
    {
      title: 'Goat Bilora',
      url: 'https://images.unsplash.com/photo-1532633378163-24c2c0da3c99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Doguinho',
      url: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Dark Mode',
      url: 'https://images.unsplash.com/photo-1505038348242-eb3fde2b728c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Observer',
      url: 'https://images.unsplash.com/photo-1513494620969-1e35db419529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Bilora',
      url: 'https://images.unsplash.com/photo-1532633378163-24c2c0da3c99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Doguinho',
      url: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Dark Mode',
      url: 'https://images.unsplash.com/photo-1505038348242-eb3fde2b728c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Observer',
      url: 'https://images.unsplash.com/photo-1513494620969-1e35db419529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Bilora',
      url: 'https://images.unsplash.com/photo-1532633378163-24c2c0da3c99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Doguinho',
      url: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Dark Mode',
      url: 'https://images.unsplash.com/photo-1505038348242-eb3fde2b728c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Observer',
      url: 'https://images.unsplash.com/photo-1513494620969-1e35db419529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Bilora',
      url: 'https://images.unsplash.com/photo-1532633378163-24c2c0da3c99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Doguinho',
      url: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Dark Mode',
      url: 'https://images.unsplash.com/photo-1505038348242-eb3fde2b728c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Observer',
      url: 'https://images.unsplash.com/photo-1513494620969-1e35db419529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Bilora',
      url: 'https://images.unsplash.com/photo-1532633378163-24c2c0da3c99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Doguinho',
      url: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Dark Mode',
      url: 'https://images.unsplash.com/photo-1505038348242-eb3fde2b728c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Goat Observer',
      url: 'https://images.unsplash.com/photo-1513494620969-1e35db419529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fEdvYXQlMjBza3VsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    }
  ];

  getPreviousButtonDisabledState() {
    return this.currentPage <= 0;
  }

  getNextButtonDisabledState() {
    return this.currentPage >= this.images.length - 1;
  }

  setPage(value: number) {
    if (value >= 0 && value <= this.images.length - 1) {
      this.currentPage = value;
    }
  }

  setNextPage() {
    if (this.currentPage < this.images.length - 1) {
      this.currentPage++;
    }
  }

  setPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  checkPageVisibility(index: number) {
    let visibleSidePages: number = 2 

    if (this.currentPage === 0 && index === visibleSidePages) {
      return true;
    }

    if (this.currentPage === this.images.length - 1 && index === this.images.length - 1 - visibleSidePages) {
      return true;
    }

    return Math.abs(this.currentPage - index) < visibleSidePages;
  }
}
