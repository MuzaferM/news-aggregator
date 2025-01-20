# News Aggregator Application  

A modern news aggregator that provides personalized, categorized, and multi-sourced news with an intuitive, responsive design.

## Features  

### 1. Multi-Source News Fetching  
- Fetches news articles from the following APIs:  
  - **News.org**  
  - **The New York Times**  
  - **The Guardian**  
- Ensures the latest and most relevant news coverage.  

### 2. Advanced Search Functionality  
- Search articles by keywords.  
- Supports fuzzy matching for better search accuracy.  

### 3. Category and Source-Based Filtering  
- Filter articles by categories such as:  
  - Technology  
  - Business  
  - Sports  
  - Entertainment  
  - Science  
- Filter articles based on their source.  

### 4. Personalization Support  
- Users can save their preferences for:  
  - Categories of interest  
  - Preferred news sources  

### 5. Modern, Responsive UI  

---

## Build and Run

### 1. **Development**

Use the following command to build the development image, :

```bash
docker build --target development -t news-aggregator:dev .
```

To run the development server:

```bash
docker run -p 5173:5173 news-aggregator:dev
```

### 2. **Production**

Use the following command to build production image:

```bash
docker build --target production -t news-aggregator:prod .
```

Run the production app with Nginx:

```bash
docker run -p 80:80 news-aggregator:prod
```

## Screenshots








#   n e w s - a g g r e g a t o r  
 