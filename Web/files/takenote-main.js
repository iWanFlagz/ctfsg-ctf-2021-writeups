function login(form) {
  const username = form.querySelector("#inputUsername").value;
  const password = form.querySelector("#inputPassword").value;

  req("/api/login", "POST", {
    username,
    password,
  }).then((data) => {
    if (data.success) {
      document.location.pathname = "/";
    } else {
      display(`Error: ${data.message}`, "danger");
    }
  });

  return false;
}

function logout() {
  req("/api/logout", "GET").then(() => (document.location.href = "/login"));
}

function register(form) {
  const username = form.querySelector("#inputUsername").value;
  const password = form.querySelector("#inputPassword").value;

  req("/api/register", "POST", {
    username,
    password,
  }).then((data) => {
    if (data.success) {
      display("Account created.", "success");
      setTimeout(() => {
        document.location.pathname = "/login";
      }, 3000);
    } else {
      display(`Error: ${data.message}`, "danger");
    }
  });

  return false;
}

function loadIndex() {
  req("/api/notes", "GET").then((data) => {
    const container = document.querySelector("#notes");
    container.innerHTML = "";

    for (const i in data.notes) {
      let note = data.notes[i];

      if (note.length > 64) {
        note = note.substr(0, 64) + "...";
      }

      const div = document.createElement("div");
      const a = document.createElement("a");
      a.innerText = note;
      a.href = `/note/${i}`;

      const share = document.createElement("span");
      share.className = "share";
      share.innerText = "Share";
      share.title = "Share your fabulous note with the admins";
      share.addEventListener("click", () => {
        display("");
        req(`/api/share/${i}`, "POST").then((data) => {
          if (data.success) {
            display("Note shared!", "primary");
          } else {
            display("An error occured...", "danger");
          }
        });
      });

      div.appendChild(share);
      div.appendChild(a);
      container.appendChild(div);
    }
  });
}

function loadNote() {
  const noteId = /^\/note\/([0-9]+)$/.exec(document.location.pathname)[1];
  req(`/api/note/${noteId}`, "GET").then((data) => {
    if (data.success) {
      document.querySelector("#note-id").innerHTML = noteId;
      document.querySelector("#note").innerHTML = data.note;
    }
  });
}

function addNote() {
  const note = document.querySelector("#newnote").value;

  if (note.length === 0) {
    return;
  }

  req("/api/new", "POST", {
    content: note,
  }).then((data) => {
    if (data.success) {
      loadIndex();
    }
  });
}

function display(msg, type) {
  if (!msg) {
    document.querySelector("#message").innerHTML = "";
    return;
  }

  document.querySelector(
    "#message"
  ).innerHTML = `<div class="alert alert-${type}" role="alert">
  ${msg}
</div>`;
}

function req(uri, method, data) {
  return fetch(uri, {
    method,
    credentials: "same-origin",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.success && data.message === "Unauthorized") {
        document.location.pathname = "/login";
        return;
      }

      return data;
    });
}
