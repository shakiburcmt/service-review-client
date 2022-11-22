import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className="flex flex-col w-full">
            <div className="grid card bg-base-300 rounded-box p-2 text-center font-bold">
                <span className='text-2xl underline'>What is the difference between SQL and NoSQL?</span> <br />
                Answer: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. Whereas SQL is primarily used to query and operate database systems, MySQL enables you to store, handle, delete, and modify data in an organized way. As for NoSQL, it is a non-relational database that does not use SQL.
            </div>
            <div className="divider"></div>
            <div className="grid card bg-base-300 rounded-box p-2 text-center font-bold">
                <span className='text-2xl underline'>What is JWT? How does it work?</span> <br />
                Answer: JSON Web Token (JWT) defines a compact and self-contained way for securely transmitting information between parties as a JSON object. JWT is a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with. To authenticate a user, a client application must send a JSON Web Token (JWT) in the authorization header of the HTTP request to your backend API.
            </div>
            <div className="divider"></div>
            <div className="grid card bg-base-300 rounded-box p-2 text-center font-bold">
                <span className='text-2xl underline'>What is the difference between JavaScript and NodeJS?</span> <br />
                Answer: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. NodeJS, on the other hand, is an interpreter or execution environment for the JavaScript programming language. NodeJS is a cross-platform JavaScript runtime environment for servers and applications. It is built on a single-threaded, non-blocking event loop, the Google Chrome V8 JavaScript engine, and a low-level I/O API. Node. js is sometimes misunderstood by developers as a backend framework that is exclusively used to construct servers. NodeJS can be used on the frontend as well as the backend.
            </div>
            <div className="divider"></div>
            <div className="grid card bg-base-300 rounded-box p-2 text-center font-bold">
                <span className='text-2xl underline'>How does NodeJS handle multiple requests at the same time?</span> <br />
                Answer: NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. NodeJS can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue. It's the most advantage of NodeJS. The main reason for this advantages is non-blocking IO. When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they are all processed.
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Blog;