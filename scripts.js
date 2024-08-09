const users = JSON.parse(localStorage.getItem('users')) || {}; // Stores registered users
        const results = JSON.parse(localStorage.getItem('results')) || {}; // Stores quiz results

        const quizzes = {
            easy: {
                questions: [
                { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Markup Language", "HyperText Markdown Language"], answer: "HyperText Markup Language" },
                { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Cascading Simple Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
                { question: "How do you insert a comment in CSS?", options: ["// comment", "<!-- comment -->", "/* comment */"], answer: "/* comment */" },
                { question: "What HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>"], answer: "<style>" },
                { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<lb>", "<br>"], answer: "<br>" },
                { question: "Which HTML attribute is used to define inline styles?", options: ["style", "font", "class"], answer: "style" },
                { question: "How can you open a link in a new tab or window?", options: ["<a href='url' target='_blank'>", "<a href='url' target='new'>", "<a href='url' new='true'>"], answer: "<a href='url' target='_blank'>" },
                { question: "Which HTML element is used to define a table row?", options: ["<tr>", "<td>", "<th>"], answer: "<tr>" },
                { question: "How do you apply a background color to a webpage in CSS?", options: ["background-color: color;", "bg-color: color;", "color-background: color;"], answer: "background-color: color;" },
                { question: "What is the default value of the `position` property in CSS?", options: ["absolute", "relative", "static"], answer: "static" }
        
                    
                ],
                time: 4 // 4 minutes
            },
            medium: {
                questions: [
                { question: "What does the `<a>` tag define in HTML?", options: ["A link", "An image", "A heading"], answer: "A link" },
            { question: "What attribute is used to specify the URL of a linked document?", options: ["href", "src", "link"], answer: "href" },
            { question: "Which HTML element is used to define a list item?", options: ["<item>", "<li>", "<list>"], answer: "<li>" },
            { question: "How do you specify an image source in HTML?", options: ["<img src='url'>", "<image href='url'>", "<img link='url'>"], answer: "<img src='url'>" },
            { question: "What is the purpose of the `<meta>` tag in HTML?", options: ["To provide metadata", "To create a table", "To include external CSS"], answer: "To provide metadata" },

            // CSS
            { question: "What is the CSS property used to change the text color?", options: ["color", "font-color", "text-color"], answer: "color" },
            { question: "How can you center a block element in CSS?", options: ["margin: auto;", "text-align: center;", "align: center;"], answer: "margin: auto;" },
            { question: "What does the `box-shadow` property do in CSS?", options: ["Adds shadow to elements", "Changes box dimensions", "Defines box borders"], answer: "Adds shadow to elements" },
            { question: "Which property is used to set the space between the content and the border of an element?", options: ["padding", "margin", "border-spacing"], answer: "padding" },
            { question: "How can you make a list display horizontally in CSS?", options: ["Using `display: inline;`", "Using `float: left;`", "Using `list-style: horizontal;`"], answer: "Using `display: inline;`" },

            // JavaScript
            
            { question: "How do you declare a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" },
            { question: "What is the purpose of the `JSON.stringify()` method?", options: ["To convert a JavaScript object to a JSON string", "To parse a JSON string into a JavaScript object", "To format JSON data"], answer: "To convert a JavaScript object to a JSON string" },
            { question: "What does `NaN` stand for in JavaScript?", options: ["Not a Number", "New a Number", "Number a Number"], answer: "Not a Number" },

            // Combination of HTML, CSS, JavaScript
            { question: "How can you include JavaScript code directly within an HTML document?", options: ["Using the `<script>` tag", "Using the `<js>` tag", "Using the `<code>` tag"], answer: "Using the `<script>` tag" },
            { question: "What CSS property is used to control the size of text?", options: ["font-size", "text-size", "size"], answer: "font-size" },
            { question: "How do you create a function in JavaScript?", options: ["function myFunction() {}", "function: myFunction() {}", "create function myFunction() {}"], answer: "function myFunction() {}" },
            { question: "What is the correct syntax to change the content of an HTML element with id 'demo' using JavaScript?", options: ["document.getElementById('demo').innerHTML = 'new content';", "document.querySelector('#demo').content = 'new content';", "document.getElementById('demo').text = 'new content';"], answer: "document.getElementById('demo').innerHTML = 'new content';" },
            { question: "Which CSS property is used to set the font of an element?", options: ["font-family", "text-font", "font-style"], answer: "font-family" },

            { question: "How do you comment out code in JavaScript?", options: ["// comment", "/* comment */", "# comment"], answer: "// comment" },
            { question: "How can you select an element with class 'example' in CSS?", options: [".example", "#example", "example"], answer: ".example" },
           
                    
                ],
                time: 10 // 10 minutes
            },
            hard: {
                questions: [
            { question: "How do you create a CSS grid layout?", options: ["Using `display: grid;`", "Using `display: flex;`", "Using `display: block;`"], answer: "Using `display: grid;`" },
            { question: "What is the output of `console.log([2] == [2])`?", options: ["false", "true", "undefined"], answer: "false" },
            { question: "What is the purpose of the `Proxy` object in JavaScript?", options: ["To create a handler for objects", "To manage asynchronous operations", "To implement a singleton pattern"], answer: "To create a handler for objects" },
            { question: "How do you create a generator function in JavaScript?", options: ["Using `function*` syntax", "Using `function() {}`", "Using `function => {}`"], answer: "Using `function*` syntax" },
            { question: "What does the `await` keyword do in JavaScript?", options: ["Pauses the execution of an `async` function", "Makes a function synchronous", "Catches errors in promises"], answer: "Pauses the execution of an `async` function" },
            { question: "What is the result of `0.1 + 0.2 == 0.3` in JavaScript?", options: ["false", "true", "undefined"], answer: "false" },
            { question: "How can you achieve responsive design using CSS?", options: ["Using media queries", "Using fixed sizes", "Using JavaScript"], answer: "Using media queries" },
            { question: "How can you dynamically create and append a new HTML element using JavaScript?", options: ["Using `document.createElement()` and `appendChild()`", "Using `document.write()`", "Using `innerHTML`"], answer: "Using `document.createElement()` and `appendChild()`" },
            { question: "What is the purpose of the `shadow DOM` in web development?", options: ["To encapsulate and isolate styles and markup", "To create dynamic content", "To manage external scripts"], answer: "To encapsulate and isolate styles and markup" },
            { question: "How do you manage asynchronous operations in JavaScript?", options: ["Using Promises and `async/await`", "Using synchronous functions", "Using global variables"], answer: "Using Promises and `async/await`" },
            { question: "What is the `Object.assign()` method used for in JavaScript?", options: ["To copy values from one object to another", "To create a new object", "To merge arrays"], answer: "To copy values from one object to another" },
            { question: "How can you use `CSS Grid` to create a layout with a fixed header and a flexible content area?", options: ["Define a grid with rows and columns, and place items accordingly", "Use `flexbox` with fixed height for the header", "Use absolute positioning for the header"], answer: "Define a grid with rows and columns, and place items accordingly" },
            { question: "How can you handle errors in JavaScript using `try...catch`?", options: ["Wrap code in `try`, and handle errors in `catch` block", "Use `if...else` statements", "Use `error` events"], answer: "Wrap code in `try`, and handle errors in `catch` block" },
            { question: "What is the `IntersectionObserver` API used for?", options: ["To observe changes in intersection of elements with a viewport", "To track element visibility", "To create animations"], answer: "To observe changes in intersection of elements with a viewport" },
            { question: "How do you create a CSS animation that runs infinitely?", options: ["Use `animation: name duration infinite;`", "Use `animation: name duration repeat;`", "Use `animation: name duration loop;`"], answer: "Use `animation: name duration infinite;`" },
            { question: "What does the `fetch` API do in JavaScript?", options: ["Makes network requests", "Handles asynchronous code", "Creates HTML elements"], answer: "Makes network requests" },
            { question: "How can you create a responsive navigation menu using CSS?", options: ["Use media queries and flexible layouts", "Use fixed positioning", "Use absolute positioning"], answer: "Use media queries and flexible layouts" },
            { question: "What is a `Service Worker` in web development?", options: ["A script that runs in the background, handling network requests", "A tool for managing databases", "A library for animations"], answer: "A script that runs in the background, handling network requests" },
            { question: "What is `Event Delegation` in JavaScript?", options: ["Attaching a single event listener to a parent element to manage events for child elements", "Directly attaching event listeners to each child element", "Using `addEventListener` on global objects"], answer: "Attaching a single event listener to a parent element to manage events for child elements" },
            { question: "How do you optimize performance for a web application?", options: ["Minify CSS and JavaScript, use caching, and optimize images", "Add more JavaScript files", "Increase server response time"], answer: "Minify CSS and JavaScript, use caching, and optimize images" },
            { question: "What is the `WebAssembly` used for?", options: ["To run compiled code in the browser", "To manage server-side code", "To handle web security"], answer: "To run compiled code in the browser" },
            { question: "How do you define a `named export` in ES6 modules?", options: ["Using `export const name = value;`", "Using `export default name;`", "Using `export name;`"], answer: "Using `export const name = value;`" },
            { question: "What does `localStorage` provide in web development?", options: ["A way to store data in the browser with no expiration time", "A way to handle cookies", "A way to manage server-side sessions"], answer: "A way to store data in the browser with no expiration time" },
            { question: "How do you implement a `Debounce` function in JavaScript?", options: ["By using a timer to delay function execution", "By using a callback function", "By using promises"], answer: "By using a timer to delay function execution" },
            { question: "What is the `WebSocket` API used for?", options: ["To establish a full-duplex communication channel over a single TCP connection", "To make HTTP requests", "To handle server-side rendering"], answer: "To establish a full-duplex communication channel over a single TCP connection" },
            { question: "What is the `async` attribute used for in the `<script>` tag?", options: ["To load scripts asynchronously", "To execute scripts synchronously", "To define script execution order"], answer: "To load scripts asynchronously" },
            { question: "Which method can be used to test if a string contains a substring?", options: ["includes()", "has()", "find()"], answer: "includes()" },
            { question: "How can you declare a constant variable in JavaScript?", options: ["const", "var", "let"], answer: "const" },
            { question: "What does the `<a>` tag define in HTML?", options: ["A link", "An image", "A heading"], answer: "A link" },
            { question: "What attribute is used to specify the URL of a linked document?", options: ["href", "src", "link"], answer: "href" },
            
                    
                ],
                time: 20 // 20 minutes
            }
        };

        let currentQuiz = null;
        let currentQuestionIndex = 0;
        let score = 0;
        let timerInterval = null;
        let currentUser = null;

        document.getElementById('login-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (users[username] && users[username] === password) {
                currentUser = username;
                showSection('quiz-selection');
            } else {
                alert('Invalid login');
            }
        });

        document.getElementById('signup-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('signup-username').value;
            const password = document.getElementById('signup-password').value;
            if (users[username]) {
                alert('Username already exists');
            } else {
                users[username] = password;
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registration successful');
                showSection('auth-section');
            }
        });

        document.getElementById('show-signup').addEventListener('click', function () {
            showSection('signup-section');
        });

        document.getElementById('show-login').addEventListener('click', function () {
            showSection('auth-section');
        });

        function showSection(section) {
            document.getElementById('auth-section').style.display = 'none';
            document.getElementById('signup-section').style.display = 'none';
            document.getElementById('quiz-selection').style.display = 'none';
            document.getElementById('quiz-section').style.display = 'none';
            document.getElementById('result-section').style.display = 'none';

            document.getElementById(section).style.display = 'block';

            document.getElementById('login-bg').style.display = 'none';
            document.getElementById('quiz-selection-bg').style.display = 'none';
            document.getElementById('quiz-section-bg').style.display = 'none';
            document.getElementById('result-section-bg').style.display = 'none';

            if (section === 'auth-section' || section === 'signup-section') {
                document.getElementById('login-bg').style.display = 'block';
            } else if (section === 'quiz-selection') {
                document.getElementById('quiz-selection-bg').style.display = 'block';
            } else if (section === 'quiz-section') {
                document.getElementById('quiz-section-bg').style.display = 'block';
            } else if (section === 'result-section') {
                document.getElementById('result-section-bg').style.display = 'block';
            }
        }

        function startQuiz(difficulty) {
            currentQuiz = { ...quizzes[difficulty], difficulty };
            currentQuestionIndex = 0;
            score = 0;
            showSection('quiz-section');
            showQuestion();
            startTimer(currentQuiz.time * 60); // Convert minutes to seconds
        }

        function showQuestion() {
            const question = currentQuiz.questions[currentQuestionIndex];
            document.getElementById('question').textContent = question.question;
            const optionsContainer = document.getElementById('options');
            optionsContainer.innerHTML = '';
            question.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => checkAnswer(option));
                optionsContainer.appendChild(button);
            });
        }

        function checkAnswer(selectedOption) {
            const question = currentQuiz.questions[currentQuestionIndex];
            if (selectedOption === question.answer) {
                score++;
                document.getElementById('feedback').textContent = 'Correct!';
            } else {
                document.getElementById('feedback').textContent = 'Wrong!';
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuiz.questions.length) {
                showQuestion();
            } else {
                endQuiz();
            }
        }

        function startTimer(duration) {
            let timeRemaining = duration;
            document.getElementById('timer').textContent = formatTime(timeRemaining);
            timerInterval = setInterval(() => {
                timeRemaining--;
                document.getElementById('timer').textContent = formatTime(timeRemaining);
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    endQuiz();
                }
            }, 1000);
        }

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }

        function endQuiz() {
            clearInterval(timerInterval);
            document.getElementById('question').textContent = 'Quiz Over!';
            document.getElementById('options').innerHTML = '';
            document.getElementById('feedback').textContent = '';
            document.getElementById('score').textContent = `Your Score: ${score} / ${currentQuiz.questions.length}`;

            if (!results[currentUser]) {
                results[currentUser] = { easy: 0, medium: 0, hard: 0 };
            }
            results[currentUser][currentQuiz.difficulty] = score;
            localStorage.setItem('results', JSON.stringify(results));

            setTimeout(() => {
                showResults();
                showSection('result-section');
            }, 3000); // 3 seconds delay before showing results
        }

        function showResults() {
            const tbody = document.getElementById('result-tbody');
            tbody.innerHTML = ''; // Clear previous results
            Object.keys(results).forEach(user => {
                const userResult = results[user];
                const averageScore = ((userResult.easy + userResult.medium + userResult.hard) / (quizzes.easy.questions.length + quizzes.medium.questions.length + quizzes.hard.questions.length)) * 100;
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${user}</td>
                    <td>${userResult.easy} / ${quizzes.easy.questions.length}</td>
                    <td>${userResult.medium} / ${quizzes.medium.questions.length}</td>
                    <td>${userResult.hard} / ${quizzes.hard.questions.length}</td>
                    <td>${averageScore.toFixed(2)}%</td>
                `;
                tbody.appendChild(tr);
            });
        }

        function logout() {
            currentUser = null;
            showSection('auth-section');
        }

        showSection('auth-section');
    
