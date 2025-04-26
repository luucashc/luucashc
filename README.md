# 🌍 Website 

## Description
This personal website was built with a focus on responsiveness, performance, and simplicity, using modern and widely supported technologies:

HTML5: Base structure of the application with clear semantics.

CSS3 + Bootstrap 5: Responsive layout using Bootstrap's grid system to adapt to different screen sizes (col-sm, col-md, col-lg).

FontAwesome: Lightweight and scalable vector icons to represent technologies and social media links.

Docker: Project containerization to ensure portability and consistency across development and production environments.

AWS (Amazon Web Services): Ideal for hosting the static site using S3, with optional integration with CloudFront for content delivery and Route 53 for DNS management.

GitHub Pages (alternative): The site is also compatible with deployment on GitHub Pages for public repositories.

## Content
- Introduction: Photo, name, job title, and social media links.
- About Me: Short description of my career and certifications.
- Skills: Icons showing the tech stacks and tools I work with.
- Career: Timeline with my professional experiences.
- Footer: A simple and functional footer.

## Structure
```
./
├── public/
|   ├── index.html/                       # HTML - not used
├── src/
|   ├── styles/                           # Custom CSS styles for the layout and components
│       ├── index.css/                    # CSS - not used
│   ├── assets/                           # Images and other static files
│       ├── images/                       # All image assets (profile picture, icons, logos)
|       ├── logo/                         # Social media logos (GitHub, LinkedIn, Gmail, etc.)
│   └── app.js                            # JS - not used
├── index.html                            # Main HTML page of the site
├── index.css                             # Custom CSS styles for the layout and components
├── Dockerfile                            # Docker configuration to containerize the project
└── README.md                             # Project documentation
└── package.json                          # Project dependencies and scripts
```

## How to start server

Create docker image:

```bash
docker build -t luucashc .
```

Run docker:

```bash
npm start
```

After, access on:

[localhost:8080](http://localhost:8080)

## Licence
This project is licensed under the MIT License.
