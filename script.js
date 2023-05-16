window.addEventListener('keydown', (e) => {
    const insert = document.getElementById('insert');

    insert.innerHTML = `
    <section class="info">
        <h4>JavaScript Key Code ${e.keyCode}</h4>
        <h1> ${e.code} </h1>
    </section>
    <div class="card-container">
        <div class="card">
          <div class="card-content">
            <h2>event.key</h2>
            <h1>${e.key}</h1>
            <hr>
            <p>The value of the key pressed. Accounts for modifiers keys that return CAPS and alternate chars.</p>
          </div>
        </div>
        
        <div class="card">
          <div class="card-content">
            <h2>event.location</h2>
            <h1>${e.location}</h1>
            <hr>
            <p>Some keys exist more than once on your keyboard. This provides the location of the key pressed. Try it with both shifts.</p>
          </div>
        </div>
        
        <div class="card">
          <div class="card-content">
            <h2>event.code</h2>
            <h1>${e.code}</h1>
            <hr>
            <p>The physical key on the keyboard. Doesn't care if you are holding a modifier like Shift.</p>
          </div>
        </div>

        <div class="card">
            <div class="card-content">
              <h2>event.which</h2>
              <h1>${e.which}</h1>
              <hr>
              <p>event.which and event.keyCode are deprecated in modern browsers. Use .key or .code instead.</p>
            </div>
        </div>
          
        <div class="card">
            <div class="card-content">
              <h2>Description</h2>
              <h1>Alt/Option</h1>
              <hr>
              <p>This is the description we have created. Think it can be improved? PR me on GitHub</p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
              <h2>Event Dump</h2>
              <pre>
        {
        "key": "${e.key}",
        "keyCode": "${e.code},
        "which": "${e.which}",
        "code": "${e.key}",
        "location": "${e.location}",
        "altKey": "${e.altKey}",
        "ctrlKey": "${e.ctrlKey}",
        "metaKey": "${e.metaKey}",
        "shiftKey": "${e.shiftKey}",
        "repeat": "${e.repeat}"
        }
              </pre>
            </div>
        </div>
    </div>`

    console.dir(e);
});