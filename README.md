> # ![oceanwave2](https://user-images.githubusercontent.com/54525656/233765052-90df1986-6b08-4bb1-9d41-6ff0ecfb073b.svg)MiniURL
Make it short, Make it quick! MiniURL is a web application that allows users to take a long URL and convert it to a shortened URL. [Try it now](https://getminiurl.onrender.com/)  

Do you have a lengthy URL that's hard to copy and paste? shorten the URL and get statistics on how much attention it getting! paste your long and boring URL [here](https://getminiurl.onrender.com/)   and get a miniURL that's more interactive and flows.
## Features
  - Takes a  long URL then generate a short URL like `https://minfyurl.onrender.com/{short_url_id}`  and store the short URL and the long URL together in a persistent data store.
  - Redirects visitors to the long URL when the short URL is visited.
  - Tracs the number of times the short URL is visited.
  - A statistics page available accesssible by visiting `https://minfyurl.onrender.com/{short_url_id}/stats` Visiting this URL should show the short URL, the long URL, and the number of times the short URL was accessed.
## Tech stacks
   - *Frontend*
        - React
        - Chakra UI
        - Axios
   - *Backend*
        - Django REST framework
        - PostgresSQL
   - *Testing*
        - Postman
        - DBeaver
## Experience with the chosen stack:  
#### Frontend
I have used **React** to develope some personal applications. React makes developing UI much easier and faster with incredible coding style like JSX. Also **chakra UI** provides React components as alternatives to using raw html tags and makes styling much easier. previous work -[potm](https://github.com/jahidem/potm)
#### Backend
A REST API is easy to integrate, Scalable and Independent of frontend(doesn't matter a website or mobile app).So i chose to build a REST API. I have made REST api previously using spring-boot -[doclab](https://github.com/jahidem/DocLab-backend)  
No previous experience with Django, but had much fun learnig this package(***Django Rest Framework***) built on the top of Django that makes it easy to create web APIs.  
#### Testing
Used Postman to make sure my API working properly. DBeaver is a  DB management and administration multitool, I used it to connect and test my remote PostgresSQL server.
## Live Site
### Deployment details
The frontend site is hosted [here](https://getminiurl.onrender.com/). The backend hosted seperately [here](https://minifyurl.onrender.com/admin/). I used Render free instance  to host. so, After 15 minutes of inactivity the server automatically spuns down. If you are generating miniurl and server is spunned down it would take nearly **2~3 minutes** to respond, Please have patience!
### See recorded demonstration
## How to run locally
Frontend and backend completely seperated. You have to run them individually.
#### Frontend
Clone the repo and cd to frontend directory
```shell
foo@bar:~$ git clone https://github.com/jahidem/URL-Shortener.git
foo@bar:~$ cd  URL-Shortener/minurl-react
foo@bar:~/URL-Shortener/minurl-react$
```

install required packages using npm then run server
```shell
foo@bar:~/URL-Shortener/minurl-react$ npm install
foo@bar:~/URL-Shortener/minurl-react$ npm run dev
```

Open browser at http://localhost:5173/
#### Backend
Follow these steps (for windows):  
Create and activate python venv and install requirements.txt specified packages. then run using runserver command at http://localhost:8000/urls/
```shell
foo@bar:~/URL-Shortener$ cd miniurl
foo@bar:~/URL-Shortener/miniurl$ python3.11.exe -m venv venv
foo@bar:~/URL-Shortener/miniurl$ .\venv\Scripts\activate
foo@bar:~/URL-Shortener/miniurl$ pip install -r .\requirements.txt
(venv) foo@bar:~/URL-Shortener/miniurl$ python .\manage.py runserver
```
