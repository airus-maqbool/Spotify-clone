# Spotify Clone

A full-stack music streaming web app inspired by Spotify, built with HTML, CSS, JavaScript, PHP, and MySQL.

## Features

- **Secure Authentication** — User login system with session handling and role-based access control
- **Browse Albums** — View albums organized by different singers/artists
- **Favourites** — Add songs or albums to your favourites
- **Personal Library** — View and manage your saved library
- **Feedback** — Submit feedback directly through the app
- **Responsive Design** — Works smoothly across desktop and mobile devices

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** PHP
- **Database:** MySQL
- **Server:** Apache

## Getting Started

### Prerequisites

- [XAMPP](https://www.apachefriends.org/) / [WAMP](https://www.wampserver.com/) or any local server with Apache, PHP, and MySQL
- A web browser

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Move the project folder into your server's root directory
   - XAMPP: `htdocs/`
   - WAMP: `www/`

3. Start Apache and MySQL from your local server control panel

4. Create a database in phpMyAdmin and import the provided SQL file (e.g., `database.sql`)

5. Update your database connection credentials in the config file (e.g., `config.php`)
   ```php
   $host = "localhost";
   $dbname = "your_database_name";
   $username = "root";
   $password = "";
   ```

6. Visit the project in your browser
   ```
   http://localhost/your-repo-name
   ```

## Project Structure

```
spotify-clone/
├── css/              # Stylesheets
├── js/               # JavaScript files
├── images/           # Images and assets
├── includes/         # PHP includes (config, functions)
├── login.php
├── register.php
├── index.php
├── library.php
├── favourites.php
├── feedback.php
├── database.sql
└── README.md
```

## Author

**Airus Maqbool**
