# GIT PATTERN:
### gitting file from editor to git
git add file.whatever
git commit -am "notes"
git push

### gitting file from git to editor
git fetch
git status
git pull

can see conflicts when merging, fix conflicts, push fixed file from editor to git

### deploy script
/Users/hayliejarvis/CS260/startup/simon-html/deployFiles.sh -k ~/CS260/cs206pt2.pem -h hayliejarvis.com -s simon
make sure you're in the directory with the deploy files
will deploy the indicated files (in this case simon) to the website with that indicated domain

now with backend:
/Users/hayliejarvis/CS260/startup/simon-javascript/simon-service/deployService.sh -k ~/CS260/cs206pt2.pem -h hayliejarvis.com -s simon


# EXAM 1 study guide:
In the following code, what does the link element do?
Links to another webpage/file

In the following code,  what does a div tag do?
A block division of content

In the following code, what is the difference between the #title and .grid selector?
#= id, single element with given id
. = class, multiple elements with given class
Both selectors

In the following code, what is the difference between padding and margin?

Property Value Example      Discussion
margin   unit  5px 5px 0 0  Sets the margin spacing
padding  unit  1em 2em      Sets the padding spacing

Margin is space from the outside 
Padding is space around text or whatever

Given this HTML and this CSS how will the images be displayed using flex?
Flex spaces them evenly in one row all the way to the edges?
<body>
  <header>
    <h1>CSS flex &amp; media query</h1>
  </header>
  <main>
    <section>
      <h2>Controls</h2>
    </section>
    <section>
      <h2>Content</h2>
    </section>
  </main>
  <footer>
    <h2>Footer</h2>
  </footer>
</body>

body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}

header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}

@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}

^adapts to screen resizing

What does the following padding CSS do?
em = multiplier of the width of th letter m
px=pixels
vh = % of vewports height
pt = number of points

What does the following code using arrow syntax function declaration do?
(parameters) => expression; returns expression
(parameters) => {
return expression;
}

What does the following code using map with an array output?
map function applies the callback function to each element of the array and collects the results into a new array

What does the following code output using getElementByID and addEventListener?

What does the following line of Javascript do using a # selector?
typically used in the context of working with the Document Object Model (DOM) to select elements with a specific id attribute in an HTML document. The # selector is often used in conjunction with functions like document.querySelector or document.getElementById
select an element by its id attribute using getElementById:
const element = document.getElementById("myElementId");
In this example, myElementId is the value of the id attribute of the HTML element you want to select. This method is very efficient and returns a reference to the DOM element with the specified id.
Using querySelector:
const element = document.querySelector("#myElementId");
The querySelector method allows you to use CSS-like selectors, including the #selector, to select elements. In this case, #myElementId will select the first element with the specified id attribute.
If you have multiple elements with the same id, using the #selector will return only the first one encountered in the DOM.

Which of the following are true? (mark all that are true about the DOM)
object representation of the HTML elements that the browser uses to render the display
dynamically manipulate the HTML.
The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering.
To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.
To delete elements call the removeChild function on the parent element.
allows you to inject entire blocks of HTML into an element.
Gives a hierarchical representation of what’s on your page
Tree structure, document node at top
Api for webpages
Everything is a node (element, attribute, text, etc.)
Traverse between nodes
Manipulate and modify content, add/remove nodes,
Event handling, listen to elements, react to clicks etc.
Cross-browser compatibility, apis, etc

By default, the HTML span element has a default CSS display property value of: 
inline

How would you use CSS to change all the div elements to have a background color of red?
div { background-color: red; }

How would you display an image with a hyperlink in HTML?
<img alt="beach" src="https://images.pexels.com/photos/21787/pexels-photo.jpg?w=600&h=300" />

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Content < padding < border < margin

Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
set an id so you can select one

What will the following code output when executed using a for loop and console.log?

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
First, select the element with the specified id using the document.getElementById method.
Then, set the style.color property of the selected element to the desired color, which is "green" in this case.
// Select the element with the id "byu"
const byuElement = document.getElementById("byu");
// Change the text color to green
byuElement.style.color = "green";

In this code, we first use document.getElementById("byu") to select the element with the id "byu," and we store it in the byuElement variable. Then, we use byuElement.style.color to change the text color to green.
Make sure that the HTML element with the id "byu" exists in your HTML document for this JavaScript code to work.


