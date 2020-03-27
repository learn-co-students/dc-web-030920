# Intro to the Internet

## Agenda

- What the internet is and what it isn't
  - Brief History
  - Difference between the internet and the WWW
- HTTP protocol
- Client-Server Model
- The Request/Response Protocol
  - Request
  - RESTful routing
  - Response

## What is the Internet

- A network of networks (private, public, government, academic, etc.) linked by wide range of electronic, wireless, and optical networking technologies.
- Invented back in 1960s for military purposes, and then expanded to the purpose of communication among scientists.
- Widely used by academia in the 1980s.
- The commercialization of the internet in the 1990s marked the beginning of the transition into the modern internet.
- By connecting a device (e.g. cellphone, computer) to one of these networks, you are connecting to the internet. This is different than connecting to the World Wide Web.

## What is the World Wide Web

- A system or way we can use to connect to the internet
- Allows documents to be connected to other documents by hypertext links
- First proposed in 1989 by Tim Berners Lee, and became available in 1991.
- Designed to allow people to combine their knowledge in a "web of hypertext documents"
- A problem academics were facing in the late 1980s was how to share documents in a standardized way

## HyperText Transfer Protocol (HTTP)

- An application protocol or set rules for how documents can be shared on the WWW
- The foundation of data communication for the World Wide Web
- Who sets these standards?
  - The World Wide Web Consortium (W3C)
  - An international community that develops open standards to ensure the long-term growth of the Web
- So.. what are some of these rules?

## Client-Server Computing Model

- An application structure that divides workloads between providers of a resource or service (called servers) and service requesters (called clients).
- Describes how a server provides resources and services to one or more clients.

### Server

- Runs one or more server programs, which share their resources with clients
- Examples of servers include web servers, mail servers, and file servers.

### Client

- Does not share any of its resources, but requests content or service from a server
- Examples include desktop computers, laptops, tablets, and smartphones.

- A web browser can be seen as the client, and an application running on a computer hosting a website may be the server.
- Often clients and servers communicate over computer networks, but they can both reside on the same system.

## Request-Response Protocol

- A browser makes a request to the server and that server answers that request with a response.
- A user opens a browser (i.e. client) and types in Google.com
- The computer takes some information about the client and compiles it into a request (we'll break down what goes into a request later)
- It then translates that human-readable uniform resource locator (i.e. URL) into a computer readable internet protocol (i.e. IP) address
- After locating the target address, it hands off the information in the request to the server
- The server gets the request and compiles a response with the correct content (in our example Google's html document)
- It then sends that response back to to the client, which gets rendered by the browser and displays the Google search page.
- This constant back and forth between client and server is what's known as the request-response cycle

### A Deeper Dive into the Request

- In order for a server to know what information to include in the response, the request from the client has to include specific information
  - Request-line: specifies the type of request and location for where that request is being sent
  - Request Header: Doesn't relate to the content of the message, but can allow to perform conditional requests
  - Body: Data sent by the client to the server.
- Two Main Types of Requests
  - GET Requests specify the client asking for information from the server (e.g. the webpage, a form, etc.)
  - POST Requests specify the client sending information back to the server (e.g. new user data, picture to be posted on instagram, etc.)
- We are going to use more than just GET and POST to build our robust applications

### Let's take a moment to REST

- Representational State Transfer also known as REST is an architecture style for designing networked applications (or designing how the client and server will communicate)
- HTTP Requests have verbs that describe in further detail the type of request the client is making
- Map nicely to the four CRUD actions and are used by the server to respond with the correct data

### A Deeper Dive into the Response

- What gets sent back in the response?
  - Sometimes it's documents written in hypertext markup language (HTML). It is the browser's job to render that HTML in a presentational way.
  - Sometimes it's raw data from a server
    - There are any different formats to receive data from a database (e.g. text, xml, etc.) We'll primarily work with JSON data

#### Let's go talk to the Postman 📬

- Postman is a great application used to test out api requests and responses.
- This can be used to test out response data from external APIs (e.g. Star Wars API) or from your backends when you start building your own APIs

#### Status Codes

- Indicate whether a specific HTTP request has been successfully completed
- Grouped in five classes:
  1. Informational responses (100-199)
  2. Successful responses (200-299)
  3. Redirects (300-399)
  4. Client errors (400-499)
  5. Server Errors (500-599)
- It's not expected you remember every single response code, but it is helpful to know these five classes for when you create your own apis.
- Helpful resources for quick (and cute!) status code lookup 👉 [Status Dogs](https://httpstatusdogs.com/)

## Extra

### URI/URL

- Uniform resource identifier/locator
- The most important thing that was new with the World Wide Web was the idea of URI-or URL, that any piece of information anywhere should have an identifier, which will allow you to get hold of it.
- URI breakdown: http://github.com/johndbritton
  - http is the protocol
  - github.com is the domain
  - /johnbritton is the resource

### DNS: Name Resolution

- Where do requests go?
- There's actually a bunch of stuff that happens after the request is fired off and before the server even knows about the request.
- This whole process is called DNS lookup and is how we translate a domain name (or a string of text) into an IP address which is the permanent address of a web server.
- DNS resolution: Each web server (and indeed any host connected to the internet) has a unique IP address in textual form, translating it to an IP address (in this case, 207.142.131.248) is a process known as DNS resolution or DNS lookup.
- Here DNS stands for Domain Name Service.

### More HTTP Request Verbs that we won't be focusing on at FIS

- HEAD: asks for a response like a GET without the body
- TRACE: echoes back the received request
- OPTIONS: returns the HTTP methods the server supports
- CONNECT: converts the request to a TCP/IP tunnel (generally for SSL)
