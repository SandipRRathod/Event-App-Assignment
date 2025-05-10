# EventsApp / Events Listing Web App

Live Demo: [https://events-app-nu-gilt.vercel.app/](https://events-app-nu-gilt.vercel.app/)

---

## 📌 Overview

This web application dynamically lists upcoming events in Sydney, Australia (or any specified location using query parameters). It fetches real-time data using the Ticketmaster Discovery API and displays it in a clean, user-friendly layout. Users can click on the "Get Tickets" button, submit their email, and be redirected to the original ticketing page.

---

## 🚀 Features

* Live data fetching using the Ticketmaster API
* City and country-based filtering
* Auto-refresh every 60 seconds to keep listings up to date
* Responsive design using Bootstrap 5
* Modal for email collection before redirection
* Pagination for better usability on large datasets

---

## 🛠️ Tech Stack

* **Frontend**: Angular 17 (standalone components)
* **Styling**: Bootstrap 5
* **API**: Ticketmaster Discovery API

---

## 📋 How It Works

1. Events are fetched from Ticketmaster using a hardcoded or dynamic city and country code.
2. The events are displayed using Bootstrap cards.
3. When the user clicks on "Get Tickets":

   * A modal prompts them to enter their email.
   * After validation, the user is redirected to the original ticket page.
4. The data auto-refreshes every minute to ensure the event list is always current.

---

## ✨ Improvements & Future Enhancements

* Add a search bar to filter events by keywords or category.
* Enable user to choose city and country dynamically from dropdown menus.
* Implement email validation with backend storage for marketing or analytics.
* Display fallback UI when no events are available.
* Improve accessibility (ARIA roles, keyboard navigation).
* Add loading skeletons for smoother UX.
* Support sorting options (e.g., date, popularity).
* Integrate additional APIs for richer event details or maps.
* Add dark mode support.

---

## 🙌 Acknowledgements

* [Ticketmaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/)
* Bootstrap for design components

---

> Built with ❤️ by Sandip Raju Rathod | Deployed on Vercel