What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
paragraph= p
ordered list= ol
unordered list= ul
second level heading= h2
first level heading= h1
third level heading= h3

How do you declare the document type to be html?
<!DOCTYPE html>

What is valid javascript syntax for if, else, for, while, switch statements?
if (condition) { // Code to execute if the condition is true }

if (condition) { // Code to execute if the condition is true } else { // Code to execute if the condition is false }

for (initialization; condition; iteration) { // Code to execute in each iteration }

while (condition) { // Code to execute as long as the condition is true }

switch (expression) { case value1: 
// Code to execute if expression matches value1 
break; 
case value2: 
// Code to execute if expression matches value2 
break; 
// More cases... 
default: 
// Code to execute if none of the cases match }

What is the correct syntax for creating a javascript object?
const obj = new Object({a:3});
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}


Is is possible to add new properties to javascript objects?
Yes, funky but yes

If you want to include JavaScript on an HTML page, which tag do you use?
<script>

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
Know how to get a particular tag in the DOM and change it

Which of the following correctly describes JSON?
JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
chmod= change the permissions (read, write, execute) of files
pwd= print working directory
cd= change directory
ls= list files in current directory
vim= command line text editor, advanced
nano= text editor, beginner friendly
mkdir= make directory
mv= move (or rename) files/directories
rm= remove files/directories
man= access manual pages/documentation for commands
ssh= establish a secure shell connection to a remote server or computer. It allows you to log in remotely and execute commands on the remote machine
ps= list the currently running processes on your system. It provides information about the processes, their process IDs (PIDs), and resource usage
wget= download files from the internet. You can specify a URL, and "wget" will retrieve the file and save it to your local system
sudo= execute commands with superuser or administrative privileges. It's often used for system maintenance and configuration tasks

Which of the following console command creates a remote shell session?
ssh

Which of the following is true when the -la parameter is specified for the ls console command?
Long list for all files (l = long, a = all)
see a detailed list that includes all files and directories in the current directory, including hidden ones, along with additional information like permissions and ownership

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Bozo.click = root domain, others are subdomains
Top level = click

Is a web certificate is necessary to use HTTPS.
Yes
Know how to make connection with secure shell, public keys and private keys, encryptions, review that whole process
Yes, a web certificate, specifically an SSL/TLS certificate, is necessary to use HTTPS (Hypertext Transfer Protocol Secure) on a website. HTTPS is the secure version of HTTP, and it provides data encryption and authentication to ensure the confidentiality and integrity of data exchanged between a web server and a user's web browser.
An SSL/TLS certificate is essential for the following reasons:
Data Encryption: An SSL/TLS certificate encrypts the data transferred between a web server and a user's browser. This encryption prevents unauthorized parties from intercepting and reading the data, ensuring the privacy and security of sensitive information, such as login credentials, credit card numbers, and personal data.
Authentication: SSL/TLS certificates are issued by trusted Certificate Authorities (CAs). When a user's browser connects to a website with a valid SSL/TLS certificate, it verifies the identity of the website to ensure that it is the legitimate owner of the domain. This authentication helps protect users from phishing and man-in-the-middle attacks.
Search Engine Ranking: Many search engines, including Google, favor websites that use HTTPS and give them higher search rankings. Having an SSL/TLS certificate can improve your website's visibility in search results.
Browser Compatibility: Modern web browsers require HTTPS for certain features, such as geolocation and access to device hardware like cameras and microphones. Without HTTPS, your website may not work correctly in these browsers.
To enable HTTPS on your website, you need to obtain an SSL/TLS certificate from a trusted CA or through your hosting provider, install it on your web server, and configure your server to use HTTPS. Many web hosting providers offer easy integration with SSL/TLS certificates, and some even provide free certificates through services like Let's Encrypt. This ensures that your website can securely deliver content and build trust with your users.


Can a DNS A record can point to an IP address or another A record.
Points to ip address, not another A
Route 53 aws interface, possible things to put into domains

Port 443, 80, 22 is reserved for which protocol?
443 = https
80 = http
22 = ssh

What will the following code using Promises output when executed?
pending - Currently running asynchronously
fulfilled - Completed successfully
rejected - Failed to complete


# EXAM 2 study guide:
+ **1 - What ports are used for HTTP, HTTPS, SSH?** 
+ HTTP  80
+ HTTPS  443
+ SSH  22
+ **2 - What do HTTP status codes in the 300, 400, 500 range indicate?**


