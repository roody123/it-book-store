<h1 align="center">IT Knowledge Hub Pro 📚</h1>

<p align="center">
  <img width="1919" height="903" alt="Image" src="https://github.com/user-attachments/assets/c50d0e15-0a29-4355-ae45-d601c62214ad" />
</p>

## 📌 About the project
An advanced interactive web application for searching and managing IT literature using the ITBookStore API. This version is an evolution of the base project, featuring a robust global state management system and an enhanced user experience.

The main goal of this version was to implement a complex architecture using **Redux Toolkit** to handle shopping cart logic, favorites, and persistent filtering.

## 🛠 Technologies
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Axios](https://img.shields.io/badge/axios-purple?style=for-the-badge&logo=axios&logoColor=white)
![SweetAlert2](https://img.shields.io/badge/sweetalert2-red?style=for-the-badge&logo=sweetalert2&logoColor=white)

## 🌟 Key Features (Redux Powered)

* **Global State Management:** Implemented **Redux Toolkit** for seamless data flow across the entire application.
* **Shopping Cart:** Users can add/remove books. The system automatically calculates the **Total Price** using custom selectors.
* **Wishlist System:** A dedicated favorites system with persistent "heart" toggles that synchronize across all pages.
* **Global Filtering:** The price filter (All/Paid/Free) is now stored in the Redux state, maintaining user preferences even when navigating between routes.
* **Interactive Notifications:** Integrated **SweetAlert2** for elegant user feedback.

## 📁 Project Structure
* `src/redux` - Core of the application: `store.js` and `cartSlice.js` containing reducers and optimized selectors.
* `src/pages/Cart` - Shopping cart management.
* `src/pages/Wishlist` - Personal collection of saved books.
* `src/pages/Search` - Search engine with price filtering logic.
* `src/pages/New` - updates on latest releases.

## ⚙️ Installation and Launch

**To launch the project locally:**

1. Clone the repository:
```
git clone https://github.com/roody123/it-book-store.git
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```
