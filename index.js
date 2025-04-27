// root created which finds element whose id is 'root' in HTML file
const root = document.getElementById('root')
// element created
const p = document.createElement('p')
p.innerText = "Hello from Kashish PART 2"

// appended child (p) to the root (div with id root)
root.appendChild(p)

// Find the root div ✅
// Create a new paragraph tag <p> ✅
// Put your message inside it ✅
// Attach the paragraph into the root div ✅

// ---------------------------------------------------------------------------
// all above code can be coverted to react to perform the similar functionality
// const div =  React.createElement('div', {className: 'text'}, "hello from kashish, i am inside react now")
const child1 = React.createElement('p', {}, "I am a child1")
const child2 = React.createElement('p', {}, "I am a child2")
const div =  React.createElement('div', {className: 'text'}, [child1, child2] )

// or - by using web packs we can assign tag to a variable
// const div2 = <div className="text">Hello 2</div>

console.log(div)
const root1 = ReactDOM.createRoot(document.getElementById('root'))
root1.render(div)