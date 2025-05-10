declare var bootstrap: any;

import { Component, OnInit } from '@angular/core';
import { EventService } from '../../core/service/event.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent implements OnInit {

  events: any[] = [];
  loading = true;

  selectedCity = 'Sydney';
  selectedCountry = 'AU';
  cities = ['Sydney', 'Melbourne', 'Brisbane', 'Perth'];
  countries = ['AU', 'US', 'GB'];

  selectedEventUrl: string = '';
  email: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 6;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.fetchEvents();

    // Optional auto-refresh every 60 seconds
    setInterval(() => {
      this.fetchEvents();
    }, 60000);
  }

  fetchEvents() {
    this.loading = true;
    this.eventService.getEvents(this.selectedCity, this.selectedCountry).subscribe(
      (data: any) => {
        this.events = data._embedded?.events || [];
        this.loading = false;
        this.currentPage = 1; // reset page on change
      },
      error => {
        console.error('Failed to load events', error);
        this.loading = false;
      }
    );
  }

  openModal(url: string) {
    this.selectedEventUrl = url;
    const modal = document.getElementById('emailModal');
    if (modal) new bootstrap.Modal(modal).show();
  }

  submitEmail() {
    if (this.email && this.email.includes('@')) {
      window.open(this.selectedEventUrl, '_blank');
      this.email = '';
      bootstrap.Modal.getInstance(document.getElementById('emailModal')!)?.hide();
    } else {
      alert('Please enter a valid email');
    }
  }

  get paginatedEvents() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.events.slice(start, end);
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.events.length / this.itemsPerPage)).fill(0).map((_, i) => i + 1);
  }

  onFilterChange() {
    this.fetchEvents();
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
}
